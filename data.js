const MODEL = {
  global_constants: {
    skill_match_multiplier: 1.25,
    skill_mismatch_multiplier: 1.0,
    level_formula_divisor: 50,
    training_level_bonus_per_level: 5
  },
  recipes: {
    "衛兵_近接武器": { base_cost0_percent: 10.0 },
    "衛兵_遠距離武器": { base_cost0_percent: 10.0 },
    "物見やぐら_専用": { base_cost0_percent: 0.5 },
    "灯籠夫_灯台": { base_cost0_percent: 2.0 }
  },
  categories: {
    "安全性": {
      usesTool: true,
      subtitle: "警備員を生産する施設（8件）の結果を並べて表示しています",
      facilities: {
        "地侍のやぐら(近接)": { displayName: "地侍のやぐら", recipe: "衛兵_近接武器", base_unit_value: 50, tools: "" },
        "地侍のやぐら(遠距離)": { displayName: "地侍のやぐら", recipe: "衛兵_遠距離武器", base_unit_value: 50, tools: "" },
        "小さなやぐら(近接)": { displayName: "小さなやぐら", recipe: "衛兵_近接武器", base_unit_value: 30, tools: "" },
        "小さなやぐら(遠距離)": { displayName: "小さなやぐら", recipe: "衛兵_遠距離武器", base_unit_value: 30, tools: "" },
        "猟師の小さなやぐら(近接)": { displayName: "猟師の小さなやぐら", recipe: "衛兵_近接武器", base_unit_value: 40, tools: "" },
        "猟師の小さなやぐら(遠距離)": { displayName: "猟師の小さなやぐら", recipe: "衛兵_遠距離武器", base_unit_value: 40, tools: "" },
        "特殊建造物「物見やぐら」": { recipe: "物見やぐら_専用", recipeLabel: "衛兵", base_unit_value: 1, tools: "" },
        "特殊建造物「灯台」": { recipe: "灯籠夫_灯台", recipeLabel: "灯籠夫", base_unit_value: 20, tools: "no" }
      }
    }
  }
};
