export const StackType = Object.freeze({
  LINEAR: Symbol("Linear"),
  HYPERBOLIC: Symbol("Hyperbolic"),
  EXPONENTIAL: Symbol("Exponential"),
  SPECIAL: Symbol("Special"),
  NONE: Symbol("None"),
});

export const ItemRarity = Object.freeze({
  COMMON: Symbol("Common"),
  UNCOMMON: Symbol("Uncommon"),
  LEGENDARY: Symbol("Legendary"),
  BOSS: Symbol("Boss"),
  LUNAR: Symbol("Lunar"),
  EQUIPMENT: Symbol("Equipment"),
  ELITE_EQUIPMENT: Symbol("Elite Equipment"),
  LUNAR_EQUIPMENT: Symbol("Lunar Equipment"),
  VOID: Symbol("Void")
});

// Set the symbols from itemRarity to be the keys for their sort value
export const ItemRaritySortValue = Object.freeze({
  [ItemRarity.COMMON]: 0,
  [ItemRarity.UNCOMMON]: 1,
  [ItemRarity.LEGENDARY]: 2,
  [ItemRarity.BOSS]: 3,
  [ItemRarity.LUNAR]: 4,
  [ItemRarity.EQUIPMENT]: 6,
  [ItemRarity.ELITE_EQUIPMENT]: 6,
  [ItemRarity.LUNAR_EQUIPMENT]: 4,
  [ItemRarity.VOID]: 7
});

// Set the symbols from itemRarity to be the keys for their css class value
export const ItemRarityClass = Object.freeze({
  [ItemRarity.COMMON]: "item-colour-common",
  [ItemRarity.UNCOMMON]: "item-colour-uncommon",
  [ItemRarity.LEGENDARY]: "item-colour-legendary",
  [ItemRarity.BOSS]: "item-colour-boss",
  [ItemRarity.LUNAR]: "item-colour-lunar",
  [ItemRarity.EQUIPMENT]: "equipment-colour-normal",
  [ItemRarity.ELITE_EQUIPMENT]: "equipment-colour-elite",
  [ItemRarity.LUNAR_EQUIPMENT]: "equipment-colour-lunar",
  [ItemRarity.VOID]: "item-colour-void"
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
  SCRAP: Symbol("Scrap"),
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
  SOTV: Symbol("Survivors of the Void"),
  CHARACTER: Symbol("Character"),
  ARTIFACT: Symbol("Artifact"),
});

export const SelectionTypePluralization = Object.freeze({
  [SelectionType.ITEM]: `${SelectionType.ITEM.description}s`,
  [SelectionType.SOTV]: `${SelectionType.SOTV.description}`,
  [SelectionType.CHARACTER]: `${SelectionType.CHARACTER.description}s`,
  [SelectionType.ARTIFACT]: `${SelectionType.ARTIFACT.description}s`,
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
