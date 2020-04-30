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
  LUNAR_EQUIPMENT: Symbol("lunarEquipment"),
  ELITE_EQUIPMENT: Symbol("eliteEquipment"),
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
