const CATEGORY_ORDER = ["meals", "heating", "beverages", "maintenance", "health", "security", "spiritual", "luxury"];
let currentLang = (navigator.language || navigator.userLanguage || '').startsWith('ja') ? 'ja' : 'en';
// Missing translations fall back to en, not ja
function L(v) { return (v && typeof v === 'object') ? (v[currentLang] ?? v.en ?? v.ja) : v; }
function fmtTool(x) { return Number.isInteger(x) ? x.toFixed(1) : String(x); }

const STATIC_LABELS = {
  'heading-categories': { ja: "カテゴリ", en: "Categories" },
  'heading-parameters': { ja: "条件", en: "Parameters" },
  'heading-results': { ja: "結果", en: "Results" },
  'heading-glossary': { ja: "用語", en: "Glossary" },
  'heading-about': { ja: "本ツールについて", en: "About This Tool" },
  'label-worker-level': { ja: "労働者レベル", en: "Worker Level" },
  'label-perk': { ja: "パーク", en: "Perk" },
  'label-tool': { ja: "道具生産調整", en: "Tool Production Modifier" },
  'label-skill': { ja: "専門ボーナス", en: "Specialization Bonus" },
  'checkbox-skill-match': { ja: "労働者の専門とこの施設の専門が一致している", en: "Worker specialization matches the workplace" },
  'btn-edit-parameters': { ja: "条件を変更する", en: "Edit Parameters" },
  'btn-close': { ja: "閉じる", en: "Close" },
  'parameters-desc': { ja: "ここで変更した条件はすぐに生産量へ反映されます。既定値はLv100・パーク3pt・道具生産調整3.0・専門ボーナスありです", en: "Changes here are applied to the production output immediately. Defaults: Level 100, Perk 3pt, Tool Production Modifier 3.0, Specialization Bonus on." },
  'hint-field-info-before': { ja: "各項目の ", en: "Click the " },
  'hint-field-info-after': { ja: " で説明を確認できます", en: " next to each field for details." },
  'results-subtitle': { ja: "一日の生産量(降順): 施設名 / レシピ 生産:現在/最大 作業量", en: "Daily Production (descending): Facility / Recipe Production:current/max Workload" },
  'hint-row-edit': { ja: "各行の生産(回数)は行頭の-/+で増減、またはクリックで直接入力ができます", en: "Increase or decrease each row's production count with the -/+ buttons, or click to type a value directly." },
  'hint-facility-info-before': { ja: "施設名の横の ", en: "Click the " },
  'hint-facility-info-after': { ja: " で詳細を確認できます", en: " next to the facility name for details." },
  'gloss-workload-cost-term': { ja: "レシピの作業量コスト", en: "Recipe Workload Cost" },
  'gloss-workload-cost-desc': { ja: "1回の作業で消費する作業量。レベル及びパークによって変動する", en: "The workload consumed per action. Varies with worker level and perk." },
  'gloss-production-term': { ja: "生産", en: "Production" },
  'gloss-production-desc': { ja: "作業量をレシピの作業量コストで割った回数。1日の間に村人が作業を行うことができる回数", en: "The workload divided by the recipe's workload cost, rounded down. The number of times a worker can perform the action in a day." },
  'gloss-total-production-term': { ja: "合計生産量", en: "Total Production" },
  'gloss-total-production-desc': { ja: "生産に専門ボーナス・道具生産調整を反映した値", en: "Production with the specialization bonus and tool production modifier applied." },
  'gloss-facility-multiplier-term': { ja: "施設倍率", en: "Facility Multiplier" },
  'gloss-facility-multiplier-desc': { ja: "施設ごとに決まっている固定の倍率（仮称）", en: "A fixed multiplier determined per facility (tentative name)." },
  'gloss-villager-requirement-term': { ja: "村人の要求", en: "Villager Requirement" },
  'gloss-villager-requirement-desc': { ja: "生産物1個が満たす要求の量。生産物自体が要求そのもの（警備員や神職など）の場合は1", en: "The amount of demand one unit of the product satisfies. This is 1 when the product itself is the requirement (e.g. guards, priests)." },
  'gloss-daily-production-term': { ja: "一日の生産量", en: "Daily Production" },
  'gloss-daily-production-desc': { ja: "合計生産量に施設倍率・村人の要求を掛けた、本ツールの最終出力値", en: "Total production multiplied by the facility multiplier and the villager requirement — the tool's final output value." },
  'about-item-1': { ja: "道具の耐久値や素材の在庫不足を考慮していないため、実際の生産はこれらの影響で理論値を下回ることがあります。", en: "This tool doesn't account for tool durability or material shortages, so actual production may fall below the calculated value due to these factors." },
  'about-item-2': { ja: "計算に用いている各種係数は、実測データをもとに生成した予想値にもとづいているため、実際の結果と異なる事があります。", en: "The coefficients used in the calculation are estimates derived from measured data, so actual results may differ." },
  'about-item-3': { ja: "用語は出来る限りゲーム内表示に合わせていますが、完全な一致を保証するものではありません。", en: "Terminology is matched to in-game display as closely as possible, but an exact match is not guaranteed." },
  'footer-note': { ja: "（個人調べ）", en: "(personal research)" },
  'summary-worker-lv': { ja: "労働者Lv", en: "Worker Lv" },
  'summary-perk': { ja: "パーク", en: "Perk" },
  'summary-tool': { ja: "道具生産調整", en: "Tool Production Modifier" },
  'summary-skill': { ja: "専門ボーナス", en: "Specialization Bonus" },
  'summary-skill-yes': { ja: "あり", en: "Yes" },
  'summary-skill-no': { ja: "なし", en: "No" },
  'bd-workload-cost': { ja: "レシピの作業量コスト", en: "Recipe Workload Cost" },
  'bd-workload-cost-note': { ja: "※実測データからの予測値", en: "*Estimated from measured data" },
  'bd-current-workload': { ja: "現在の作業量", en: "Current Workload" },
  'bd-production': { ja: "生産(現在/最大)", en: "Production (current / max)" },
  'bd-production-fraction-omitted': { ja: "(端数省略", en: "(fraction omitted" },
  'bd-production-land-capped': { ja: "/農地の大きさ", en: "/applies land size limit " },
  'bd-production-land-capped-suffix': { ja: "を適用)", en: ")" },
  'bd-tool': { ja: "道具生産調整", en: "Tool Production Modifier" },
  'bd-tool-no-tool-note': { ja: "※このレシピは道具を使用しません", en: "*This recipe doesn't use tools" },
  'bd-tool-capped-note-prefix': { ja: "※このレシピで設定可能な最大値", en: "*Applies this recipe's maximum allowed value " },
  'bd-tool-capped-note-suffix': { ja: "を適用します", en: "" },
  'bd-skill': { ja: "専門ボーナス", en: "Specialization Bonus" },
  'bd-result': { ja: "結果", en: "Result" },
  'bd-result-rounded-down': { ja: "(小数点以下切り捨て)", en: " (rounded down)" },
  'bd-result-facility-multiplier': { ja: "施設倍率", en: "Facility Multiplier" },
  'bd-result-villager-requirement': { ja: "村人の要求", en: "Villager Requirement" },
  'meta-production': { ja: "生産", en: "Production" },
  'meta-workload': { ja: "作業量", en: "Workload" },
  'note-marker': { ja: "※", en: "*" },
};
function T(key) { return STATIC_LABELS[key][currentLang]; }
function applyStaticLabels() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const entry = STATIC_LABELS[el.dataset.i18n];
    if (entry) el.textContent = entry[currentLang];
  });
  document.querySelectorAll('.info-icon[data-tip-ja]').forEach(el => {
    el.dataset.tip = currentLang === 'en' ? el.dataset.tipEn : el.dataset.tipJa;
    if (el._detailEl) el._detailEl.innerHTML = el.dataset.tip;
  });
  document.querySelectorAll('[aria-label-ja]').forEach(el => {
    el.setAttribute('aria-label', currentLang === 'en' ? el.getAttribute('aria-label-en') : el.getAttribute('aria-label-ja'));
  });
  editConditionBtn.textContent = STATIC_LABELS[conditionPanel.classList.contains('open') ? 'btn-close' : 'btn-edit-parameters'][currentLang];
}
let currentCategory = CATEGORY_ORDER.find(name => !!MODEL.categories[name]);

