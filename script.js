const CATEGORY_ORDER = ["食事", "暖かさ", "飲み物", "修繕", "健康", "安全性", "信仰", "贅沢", "素材"];
let currentCategory = "安全性";

const categorySeg = document.getElementById('categorySeg');
CATEGORY_ORDER.forEach(name => {
  const defined = !!MODEL.categories[name];
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = name;
  btn.disabled = !defined;
  btn.dataset.v = name;
  if (name === currentCategory) btn.classList.add('on');
  categorySeg.appendChild(btn);
});
categorySeg.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn || btn.disabled) return;
  currentCategory = btn.dataset.v;
  [...categorySeg.children].forEach(b => b.classList.toggle('on', b === btn));
  compute();
});

const conditionPanel = document.getElementById('conditionPanel');
const editConditionBtn = document.getElementById('editConditionBtn');
editConditionBtn.addEventListener('click', () => {
  const willOpen = !conditionPanel.classList.contains('open');
  conditionPanel.classList.toggle('open', willOpen);
  editConditionBtn.classList.toggle('open', willOpen);
  editConditionBtn.textContent = willOpen ? '閉じる' : '条件を変更する';
});

// info-icon(i)はタップ/クリックで詳細をその場に開閉する(ホバー不要・モバイル対応)。結果一覧は数字部分を除く行全体、条件パネルは操作系コントロール(スライダー・入力欄・ボタン・チェックボックス)以外のクリックでも開閉できる
document.addEventListener('click', (e) => {
  const openDetail = e.target.closest('.inline-detail.open');
  if (openDetail && window.getSelection().toString().length > 0) return; // テキスト選択中はクリックしても閉じない(コピー操作を妨げない)
  const fcardHead = e.target.closest('.fcard-head');
  const inFinal = e.target.closest('.fcard-final');
  const field = e.target.closest('.field');
  const onControl = e.target.closest('input, button, .toggle label');
  const icon = openDetail ? openDetail._iconEl
    : (fcardHead && !inFinal) ? fcardHead.querySelector('.info-icon[data-tip]')
    : (field && !onControl) ? field.querySelector('.info-icon[data-tip]')
    : e.target.closest('.info-icon[data-tip]');
  if (!icon) return;
  let detail = icon._detailEl;
  if (!detail) {
    detail = document.createElement('div');
    detail.className = 'inline-detail';
    detail.textContent = icon.dataset.tip;
    icon._detailEl = detail;
    detail._iconEl = icon;
    const host = icon.closest('.field') || icon.closest('.fcard-head');
    host.insertAdjacentElement('afterend', detail);
  }
  const willOpen = !detail.classList.contains('open');
  detail.classList.toggle('open', willOpen);
  icon.classList.toggle('open', willOpen);
});
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('info-icon')) {
    e.preventDefault();
    e.target.click();
  }
});

const levelInput = document.getElementById('level');
const levelNum = document.getElementById('levelNum');
const toolInput = document.getElementById('tool');
const skillMatchInput = document.getElementById('skillMatch');
const actionInput = document.getElementById('action');
const actionNum = document.getElementById('actionNum');
const perkSeg = document.getElementById('perkSeg');
let perkPoints = 3;

function linkRangeAndNumber(range, num) {
  range.addEventListener('input', () => { num.value = range.value; compute(); });
  num.addEventListener('input', () => {
    let v = Math.min(Number(num.max), Math.max(Number(num.min), Number(num.value) || 0));
    range.value = v;
    compute();
  });
}
linkRangeAndNumber(levelInput, levelNum);
linkRangeAndNumber(actionInput, actionNum);

// 数値入力欄はフォーカス時に中身を全選択し、そのまま上書き入力できるようにする
[levelNum, actionNum, toolInput].forEach(el => {
  el.addEventListener('focus', () => el.select());
});

perkSeg.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  perkPoints = Number(btn.dataset.v);
  [...perkSeg.children].forEach(b => b.classList.toggle('on', b === btn));
  compute();
});

[toolInput, skillMatchInput].forEach(el => {
  el.addEventListener('input', compute);
});

