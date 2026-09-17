const CATEGORY_ORDER = ["食事", "暖かさ", "飲み物", "修繕", "健康", "安全性", "信仰", "贅沢"];
let currentCategory = CATEGORY_ORDER.find(name => !!MODEL.categories[name]);

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

let openResultDetailKeys = new Set();

function openDetail(icon) {
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
  const effectiveTool = facility.tools === "no" ? 1 : tool;

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
  const maxCyclesI = floorDiv(targetI * perkMultI * levelFactor * cost0DenI, cost0NumI * 50n * RATIO_SCALE * RATIO_SCALE);
  const maxCycles = Number(maxCyclesI);

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

  return { overrideKey, facilityName, facility, recipeLabel: facility.recipeLabel, cost, targetBudget, actualBudget, cycles, maxCycles, skillMatch, mult, tool: effectiveTool, units, itemValue, output, maxOutput };
}

function compute() {
  const level = Number(levelInput.value);
  const actionPct = 100;
  const category = MODEL.categories[currentCategory];
  const tool = Math.max(0, Number(toolInput.value) || 0);

  const paramParts = [`村人Lv: <b>${level}</b>`, `パーク: <b>${perkPoints}pt</b>`, `道具生産調整: <b>${tool}</b>`];
  paramParts.push(`専門ボーナス: <b>${skillMatchInput.checked ? '○' : '×'}</b>`);
  document.getElementById('paramsOut').innerHTML = paramParts.map(p => `<span class="param-chip">${p}</span>`).join('');

  const body = document.getElementById('resultsBody');
  body.innerHTML = '';

  const results = Object.entries(category.facilities)
    .map(([name, facility]) => computeFacility(`${currentCategory}::${name}`, facility.displayName || name, facility, level, tool, actionPct))
    .sort((a, b) => b.maxOutput - a.maxOutput);

  const maxFinalChars = Math.max(...results.map(r => (r.output.toLocaleString() + ':').length));
  body.style.setProperty('--final-w', `${maxFinalChars}ch`);

  results.forEach(r => {
    lastMaxCycles[r.overrideKey] = r.maxCycles;
    const row = document.createElement('div');
    row.className = 'fcard-head';
    const breakdown = [
      `レシピの作業量コスト: ${r.cost.toFixed(1)}% ※実測データからの予測値`,
      `現在の作業量: ${r.actualBudget.toFixed(1)}% ※${r.cycles} x ${r.cost.toFixed(1)}%(表示上、端数を省略しています)`,
      `生産(現在/最大): ${r.cycles}/${r.maxCycles} ※${r.targetBudget.toFixed(0)}% ÷ ${r.cost.toFixed(1)}%(表示上、端数を省略しています)`,
      `道具生産調整: x${r.tool}${r.facility.tools === "no" ? " ※この施設は道具を使用しません" : ""}`,
      `専門ボーナス: x${r.mult}`,
      `結果: (${r.cycles} x ${r.mult} x ${r.tool})(小数点以下切り捨て) x 施設倍率(${r.facility.facility_multiplier}) x 村人の要求(${r.itemValue}) = ${r.output.toLocaleString()}`
    ].join('\n');
    const minusDisabled = r.cycles <= 0 ? 'disabled' : '';
    const plusDisabled = r.cycles >= r.maxCycles ? 'disabled' : '';
    const metaClass = r.cycles !== r.maxCycles ? 'fcard-meta fcard-meta-adjusted' : 'fcard-meta';
    row.innerHTML = `<span class="cycle-stepper"><button type="button" class="cycle-btn" data-key="${r.overrideKey}" data-dir="-1" data-cycles="${r.cycles}" ${minusDisabled}>－</button><button type="button" class="cycle-btn" data-key="${r.overrideKey}" data-dir="1" data-cycles="${r.cycles}" ${plusDisabled}>＋</button></span><span class="fcard-final">${r.output.toLocaleString()}:</span><span class="fcard-name">${r.facilityName} / ${r.recipeLabel}<span class="${metaClass}" data-key="${r.overrideKey}" data-cycles="${r.cycles}" data-max="${r.maxCycles}">生産:${r.cycles}/${r.maxCycles} 作業量:${r.actualBudget.toFixed(1)}%</span><span class="info-icon" tabindex="0" data-key="${r.overrideKey}" data-tip="${breakdown.replace(/"/g, '&quot;')}">i</span></span>`;
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
  meta.textContent = '生産:';
  meta.appendChild(input);
  meta.append(`/${max} 作業量:...`);
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
