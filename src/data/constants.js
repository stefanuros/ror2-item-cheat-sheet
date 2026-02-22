import SotVIcon from "../assets/SotV_Icon.webp";
import SotSIcon from "../assets/SotS_Icon.webp";
import ACIcon from "../assets/AC_Icon.webp";

export const StackType = {
  LINEAR: "Linear",
  HYPERBOLIC: "Hyperbolic",
  EXPONENTIAL: "Exponential",
  SPECIAL: "Special",
  NONE: "None",
};

export const ItemRarity = {
  COMMON: "Common",
  UNCOMMON: "Uncommon",
  LEGENDARY: "Legendary",
  BOSS: "Boss",
  LUNAR: "Lunar",
  EQUIPMENT: "Equipment",
  ELITE_EQUIPMENT: "Elite Equipment",
  LUNAR_EQUIPMENT: "Lunar Equipment",
  VOID: "Void",
};

export const EquipmentItemRarities = [
  ItemRarity.EQUIPMENT,
  ItemRarity.ELITE_EQUIPMENT,
  ItemRarity.LUNAR_EQUIPMENT,
];

// Set the symbols from itemRarity to be the keys for their sort value
export const ItemRaritySortValue = {
  [ItemRarity.COMMON]: 0,
  [ItemRarity.UNCOMMON]: 1,
  [ItemRarity.LEGENDARY]: 2,
  [ItemRarity.BOSS]: 3,
  [ItemRarity.VOID]: 4,
  [ItemRarity.LUNAR]: 5,
  [ItemRarity.LUNAR_EQUIPMENT]: 0,
  [ItemRarity.EQUIPMENT]: 1,
  [ItemRarity.ELITE_EQUIPMENT]: 2,
};

// Set the symbols from itemRarity to be the keys for their css class value
export const ItemRarityClass = {
  [ItemRarity.COMMON]: "item-colour-common",
  [ItemRarity.UNCOMMON]: "item-colour-uncommon",
  [ItemRarity.VOID]: "item-colour-void",
  [ItemRarity.LEGENDARY]: "item-colour-legendary",
  [ItemRarity.BOSS]: "item-colour-boss",
  [ItemRarity.LUNAR]: "item-colour-lunar",
  [ItemRarity.EQUIPMENT]: "equipment-colour-normal",
  [ItemRarity.ELITE_EQUIPMENT]: "equipment-colour-elite",
  [ItemRarity.LUNAR_EQUIPMENT]: "equipment-colour-lunar",
};

export const Tag = {
  DAMAGE: "Damage",
  AI_BLACKLIST: "AI Blacklist",
  UTILITY: "Utility",
  HEALING: "Healing",
  SPRINT_RELATED: "Sprint Related",
  ON_KILL_EFFECT: "On Kill Effect",
  EQUIPMENT_RELATED: "Equipment Related",
  WORLD_UNIQUE: "World Unique",
  TRANSFORMATION: "Transformation",
  MISC: "Misc",
  SCRAP: "Scrap",
};

export const Category = {
  DAMAGE: "Damage",
  UTILITY: "Utility",
  HEALING: "Healing",
  ON_KILL_EFFECT: "On Kill Effect",
  ON_HIT_EFFECT: "On Hit Effect",
  EQUIPMENT_RELATED: "Equipment Related",
  TRANSFORMATION: "Transformation",
  MISC: "Misc",
  MOBILITY: 'Mobility',
  SHIELD: 'Shield',
  ATTACK_SPEED: "Attack Speed",
  COOLDOWN: "Cooldown",
  CRITICAL_STRIKE: "Critical Strike",
  SURVIVABILITY: "Survivability",
  AOE: "AOE",
  TRACKING_PROJECTILE: "Tracking Projectile",
  MINION: "Minion",
};

export const SelectionType = {
  ITEM: "Item",
  EQUIPMENT: "Equipment",
  CHARACTER: "Character",
  ARTIFACT: "Artifact",
};

export const SelectionTypePluralization = {
  [SelectionType.ITEM]: `${SelectionType.ITEM}s`,
  [SelectionType.EQUIPMENT]: `${SelectionType.EQUIPMENT}`,
  [SelectionType.CHARACTER]: `${SelectionType.CHARACTER}s`,
  [SelectionType.ARTIFACT]: `${SelectionType.ARTIFACT}s`,
};

export const SortType = {
  ID: "Id",
  NAME: "Name",
  RARITY: "Rarity",
};

export const Theme = {
  SMALL: "small-view",
  LARGE: "large-view",
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

export const DlcIconUrl = {
  "Survivors of the Void": SotVIcon,
  "Seekers of the Storm": SotSIcon,
  "Alloyed Collective": ACIcon,
};