const categorySeg = document.getElementById('categorySeg');
function renderCategoryButtons() {
  categorySeg.innerHTML = '';
  CATEGORY_ORDER.forEach(name => {
    const defined = !!MODEL.categories[name];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = L(MODEL.category_labels[name]);
    btn.disabled = !defined;
    btn.dataset.v = name;
    if (name === currentCategory) btn.classList.add('on');
    categorySeg.appendChild(btn);
  });
}
renderCategoryButtons();
categorySeg.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn || btn.disabled) return;
  currentCategory = btn.dataset.v;
  [...categorySeg.children].forEach(b => b.classList.toggle('on', b === btn));
  compute();
});

const langSwitch = document.getElementById('langSwitch');
[...langSwitch.children].forEach(b => b.classList.toggle('on', b.dataset.lang === currentLang));
document.documentElement.lang = currentLang;
langSwitch.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn || btn.classList.contains('on')) return;
  currentLang = btn.dataset.lang;
  [...langSwitch.children].forEach(b => b.classList.toggle('on', b === btn));
  document.documentElement.lang = currentLang;
  renderCategoryButtons();
  applyStaticLabels();
  compute();
});

const conditionPanel = document.getElementById('conditionPanel');
const editConditionBtn = document.getElementById('editConditionBtn');
editConditionBtn.addEventListener('click', () => {
  const willOpen = !conditionPanel.classList.contains('open');
  conditionPanel.classList.toggle('open', willOpen);
  editConditionBtn.classList.toggle('open', willOpen);
  editConditionBtn.textContent = STATIC_LABELS[willOpen ? 'btn-close' : 'btn-edit-parameters'][currentLang];
});
applyStaticLabels();

