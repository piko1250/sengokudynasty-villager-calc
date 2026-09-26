const MODEL = {
  global_constants: {
    skill_match_multiplier: 1.25, // 専門ボーナス成立時の合計生産量倍率
    skill_mismatch_multiplier: 1.0, // 専門ボーナス不成立時の倍率(ボーナスなし)
    level_formula_divisor: 50, // 作業量コストの式 cost0/(1+level/divisor) の分母
    perk_multipliers: { 0: 1.0, 1: 1.05, 2: 1.1, 3: 1.15 }, // パークポイントごとの労働者総容量倍率
    required_tool_limit: { "any_hammer": 2.0, "any_knife": 1.75, "any_melee_weapon": 3.0, "any_bow": 2.5, "carving_knife": 1.0, "bucket": 1.0, "fishing_net": 1.0, "any_fishing_rod": 1.5, "any_weapon": 3.0, "any_pickaxe": 1.75, "any_adze": 1.75, "any_axe": 1.75, "stirring_tool": 1.0, "any_seed_bag": 1.0 }, // 道具カテゴリごとの道具生産調整の上限値
    land_size_limit: { "water_field": 64, "land_field": 64 } // 農地種別ごとの生産(回数)上限
  },
  category_labels: {
    meals: { ja: "食事", en: "Meals" },
    heating: { ja: "暖かさ", en: "Heating" },
    beverages: { ja: "飲み物", en: "Beverages" },
    maintenance: { ja: "修繕", en: "Maintenance" },
    health: { ja: "健康", en: "Health" },
    security: { ja: "安全性", en: "Security" },
    spiritual: { ja: "信仰", en: "Spiritual" },
    luxury: { ja: "贅沢", en: "Luxury" }
  },
  recipes: {
    "recipe_001": { base_cost0_num: 10, base_cost0_den: 1 }, // 衛兵_近接武器
    "recipe_002": { base_cost0_num: 10, base_cost0_den: 1 }, // 衛兵_遠距離武器
    "recipe_003": { base_cost0_num: 1, base_cost0_den: 2 }, // 物見やぐら_専用
    "recipe_004": { base_cost0_num: 2, base_cost0_den: 1 }, // 灯籠夫_灯台
    "recipe_015": { base_cost0_num: 5, base_cost0_den: 1 }, // 神主_鐘楼
    "recipe_016": { base_cost0_num: 1, base_cost0_den: 1 }, // 神主_手水舎 (spiritual/healthで共有)
    "recipe_017": { base_cost0_num: 20, base_cost0_den: 1 }, // 神主_小社
    "recipe_018": { base_cost0_num: 20, base_cost0_den: 2 }, // 神主_中社
    "recipe_019": { base_cost0_num: 20, base_cost0_den: 3 }, // 神主_大社
    "recipe_065": { base_cost0_num: 4, base_cost0_den: 5 }, // 水_シンプル井戸
    "recipe_066": { base_cost0_num: 4, base_cost0_den: 6 }, // 水_上級井戸
    "recipe_067": { base_cost0_num: 4, base_cost0_den: 10 }, // 水_大井戸
    "recipe_068": { base_cost0_num: 2, base_cost0_den: 1 }, // 茶室_茶会 (beverages/luxuryで共有)
    "recipe_045": { base_cost0_num: 2, base_cost0_den: 1 }, // 酒場の主人(水x2) (health/luxuryで共有)
    "recipe_046": { base_cost0_num: 2, base_cost0_den: 1 }, // 酒場の主人(水x1+アルコールを含まない飲料全般x1) (health/luxuryで共有)
    "recipe_047": { base_cost0_num: 2, base_cost0_den: 1 }, // 酒場の主人(水x1+アルコール飲料全般x1) (health/luxuryで共有)
    "recipe_005": { base_cost0_num: 5, base_cost0_den: 4 }, // 油(魚)_酒場の調理場
    "recipe_006": { base_cost0_num: 25, base_cost0_den: 16 }, // 油(魚)_台所の調理場
    "recipe_007": { base_cost0_num: 5, base_cost0_den: 2 }, // 油(魚)_囲炉裏と調理鍋の仕事場
    "recipe_008": { base_cost0_num: 4, base_cost0_den: 5 }, // 油_搾油
    "recipe_009": { base_cost0_num: 2, base_cost0_den: 1 }, // 枝_採集者の仕事場
    "recipe_010": { base_cost0_num: 1, base_cost0_den: 1 }, // 樹皮_採集者の仕事場
    "recipe_011": { base_cost0_num: 2, base_cost0_den: 1 }, // 梶の樹皮_採集者の仕事場
    "recipe_048": { base_cost0_num: 3, base_cost0_den: 10 }, // 菊の花_採集者の仕事場
    "recipe_069": { base_cost0_num: 3, base_cost0_den: 4 }, // 茶(酒場の調理場版)_酒場の調理場
    "recipe_070": { base_cost0_num: 15, base_cost0_den: 16 }, // 茶(酒場の調理場版)_台所の調理場
    "recipe_071": { base_cost0_num: 3, base_cost0_den: 2 }, // 茶(酒場の調理場版)_囲炉裏と調理鍋の仕事場
    "recipe_072": { base_cost0_num: 9, base_cost0_den: 10 }, // 甘酒_酒場の調理場
    "recipe_073": { base_cost0_num: 9, base_cost0_den: 8 }, // 甘酒_台所の調理場
    "recipe_074": { base_cost0_num: 9, base_cost0_den: 5 }, // 甘酒_囲炉裏と調理鍋の仕事場
    "recipe_075": { base_cost0_num: 9, base_cost0_den: 5 }, // 甘酒_囲炉裏の仕事場
    "recipe_076": { base_cost0_num: 3, base_cost0_den: 5 }, // どぶろく_酒場の調理場
    "recipe_077": { base_cost0_num: 3, base_cost0_den: 4 }, // どぶろく_台所の調理場
    "recipe_078": { base_cost0_num: 6, base_cost0_den: 5 }, // どぶろく_囲炉裏と調理鍋の仕事場
    "recipe_079": { base_cost0_num: 6, base_cost0_den: 5 }, // どぶろく_囲炉裏の仕事場
    "recipe_049": { base_cost0_num: 3, base_cost0_den: 1 }, // 治癒の飲料_調薬台
    "recipe_050": { base_cost0_num: 4, base_cost0_den: 1 }, // 治癒の包帯_調薬台
    "recipe_051": { base_cost0_num: 4, base_cost0_den: 1 }, // 治癒の軟膏_調薬台
    "recipe_052": { base_cost0_num: 4, base_cost0_den: 1 }, // 火傷軟膏_調薬台
    "recipe_053": { base_cost0_num: 3, base_cost0_den: 1 }, // 温かい飲み物_調薬台
    "recipe_054": { base_cost0_num: 4, base_cost0_den: 1 }, // 風邪薬_調薬台
    "recipe_055": { base_cost0_num: 5, base_cost0_den: 2 }, // 栄養剤_調薬台
    "recipe_056": { base_cost0_num: 4, base_cost0_den: 1 }, // 蚊よけ_調薬台
    "recipe_057": { base_cost0_num: 5, base_cost0_den: 2 }, // 冷たい飲み物_調薬台
    "recipe_058": { base_cost0_num: 4, base_cost0_den: 1 }, // 痛み止め_調薬台
    "recipe_059": { base_cost0_num: 15, base_cost0_den: 2 }, // 対毒調合薬_調薬台
    "recipe_060": { base_cost0_num: 25, base_cost0_den: 2 }, // 解毒薬_調薬台
    "recipe_061": { base_cost0_num: 25, base_cost0_den: 2 }, // マラリア治療薬_調薬台
    "recipe_062": { base_cost0_num: 5, base_cost0_den: 1 }, // 果実の抽出液_調薬台
    "recipe_063": { base_cost0_num: 5, base_cost0_den: 1 }, // プラムの抽出液_調薬台
    "recipe_064": { base_cost0_num: 5, base_cost0_den: 1 }, // 柚子の抽出液_調薬台
    "recipe_083": { base_cost0_num: 2, base_cost0_den: 1 }, // 陶器_陶芸窯
    "recipe_084": { base_cost0_num: 2, base_cost0_den: 5 }, // 藁_草の乾燥棚
    "recipe_085": { base_cost0_num: 1, base_cost0_den: 1 }, // 藁_ヤシの葉の乾燥棚
    "recipe_086": { base_cost0_num: 3, base_cost0_den: 1 }, // 彫刻した石_石工所
    "recipe_024": { base_cost0_num: 10, base_cost0_den: 1 }, // 天照大御神の像_石工所
    "recipe_025": { base_cost0_num: 10, base_cost0_den: 1 }, // 稲荷像_石工所
    "recipe_026": { base_cost0_num: 10, base_cost0_den: 1 }, // 地蔵像_石工所
    "recipe_027": { base_cost0_num: 10, base_cost0_den: 1 }, // 観音像_石工所
    "recipe_028": { base_cost0_num: 10, base_cost0_den: 1 }, // 龍神像_石工所
    "recipe_029": { base_cost0_num: 10, base_cost0_den: 1 }, // 恵比寿像_石工所
    "recipe_030": { base_cost0_num: 10, base_cost0_den: 1 }, // 天神像_石工所
    "recipe_031": { base_cost0_num: 10, base_cost0_den: 1 }, // 八幡像_石工所
    "recipe_087": { base_cost0_num: 4, base_cost0_den: 1 }, // 粘土_鉱夫の仕事場
    "recipe_012": { base_cost0_num: 3, base_cost0_den: 1 }, // 薪_大工作業台
    "recipe_088": { base_cost0_num: 3, base_cost0_den: 1 }, // 板(針葉樹)_大工作業台
    "recipe_089": { base_cost0_num: 3, base_cost0_den: 1 }, // 板(落葉樹)_大工作業台
    "recipe_090": { base_cost0_num: 7, base_cost0_den: 2 }, // 板(上質な針葉樹)_大工作業台
    "recipe_091": { base_cost0_num: 7, base_cost0_den: 2 }, // 板(上質な落葉樹)_大工作業台
    "recipe_092": { base_cost0_num: 4, base_cost0_den: 1 }, // 板(果樹)_大工作業台
    "recipe_080": { base_cost0_num: 2, base_cost0_den: 1 }, // 日本酒_圧力ろ過器
    "recipe_081": { base_cost0_num: 2, base_cost0_den: 1 }, // 焼酎_焼酎蒸留所
    "recipe_082": { base_cost0_num: 15, base_cost0_den: 2 }, // ヒョウタンノキの水容器_仕立て台
    "recipe_013": { base_cost0_num: 20, base_cost0_den: 1 }, // 蓑_仕立て台
    "recipe_014": { base_cost0_num: 6, base_cost0_den: 5 }, // 木炭_炭窯
    "recipe_020": { base_cost0_num: 15, base_cost0_den: 2 }, // 小さな銅鑼_金敷
    "recipe_021": { base_cost0_num: 6, base_cost0_den: 1 }, // 鈴_金敷
    "recipe_022": { base_cost0_num: 3, base_cost0_den: 2 }, // 儀式の鐘_金敷
    "recipe_023": { base_cost0_num: 6, base_cost0_den: 1 }, // 青銅の灯篭_金敷
    "recipe_032": { base_cost0_num: 10, base_cost0_den: 1 }, // 木製の数珠_木工作業台
    "recipe_033": { base_cost0_num: 20, base_cost0_den: 1 }, // 真珠の数珠_木工作業台
    "recipe_034": { base_cost0_num: 25, base_cost0_den: 2 }, // 貝殻の数珠_木工作業台
    "recipe_038": { base_cost0_num: 3, base_cost0_den: 2 }, // 小さな御幣_木工作業台
    "recipe_035": { base_cost0_num: 5, base_cost0_den: 1 }, // 仏舎利塔のミニチュア_木工作業台
    "recipe_036": { base_cost0_num: 3, base_cost0_den: 1 }, // 玉串_木工作業台
    "recipe_037": { base_cost0_num: 7, base_cost0_den: 1 }, // 笛_木工作業台
    "recipe_039": { base_cost0_num: 7, base_cost0_den: 1 }, // 僧の服_仕立て台
    "recipe_040": { base_cost0_num: 5, base_cost0_den: 1 }, // 僧の被り物_仕立て台
    "recipe_041": { base_cost0_num: 5, base_cost0_den: 1 }, // 天蓋_仕立て台
    "recipe_042": { base_cost0_num: 10, base_cost0_den: 1 }, // 神主の装束_仕立て台
    "recipe_043": { base_cost0_num: 20, base_cost0_den: 1 }, // 冠_仕立て台
    "recipe_044": { base_cost0_num: 7, base_cost0_den: 1 }, // 僧兵の服_仕立て台
    "recipe_093": { base_cost0_num: 5, base_cost0_den: 1 }, // お米_水田
    "recipe_094": { base_cost0_num: 5, base_cost0_den: 1 }, // カブ_畑
    "recipe_095": { base_cost0_num: 5, base_cost0_den: 1 }, // サトイモ_水田
    "recipe_096": { base_cost0_num: 5, base_cost0_den: 1 }, // ネギ_畑
    "recipe_097": { base_cost0_num: 5, base_cost0_den: 1 }, // 大豆_畑
    "recipe_098": { base_cost0_num: 5, base_cost0_den: 1 }, // 小麦_畑
    "recipe_099": { base_cost0_num: 5, base_cost0_den: 1 }, // 粟_畑
    "recipe_100": { base_cost0_num: 5, base_cost0_den: 1 }, // 菜種_畑
    "recipe_101": { base_cost0_num: 5, base_cost0_den: 1 }, // ミョウガ_畑
    "recipe_102": { base_cost0_num: 5, base_cost0_den: 1 }, // レンコン_水田
    "recipe_103": { base_cost0_num: 7, base_cost0_den: 4 }, // 天ぷら_酒場の調理場
    "recipe_104": { base_cost0_num: 35, base_cost0_den: 16 }, // 天ぷら_台所の調理場
    "recipe_105": { base_cost0_num: 1, base_cost0_den: 1 }, // 調理したゴボウ_酒場の調理場
    "recipe_106": { base_cost0_num: 5, base_cost0_den: 4 }, // 調理したゴボウ_台所の調理場
    "recipe_107": { base_cost0_num: 2, base_cost0_den: 1 }, // 調理したゴボウ_囲炉裏と調理鍋の仕事場
    "recipe_108": { base_cost0_num: 2, base_cost0_den: 1 }, // 調理したゴボウ_囲炉裏の仕事場
    "recipe_109": { base_cost0_num: 1, base_cost0_den: 1 }, // 調理した魚_酒場の調理場
    "recipe_110": { base_cost0_num: 5, base_cost0_den: 4 }, // 調理した魚_台所の調理場
    "recipe_111": { base_cost0_num: 2, base_cost0_den: 1 }, // 調理した魚_囲炉裏と調理鍋の仕事場
    "recipe_112": { base_cost0_num: 2, base_cost0_den: 1 }, // 調理した魚_囲炉裏の仕事場
    "recipe_113": { base_cost0_num: 1, base_cost0_den: 1 }, // 炊いた米_酒場の調理場
    "recipe_114": { base_cost0_num: 5, base_cost0_den: 4 }, // 炊いた米_台所の調理場
    "recipe_115": { base_cost0_num: 2, base_cost0_den: 1 }, // 炊いた米_囲炉裏と調理鍋の仕事場
    "recipe_116": { base_cost0_num: 3, base_cost0_den: 4 }, // 干し果実_酒場の調理場
    "recipe_117": { base_cost0_num: 15, base_cost0_den: 16 }, // 干し果実_台所の調理場
    "recipe_118": { base_cost0_num: 3, base_cost0_den: 2 }, // 干し果実_囲炉裏と調理鍋の仕事場
    "recipe_119": { base_cost0_num: 3, base_cost0_den: 2 }, // 干し果実_囲炉裏の仕事場
    "recipe_120": { base_cost0_num: 1, base_cost0_den: 1 }, // 蜂蜜漬け果実_酒場の調理場
    "recipe_121": { base_cost0_num: 5, base_cost0_den: 4 }, // 蜂蜜漬け果実_台所の調理場
    "recipe_122": { base_cost0_num: 3, base_cost0_den: 1 }, // 生肉_猟師の仕事場
    "recipe_123": { base_cost0_num: 5, base_cost0_den: 2 }, // 脂肪_猟師の仕事場
    "recipe_124": { base_cost0_num: 3, base_cost0_den: 2 }, // 魚_漁師の仕事場
    "recipe_125": { base_cost0_num: 2, base_cost0_den: 1 }, // 魚_基本の釣り場
    "recipe_126": { base_cost0_num: 8, base_cost0_den: 5 }, // 魚_匠の釣り場
    "recipe_127": { base_cost0_num: 20, base_cost0_den: 11 }, // 魚_高度な釣り場
    "recipe_128": { base_cost0_num: 1, base_cost0_den: 1 }, // 調理した卵_酒場の調理場
    "recipe_129": { base_cost0_num: 5, base_cost0_den: 4 }, // 調理した卵_台所の調理場
    "recipe_130": { base_cost0_num: 2, base_cost0_den: 1 }, // 調理した卵_囲炉裏と調理鍋の仕事場
    "recipe_131": { base_cost0_num: 2, base_cost0_den: 1 }, // 調理した卵_囲炉裏の仕事場
    "recipe_132": { base_cost0_num: 7, base_cost0_den: 4 }, // 団子_酒場の調理場
    "recipe_133": { base_cost0_num: 35, base_cost0_den: 16 }, // 団子_台所の調理場
    "recipe_134": { base_cost0_num: 3, base_cost0_den: 2 }, // 卵_採集者の仕事場
    "recipe_135": { base_cost0_num: 7, base_cost0_den: 4 }, // お粥_酒場の調理場
    "recipe_136": { base_cost0_num: 35, base_cost0_den: 16 }, // お粥_台所の調理場
    "recipe_137": { base_cost0_num: 7, base_cost0_den: 4 }, // 果実汁_酒場の調理場
    "recipe_138": { base_cost0_num: 35, base_cost0_den: 16 }, // 果実汁_台所の調理場
    "recipe_139": { base_cost0_num: 7, base_cost0_den: 4 }, // 野菜汁_酒場の調理場
    "recipe_140": { base_cost0_num: 35, base_cost0_den: 16 }, // 野菜汁_台所の調理場
    "recipe_141": { base_cost0_num: 7, base_cost0_den: 4 }, // 亀汁_酒場の調理場
    "recipe_142": { base_cost0_num: 35, base_cost0_den: 16 }, // 亀汁_台所の調理場
    "recipe_143": { base_cost0_num: 1, base_cost0_den: 1 }, // 味噌汁_酒場の調理場
    "recipe_144": { base_cost0_num: 5, base_cost0_den: 4 }, // 味噌汁_台所の調理場
    "recipe_145": { base_cost0_num: 1, base_cost0_den: 1 }, // 味噌_酒場の調理場
    "recipe_146": { base_cost0_num: 1, base_cost0_den: 1 }, // 具沢山味噌汁_酒場の調理場
    "recipe_147": { base_cost0_num: 5, base_cost0_den: 4 }, // 具沢山味噌汁_台所の調理場
    "recipe_148": { base_cost0_num: 7, base_cost0_den: 4 }, // 鍋_酒場の調理場
    "recipe_149": { base_cost0_num: 35, base_cost0_den: 16 }, // 鍋_台所の調理場
    "recipe_150": { base_cost0_num: 7, base_cost0_den: 4 }, // 質素な魚料理(魚1+豆全般5)_酒場の調理場
    "recipe_151": { base_cost0_num: 35, base_cost0_den: 16 }, // 質素な魚料理(魚1+豆全般5)_台所の調理場
    "recipe_152": { base_cost0_num: 7, base_cost0_den: 2 }, // 質素な魚料理(魚1+豆全般5)_囲炉裏と調理鍋の仕事場
    "recipe_153": { base_cost0_num: 7, base_cost0_den: 4 }, // 質素な魚料理(魚1+食用キノコ全般1)_酒場の調理場
    "recipe_154": { base_cost0_num: 35, base_cost0_den: 16 }, // 質素な魚料理(魚1+食用キノコ全般1)_台所の調理場
    "recipe_155": { base_cost0_num: 7, base_cost0_den: 2 }, // 質素な魚料理(魚1+食用キノコ全般1)_囲炉裏と調理鍋の仕事場
    "recipe_156": { base_cost0_num: 5, base_cost0_den: 2 }, // きちんとした魚料理(魚2+薬草全般3+穀物全般1)_酒場の調理場
    "recipe_157": { base_cost0_num: 25, base_cost0_den: 8 }, // きちんとした魚料理(魚2+薬草全般3+穀物全般1)_台所の調理場
    "recipe_158": { base_cost0_num: 5, base_cost0_den: 1 }, // きちんとした魚料理(魚2+薬草全般3+穀物全般1)_囲炉裏と調理鍋の仕事場
    "recipe_159": { base_cost0_num: 5, base_cost0_den: 2 }, // きちんとした魚料理(魚1+薬草全般4+食用キノコ全般1)_酒場の調理場
    "recipe_160": { base_cost0_num: 25, base_cost0_den: 8 }, // きちんとした魚料理(魚1+薬草全般4+食用キノコ全般1)_台所の調理場
    "recipe_161": { base_cost0_num: 5, base_cost0_den: 1 }, // きちんとした魚料理(魚1+薬草全般4+食用キノコ全般1)_囲炉裏と調理鍋の仕事場
    "recipe_162": { base_cost0_num: 15, base_cost0_den: 4 }, // 豪華な魚料理(魚1+穀物全般5+豆全般10)_酒場の調理場
    "recipe_163": { base_cost0_num: 15, base_cost0_den: 4 }, // 豪華な魚料理(魚2+お米7+薬草全般2)_酒場の調理場
    "recipe_164": { base_cost0_num: 7, base_cost0_den: 4 }, // なれずし_酒場の調理場
    "recipe_165": { base_cost0_num: 35, base_cost0_den: 16 }, // なれずし_台所の調理場
    "recipe_166": { base_cost0_num: 7, base_cost0_den: 4 }, // 質素な肉料理(肉1+穀物全般6)_酒場の調理場
    "recipe_167": { base_cost0_num: 35, base_cost0_den: 16 }, // 質素な肉料理(肉1+穀物全般6)_台所の調理場
    "recipe_168": { base_cost0_num: 7, base_cost0_den: 2 }, // 質素な肉料理(肉1+穀物全般6)_囲炉裏と調理鍋の仕事場
    "recipe_169": { base_cost0_num: 7, base_cost0_den: 4 }, // 質素な肉料理(肉1+食用キノコ全般1)_酒場の調理場
    "recipe_170": { base_cost0_num: 35, base_cost0_den: 16 }, // 質素な肉料理(肉1+食用キノコ全般1)_台所の調理場
    "recipe_171": { base_cost0_num: 7, base_cost0_den: 2 }, // 質素な肉料理(肉1+食用キノコ全般1)_囲炉裏と調理鍋の仕事場
    "recipe_172": { base_cost0_num: 7, base_cost0_den: 4 }, // 質素な肉料理(肉1+豆全般5)_酒場の調理場
    "recipe_173": { base_cost0_num: 35, base_cost0_den: 16 }, // 質素な肉料理(肉1+豆全般5)_台所の調理場
    "recipe_174": { base_cost0_num: 7, base_cost0_den: 2 }, // 質素な肉料理(肉1+豆全般5)_囲炉裏と調理鍋の仕事場
    "recipe_175": { base_cost0_num: 5, base_cost0_den: 2 }, // きちんとした肉料理(肉1+卵1+豆全般6)_酒場の調理場
    "recipe_176": { base_cost0_num: 25, base_cost0_den: 8 }, // きちんとした肉料理(肉1+卵1+豆全般6)_台所の調理場
    "recipe_177": { base_cost0_num: 5, base_cost0_den: 1 }, // きちんとした肉料理(肉1+卵1+豆全般6)_囲炉裏と調理鍋の仕事場
    "recipe_178": { base_cost0_num: 5, base_cost0_den: 2 }, // きちんとした肉料理(肉2+薬草全般2+穀物全般1)_酒場の調理場
    "recipe_179": { base_cost0_num: 25, base_cost0_den: 8 }, // きちんとした肉料理(肉2+薬草全般2+穀物全般1)_台所の調理場
    "recipe_180": { base_cost0_num: 5, base_cost0_den: 1 }, // きちんとした肉料理(肉2+薬草全般2+穀物全般1)_囲炉裏と調理鍋の仕事場
    "recipe_181": { base_cost0_num: 5, base_cost0_den: 2 }, // きちんとした肉料理(肉1+薬草全般4+食用キノコ全般6)_酒場の調理場
    "recipe_182": { base_cost0_num: 25, base_cost0_den: 8 }, // きちんとした肉料理(肉1+薬草全般4+食用キノコ全般6)_台所の調理場
    "recipe_183": { base_cost0_num: 5, base_cost0_den: 1 }, // きちんとした肉料理(肉1+薬草全般4+食用キノコ全般6)_囲炉裏と調理鍋の仕事場
    "recipe_184": { base_cost0_num: 15, base_cost0_den: 4 }, // 豪華な肉料理(肉2+穀物全般4+豆全般4)_酒場の調理場
    "recipe_185": { base_cost0_num: 15, base_cost0_den: 4 }, // 豪華な肉料理(肉2+お米5+薬草全般3)_酒場の調理場
    "recipe_186": { base_cost0_num: 15, base_cost0_den: 4 }, // 豪華な肉料理(肉1+お米4+食用キノコ全般2)_酒場の調理場
    "recipe_187": { base_cost0_num: 7, base_cost0_den: 4 }, // 焼き鳥_酒場の調理場
    "recipe_188": { base_cost0_num: 7, base_cost0_den: 4 }, // 質素な野菜料理(野菜全般5+豆全般3)_酒場の調理場
    "recipe_189": { base_cost0_num: 7, base_cost0_den: 4 }, // 質素な野菜料理(野菜全般5+薬草全般3)_酒場の調理場
    "recipe_190": { base_cost0_num: 7, base_cost0_den: 4 }, // 質素な野菜料理(野菜全般4+食用キノコ全般1)_酒場の調理場
    "recipe_191": { base_cost0_num: 5, base_cost0_den: 2 }, // きちんとした野菜料理(大豆10+麹2)_酒場の調理場
    "recipe_192": { base_cost0_num: 5, base_cost0_den: 2 }, // きちんとした野菜料理(水1+穀物全般6+果実全般3)_酒場の調理場
    "recipe_193": { base_cost0_num: 5, base_cost0_den: 2 }, // きちんとした野菜料理(水1+豆全般6+薬草全般3)_酒場の調理場
    "recipe_194": { base_cost0_num: 15, base_cost0_den: 4 }, // 豪華な野菜料理(穀物全般7+油1+水1+サトイモ8)_酒場の調理場
    "recipe_195": { base_cost0_num: 15, base_cost0_den: 4 }, // 豪華な野菜料理(お米12+しいたけ2+ネギ5+油1)_酒場の調理場
    "recipe_196": { base_cost0_num: 15, base_cost0_den: 4 }, // 豪華な野菜料理(小麦7+野菜全般8+わさび3+油1)_酒場の調理場
    "recipe_197": { base_cost0_num: 1, base_cost0_den: 1 }, // 豆腐_酒場の調理場
    "recipe_198": { base_cost0_num: 7, base_cost0_den: 4 }, // 田楽_酒場の調理場
    "recipe_199": { base_cost0_num: 35, base_cost0_den: 16 }, // 田楽_台所の調理場
    "recipe_200": { base_cost0_num: 35, base_cost0_den: 16 }, // 焼き鳥_台所の調理場
    "recipe_201": { base_cost0_num: 5, base_cost0_den: 4 }, // 味噌_台所の調理場
    "recipe_202": { base_cost0_num: 5, base_cost0_den: 4 }, // 豆腐_台所の調理場
    "recipe_203": { base_cost0_num: 35, base_cost0_den: 16 }, // 質素な野菜料理(野菜全般5+豆全般3)_台所の調理場
    "recipe_204": { base_cost0_num: 7, base_cost0_den: 2 }, // 質素な野菜料理(野菜全般5+豆全般3)_囲炉裏と調理鍋の仕事場
    "recipe_205": { base_cost0_num: 7, base_cost0_den: 2 }, // 質素な野菜料理(野菜全般5+豆全般3)_囲炉裏の仕事場
    "recipe_206": { base_cost0_num: 35, base_cost0_den: 16 }, // 質素な野菜料理(野菜全般5+薬草全般3)_台所の調理場
    "recipe_207": { base_cost0_num: 7, base_cost0_den: 2 }, // 質素な野菜料理(野菜全般5+薬草全般3)_囲炉裏と調理鍋の仕事場
    "recipe_208": { base_cost0_num: 7, base_cost0_den: 2 }, // 質素な野菜料理(野菜全般5+薬草全般3)_囲炉裏の仕事場
    "recipe_209": { base_cost0_num: 35, base_cost0_den: 16 }, // 質素な野菜料理(野菜全般4+食用キノコ全般1)_台所の調理場
    "recipe_210": { base_cost0_num: 7, base_cost0_den: 2 }, // 質素な野菜料理(野菜全般4+食用キノコ全般1)_囲炉裏と調理鍋の仕事場
    "recipe_211": { base_cost0_num: 25, base_cost0_den: 8 }, // きちんとした野菜料理(大豆10+麹2)_台所の調理場
    "recipe_212": { base_cost0_num: 5, base_cost0_den: 1 }, // きちんとした野菜料理(大豆10+麹2)_囲炉裏と調理鍋の仕事場
    "recipe_213": { base_cost0_num: 25, base_cost0_den: 8 }, // きちんとした野菜料理(水1+穀物全般6+果実全般3)_台所の調理場
    "recipe_214": { base_cost0_num: 5, base_cost0_den: 1 }, // きちんとした野菜料理(水1+穀物全般6+果実全般3)_囲炉裏と調理鍋の仕事場
    "recipe_215": { base_cost0_num: 25, base_cost0_den: 8 }, // きちんとした野菜料理(水1+豆全般6+薬草全般3)_台所の調理場
    "recipe_216": { base_cost0_num: 5, base_cost0_den: 1 }, // きちんとした野菜料理(水1+豆全般6+薬草全般3)_囲炉裏と調理鍋の仕事場
    "recipe_217": { base_cost0_num: 7, base_cost0_den: 2 }, // 団子_囲炉裏と調理鍋の仕事場
    "recipe_218": { base_cost0_num: 7, base_cost0_den: 2 }, // 団子_囲炉裏の仕事場
    "recipe_219": { base_cost0_num: 5, base_cost0_den: 4 }, // 調理した肉_酒場の調理場
    "recipe_220": { base_cost0_num: 25, base_cost0_den: 16 }, // 調理した肉_台所の調理場
    "recipe_221": { base_cost0_num: 5, base_cost0_den: 2 }, // 調理した肉_囲炉裏と調理鍋の仕事場
    "recipe_222": { base_cost0_num: 5, base_cost0_den: 2 }, // 調理した肉_囲炉裏の仕事場
    "recipe_223": { base_cost0_num: 2, base_cost0_den: 1 }, // 柚子の果実_採集者の仕事場
    "recipe_224": { base_cost0_num: 2, base_cost0_den: 1 }, // ゴボウ_採集者の仕事場
    "recipe_225": { base_cost0_num: 13, base_cost0_den: 10 }, // えのき_採集者の仕事場
    "recipe_226": { base_cost0_num: 13, base_cost0_den: 10 }, // 舞茸_採集者の仕事場
    "recipe_227": { base_cost0_num: 13, base_cost0_den: 10 }, // 松茸_採集者の仕事場
    "recipe_228": { base_cost0_num: 13, base_cost0_den: 10 }, // しいたけ_採集者の仕事場
    "recipe_229": { base_cost0_num: 23, base_cost0_den: 10 }, // ヒョウタンノキの実_採集者の仕事場
    "recipe_230": { base_cost0_num: 5, base_cost0_den: 2 }, // わさび_採集者の仕事場
    "recipe_231": { base_cost0_num: 5, base_cost0_den: 2 }, // ニンニク_採集者の仕事場
    "recipe_232": { base_cost0_num: 5, base_cost0_den: 2 }, // 三つ葉_採集者の仕事場
    "recipe_233": { base_cost0_num: 3, base_cost0_den: 5 }, // 木苺_採集者の仕事場
    "recipe_234": { base_cost0_num: 3, base_cost0_den: 5 }, // コケモモ_採集者の仕事場
    "recipe_235": { base_cost0_num: 3, base_cost0_den: 2 }, // プラム_採集者の仕事場
    "recipe_236": { base_cost0_num: 5, base_cost0_den: 2 }, // 兵糧丸_調薬台
    "recipe_237": { base_cost0_num: 13, base_cost0_den: 10 }, // 蜂蜜_小さな蜜蜂の巣箱
    "recipe_238": { base_cost0_num: 13, base_cost0_den: 20 }, // 蜂蜜_大きな蜜蜂の巣箱
    "recipe_239": { base_cost0_num: 6, base_cost0_den: 1 }, // 深靴_仕立て台
    "recipe_240": { base_cost0_num: 5, base_cost0_den: 1 }, // 浪人笠_仕立て台
    "recipe_241": { base_cost0_num: 5, base_cost0_den: 1 }, // 網代笠_仕立て台
    "recipe_242": { base_cost0_num: 5, base_cost0_den: 2 }, // 革_なめし槽
    "recipe_243": { base_cost0_num: 7, base_cost0_den: 1 }, // 村人の服_仕立て台
    "recipe_244": { base_cost0_num: 7, base_cost0_den: 1 }, // 貴族の服_仕立て台
    "recipe_245": { base_cost0_num: 6, base_cost0_den: 1 }, // 盗賊の服_仕立て台
    "recipe_246": { base_cost0_num: 4, base_cost0_den: 1 }, // 靴下_仕立て台
    "recipe_247": { base_cost0_num: 5, base_cost0_den: 1 }, // 般若の面_仕立て台
    "recipe_248": { base_cost0_num: 5, base_cost0_den: 1 }, // 田下駄_仕立て台
    "recipe_249": { base_cost0_num: 5, base_cost0_den: 1 }, // 草鞋_仕立て台
    "recipe_250": { base_cost0_num: 25, base_cost0_den: 2 }, // 農民の服_仕立て台
    "recipe_251": { base_cost0_num: 5, base_cost0_den: 1 }, // 天狗の面_仕立て台
    "recipe_252": { base_cost0_num: 4, base_cost0_den: 1 }, // 藁帽子_仕立て台
    "recipe_253": { base_cost0_num: 5, base_cost0_den: 1 }, // 下駄_仕立て台
    "recipe_254": { base_cost0_num: 5, base_cost0_den: 1 }, // 一本下駄_仕立て台
    "recipe_255": { base_cost0_num: 4, base_cost0_den: 1 }, // 盗賊の被り物_仕立て台
    "recipe_256": { base_cost0_num: 5, base_cost0_den: 1 }, // 狐の面_仕立て台
    "recipe_257": { base_cost0_num: 5, base_cost0_den: 1 }, // 翁の面_仕立て台
    "recipe_258": { base_cost0_num: 5, base_cost0_den: 1 }, // 素朴な印籠_仕立て台
    "recipe_259": { base_cost0_num: 10, base_cost0_den: 1 }, // 匠の印籠_仕立て台
    "recipe_260": { base_cost0_num: 15, base_cost0_den: 2 }, // 飾りつきの印籠_仕立て台
    "recipe_261": { base_cost0_num: 5, base_cost0_den: 1 }, // 足袋付きの草鞋_仕立て台
    "recipe_262": { base_cost0_num: 25, base_cost0_den: 1 }, // 毛沓_仕立て台
    "recipe_263": { base_cost0_num: 10, base_cost0_den: 1 }, // 浅沓_仕立て台
    "recipe_264": { base_cost0_num: 10, base_cost0_den: 1 }, // 藁の輪_仕立て台
    "recipe_265": { base_cost0_num: 25, base_cost0_den: 1 }, // 裕福な商人の服_仕立て台
    "recipe_266": { base_cost0_num: 10, base_cost0_den: 1 }, // 軽量の侍の服_仕立て台
    "recipe_267": { base_cost0_num: 7, base_cost0_den: 1 }, // 商人の服(リネンx8)_仕立て台
    "recipe_268": { base_cost0_num: 10, base_cost0_den: 1 }, // 商人の服(リネンx20)_仕立て台
    "recipe_269": { base_cost0_num: 5, base_cost0_den: 1 }, // 養蜂家の枝細工の面_仕立て台
    "recipe_270": { base_cost0_num: 20, base_cost0_den: 1 }, // 養蜂家の被り物_仕立て台
    "recipe_271": { base_cost0_num: 10, base_cost0_den: 1 }, // 養蜂家の服_仕立て台
    "recipe_272": { base_cost0_num: 6, base_cost0_den: 1 }, // 烏天狗の面_仕立て台
    "recipe_273": { base_cost0_num: 6, base_cost0_den: 1 }, // 化け猫の面_仕立て台
    "recipe_274": { base_cost0_num: 25, base_cost0_den: 1 }, // 浪人の服_仕立て台
    "recipe_275": { base_cost0_num: 10, base_cost0_den: 1 }, // 工芸職人の服_仕立て台
    "recipe_276": { base_cost0_num: 15, base_cost0_den: 2 }, // 海賊の服_仕立て台
    "recipe_277": { base_cost0_num: 2, base_cost0_den: 1 }, // 紙_製紙場
    "recipe_278": { base_cost0_num: 2, base_cost0_den: 1 }, // 紙_製紙場(大)
    "recipe_279": { base_cost0_num: 3, base_cost0_den: 2 }, // 氷_鉱夫の仕事場
    "recipe_280": { base_cost0_num: 25, base_cost0_den: 2 }, // 香炉_金敷
    "recipe_281": { base_cost0_num: 5, base_cost0_den: 1 }, // 避難民の被り物_木工作業台
    "recipe_282": { base_cost0_num: 5, base_cost0_den: 1 }, // 避難民の被り物_仕立て台
    "recipe_283": { base_cost0_num: 5, base_cost0_den: 1 }, // 竹玉_木工作業台
    "recipe_284": { base_cost0_num: 10, base_cost0_den: 1 }, // くし_木工作業台
    "recipe_285": { base_cost0_num: 15, base_cost0_den: 2 }, // 賽一式_木工作業台
    "recipe_286": { base_cost0_num: 25, base_cost0_den: 2 }, // 囲碁一式_木工作業台
    "recipe_287": { base_cost0_num: 25, base_cost0_den: 1 }, // 将棋一式_木工作業台
    "recipe_288": { base_cost0_num: 35, base_cost0_den: 2 }, // 双六一式_木工作業台
    "recipe_289": { base_cost0_num: 5, base_cost0_den: 1 }, // 小さな提燈_木工作業台
    "recipe_290": { base_cost0_num: 5, base_cost0_den: 1 }, // 小さな行燈_木工作業台
    "recipe_291": { base_cost0_num: 5, base_cost0_den: 1 }, // 円筒提燈_木工作業台
    "recipe_292": { base_cost0_num: 5, base_cost0_den: 2 }, // 油の行燈_木工作業台
    "recipe_293": { base_cost0_num: 5, base_cost0_den: 1 }, // ろうそく_木工作業台
    "recipe_294": { base_cost0_num: 5, base_cost0_den: 1 }, // 竹のろうそく_木工作業台
  },
  categories: {
    "meals": {
      facilities: {
        "meals_001": { displayName: { ja: "水田", en: "Water Field" }, recipe: "recipe_093", recipeLabel: { ja: "稲作農業", en: "Rice Farming" }, facility_multiplier: 16, item_value: 1, tools: "any_seed_bag", lands: "water_field" },
        "meals_002": { displayName: { ja: "畑", en: "Land Field" }, recipe: "recipe_094", recipeLabel: { ja: "カブ農業", en: "Turnip Farming" }, facility_multiplier: 9, item_value: 2, tools: "any_seed_bag", lands: "land_field" },
        "meals_003": { displayName: { ja: "水田", en: "Water Field" }, recipe: "recipe_095", recipeLabel: { ja: "サトイモ農業", en: "Taro Farming" }, facility_multiplier: 9, item_value: 2, tools: "any_seed_bag", lands: "water_field" },
        "meals_004": { displayName: { ja: "畑", en: "Land Field" }, recipe: "recipe_096", recipeLabel: { ja: "ネギ農業", en: "Leek Farming" }, facility_multiplier: 9, item_value: 2, tools: "any_seed_bag", lands: "land_field" },
        "meals_005": { displayName: { ja: "畑", en: "Land Field" }, recipe: "recipe_097", recipeLabel: { ja: "大豆農業", en: "Soybean Farming" }, facility_multiplier: 16, item_value: 1, tools: "any_seed_bag", lands: "land_field" },
        "meals_006": { displayName: { ja: "畑", en: "Land Field" }, recipe: "recipe_098", recipeLabel: { ja: "小麦農業", en: "Wheat Farming" }, facility_multiplier: 16, item_value: 1, tools: "any_seed_bag", lands: "land_field" },
        "meals_007": { displayName: { ja: "畑", en: "Land Field" }, recipe: "recipe_099", recipeLabel: { ja: "粟農業", en: "Millet Farming" }, facility_multiplier: 16, item_value: 1, tools: "any_seed_bag", lands: "land_field" },
        "meals_008": { displayName: { ja: "畑", en: "Land Field" }, recipe: "recipe_100", recipeLabel: { ja: "キャノーラ農業", en: "Canola Farming" }, facility_multiplier: 9, item_value: 2, tools: "any_seed_bag", lands: "land_field" },
        "meals_009": { displayName: { ja: "畑", en: "Land Field" }, recipe: "recipe_101", recipeLabel: { ja: "ミョウガ農業", en: "Myoga Farming" }, facility_multiplier: 13, item_value: 1, tools: "any_seed_bag", lands: "land_field" },
        "meals_010": { displayName: { ja: "水田", en: "Water Field" }, recipe: "recipe_102", recipeLabel: { ja: "蓮農業", en: "Lotus Farming" }, facility_multiplier: 1, item_value: 3, tools: "any_seed_bag", lands: "water_field" },
        "meals_011": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_103", recipeLabel: { ja: "天ぷら", en: "Tempura" }, facility_multiplier: 1, item_value: 75 },
        "meals_012": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_104", recipeLabel: { ja: "天ぷら", en: "Tempura" }, facility_multiplier: 1, item_value: 75 },
        "meals_013": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_105", recipeLabel: { ja: "調理したゴボウ", en: "Cooked Gobo" }, facility_multiplier: 1, item_value: 7 },
        "meals_014": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_106", recipeLabel: { ja: "調理したゴボウ", en: "Cooked Gobo" }, facility_multiplier: 1, item_value: 7 },
        "meals_015": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_107", recipeLabel: { ja: "調理したゴボウ", en: "Cooked Gobo" }, facility_multiplier: 1, item_value: 7 },
        "meals_016": { displayName: { ja: "囲炉裏の仕事場", en: "Sunken Hearth Workplace" }, recipe: "recipe_108", recipeLabel: { ja: "調理したゴボウ", en: "Cooked Gobo" }, facility_multiplier: 1, item_value: 7 },
        "meals_017": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_109", recipeLabel: { ja: "調理した魚", en: "Cooked Fish" }, facility_multiplier: 1, item_value: 9 },
        "meals_018": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_110", recipeLabel: { ja: "調理した魚", en: "Cooked Fish" }, facility_multiplier: 1, item_value: 9 },
        "meals_019": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_111", recipeLabel: { ja: "調理した魚", en: "Cooked Fish" }, facility_multiplier: 1, item_value: 9 },
        "meals_020": { displayName: { ja: "囲炉裏の仕事場", en: "Sunken Hearth Workplace" }, recipe: "recipe_112", recipeLabel: { ja: "調理した魚", en: "Cooked Fish" }, facility_multiplier: 1, item_value: 9 },
        "meals_021": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_113", recipeLabel: { ja: "炊いた米", en: "Cooked Rice" }, facility_multiplier: 1, item_value: 24 },
        "meals_022": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_114", recipeLabel: { ja: "炊いた米", en: "Cooked Rice" }, facility_multiplier: 1, item_value: 24 },
        "meals_023": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_115", recipeLabel: { ja: "炊いた米", en: "Cooked Rice" }, facility_multiplier: 1, item_value: 24 },
        "meals_024": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_116", recipeLabel: { ja: "干し果実", en: "Dried Fruit" }, facility_multiplier: 1, item_value: 7 },
        "meals_025": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_117", recipeLabel: { ja: "干し果実", en: "Dried Fruit" }, facility_multiplier: 1, item_value: 7 },
        "meals_026": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_118", recipeLabel: { ja: "干し果実", en: "Dried Fruit" }, facility_multiplier: 1, item_value: 7 },
        "meals_027": { displayName: { ja: "囲炉裏の仕事場", en: "Sunken Hearth Workplace" }, recipe: "recipe_119", recipeLabel: { ja: "干し果実", en: "Dried Fruit" }, facility_multiplier: 1, item_value: 7 },
        "meals_028": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_120", recipeLabel: { ja: "蜂蜜漬け果実", en: "Honeyed Fruit" }, facility_multiplier: 1, item_value: 20 },
        "meals_029": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_121", recipeLabel: { ja: "蜂蜜漬け果実", en: "Honeyed Fruit" }, facility_multiplier: 1, item_value: 20 },
        "meals_030": { displayName: { ja: "猟師の仕事場", en: "Hunter's Workplace" }, recipe: "recipe_122", recipeLabel: { ja: "生肉", en: "Meat" }, facility_multiplier: 1, item_value: 5, tools: "any_knife" },
        "meals_031": { displayName: { ja: "猟師の仕事場", en: "Hunter's Workplace" }, recipe: "recipe_123", recipeLabel: { ja: "脂肪", en: "Fat" }, facility_multiplier: 1, item_value: 5, tools: "any_knife" },
        "meals_032": { displayName: { ja: "漁師の仕事場", en: "Fisherman's Workplace" }, recipe: "recipe_124", recipeLabel: { ja: "魚", en: "Fish" }, facility_multiplier: 1, item_value: 4, tools: "fishing_net" },
        "meals_033": { displayName: { ja: "基本の釣り場", en: "Basic Fishing Spot" }, recipe: "recipe_125", recipeLabel: { ja: "魚", en: "Fish" }, facility_multiplier: 1, item_value: 4, tools: "any_fishing_rod" },
        "meals_034": { displayName: { ja: "匠の釣り場", en: "Expert Fishing Spot" }, recipe: "recipe_126", recipeLabel: { ja: "魚", en: "Fish" }, facility_multiplier: 1, item_value: 4, tools: "any_fishing_rod" },
        "meals_035": { displayName: { ja: "高度な釣り場", en: "Advanced Fishing Spot" }, recipe: "recipe_127", recipeLabel: { ja: "魚", en: "Fish" }, facility_multiplier: 1, item_value: 4, tools: "any_fishing_rod" },
        "meals_036": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_128", recipeLabel: { ja: "調理した卵", en: "Cooked Egg" }, facility_multiplier: 1, item_value: 6 },
        "meals_037": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_129", recipeLabel: { ja: "調理した卵", en: "Cooked Egg" }, facility_multiplier: 1, item_value: 6 },
        "meals_038": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_130", recipeLabel: { ja: "調理した卵", en: "Cooked Egg" }, facility_multiplier: 1, item_value: 6 },
        "meals_039": { displayName: { ja: "囲炉裏の仕事場", en: "Sunken Hearth Workplace" }, recipe: "recipe_131", recipeLabel: { ja: "調理した卵", en: "Cooked Egg" }, facility_multiplier: 1, item_value: 6 },
        "meals_040": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_132", recipeLabel: { ja: "団子", en: "Dango" }, facility_multiplier: 1, item_value: 32 },
        "meals_041": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_133", recipeLabel: { ja: "団子", en: "Dango" }, facility_multiplier: 1, item_value: 32 },
        "meals_042": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_134", recipeLabel: { ja: "卵", en: "Egg" }, facility_multiplier: 1, item_value: 3 },
        "meals_043": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_135", recipeLabel: { ja: "お粥", en: "Kayu" }, facility_multiplier: 1, item_value: 27 },
        "meals_044": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_136", recipeLabel: { ja: "お粥", en: "Kayu" }, facility_multiplier: 1, item_value: 27 },
        "meals_045": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_137", recipeLabel: { ja: "果実汁", en: "Fruit Soup" }, facility_multiplier: 1, item_value: 25 },
        "meals_046": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_138", recipeLabel: { ja: "果実汁", en: "Fruit Soup" }, facility_multiplier: 1, item_value: 25 },
        "meals_047": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_139", recipeLabel: { ja: "野菜汁", en: "Vegetable Soup" }, facility_multiplier: 1, item_value: 30 },
        "meals_048": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_140", recipeLabel: { ja: "野菜汁", en: "Vegetable Soup" }, facility_multiplier: 1, item_value: 30 },
        "meals_049": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_141", recipeLabel: { ja: "亀汁", en: "Tortoise Soup" }, facility_multiplier: 1, item_value: 95 },
        "meals_050": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_142", recipeLabel: { ja: "亀汁", en: "Tortoise Soup" }, facility_multiplier: 1, item_value: 95 },
        "meals_051": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_143", recipeLabel: { ja: "味噌汁", en: "Miso Soup" }, facility_multiplier: 1, item_value: 55 },
        "meals_052": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_144", recipeLabel: { ja: "味噌汁", en: "Miso Soup" }, facility_multiplier: 1, item_value: 55 },
        "meals_053": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_145", recipeLabel: { ja: "味噌", en: "Miso" }, facility_multiplier: 1, item_value: 29 },
        "meals_054": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_146", recipeLabel: { ja: "具沢山味噌汁", en: "Miso Stew" }, facility_multiplier: 1, item_value: 90 },
        "meals_055": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_147", recipeLabel: { ja: "具沢山味噌汁", en: "Miso Stew" }, facility_multiplier: 1, item_value: 90 },
        "meals_056": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_148", recipeLabel: { ja: "鍋", en: "Nabe" }, facility_multiplier: 1, item_value: 95 },
        "meals_057": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_149", recipeLabel: { ja: "鍋", en: "Nabe" }, facility_multiplier: 1, item_value: 95 },
        "meals_058": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_150", recipeLabel: { ja: "質素な魚料理(魚1+豆全般5)", en: "Simple Fish Meal (Fish x1 + Any Beans x5)" }, facility_multiplier: 1, item_value: 26 },
        "meals_059": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_151", recipeLabel: { ja: "質素な魚料理(魚1+豆全般5)", en: "Simple Fish Meal (Fish x1 + Any Beans x5)" }, facility_multiplier: 1, item_value: 26 },
        "meals_060": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_152", recipeLabel: { ja: "質素な魚料理(魚1+豆全般5)", en: "Simple Fish Meal (Fish x1 + Any Beans x5)" }, facility_multiplier: 1, item_value: 26 },
        "meals_061": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_153", recipeLabel: { ja: "質素な魚料理(魚1+食用キノコ全般1)", en: "Simple Fish Meal (Fish x1 + Any Edible Mushroom x1)" }, facility_multiplier: 1, item_value: 26 },
        "meals_062": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_154", recipeLabel: { ja: "質素な魚料理(魚1+食用キノコ全般1)", en: "Simple Fish Meal (Fish x1 + Any Edible Mushroom x1)" }, facility_multiplier: 1, item_value: 26 },
        "meals_063": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_155", recipeLabel: { ja: "質素な魚料理(魚1+食用キノコ全般1)", en: "Simple Fish Meal (Fish x1 + Any Edible Mushroom x1)" }, facility_multiplier: 1, item_value: 26 },
        "meals_064": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_156", recipeLabel: { ja: "きちんとした魚料理(魚2+薬草全般3+穀物全般1)", en: "Solid Fish Meal (Fish x2 + Any Herbs x3 + Any Cereal x1)" }, facility_multiplier: 1, item_value: 51 },
        "meals_065": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_157", recipeLabel: { ja: "きちんとした魚料理(魚2+薬草全般3+穀物全般1)", en: "Solid Fish Meal (Fish x2 + Any Herbs x3 + Any Cereal x1)" }, facility_multiplier: 1, item_value: 51 },
        "meals_066": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_158", recipeLabel: { ja: "きちんとした魚料理(魚2+薬草全般3+穀物全般1)", en: "Solid Fish Meal (Fish x2 + Any Herbs x3 + Any Cereal x1)" }, facility_multiplier: 1, item_value: 51 },
        "meals_067": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_159", recipeLabel: { ja: "きちんとした魚料理(魚1+薬草全般4+食用キノコ全般1)", en: "Solid Fish Meal (Fish x1 + Any Herbs x4 + Any Edible Mushroom x1)" }, facility_multiplier: 1, item_value: 51 },
        "meals_068": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_160", recipeLabel: { ja: "きちんとした魚料理(魚1+薬草全般4+食用キノコ全般1)", en: "Solid Fish Meal (Fish x1 + Any Herbs x4 + Any Edible Mushroom x1)" }, facility_multiplier: 1, item_value: 51 },
        "meals_069": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_161", recipeLabel: { ja: "きちんとした魚料理(魚1+薬草全般4+食用キノコ全般1)", en: "Solid Fish Meal (Fish x1 + Any Herbs x4 + Any Edible Mushroom x1)" }, facility_multiplier: 1, item_value: 51 },
        "meals_070": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_162", recipeLabel: { ja: "豪華な魚料理(魚1+穀物全般5+豆全般10)", en: "Excellent Fish Meal (Fish x1 + Any Cereal x5 + Any Beans x10)" }, facility_multiplier: 1, item_value: 70 },
        "meals_071": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_163", recipeLabel: { ja: "豪華な魚料理(魚2+お米7+薬草全般2)", en: "Excellent Fish Meal (Fish x2 + Rice x7 + Any Herbs x2)" }, facility_multiplier: 1, item_value: 70 },
        "meals_072": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_164", recipeLabel: { ja: "なれずし", en: "Narezushi" }, facility_multiplier: 1, item_value: 54 },
        "meals_073": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_165", recipeLabel: { ja: "なれずし", en: "Narezushi" }, facility_multiplier: 1, item_value: 54 },
        "meals_074": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_166", recipeLabel: { ja: "質素な肉料理(肉1+穀物全般6)", en: "Simple Meat Meal (Meat x1 + Any Cereal x6)" }, facility_multiplier: 1, item_value: 25 },
        "meals_075": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_167", recipeLabel: { ja: "質素な肉料理(肉1+穀物全般6)", en: "Simple Meat Meal (Meat x1 + Any Cereal x6)" }, facility_multiplier: 1, item_value: 25 },
        "meals_076": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_168", recipeLabel: { ja: "質素な肉料理(肉1+穀物全般6)", en: "Simple Meat Meal (Meat x1 + Any Cereal x6)" }, facility_multiplier: 1, item_value: 25 },
        "meals_077": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_169", recipeLabel: { ja: "質素な肉料理(肉1+食用キノコ全般1)", en: "Simple Meat Meal (Meat x1 + Any Edible Mushroom x1)" }, facility_multiplier: 1, item_value: 25 },
        "meals_078": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_170", recipeLabel: { ja: "質素な肉料理(肉1+食用キノコ全般1)", en: "Simple Meat Meal (Meat x1 + Any Edible Mushroom x1)" }, facility_multiplier: 1, item_value: 25 },
        "meals_079": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_171", recipeLabel: { ja: "質素な肉料理(肉1+食用キノコ全般1)", en: "Simple Meat Meal (Meat x1 + Any Edible Mushroom x1)" }, facility_multiplier: 1, item_value: 25 },
        "meals_080": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_172", recipeLabel: { ja: "質素な肉料理(肉1+豆全般5)", en: "Simple Meat Meal (Meat x1 + Any Beans x5)" }, facility_multiplier: 1, item_value: 25 },
        "meals_081": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_173", recipeLabel: { ja: "質素な肉料理(肉1+豆全般5)", en: "Simple Meat Meal (Meat x1 + Any Beans x5)" }, facility_multiplier: 1, item_value: 25 },
        "meals_082": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_174", recipeLabel: { ja: "質素な肉料理(肉1+豆全般5)", en: "Simple Meat Meal (Meat x1 + Any Beans x5)" }, facility_multiplier: 1, item_value: 25 },
        "meals_083": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_175", recipeLabel: { ja: "きちんとした肉料理(肉1+卵1+豆全般6)", en: "Solid Meat Meal (Meat x1 + Egg x1 + Any Beans x6)" }, facility_multiplier: 1, item_value: 52 },
        "meals_084": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_176", recipeLabel: { ja: "きちんとした肉料理(肉1+卵1+豆全般6)", en: "Solid Meat Meal (Meat x1 + Egg x1 + Any Beans x6)" }, facility_multiplier: 1, item_value: 52 },
        "meals_085": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_177", recipeLabel: { ja: "きちんとした肉料理(肉1+卵1+豆全般6)", en: "Solid Meat Meal (Meat x1 + Egg x1 + Any Beans x6)" }, facility_multiplier: 1, item_value: 52 },
        "meals_086": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_178", recipeLabel: { ja: "きちんとした肉料理(肉2+薬草全般2+穀物全般1)", en: "Solid Meat Meal (Meat x2 + Any Herbs x2 + Any Cereal x1)" }, facility_multiplier: 1, item_value: 52 },
        "meals_087": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_179", recipeLabel: { ja: "きちんとした肉料理(肉2+薬草全般2+穀物全般1)", en: "Solid Meat Meal (Meat x2 + Any Herbs x2 + Any Cereal x1)" }, facility_multiplier: 1, item_value: 52 },
        "meals_088": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_180", recipeLabel: { ja: "きちんとした肉料理(肉2+薬草全般2+穀物全般1)", en: "Solid Meat Meal (Meat x2 + Any Herbs x2 + Any Cereal x1)" }, facility_multiplier: 1, item_value: 52 },
        "meals_089": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_181", recipeLabel: { ja: "きちんとした肉料理(肉1+薬草全般4+食用キノコ全般6)", en: "Solid Meat Meal (Meat x1 + Any Herbs x4 + Any Edible Mushroom x6)" }, facility_multiplier: 1, item_value: 52 },
        "meals_090": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_182", recipeLabel: { ja: "きちんとした肉料理(肉1+薬草全般4+食用キノコ全般6)", en: "Solid Meat Meal (Meat x1 + Any Herbs x4 + Any Edible Mushroom x6)" }, facility_multiplier: 1, item_value: 52 },
        "meals_091": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_183", recipeLabel: { ja: "きちんとした肉料理(肉1+薬草全般4+食用キノコ全般6)", en: "Solid Meat Meal (Meat x1 + Any Herbs x4 + Any Edible Mushroom x6)" }, facility_multiplier: 1, item_value: 52 },
        "meals_092": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_184", recipeLabel: { ja: "豪華な肉料理(肉2+穀物全般4+豆全般4)", en: "Excellent Meat Meal (Meat x2 + Any Cereal x4 + Any Beans x4)" }, facility_multiplier: 1, item_value: 72 },
        "meals_093": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_185", recipeLabel: { ja: "豪華な肉料理(肉2+お米5+薬草全般3)", en: "Excellent Meat Meal (Meat x2 + Rice x5 + Any Herbs x3)" }, facility_multiplier: 1, item_value: 72 },
        "meals_094": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_186", recipeLabel: { ja: "豪華な肉料理(肉1+お米4+食用キノコ全般2)", en: "Excellent Meat Meal (Meat x1 + Rice x4 + Any Edible Mushroom x2)" }, facility_multiplier: 1, item_value: 72 },
        "meals_095": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_187", recipeLabel: { ja: "焼き鳥", en: "Yakitori" }, facility_multiplier: 1, item_value: 61 },
        "meals_096": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_188", recipeLabel: { ja: "質素な野菜料理(野菜全般5+豆全般3)", en: "Simple Vegetable Meal (Any Vegetable x5 + Any Beans x3)" }, facility_multiplier: 1, item_value: 25 },
        "meals_097": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_189", recipeLabel: { ja: "質素な野菜料理(野菜全般5+薬草全般3)", en: "Simple Vegetable Meal (Any Vegetable x5 + Any Herbs x3)" }, facility_multiplier: 1, item_value: 25 },
        "meals_098": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_190", recipeLabel: { ja: "質素な野菜料理(野菜全般4+食用キノコ全般1)", en: "Simple Vegetable Meal (Any Vegetable x4 + Any Edible Mushroom x1)" }, facility_multiplier: 1, item_value: 25 },
        "meals_099": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_191", recipeLabel: { ja: "きちんとした野菜料理(大豆10+麹2)", en: "Solid Vegetable Meal (Soybean x10 + Koji x2)" }, facility_multiplier: 1, item_value: 50 },
        "meals_100": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_192", recipeLabel: { ja: "きちんとした野菜料理(水1+穀物全般6+果実全般3)", en: "Solid Vegetable Meal (Water x1 + Any Cereal x6 + Any Fruits x3)" }, facility_multiplier: 1, item_value: 50 },
        "meals_101": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_193", recipeLabel: { ja: "きちんとした野菜料理(水1+豆全般6+薬草全般3)", en: "Solid Vegetable Meal (Water x1 + Any Beans x6 + Any Herbs x3)" }, facility_multiplier: 1, item_value: 50 },
        "meals_102": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_194", recipeLabel: { ja: "豪華な野菜料理(穀物全般7+油1+水1+サトイモ8)", en: "Excellent Vegetable Meal (Any Cereal x7 + Oil x1 + Water x1 + Taro x8)" }, facility_multiplier: 1, item_value: 71 },
        "meals_103": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_195", recipeLabel: { ja: "豪華な野菜料理(お米12+しいたけ2+ネギ5+油1)", en: "Excellent Vegetable Meal (Rice x12 + Shiitake x2 + Leek x5 + Oil x1)" }, facility_multiplier: 1, item_value: 71 },
        "meals_104": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_196", recipeLabel: { ja: "豪華な野菜料理(小麦7+野菜全般8+わさび3+油1)", en: "Excellent Vegetable Meal (Wheat x7 + Any Vegetable x8 + Wasabi x3 + Oil x1)" }, facility_multiplier: 1, item_value: 71 },
        "meals_105": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_197", recipeLabel: { ja: "豆腐", en: "Tofu" }, facility_multiplier: 1, item_value: 28 },
        "meals_106": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_198", recipeLabel: { ja: "田楽", en: "Dengaku" }, facility_multiplier: 1, item_value: 60 },
        "meals_107": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_199", recipeLabel: { ja: "田楽", en: "Dengaku" }, facility_multiplier: 1, item_value: 60 },
        "meals_108": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_200", recipeLabel: { ja: "焼き鳥", en: "Yakitori" }, facility_multiplier: 1, item_value: 61 },
        "meals_109": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_201", recipeLabel: { ja: "味噌", en: "Miso" }, facility_multiplier: 1, item_value: 29 },
        "meals_110": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_202", recipeLabel: { ja: "豆腐", en: "Tofu" }, facility_multiplier: 1, item_value: 28 },
        "meals_111": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_203", recipeLabel: { ja: "質素な野菜料理(野菜全般5+豆全般3)", en: "Simple Vegetable Meal (Any Vegetable x5 + Any Beans x3)" }, facility_multiplier: 1, item_value: 25 },
        "meals_112": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_204", recipeLabel: { ja: "質素な野菜料理(野菜全般5+豆全般3)", en: "Simple Vegetable Meal (Any Vegetable x5 + Any Beans x3)" }, facility_multiplier: 1, item_value: 25 },
        "meals_113": { displayName: { ja: "囲炉裏の仕事場", en: "Sunken Hearth Workplace" }, recipe: "recipe_205", recipeLabel: { ja: "質素な野菜料理(野菜全般5+豆全般3)", en: "Simple Vegetable Meal (Any Vegetable x5 + Any Beans x3)" }, facility_multiplier: 1, item_value: 25 },
        "meals_114": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_206", recipeLabel: { ja: "質素な野菜料理(野菜全般5+薬草全般3)", en: "Simple Vegetable Meal (Any Vegetable x5 + Any Herbs x3)" }, facility_multiplier: 1, item_value: 25 },
        "meals_115": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_207", recipeLabel: { ja: "質素な野菜料理(野菜全般5+薬草全般3)", en: "Simple Vegetable Meal (Any Vegetable x5 + Any Herbs x3)" }, facility_multiplier: 1, item_value: 25 },
        "meals_116": { displayName: { ja: "囲炉裏の仕事場", en: "Sunken Hearth Workplace" }, recipe: "recipe_208", recipeLabel: { ja: "質素な野菜料理(野菜全般5+薬草全般3)", en: "Simple Vegetable Meal (Any Vegetable x5 + Any Herbs x3)" }, facility_multiplier: 1, item_value: 25 },
        "meals_117": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_209", recipeLabel: { ja: "質素な野菜料理(野菜全般4+食用キノコ全般1)", en: "Simple Vegetable Meal (Any Vegetable x4 + Any Edible Mushroom x1)" }, facility_multiplier: 1, item_value: 25 },
        "meals_118": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_210", recipeLabel: { ja: "質素な野菜料理(野菜全般4+食用キノコ全般1)", en: "Simple Vegetable Meal (Any Vegetable x4 + Any Edible Mushroom x1)" }, facility_multiplier: 1, item_value: 25 },
        "meals_119": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_211", recipeLabel: { ja: "きちんとした野菜料理(大豆10+麹2)", en: "Solid Vegetable Meal (Soybean x10 + Koji x2)" }, facility_multiplier: 1, item_value: 50 },
        "meals_120": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_212", recipeLabel: { ja: "きちんとした野菜料理(大豆10+麹2)", en: "Solid Vegetable Meal (Soybean x10 + Koji x2)" }, facility_multiplier: 1, item_value: 50 },
        "meals_121": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_213", recipeLabel: { ja: "きちんとした野菜料理(水1+穀物全般6+果実全般3)", en: "Solid Vegetable Meal (Water x1 + Any Cereal x6 + Any Fruits x3)" }, facility_multiplier: 1, item_value: 50 },
        "meals_122": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_214", recipeLabel: { ja: "きちんとした野菜料理(水1+穀物全般6+果実全般3)", en: "Solid Vegetable Meal (Water x1 + Any Cereal x6 + Any Fruits x3)" }, facility_multiplier: 1, item_value: 50 },
        "meals_123": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_215", recipeLabel: { ja: "きちんとした野菜料理(水1+豆全般6+薬草全般3)", en: "Solid Vegetable Meal (Water x1 + Any Beans x6 + Any Herbs x3)" }, facility_multiplier: 1, item_value: 50 },
        "meals_124": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_216", recipeLabel: { ja: "きちんとした野菜料理(水1+豆全般6+薬草全般3)", en: "Solid Vegetable Meal (Water x1 + Any Beans x6 + Any Herbs x3)" }, facility_multiplier: 1, item_value: 50 },
        "meals_125": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_217", recipeLabel: { ja: "団子", en: "Dango" }, facility_multiplier: 1, item_value: 32 },
        "meals_126": { displayName: { ja: "囲炉裏の仕事場", en: "Sunken Hearth Workplace" }, recipe: "recipe_218", recipeLabel: { ja: "団子", en: "Dango" }, facility_multiplier: 1, item_value: 32 },
        "meals_127": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_219", recipeLabel: { ja: "調理した肉", en: "Cooked Meat" }, facility_multiplier: 1, item_value: 11 },
        "meals_128": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_220", recipeLabel: { ja: "調理した肉", en: "Cooked Meat" }, facility_multiplier: 1, item_value: 11 },
        "meals_129": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_221", recipeLabel: { ja: "調理した肉", en: "Cooked Meat" }, facility_multiplier: 1, item_value: 11 },
        "meals_130": { displayName: { ja: "囲炉裏の仕事場", en: "Sunken Hearth Workplace" }, recipe: "recipe_222", recipeLabel: { ja: "調理した肉", en: "Cooked Meat" }, facility_multiplier: 1, item_value: 11 },
        "meals_131": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_223", recipeLabel: { ja: "柚子の果実", en: "Yuzu Fruit" }, facility_multiplier: 1, item_value: 4 },
        "meals_132": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_224", recipeLabel: { ja: "ゴボウ", en: "Gobo" }, facility_multiplier: 1, item_value: 2 },
        "meals_133": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_225", recipeLabel: { ja: "えのき", en: "Enoki Mushroom" }, facility_multiplier: 1, item_value: 4 },
        "meals_134": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_226", recipeLabel: { ja: "舞茸", en: "Maitake Mushroom" }, facility_multiplier: 1, item_value: 4 },
        "meals_135": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_227", recipeLabel: { ja: "松茸", en: "Matsutake Mushroom" }, facility_multiplier: 1, item_value: 4 },
        "meals_136": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_228", recipeLabel: { ja: "しいたけ", en: "Shitake Mushroom" }, facility_multiplier: 1, item_value: 4 },
        "meals_137": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_229", recipeLabel: { ja: "ヒョウタンノキの実", en: "Raw Calabash Fruit" }, facility_multiplier: 1, item_value: 4 },
        "meals_138": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_230", recipeLabel: { ja: "わさび", en: "Wasabi" }, facility_multiplier: 1, item_value: 1 },
        "meals_139": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_231", recipeLabel: { ja: "ニンニク", en: "Garlic" }, facility_multiplier: 1, item_value: 1 },
        "meals_140": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_232", recipeLabel: { ja: "三つ葉", en: "Parsley" }, facility_multiplier: 1, item_value: 2 },
        "meals_141": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_233", recipeLabel: { ja: "木苺", en: "Wineberry" }, facility_multiplier: 1, item_value: 2 },
        "meals_142": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_234", recipeLabel: { ja: "コケモモ", en: "Lingonberries" }, facility_multiplier: 1, item_value: 2 },
        "meals_143": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_235", recipeLabel: { ja: "プラム", en: "Plum" }, facility_multiplier: 1, item_value: 3 },
        "meals_144": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_236", recipeLabel: { ja: "兵糧丸", en: "Provision Balls (Hyōrōgan)" }, facility_multiplier: 3, item_value: 35 },
        "meals_145": { displayName: { ja: "小さな蜜蜂の巣箱", en: "Small Beehive" }, recipe: "recipe_237", recipeLabel: { ja: "蜂蜜", en: "Honey" }, facility_multiplier: 1, item_value: 4 },
        "meals_146": { displayName: { ja: "大きな蜜蜂の巣箱", en: "Large Beehive" }, recipe: "recipe_238", recipeLabel: { ja: "蜂蜜", en: "Honey" }, facility_multiplier: 1, item_value: 4 }
      }
    },
    "security": {
      facilities: {
        "security_001": { displayName: { ja: "地侍のやぐら", en: "Jizamurai Post" }, recipe: "recipe_001", recipeLabel: { ja: "近接武器", en: "Melee Weapon" }, facility_multiplier: 50, item_value: 1, tools: "any_melee_weapon" },
        "security_002": { displayName: { ja: "地侍のやぐら", en: "Jizamurai Post" }, recipe: "recipe_002", recipeLabel: { ja: "遠距離武器", en: "Ranged Weapon" }, facility_multiplier: 50, item_value: 1, tools: "any_bow" },
        "security_003": { displayName: { ja: "小さなやぐら", en: "Guard Post" }, recipe: "recipe_001", recipeLabel: { ja: "近接武器", en: "Melee Weapon" }, facility_multiplier: 30, item_value: 1, tools: "any_melee_weapon" },
        "security_004": { displayName: { ja: "小さなやぐら", en: "Guard Post" }, recipe: "recipe_002", recipeLabel: { ja: "遠距離武器", en: "Ranged Weapon" }, facility_multiplier: 30, item_value: 1, tools: "any_bow" },
        "security_005": { displayName: { ja: "猟師の小さなやぐら", en: "Hunter-Guard Post" }, recipe: "recipe_001", recipeLabel: { ja: "近接武器", en: "Melee Weapon" }, facility_multiplier: 40, item_value: 1, tools: "any_melee_weapon" },
        "security_006": { displayName: { ja: "猟師の小さなやぐら", en: "Hunter-Guard Post" }, recipe: "recipe_002", recipeLabel: { ja: "遠距離武器", en: "Ranged Weapon" }, facility_multiplier: 40, item_value: 1, tools: "any_bow" },
        "security_007": { displayName: { ja: "特殊建造物「物見やぐら」", en: "Watchtower Special Project" }, recipe: "recipe_003", recipeLabel: { ja: "衛兵", en: "Guard" }, facility_multiplier: 1, item_value: 1, tools: "any_weapon" },
        "security_008": { displayName: { ja: "特殊建造物「灯台」", en: "Lighthouse Special Project" }, recipe: "recipe_004", recipeLabel: { ja: "灯籠夫", en: "Lamplighter" }, facility_multiplier: 20, item_value: 1 }
      }
    },
    "heating": {
      facilities: {
        "heating_001": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_005", recipeLabel: { ja: "油(魚)", en: "Oil (Fish)" }, facility_multiplier: 1, item_value: 45 },
        "heating_002": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_006", recipeLabel: { ja: "油(魚)", en: "Oil (Fish)" }, facility_multiplier: 1, item_value: 45 },
        "heating_003": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_007", recipeLabel: { ja: "油(魚)", en: "Oil (Fish)" }, facility_multiplier: 1, item_value: 45 },
        "heating_004": { displayName: { ja: "搾油", en: "Oil Press" }, recipe: "recipe_008", recipeLabel: { ja: "油", en: "Oil" }, facility_multiplier: 1, item_value: 45 },
        "heating_005": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_009", recipeLabel: { ja: "枝", en: "Stick" }, facility_multiplier: 1, item_value: 1 },
        "heating_006": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_010", recipeLabel: { ja: "樹皮", en: "Bark" }, facility_multiplier: 1, item_value: 1 },
        "heating_007": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_011", recipeLabel: { ja: "梶の樹皮", en: "Paper Bark" }, facility_multiplier: 1, item_value: 1 },
        "heating_008": { displayName: { ja: "炭窯", en: "Charcoal Kiln" }, recipe: "recipe_014", recipeLabel: { ja: "木炭", en: "Charcoal" }, facility_multiplier: 2, item_value: 12 },
        "heating_009": { displayName: { ja: "大工作業台", en: "Carpentry Station" }, recipe: "recipe_012", recipeLabel: { ja: "薪", en: "Firewood" }, facility_multiplier: 8, item_value: 5, tools: "any_axe" },
        "heating_010": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_013", recipeLabel: { ja: "蓑", en: "Straw Cloak" }, facility_multiplier: 1, item_value: 140 }
      }
    },
    "spiritual": {
      facilities: {
        "spiritual_001": { displayName: { ja: "僧院の鐘楼", en: "Monastery Belfry" }, recipe: "recipe_015", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_002": { displayName: { ja: "僧院の手水舎", en: "Monastery Chōzuya" }, recipe: "recipe_016", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 6, item_value: 1 },
        "spiritual_003": { displayName: { ja: "小さな天照神社", en: "Small Amaterasu Shrine" }, recipe: "recipe_017", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_004": { displayName: { ja: "天照神社", en: "Medium Amaterasu Shrine" }, recipe: "recipe_018", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_005": { displayName: { ja: "大きな天照神社", en: "Large Amaterasu Shrine" }, recipe: "recipe_019", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_006": { displayName: { ja: "小さな恵比寿神社", en: "Small Ebisu Shrine" }, recipe: "recipe_017", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_007": { displayName: { ja: "恵比寿神社", en: "Medium Ebisu Shrine" }, recipe: "recipe_018", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_008": { displayName: { ja: "大きな恵比寿神社", en: "Large Ebisu Shrine" }, recipe: "recipe_019", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_009": { displayName: { ja: "小さな稲荷神社", en: "Small Inari Shrine" }, recipe: "recipe_017", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_010": { displayName: { ja: "稲荷神社", en: "Medium Inari Shrine" }, recipe: "recipe_018", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_011": { displayName: { ja: "大きな稲荷神社", en: "Large Inari Shrine" }, recipe: "recipe_019", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_012": { displayName: { ja: "小さな地蔵神社", en: "Small Jizō Shrine" }, recipe: "recipe_017", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_013": { displayName: { ja: "地蔵神社", en: "Medium Jizō Shrine" }, recipe: "recipe_018", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_014": { displayName: { ja: "大きな地蔵神社", en: "Large Jizō Shrine" }, recipe: "recipe_019", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_015": { displayName: { ja: "小さな観音神社", en: "Small Kannon Shrine" }, recipe: "recipe_017", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_016": { displayName: { ja: "観音神社", en: "Medium Kannon Shrine" }, recipe: "recipe_018", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_017": { displayName: { ja: "大きな観音神社", en: "Large Kannon Shrine" }, recipe: "recipe_019", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_018": { displayName: { ja: "小さな龍神社", en: "Small Ryūjin Shrine" }, recipe: "recipe_017", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_019": { displayName: { ja: "龍神社", en: "Medium Ryūjin Shrine" }, recipe: "recipe_018", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_020": { displayName: { ja: "大きな龍神社", en: "Large Ryūjin Shrine" }, recipe: "recipe_019", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_021": { displayName: { ja: "小さな天神社", en: "Small Tenjin Shrine" }, recipe: "recipe_017", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_022": { displayName: { ja: "天神社", en: "Medium Tenjin Shrine" }, recipe: "recipe_018", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_023": { displayName: { ja: "大きな天神社", en: "Large Tenjin Shrine" }, recipe: "recipe_019", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_024": { displayName: { ja: "小さな八幡神社", en: "Small Hachiman Shrine" }, recipe: "recipe_017", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_025": { displayName: { ja: "八幡神社", en: "Medium Hachiman Shrine" }, recipe: "recipe_018", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_026": { displayName: { ja: "大きな八幡神社", en: "Large Hachiman Shrine" }, recipe: "recipe_019", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 50, item_value: 1 },
        "spiritual_027": { displayName: { ja: "金敷", en: "Blacksmith Anvil" }, recipe: "recipe_020", recipeLabel: { ja: "小さな銅鑼", en: "Small Gong" }, facility_multiplier: 2, item_value: 95, tools: "any_hammer" },
        "spiritual_028": { displayName: { ja: "金敷", en: "Blacksmith Anvil" }, recipe: "recipe_021", recipeLabel: { ja: "鈴", en: "Standing Bell" }, facility_multiplier: 1, item_value: 425, tools: "any_hammer" },
        "spiritual_029": { displayName: { ja: "金敷", en: "Blacksmith Anvil" }, recipe: "recipe_022", recipeLabel: { ja: "儀式の鐘", en: "Ritual Bell" }, facility_multiplier: 1, item_value: 80, tools: "any_hammer" },
        "spiritual_030": { displayName: { ja: "金敷", en: "Blacksmith Anvil" }, recipe: "recipe_023", recipeLabel: { ja: "青銅の灯篭", en: "Bronze Lantern" }, facility_multiplier: 1, item_value: 350, tools: "any_hammer" },
        "spiritual_031": { displayName: { ja: "石工所", en: "Stonemason Station" }, recipe: "recipe_024", recipeLabel: { ja: "天照大御神の像", en: "Amaterasu Statue" }, facility_multiplier: 1, item_value: 110, tools: "carving_knife" },
        "spiritual_032": { displayName: { ja: "石工所", en: "Stonemason Station" }, recipe: "recipe_025", recipeLabel: { ja: "稲荷像", en: "Inari Statue" }, facility_multiplier: 1, item_value: 110, tools: "carving_knife" },
        "spiritual_033": { displayName: { ja: "石工所", en: "Stonemason Station" }, recipe: "recipe_026", recipeLabel: { ja: "地蔵像", en: "Jizō Statue" }, facility_multiplier: 1, item_value: 110, tools: "carving_knife" },
        "spiritual_034": { displayName: { ja: "石工所", en: "Stonemason Station" }, recipe: "recipe_027", recipeLabel: { ja: "観音像", en: "Kannon Statue" }, facility_multiplier: 1, item_value: 110, tools: "carving_knife" },
        "spiritual_035": { displayName: { ja: "石工所", en: "Stonemason Station" }, recipe: "recipe_028", recipeLabel: { ja: "龍神像", en: "Ryūjin Statue" }, facility_multiplier: 1, item_value: 110, tools: "carving_knife" },
        "spiritual_036": { displayName: { ja: "石工所", en: "Stonemason Station" }, recipe: "recipe_029", recipeLabel: { ja: "恵比寿像", en: "Ebisu Statue" }, facility_multiplier: 1, item_value: 110, tools: "carving_knife" },
        "spiritual_037": { displayName: { ja: "石工所", en: "Stonemason Station" }, recipe: "recipe_030", recipeLabel: { ja: "天神像", en: "Tenjin Statue" }, facility_multiplier: 1, item_value: 110, tools: "carving_knife" },
        "spiritual_038": { displayName: { ja: "石工所", en: "Stonemason Station" }, recipe: "recipe_031", recipeLabel: { ja: "八幡像", en: "Hachiman Statue" }, facility_multiplier: 1, item_value: 110, tools: "carving_knife" },
        "spiritual_039": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_032", recipeLabel: { ja: "木製の数珠", en: "Wooden Prayer Beads" }, facility_multiplier: 1, item_value: 8 },
        "spiritual_040": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_033", recipeLabel: { ja: "真珠の数珠", en: "Pearl Prayer Beads" }, facility_multiplier: 1, item_value: 500 },
        "spiritual_041": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_034", recipeLabel: { ja: "貝殻の数珠", en: "Seashell Prayer Beads" }, facility_multiplier: 1, item_value: 40 },
        "spiritual_042": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_035", recipeLabel: { ja: "仏舎利塔のミニチュア", en: "Miniature Stupa" }, facility_multiplier: 1, item_value: 60, tools: "carving_knife" },
        "spiritual_043": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_036", recipeLabel: { ja: "玉串", en: "Tamagushi" }, facility_multiplier: 1, item_value: 10 },
        "spiritual_044": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_037", recipeLabel: { ja: "笛", en: "Flute" }, facility_multiplier: 1, item_value: 60, tools: "carving_knife" },
        "spiritual_045": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_038", recipeLabel: { ja: "小さな御幣", en: "Small Gohei Wand" }, facility_multiplier: 3, item_value: 12 },
        "spiritual_046": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_039", recipeLabel: { ja: "僧の服", en: "Monk Clothes" }, facility_multiplier: 1, item_value: 260, tools: "any_knife" },
        "spiritual_047": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_040", recipeLabel: { ja: "僧の被り物", en: "Monk Hat" }, facility_multiplier: 1, item_value: 300 },
        "spiritual_048": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_041", recipeLabel: { ja: "天蓋", en: "Tengai Hat" }, facility_multiplier: 1, item_value: 325 },
        "spiritual_049": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_042", recipeLabel: { ja: "神主の装束", en: "Shrine Priest Attire" }, facility_multiplier: 1, item_value: 375, tools: "any_knife" },
        "spiritual_050": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_043", recipeLabel: { ja: "冠", en: "Kanmuri" }, facility_multiplier: 1, item_value: 400, tools: "any_knife" },
        "spiritual_051": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_044", recipeLabel: { ja: "僧兵の服", en: "Warrior Monk Clothes" }, facility_multiplier: 1, item_value: 350, tools: "any_knife" }
      }
    },
    "health": {
      facilities: {
        "health_001": { displayName: { ja: "僧院の手水舎", en: "Monastery Chōzuya" }, recipe: "recipe_016", recipeLabel: { ja: "神主", en: "Shrine Priest" }, facility_multiplier: 6, item_value: 1 },
        "health_002": { displayName: { ja: "酒場", en: "Tavern" }, recipe: "recipe_045", recipeLabel: { ja: "酒場の主人(水x2)", en: "Tavern Keeper (Water x2)" }, facility_multiplier: 6, item_value: 1 },
        "health_003": { displayName: { ja: "酒場", en: "Tavern" }, recipe: "recipe_046", recipeLabel: { ja: "酒場の主人(水x1+アルコールを含まない飲料全般x1)", en: "Tavern Keeper (Water x1 + Any Non-alcoholic Beverage x1)" }, facility_multiplier: 6, item_value: 1 },
        "health_004": { displayName: { ja: "酒場", en: "Tavern" }, recipe: "recipe_047", recipeLabel: { ja: "酒場の主人(水x1+アルコール飲料全般x1)", en: "Tavern Keeper (Water x1 + Any Alcoholic Beverage x1)" }, facility_multiplier: 4, item_value: 1 },
        "health_005": { displayName: { ja: "採集者の仕事場", en: "Forager's Workplace" }, recipe: "recipe_048", recipeLabel: { ja: "菊の花", en: "Yellow Chrysanthemum" }, facility_multiplier: 1, item_value: 1 },
        "health_006": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_049", recipeLabel: { ja: "治癒の飲料", en: "Healing Brew" }, facility_multiplier: 1, item_value: 15 },
        "health_007": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_050", recipeLabel: { ja: "治癒の包帯", en: "Healing Compress" }, facility_multiplier: 1, item_value: 50 },
        "health_008": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_051", recipeLabel: { ja: "治癒の軟膏", en: "Healing Balm" }, facility_multiplier: 1, item_value: 90 },
        "health_009": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_052", recipeLabel: { ja: "火傷軟膏", en: "Burn Ointment" }, facility_multiplier: 1, item_value: 30 },
        "health_010": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_053", recipeLabel: { ja: "温かい飲み物", en: "Warming Drink" }, facility_multiplier: 1, item_value: 12 },
        "health_011": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_054", recipeLabel: { ja: "風邪薬", en: "Sickness Medicine" }, facility_multiplier: 1, item_value: 25 },
        "health_012": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_055", recipeLabel: { ja: "栄養剤", en: "Energy Drink" }, facility_multiplier: 1, item_value: 43 },
        "health_013": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_056", recipeLabel: { ja: "蚊よけ", en: "Mosquito Repellent" }, facility_multiplier: 1, item_value: 60 },
        "health_014": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_057", recipeLabel: { ja: "冷たい飲み物", en: "Cooling Drink" }, facility_multiplier: 1, item_value: 40 },
        "health_015": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_058", recipeLabel: { ja: "痛み止め", en: "Anesthetic" }, facility_multiplier: 1, item_value: 125 },
        "health_016": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_059", recipeLabel: { ja: "対毒調合薬", en: "Anti-Poison Concoction" }, facility_multiplier: 1, item_value: 175 },
        "health_017": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_060", recipeLabel: { ja: "解毒薬", en: "Antidote" }, facility_multiplier: 1, item_value: 235 },
        "health_018": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_061", recipeLabel: { ja: "マラリア治療薬", en: "Malaria Medicine" }, facility_multiplier: 1, item_value: 260 },
        "health_019": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_062", recipeLabel: { ja: "果実の抽出液", en: "Fruit Infusion" }, facility_multiplier: 1, item_value: 30 },
        "health_020": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_063", recipeLabel: { ja: "プラムの抽出液", en: "Plum Infusion" }, facility_multiplier: 1, item_value: 50 },
        "health_021": { displayName: { ja: "調薬台", en: "Herbalist Station" }, recipe: "recipe_064", recipeLabel: { ja: "柚子の抽出液", en: "Yuzu Infusion" }, facility_multiplier: 1, item_value: 50 }
      }
    },
    "beverages": {
      facilities: {
        "beverages_001": { displayName: { ja: "シンプルな井戸", en: "Simple Well" }, recipe: "recipe_065", recipeLabel: { ja: "水", en: "Water" }, facility_multiplier: 1, item_value: 4, tools: "bucket" },
        "beverages_002": { displayName: { ja: "上級井戸", en: "Advanced Well" }, recipe: "recipe_066", recipeLabel: { ja: "水", en: "Water" }, facility_multiplier: 1, item_value: 4, tools: "bucket" },
        "beverages_003": { displayName: { ja: "大きな井戸", en: "Large Well" }, recipe: "recipe_067", recipeLabel: { ja: "水", en: "Water" }, facility_multiplier: 1, item_value: 4, tools: "bucket" },
        "beverages_004": { displayName: { ja: "茶室", en: "Tea House" }, recipe: "recipe_068", recipeLabel: { ja: "茶会", en: "Tea Ceremony" }, facility_multiplier: 1, item_value: 10 },
        "beverages_005": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_069", recipeLabel: { ja: "茶", en: "Tea" }, facility_multiplier: 2, item_value: 10 },
        "beverages_006": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_070", recipeLabel: { ja: "茶", en: "Tea" }, facility_multiplier: 2, item_value: 10 },
        "beverages_007": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_071", recipeLabel: { ja: "茶", en: "Tea" }, facility_multiplier: 2, item_value: 10 },
        "beverages_008": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_072", recipeLabel: { ja: "甘酒", en: "Amazake" }, facility_multiplier: 2, item_value: 8 },
        "beverages_009": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_073", recipeLabel: { ja: "甘酒", en: "Amazake" }, facility_multiplier: 2, item_value: 8 },
        "beverages_010": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_074", recipeLabel: { ja: "甘酒", en: "Amazake" }, facility_multiplier: 2, item_value: 8 },
        "beverages_011": { displayName: { ja: "囲炉裏の仕事場", en: "Sunken Hearth Workplace" }, recipe: "recipe_075", recipeLabel: { ja: "甘酒", en: "Amazake" }, facility_multiplier: 2, item_value: 8 },
        "beverages_012": { displayName: { ja: "酒場の調理場", en: "Tavern Cooking Station" }, recipe: "recipe_076", recipeLabel: { ja: "どぶろく", en: "Doburoku" }, facility_multiplier: 4, item_value: 18 },
        "beverages_013": { displayName: { ja: "台所の調理場", en: "Kitchen Cooking Station" }, recipe: "recipe_077", recipeLabel: { ja: "どぶろく", en: "Doburoku" }, facility_multiplier: 4, item_value: 18 },
        "beverages_014": { displayName: { ja: "圧力ろ過器", en: "Filtration Press" }, recipe: "recipe_080", recipeLabel: { ja: "日本酒", en: "Sake" }, facility_multiplier: 4, item_value: 36 },
        "beverages_015": { displayName: { ja: "焼酎蒸留所", en: "Shōchū Distillery" }, recipe: "recipe_081", recipeLabel: { ja: "焼酎", en: "Shōchū" }, facility_multiplier: 6, item_value: 60 },
        "beverages_016": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_082", recipeLabel: { ja: "ヒョウタンノキの水容器", en: "Calabash Water Bottle" }, facility_multiplier: 1, item_value: 150, tools: "any_knife" },
        "beverages_017": { displayName: { ja: "囲炉裏と調理鍋の仕事場", en: "Sunken Hearth with Cooking Pot Workplace" }, recipe: "recipe_078", recipeLabel: { ja: "どぶろく", en: "Doburoku" }, facility_multiplier: 4, item_value: 18 },
        "beverages_018": { displayName: { ja: "囲炉裏の仕事場", en: "Sunken Hearth Workplace" }, recipe: "recipe_079", recipeLabel: { ja: "どぶろく", en: "Doburoku" }, facility_multiplier: 4, item_value: 18 }
      }
    },
    "luxury": {
      facilities: {
        "luxury_001": { displayName: { ja: "茶室", en: "Tea House" }, recipe: "recipe_068", recipeLabel: { ja: "茶会", en: "Tea Ceremony" }, facility_multiplier: 5, item_value: 1 },
        "luxury_002": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_239", recipeLabel: { ja: "深靴", en: "Fukagutsu Shoes" }, facility_multiplier: 1, item_value: 255, tools: "any_knife" },
        "luxury_003": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_240", recipeLabel: { ja: "浪人笠", en: "Roningasa Hat" }, facility_multiplier: 1, item_value: 325 },
        "luxury_004": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_241", recipeLabel: { ja: "網代笠(あじろがさ)", en: "Ajirogasa Hat" }, facility_multiplier: 1, item_value: 180 },
        "luxury_005": { displayName: { ja: "なめし槽(革)", en: "Tanning Vat" }, recipe: "recipe_242", recipeLabel: { ja: "革", en: "Leather" }, facility_multiplier: 1, item_value: 65, tools: "stirring_tool" },
        "luxury_006": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_243", recipeLabel: { ja: "村人の服", en: "Villager Clothes" }, facility_multiplier: 1, item_value: 130, tools: "any_knife" },
        "luxury_007": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_244", recipeLabel: { ja: "貴族の服", en: "Elite Clothes" }, facility_multiplier: 1, item_value: 500, tools: "any_knife" },
        "luxury_008": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_245", recipeLabel: { ja: "盗賊の服", en: "Bandit Clothes" }, facility_multiplier: 1, item_value: 95, tools: "any_knife" },
        "luxury_009": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_246", recipeLabel: { ja: "靴下", en: "Socks" }, facility_multiplier: 1, item_value: 50, tools: "any_knife" },
        "luxury_010": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_247", recipeLabel: { ja: "般若の面", en: "Hannya Mask" }, facility_multiplier: 1, item_value: 150, tools: "any_adze" },
        "luxury_011": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_248", recipeLabel: { ja: "田下駄", en: "Tageta Shoes" }, facility_multiplier: 1, item_value: 250, tools: "any_adze" },
        "luxury_012": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_249", recipeLabel: { ja: "草鞋(わらじ)", en: "Waraji Shoes" }, facility_multiplier: 1, item_value: 20, tools: "any_knife" },
        "luxury_013": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_250", recipeLabel: { ja: "農民の服", en: "Peasant Clothes" }, facility_multiplier: 1, item_value: 45, tools: "any_knife" },
        "luxury_014": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_251", recipeLabel: { ja: "天狗の面", en: "Tengu Mask" }, facility_multiplier: 1, item_value: 100, tools: "any_adze" },
        "luxury_015": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_252", recipeLabel: { ja: "藁帽子", en: "Straw Hat" }, facility_multiplier: 1, item_value: 90 },
        "luxury_016": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_253", recipeLabel: { ja: "下駄", en: "Geta Shoes" }, facility_multiplier: 1, item_value: 60 },
        "luxury_017": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_254", recipeLabel: { ja: "一本下駄", en: "Ippon Geta Shoes" }, facility_multiplier: 1, item_value: 200 },
        "luxury_018": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_255", recipeLabel: { ja: "盗賊の被り物", en: "Bandit Headwear" }, facility_multiplier: 1, item_value: 46, tools: "any_knife" },
        "luxury_019": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_256", recipeLabel: { ja: "狐の面", en: "Kitsune Mask" }, facility_multiplier: 1, item_value: 80, tools: "any_adze" },
        "luxury_020": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_257", recipeLabel: { ja: "翁の面", en: "Old Man Mask" }, facility_multiplier: 1, item_value: 60, tools: "any_adze" },
        "luxury_021": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_258", recipeLabel: { ja: "素朴な印籠", en: "Simple Inro" }, facility_multiplier: 1, item_value: 48, tools: "any_knife" },
        "luxury_022": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_259", recipeLabel: { ja: "匠の印籠", en: "Masterwork Inro" }, facility_multiplier: 1, item_value: 300, tools: "any_knife" },
        "luxury_023": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_260", recipeLabel: { ja: "飾りつきの印籠", en: "Decorated Inro" }, facility_multiplier: 1, item_value: 115, tools: "any_knife" },
        "luxury_024": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_261", recipeLabel: { ja: "足袋付きの草鞋", en: "Waraji with Socks" }, facility_multiplier: 1, item_value: 40, tools: "any_knife" },
        "luxury_025": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_262", recipeLabel: { ja: "毛沓", en: "Kegutsu Shoes" }, facility_multiplier: 1, item_value: 260, tools: "any_knife" },
        "luxury_026": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_263", recipeLabel: { ja: "浅沓", en: "Asagutsu Shoes" }, facility_multiplier: 1, item_value: 275, tools: "any_knife" },
        "luxury_027": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_264", recipeLabel: { ja: "藁の輪", en: "Straw Ring" }, facility_multiplier: 1, item_value: 38, tools: "any_knife" },
        "luxury_028": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_265", recipeLabel: { ja: "裕福な商人の服", en: "Wealthy Merchant Clothes" }, facility_multiplier: 1, item_value: 315, tools: "any_knife" },
        "luxury_029": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_266", recipeLabel: { ja: "軽量の侍の服", en: "Light Samurai Clothes" }, facility_multiplier: 1, item_value: 550, tools: "any_knife" },
        "luxury_030": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_267", recipeLabel: { ja: "商人の服(リネンx8)", en: "Trader Clothes" }, facility_multiplier: 1, item_value: 55, tools: "any_knife" },
        "luxury_031": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_268", recipeLabel: { ja: "商人の服(リネンx20)", en: "Merchant Clothes" }, facility_multiplier: 1, item_value: 250, tools: "any_knife" },
        "luxury_032": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_269", recipeLabel: { ja: "養蜂家の枝細工の面", en: "Beekeeper's Wicker Mask" }, facility_multiplier: 1, item_value: 100, tools: "any_knife" },
        "luxury_033": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_270", recipeLabel: { ja: "養蜂家の被り物", en: "Beekeeper Hat" }, facility_multiplier: 1, item_value: 150, tools: "any_knife" },
        "luxury_034": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_271", recipeLabel: { ja: "養蜂家の服", en: "Beekeeper's Clothes" }, facility_multiplier: 1, item_value: 260, tools: "any_knife" },
        "luxury_035": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_272", recipeLabel: { ja: "烏天狗の面", en: "Karasu Tengu Mask" }, facility_multiplier: 1, item_value: 150, tools: "any_adze" },
        "luxury_036": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_273", recipeLabel: { ja: "化け猫の面", en: "Bakeneko Mask" }, facility_multiplier: 1, item_value: 125, tools: "any_adze" },
        "luxury_037": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_274", recipeLabel: { ja: "浪人の服", en: "Rōnin Clothes" }, facility_multiplier: 1, item_value: 245, tools: "any_knife" },
        "luxury_038": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_275", recipeLabel: { ja: "工芸職人の服", en: "Craftsman Clothes" }, facility_multiplier: 1, item_value: 225, tools: "any_knife" },
        "luxury_039": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_276", recipeLabel: { ja: "海賊の服", en: "Pirate Clothes" }, facility_multiplier: 1, item_value: 100, tools: "any_knife" },
        "luxury_040": { displayName: { ja: "小さな乾燥棚", en: "Small Paper Drying Rack" }, recipe: "recipe_277", recipeLabel: { ja: "紙", en: "Paper" }, facility_multiplier: 4, item_value: 5 },
        "luxury_041": { displayName: { ja: "大きな乾燥棚", en: "Large Paper Drying Rack" }, recipe: "recipe_278", recipeLabel: { ja: "紙", en: "Paper" }, facility_multiplier: 5, item_value: 5 },
        "luxury_042": { displayName: { ja: "酒場", en: "Tavern" }, recipe: "recipe_045", recipeLabel: { ja: "酒場の主人(水x2)", en: "Tavern Keeper (Water x2)" }, facility_multiplier: 6, item_value: 1 },
        "luxury_043": { displayName: { ja: "酒場", en: "Tavern" }, recipe: "recipe_046", recipeLabel: { ja: "酒場の主人(水x1+アルコールを含まない飲料全般x1)", en: "Tavern Keeper (Water x1 + Any Non-alcoholic Beverage x1)" }, facility_multiplier: 8, item_value: 1 },
        "luxury_044": { displayName: { ja: "酒場", en: "Tavern" }, recipe: "recipe_047", recipeLabel: { ja: "酒場の主人(水x1+アルコール飲料全般x1)", en: "Tavern Keeper (Water x1 + Any Alcoholic Beverage x1)" }, facility_multiplier: 12, item_value: 1 },
        "luxury_045": { displayName: { ja: "鉱夫の仕事場", en: "Miner's Workplace" }, recipe: "recipe_279", recipeLabel: { ja: "氷", en: "Ice" }, facility_multiplier: 1, item_value: 4, tools: "any_pickaxe" },
        "luxury_046": { displayName: { ja: "金敷", en: "Blacksmith Anvil" }, recipe: "recipe_280", recipeLabel: { ja: "香炉", en: "Incense Burner" }, facility_multiplier: 1, item_value: 105, tools: "any_hammer" },
        "luxury_047": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_281", recipeLabel: { ja: "避難民の被り物", en: "Refugee Hat" }, facility_multiplier: 1, item_value: 22 },
        "luxury_048": { displayName: { ja: "仕立て台", en: "Tailor's Workbench" }, recipe: "recipe_282", recipeLabel: { ja: "避難民の被り物", en: "Refugee Hat" }, facility_multiplier: 1, item_value: 22 },
        "luxury_049": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_283", recipeLabel: { ja: "竹玉", en: "Bamboo Ball" }, facility_multiplier: 1, item_value: 12, tools: "any_knife" },
        "luxury_050": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_284", recipeLabel: { ja: "くし", en: "Comb" }, facility_multiplier: 1, item_value: 43, tools: "carving_knife" },
        "luxury_051": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_285", recipeLabel: { ja: "賽一式", en: "Dice Set" }, facility_multiplier: 1, item_value: 50, tools: "carving_knife" },
        "luxury_052": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_286", recipeLabel: { ja: "囲碁一式", en: "Go Set" }, facility_multiplier: 1, item_value: 75, tools: "carving_knife" },
        "luxury_053": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_287", recipeLabel: { ja: "将棋一式", en: "Shogi Set" }, facility_multiplier: 1, item_value: 125, tools: "carving_knife" },
        "luxury_054": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_288", recipeLabel: { ja: "双六一式", en: "Sugoroku Set" }, facility_multiplier: 1, item_value: 100, tools: "carving_knife" },
        "luxury_055": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_289", recipeLabel: { ja: "小さな提燈", en: "Small Paper Lantern" }, facility_multiplier: 1, item_value: 35 },
        "luxury_056": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_290", recipeLabel: { ja: "小さな行燈", en: "Small Paper Lamp" }, facility_multiplier: 1, item_value: 35 },
        "luxury_057": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_291", recipeLabel: { ja: "円筒提燈", en: "Oval Paper Lamp" }, facility_multiplier: 1, item_value: 40 },
        "luxury_058": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_292", recipeLabel: { ja: "油の行燈", en: "Oil Lamp" }, facility_multiplier: 1, item_value: 70 },
        "luxury_059": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_293", recipeLabel: { ja: "ろうそく(脂肪x1+藁x1)", en: "Candle (Fat x1 + Straw x1)" }, facility_multiplier: 4, item_value: 12 },
        "luxury_060": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_293", recipeLabel: { ja: "ろうそく(蜜蝋x1+藁x1)", en: "Candle (Beeswax x1 + Straw x1)" }, facility_multiplier: 6, item_value: 12 },
        "luxury_061": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_294", recipeLabel: { ja: "竹のろうそく(脂肪x1+竹x1)", en: "Bamboo Candle (Fat x1 + Bamboo x1)" }, facility_multiplier: 1, item_value: 8 },
        "luxury_062": { displayName: { ja: "木工作業台", en: "Woodworking Table" }, recipe: "recipe_294", recipeLabel: { ja: "竹のろうそく(蜜蝋x1+竹x1)", en: "Bamboo Candle (Beeswax x1 + Bamboo x1)" }, facility_multiplier: 1, item_value: 8 }
      }
    },
    "maintenance": {
      facilities: {
        "maintenance_001": { displayName: { ja: "陶芸窯", en: "Pottery Kiln" }, recipe: "recipe_083", recipeLabel: { ja: "陶器", en: "Pottery" }, facility_multiplier: 1, item_value: 28 },
        "maintenance_002": { displayName: { ja: "草の乾燥棚", en: "Grass Drying Rack" }, recipe: "recipe_084", recipeLabel: { ja: "藁", en: "Straw" }, facility_multiplier: 1, item_value: 1 },
        "maintenance_003": { displayName: { ja: "ヤシの葉の乾燥棚", en: "Palm Leaves Drying Rack" }, recipe: "recipe_085", recipeLabel: { ja: "藁", en: "Straw" }, facility_multiplier: 3, item_value: 1 },
        "maintenance_004": { displayName: { ja: "石工所", en: "Stonemason Station" }, recipe: "recipe_086", recipeLabel: { ja: "彫刻した石", en: "Chiseled Stone" }, facility_multiplier: 1, item_value: 22, tools: "carving_knife" },
        "maintenance_005": { displayName: { ja: "鉱夫の仕事場", en: "Miner's Workplace" }, recipe: "recipe_087", recipeLabel: { ja: "粘土", en: "Clay" }, facility_multiplier: 1, item_value: 10, tools: "any_pickaxe" },
        "maintenance_006": { displayName: { ja: "大工作業台", en: "Carpentry Station" }, recipe: "recipe_088", recipeLabel: { ja: "板(針葉樹)", en: "Plank (conifer)" }, facility_multiplier: 6, item_value: 4, tools: "any_adze" },
        "maintenance_007": { displayName: { ja: "大工作業台", en: "Carpentry Station" }, recipe: "recipe_089", recipeLabel: { ja: "板(落葉樹)", en: "Plank (deciduous)" }, facility_multiplier: 6, item_value: 4, tools: "any_adze" },
        "maintenance_008": { displayName: { ja: "大工作業台", en: "Carpentry Station" }, recipe: "recipe_090", recipeLabel: { ja: "板(上質な針葉樹)", en: "Plank (premium conifer)" }, facility_multiplier: 6, item_value: 6, tools: "any_adze" },
        "maintenance_009": { displayName: { ja: "大工作業台", en: "Carpentry Station" }, recipe: "recipe_091", recipeLabel: { ja: "板(上質な落葉樹)", en: "Plank (premium deciduous)" }, facility_multiplier: 6, item_value: 6, tools: "any_adze" },
        "maintenance_010": { displayName: { ja: "大工作業台", en: "Carpentry Station" }, recipe: "recipe_092", recipeLabel: { ja: "板(果樹)", en: "Plank (fruit)" }, facility_multiplier: 6, item_value: 9, tools: "any_adze" }
      }
    }
  }
};