function computeFacility(facilityName, facility, level, tool, actionPct) {
  const recipe = MODEL.recipes[facility.recipe];
  const skillMatch = skillMatchInput.checked;
  const effectiveTool = facility.tools === "no" ? 1 : tool;

  // 労働者生産性訓練パークは「コスト0を1/(1+0.05*ポイント数)する」形で反映(行動力上限を+5/10/15%押し上げるのと数学的に等価)。
  const cap = 100;
  const targetBudget = (actionPct / 100) * cap;
  const cost0 = recipe.base_cost0_percent / (1 + 0.05 * perkPoints);
  const cost = cost0 / (1 + level / MODEL.global_constants.level_formula_divisor);
  const cycles = Math.floor(targetBudget / cost);
  const actualBudget = cycles * cost; // 端数切り捨てで実際に使われた分（目標より少し少ない）
  const mult = skillMatch ? MODEL.global_constants.skill_match_multiplier : MODEL.global_constants.skill_mismatch_multiplier;
  const units = Math.floor(cycles * mult * effectiveTool);
  const output = units * facility.base_unit_value;

  const recipeLabel = facility.recipeLabel || facility.recipe.split('_').slice(1).join('_');
  return { facilityName, facility, recipeLabel, cost, targetBudget, actualBudget, cycles, skillMatch, mult, tool: effectiveTool, units, output };
}

function compute() {
  const level = Number(levelInput.value);
  const actionPct = Number(actionInput.value);
  const category = MODEL.categories[currentCategory];
  const tool = category.usesTool ? Math.max(0, Number(toolInput.value) || 0) : 1;

  document.getElementById('toolField').hidden = !category.usesTool;

  const paramParts = [`村人Lv: <b>${level}</b>`];
  if (category.usesTool) paramParts.push(`道具生産調整: <b>${tool}</b>`);
  paramParts.push(`専門ボーナス: <b>${skillMatchInput.checked ? '○' : '×'}</b>`);
  paramParts.push(`パーク: <b>${perkPoints}pt</b>`);
  paramParts.push(`作業量: <b>${actionPct}%</b>`);
  document.getElementById('paramsOut').innerHTML = paramParts.map(p => `<span class="param-chip">${p}</span>`).join('');

  const body = document.getElementById('resultsBody');
  body.innerHTML = '';

  const results = Object.entries(category.facilities)
    .map(([name, facility]) => computeFacility(facility.displayName || name, facility, level, tool, actionPct))
    .sort((a, b) => b.output - a.output);

  const numWidth = Math.max(...results.map(r => (r.output.toLocaleString() + ':').length));

  results.forEach(r => {
    const row = document.createElement('div');
    row.className = 'fcard-head';
    const breakdown = [
      `レシピの作業量コスト: ${r.cost.toFixed(4)}% ※実測データからの予測値`,
      `生産: ${r.cycles} ※${r.targetBudget.toFixed(0)}% ÷ ${r.cost.toFixed(4)}%(小数点以下切り捨て)`,
      `現在の作業量: ${r.actualBudget.toFixed(4)}% ※${r.cycles} × ${r.cost.toFixed(4)}%`,
      r.facility.tools === "no" ? `道具生産調整: なし` : `道具生産調整: x${r.tool}`,
      `専門ボーナス: ${r.skillMatch ? '+25%' : 'なし'}`,
      `結果: (${r.cycles} × ${r.mult} × ${r.tool})(小数点以下切り捨て) × 施設倍率(${r.facility.base_unit_value}) = ${r.output.toLocaleString()}`
    ].join('\n');
    row.innerHTML = `<span class="fcard-final" style="display:inline-block;width:calc(${numWidth}ch + 16px);text-align:right">${r.output.toLocaleString()}:</span><span class="fcard-name">${r.facilityName} / ${r.recipeLabel}<span class="info-icon" tabindex="0" data-tip="${breakdown.replace(/"/g, '&quot;')}">i</span></span>`;
    body.appendChild(row);
  });
}

compute();