let openResultDetailKeys = new Set();

function openDetail(icon) {
  let detail = icon._detailEl;
  if (!detail) {
    detail = document.createElement('div');
    detail.className = 'inline-detail';
    detail.innerHTML = icon.dataset.tip;
    icon._detailEl = detail;
    detail._iconEl = icon;
    const host = icon.closest('.field') || icon.closest('.fcard-head');
    host.insertAdjacentElement('afterend', detail);
  }
  detail.classList.add('open');
  icon.classList.add('open');
}

document.addEventListener('click', (e) => {
  const openedDetail = e.target.closest('.inline-detail.open');
  if (openedDetail && window.getSelection().toString().length > 0) return;
  const fcardHead = e.target.closest('.fcard-head');
  const inFinal = e.target.closest('.fcard-final, .cycle-stepper, .fcard-meta');
  const field = e.target.closest('.field');
  const onControl = e.target.closest('input, button, .toggle label');
  const icon = openedDetail ? openedDetail._iconEl
    : (fcardHead && !inFinal) ? fcardHead.querySelector('.info-icon[data-tip]')
    : (field && !onControl) ? field.querySelector('.info-icon[data-tip]')
    : e.target.closest('.info-icon[data-tip]');
  if (!icon) return;
  const alreadyOpen = !!icon._detailEl && icon._detailEl.classList.contains('open');
  if (alreadyOpen) {
    icon._detailEl.classList.remove('open');
    icon.classList.remove('open');
  } else {
    openDetail(icon);
  }
  if (icon.dataset.key) {
    if (alreadyOpen) openResultDetailKeys.delete(icon.dataset.key);
    else openResultDetailKeys.add(icon.dataset.key);
  }
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

[levelNum, toolInput].forEach(el => {
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

const RATIO_SCALE = 1000000n;
function toScaledBigInt(x) {
  return BigInt(Math.round(x * 1e6));
}
function floorDiv(numerator, denominator) {
  return numerator / denominator;
}

const cycleOverrides = {};
const lastMaxCycles = {};

function computeFacility(overrideKey, facilityName, facility, level, tool, actionPct) {
  const recipe = MODEL.recipes[facility.recipe];
  const skillMatch = skillMatchInput.checked;
  const noTool = !facility.tools || facility.tools === "no";
  const toolLimit = MODEL.global_constants.required_tool_limit[facility.tools];
  const effectiveTool = noTool ? 1 : (toolLimit != null ? Math.min(tool, toolLimit) : tool);
  const toolCapped = toolLimit != null && tool > toolLimit;

  const cap = 100;
  const targetBudget = (actionPct / 100) * cap;
  const perkMult = MODEL.global_constants.perk_multipliers[perkPoints];
  const cost0 = (recipe.base_cost0_num / recipe.base_cost0_den) / perkMult;
  const cost = cost0 / (1 + level / MODEL.global_constants.level_formula_divisor);

  const targetI = toScaledBigInt(targetBudget);
  const perkMultI = toScaledBigInt(perkMult);
  const levelFactor = BigInt(50 + level);
  const cost0NumI = BigInt(recipe.base_cost0_num);
  const cost0DenI = BigInt(recipe.base_cost0_den);
  const laborMaxCyclesI = floorDiv(targetI * perkMultI * levelFactor * cost0DenI, cost0NumI * 50n * RATIO_SCALE * RATIO_SCALE);
  const laborMaxCycles = Number(laborMaxCyclesI);
  const landLimit = facility.lands ? MODEL.global_constants.land_size_limit[facility.lands] : null;
  const landCapped = landLimit != null && landLimit < laborMaxCycles;
  const maxCycles = landCapped ? landLimit : laborMaxCycles;
  const maxCyclesI = landCapped ? BigInt(landLimit) : laborMaxCyclesI;

  const override = cycleOverrides[overrideKey];
  const cycles = override == null ? maxCycles : Math.max(0, Math.min(override, maxCycles));
  const cyclesI = BigInt(cycles);

  const actualBudget = cycles * cost;
  const mult = skillMatch ? MODEL.global_constants.skill_match_multiplier : MODEL.global_constants.skill_mismatch_multiplier;

  const multNumI = skillMatch ? 5n : 1n;
  const multDenI = skillMatch ? 4n : 1n;
  const toolI = toScaledBigInt(effectiveTool);
  const unitsI = floorDiv(cyclesI * multNumI * toolI, multDenI * RATIO_SCALE);
  const units = Number(unitsI);
  const itemValue = facility.item_value;
  const output = units * facility.facility_multiplier * itemValue;

  const maxUnitsI = floorDiv(maxCyclesI * multNumI * toolI, multDenI * RATIO_SCALE);
  const maxOutput = Number(maxUnitsI) * facility.facility_multiplier * itemValue;

  return { overrideKey, facilityName, facility, recipeLabel: L(facility.recipeLabel), cost, targetBudget, actualBudget, cycles, maxCycles, skillMatch, mult, tool: effectiveTool, toolCapped, landCapped, units, itemValue, output, maxOutput };
}

function compute() {
  const level = Number(levelInput.value);
  const actionPct = 100;
  const category = MODEL.categories[currentCategory];
  const tool = Math.max(0, Number(toolInput.value) || 0);

  const paramParts = [
    `${T('summary-worker-lv')}: <b>${level}</b>`,
    `${T('summary-perk')}: <b>${perkPoints}pt</b>`,
    `${T('summary-tool')}: <b>${fmtTool(tool)}</b>`,
  ];
  const skillYesNo = T(skillMatchInput.checked ? 'summary-skill-yes' : 'summary-skill-no');
  paramParts.push(`${T('summary-skill')}: <b>${skillYesNo}</b>`);
  document.getElementById('paramsOut').innerHTML = paramParts.map(p => `<span class="param-chip">${p}</span>`).join('');

  const body = document.getElementById('resultsBody');
  body.innerHTML = '';

  const results = Object.entries(category.facilities)
    .map(([name, facility]) => computeFacility(`${currentCategory}::${name}`, L(facility.displayName) || name, facility, level, tool, actionPct))
    .sort((a, b) => b.maxOutput - a.maxOutput);

  const maxFinalChars = Math.max(...results.map(r => (r.output.toLocaleString() + ':').length));
  body.style.setProperty('--final-w', `${maxFinalChars}ch`);

  results.forEach(r => {
    lastMaxCycles[r.overrideKey] = r.maxCycles;
    const row = document.createElement('div');
    row.className = 'fcard-head';
    const landCappedNote = r.landCapped ? `${T('bd-production-land-capped')}${r.maxCycles}${T('bd-production-land-capped-suffix')}` : ")";
    const toolNote = (!r.facility.tools || r.facility.tools === "no") ? ` ${T('bd-tool-no-tool-note')}`
      : (r.toolCapped ? ` ${T('bd-tool-capped-note-prefix')}${fmtTool(r.tool)}${T('bd-tool-capped-note-suffix')}` : "");
    const breakdown = [
      `${T('bd-workload-cost')}: ${r.cost.toFixed(1)}% ${T('bd-workload-cost-note')}`,
      `${T('bd-current-workload')}: ${r.actualBudget.toFixed(1)}% ${T('note-marker')}${r.cycles} x ${r.cost.toFixed(1)}%${T('bd-production-fraction-omitted')})`,
      `${T('bd-production')}: ${r.cycles}/${r.landCapped ? `<b class="land-capped">${r.maxCycles}</b>` : r.maxCycles} ${T('note-marker')}${r.targetBudget.toFixed(0)}% ÷ ${r.cost.toFixed(1)}%${T('bd-production-fraction-omitted')}${landCappedNote}`,
      `${T('bd-tool')}: ${r.toolCapped ? `<b class="tool-capped">x${fmtTool(r.tool)}</b>` : `x${fmtTool(r.tool)}`}${toolNote}`,
      `${T('bd-skill')}: x${r.mult}`,
      `${T('bd-result')}: (${r.cycles} x ${r.mult} x ${fmtTool(r.tool)})${T('bd-result-rounded-down')} x ${T('bd-result-facility-multiplier')}(${r.facility.facility_multiplier}) x ${T('bd-result-villager-requirement')}(${r.itemValue}) = ${r.output.toLocaleString()}`
    ].join('\n');
    const minusDisabled = r.cycles <= 0 ? 'disabled' : '';
    const plusDisabled = r.cycles >= r.maxCycles ? 'disabled' : '';
    const metaClass = r.cycles !== r.maxCycles ? 'fcard-meta fcard-meta-adjusted' : 'fcard-meta';
    row.innerHTML = `<span class="cycle-stepper"><button type="button" class="cycle-btn" data-key="${r.overrideKey}" data-dir="-1" data-cycles="${r.cycles}" ${minusDisabled}>－</button><button type="button" class="cycle-btn" data-key="${r.overrideKey}" data-dir="1" data-cycles="${r.cycles}" ${plusDisabled}>＋</button></span><span class="fcard-final">${r.output.toLocaleString()}:</span><span class="fcard-name">${r.facilityName} / ${r.recipeLabel}<span class="${metaClass}" data-key="${r.overrideKey}" data-cycles="${r.cycles}" data-max="${r.maxCycles}">${T('meta-production')}:${r.cycles}/${r.maxCycles} ${T('meta-workload')}:${r.actualBudget.toFixed(1)}%</span><span class="info-icon" tabindex="0" data-key="${r.overrideKey}" data-tip="${breakdown.replace(/"/g, '&quot;')}">i</span></span>`;
    body.appendChild(row);
    if (openResultDetailKeys.has(r.overrideKey)) openDetail(row.querySelector('.info-icon'));
  });
}

function stepCycle(key, dir, step = 1) {
  const current = cycleOverrides[key];
  const baseline = current == null ? (lastMaxCycles[key] ?? 0) : current;
  const max = lastMaxCycles[key] ?? Infinity;
  cycleOverrides[key] = Math.max(0, Math.min(baseline + dir * step, max));
  compute();
}

let holdDelayTimer = null;
let holdRepeatTimer = null;
function stopHold() {
  clearTimeout(holdDelayTimer);
  clearInterval(holdRepeatTimer);
  holdDelayTimer = null;
  holdRepeatTimer = null;
}

function startEditCycleNum(meta) {
  if (meta.querySelector('input')) return;
  const key = meta.dataset.key;
  const max = Number(meta.dataset.max);
  const current = meta.dataset.cycles;
  const input = document.createElement('input');
  input.type = 'number';
  input.inputMode = 'numeric';
  input.min = '0';
  input.max = String(max);
  input.value = current;
  input.className = 'cycle-num-input';
  meta.textContent = `${T('meta-production')}:`;
  meta.appendChild(input);
  meta.append(`/${max} ${T('meta-workload')}:...`);
  input.focus();
  input.select();
  const commit = () => {
    const v = Math.max(0, Math.min(Math.round(Number(input.value)) || 0, max));
    cycleOverrides[key] = v;
    compute();
  };
  const cancel = () => compute();
  input.addEventListener('blur', commit);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); input.blur(); }
    if (e.key === 'Escape') { e.preventDefault(); input.removeEventListener('blur', commit); cancel(); }
  });
}
document.getElementById('resultsBody').addEventListener('click', (e) => {
  if (e.target.closest('input')) return;
  const meta = e.target.closest('.fcard-meta');
  if (meta) startEditCycleNum(meta);
});

document.getElementById('resultsBody').addEventListener('pointerdown', (e) => {
  const btn = e.target.closest('.cycle-btn');
  if (!btn || btn.disabled) return;
  const key = btn.dataset.key;
  const dir = Number(btn.dataset.dir);
  stepCycle(key, dir);
  stopHold();
  holdDelayTimer = setTimeout(() => {
    let ticks = 0;
    holdRepeatTimer = setInterval(() => {
      ticks++;
      const GEARS = [1, 5, 25, 125, 625];
      const step = GEARS[Math.min(Math.floor((ticks - 1) / 5), GEARS.length - 1)];
      stepCycle(key, dir, step);
    }, 100);
  }, 400);
});
['pointerup', 'pointercancel'].forEach(evt => document.addEventListener(evt, stopHold));

compute();
document.body.classList.add('i18n-ready');
