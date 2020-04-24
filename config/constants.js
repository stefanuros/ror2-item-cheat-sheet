const StackType = Object.freeze({
  LINEAR: "linear",
  HYPERBOLIC: "hyperbolic",
  EXPONENTIAL: "exponential",
  SPECIAL: "special",
});

const StatType = Object.freeze({
  DAMAGE: "damage",
  CHARGE: "charge",
});

const ItemRarity = Object.freeze({
  COMMON: "common",
  UNCOMMON: "uncommon",
  LEGENDARY: "legendary",
  BOSS: "boss",
  LUNAR: "lunar",
  EQUIPMENT: "equipment",
  LUNAR_EQUIPMENT: "lunarEquipment",
  ELITE_EQUIPMENT: "eliteEquipment",
});

const Category = Object.freeze({
  DAMAGE: "damage",
  AI_BLACKLIST: "aiBlacklist",
  UTILITY: "utility",
});

module.exports = {
  StackType,
  StatType,
  ItemRarity,
  Category,
};
