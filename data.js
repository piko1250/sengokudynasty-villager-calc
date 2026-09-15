const SHINTO_GODS = ["天照", "恵比寿", "稲荷", "地蔵", "観音", "龍神", "天神", "八幡"];
const SHRINE_SIZES = [
  { prefix: "小さな", recipe: "神主_小社" },
  { prefix: "", recipe: "神主_中社" },
  { prefix: "大きな", recipe: "神主_大社" }
];
const SHRINE_FACILITIES = {};
SHINTO_GODS.forEach(god => {
  const baseName = god.endsWith("神") ? `${god}社` : `${god}神社`;
  SHRINE_SIZES.forEach(({ prefix, recipe }) => {
    SHRINE_FACILITIES[prefix + baseName] = { recipe, recipeLabel: "神主", facility_multiplier: 50, item_value: 1, tools: "no" };
  });
});

const MODEL = {
  global_constants: {
    skill_match_multiplier: 1.25,
    skill_mismatch_multiplier: 1.0,
    level_formula_divisor: 50,
    perk_multipliers: { 0: 1.0, 1: 1.05, 2: 1.1, 3: 1.15 }
  },
  recipes: {
    "衛兵_近接武器": { base_cost0_percent: 10.0 },
    "衛兵_遠距離武器": { base_cost0_percent: 10.0 },
    "物見やぐら_専用": { base_cost0_percent: 0.5 },
    "灯籠夫_灯台": { base_cost0_percent: 2.0 },
    "神主_鐘楼": { base_cost0_percent: 5.0 },
    "神主_手水舎": { base_cost0_percent: 1.0 },
    "神主_小社": { base_cost0_percent: 20 / 1 },
    "神主_中社": { base_cost0_percent: 20 / 2 },
    "神主_大社": { base_cost0_percent: 20 / 3 },
    "水_シンプル井戸": { base_cost0_percent: 4 / 5 },
    "水_上級井戸": { base_cost0_percent: 4 / 6 },
    "水_大井戸": { base_cost0_percent: 4 / 10 },
    "茶室_茶会": { base_cost0_percent: 2.0 },
    "酒場の主人(水x2)": { base_cost0_percent: 2.0 },
    "酒場の主人(水x1+アルコールを含まない飲料全般x1)": { base_cost0_percent: 2.0 },
    "酒場の主人(水x1+アルコール飲料全般x1)": { base_cost0_percent: 2.0 }
  },
  categories: {
    "安全性": {
      usesTool: true,
      facilities: {
        "地侍のやぐら(近接)": { displayName: "地侍のやぐら", recipe: "衛兵_近接武器", recipeLabel: "近接武器", facility_multiplier: 50, item_value: 1, tools: "" },
        "地侍のやぐら(遠距離)": { displayName: "地侍のやぐら", recipe: "衛兵_遠距離武器", recipeLabel: "遠距離武器", facility_multiplier: 50, item_value: 1, tools: "" },
        "小さなやぐら(近接)": { displayName: "小さなやぐら", recipe: "衛兵_近接武器", recipeLabel: "近接武器", facility_multiplier: 30, item_value: 1, tools: "" },
        "小さなやぐら(遠距離)": { displayName: "小さなやぐら", recipe: "衛兵_遠距離武器", recipeLabel: "遠距離武器", facility_multiplier: 30, item_value: 1, tools: "" },
        "猟師の小さなやぐら(近接)": { displayName: "猟師の小さなやぐら", recipe: "衛兵_近接武器", recipeLabel: "近接武器", facility_multiplier: 40, item_value: 1, tools: "" },
        "猟師の小さなやぐら(遠距離)": { displayName: "猟師の小さなやぐら", recipe: "衛兵_遠距離武器", recipeLabel: "遠距離武器", facility_multiplier: 40, item_value: 1, tools: "" },
        "特殊建造物「物見やぐら」": { recipe: "物見やぐら_専用", recipeLabel: "衛兵", facility_multiplier: 1, item_value: 1, tools: "" },
        "特殊建造物「灯台」": { recipe: "灯籠夫_灯台", recipeLabel: "灯籠夫", facility_multiplier: 20, item_value: 1, tools: "no" }
      }
    },
    "信仰": {
      usesTool: false,
      facilities: {
        "僧院の鐘楼": { recipe: "神主_鐘楼", recipeLabel: "神主", facility_multiplier: 50, item_value: 1, tools: "no" },
        "僧院の手水舎": { recipe: "神主_手水舎", recipeLabel: "神主", facility_multiplier: 6, item_value: 1, tools: "no" },
        ...SHRINE_FACILITIES
      }
    },
    "健康": {
      usesTool: false,
      facilities: {
        "僧院の手水舎": { recipe: "神主_手水舎", recipeLabel: "神主", facility_multiplier: 6, item_value: 1, tools: "no" },
        "酒場(水x2)": { displayName: "酒場", recipe: "酒場の主人(水x2)", recipeLabel: "酒場の主人(水x2)", facility_multiplier: 6, item_value: 1, tools: "no" },
        "酒場(水x1+アルコールを含まない飲料全般x1)": { displayName: "酒場", recipe: "酒場の主人(水x1+アルコールを含まない飲料全般x1)", recipeLabel: "酒場の主人(水x1+アルコールを含まない飲料全般x1)", facility_multiplier: 6, item_value: 1, tools: "no" },
        "酒場(水x1+アルコール飲料全般x1)": { displayName: "酒場", recipe: "酒場の主人(水x1+アルコール飲料全般x1)", recipeLabel: "酒場の主人(水x1+アルコール飲料全般x1)", facility_multiplier: 4, item_value: 1, tools: "no" }
      }
    },
    "飲み物": {
      usesTool: true,
      facilities: {
        "シンプルな井戸": { recipe: "水_シンプル井戸", recipeLabel: "水", facility_multiplier: 1, item_value: 4, tools: "" },
        "上級井戸": { recipe: "水_上級井戸", recipeLabel: "水", facility_multiplier: 1, item_value: 4, tools: "" },
        "大きな井戸": { recipe: "水_大井戸", recipeLabel: "水", facility_multiplier: 1, item_value: 4, tools: "" },
        "茶室": { recipe: "茶室_茶会", recipeLabel: "茶会", facility_multiplier: 1, item_value: 10, tools: "no" }
      }
    },
    "贅沢": {
      usesTool: false,
      facilities: {
        "茶室": { recipe: "茶室_茶会", recipeLabel: "茶会", facility_multiplier: 5, item_value: 1, tools: "no" },
        "酒場(水x2)": { displayName: "酒場", recipe: "酒場の主人(水x2)", recipeLabel: "酒場の主人(水x2)", facility_multiplier: 6, item_value: 1, tools: "no" },
        "酒場(水x1+アルコールを含まない飲料全般x1)": { displayName: "酒場", recipe: "酒場の主人(水x1+アルコールを含まない飲料全般x1)", recipeLabel: "酒場の主人(水x1+アルコールを含まない飲料全般x1)", facility_multiplier: 8, item_value: 1, tools: "no" },
        "酒場(水x1+アルコール飲料全般x1)": { displayName: "酒場", recipe: "酒場の主人(水x1+アルコール飲料全般x1)", recipeLabel: "酒場の主人(水x1+アルコール飲料全般x1)", facility_multiplier: 12, item_value: 1, tools: "no" }
      }
    }
  }
};
