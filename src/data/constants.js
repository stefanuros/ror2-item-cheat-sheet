export const StackType = Object.freeze({
  LINEAR: Symbol("linear"),
  HYPERBOLIC: Symbol("hyperbolic"),
  EXPONENTIAL: Symbol("exponential"),
  SPECIAL: Symbol("special"),
  NONE: Symbol("none"),
});

export const ItemRarity = Object.freeze({
  COMMON: Symbol("common"),
  UNCOMMON: Symbol("uncommon"),
  LEGENDARY: Symbol("legendary"),
  BOSS: Symbol("boss"),
  LUNAR: Symbol("lunar"),
  EQUIPMENT: Symbol("equipment"),
  ELITE_EQUIPMENT: Symbol("eliteEquipment"),
  LUNAR_EQUIPMENT: Symbol("lunarEquipment"),
});

// Set the symbols from itemRarity to be the keys for their sort value
export const ItemRaritySortValue = Object.freeze({
  [ItemRarity.COMMON]: 0,
  [ItemRarity.UNCOMMON]: 1,
  [ItemRarity.LEGENDARY]: 2,
  [ItemRarity.BOSS]: 3,
  [ItemRarity.LUNAR]: 4,
  [ItemRarity.EQUIPMENT]: 0,
  [ItemRarity.ELITE_EQUIPMENT]: 1,
  [ItemRarity.LUNAR_EQUIPMENT]: 2,
});

// Set the symbols from itemRarity to be the keys for their css class value
export const ItemRarityClass = Object.freeze({
  [ItemRarity.COMMON]: "item-colour-common",
  [ItemRarity.UNCOMMON]: "item-colour-uncommon",
  [ItemRarity.LEGENDARY]: "item-colour-legendary",
  [ItemRarity.BOSS]: "item-colour-legendary",
  [ItemRarity.LUNAR]: "item-colour-lunar",
  [ItemRarity.EQUIPMENT]: "equipment-colour-normal",
  [ItemRarity.ELITE_EQUIPMENT]: "equipment-colour-elite",
  [ItemRarity.LUNAR_EQUIPMENT]: "equipment-colour-lunar",
});

export const Tag = Object.freeze({
  DAMAGE: Symbol("Damage"),
  AI_BLACKLIST: Symbol("AI Blacklist"),
  UTILITY: Symbol("Utility"),
  HEALING: Symbol("Healing"),
  SPRINT_RELATED: Symbol("Sprint Related"),
  ON_KILL_EFFECT: Symbol("On Kill Effect"),
  EQUIPMENT_RELATED: Symbol("Equipment Related"),
  WORLD_UNIQUE: Symbol("World Unique"),
  TRANSFORMATION: Symbol("Transformation"),
  MISC: Symbol("Misc"),
});

export const Category = Object.freeze({
  DAMAGE: Symbol("Damage"),
  UTILITY: Symbol("Utility"),
  HEALING: Symbol("Healing"),
  ON_KILL_EFFECT: Symbol("On Kill Effect"),
  ON_HIT_EFFECT: Symbol("On Hit Effect"),
  EQUIPMENT_RELATED: Symbol("Equipment Related"),
  TRANSFORMATION: Symbol("Transformation"),
  MISC: Symbol("Misc"),
  MOBILITY: Symbol('Mobility'),
  SHIELD: Symbol('Shield'),
  ATTACK_SPEED: Symbol("Attack Speed"),
  COOLDOWN: Symbol("Cooldown"),
  CRITICAL_STRIKE: Symbol("Critical Strike"),
  SURVIVABILITY: Symbol("Survivability"),
  AOE: Symbol("AOE"),
  TRACKING_PROJECTILE: Symbol("Tracking Projectile"),
  MINION: Symbol("Minion"),
});

export const SelectionType = Object.freeze({
  ITEM: Symbol("Item"),
  EQUIPMENT: Symbol("Equipment"),
  CHARACTER: Symbol("Character"),
  ARTIFACT: Symbol("Artifact"),
});

export const SortType = Object.freeze({
  ID: Symbol("Id"),
  NAME: Symbol("Name"),
  RARITY: Symbol("Rarity"),
});

export const Theme = Object.freeze({
  SMALL: "small-view",
  LARGE: "large-view",
  LIGHT: "light-theme",
  DARK: "dark-theme",
});
