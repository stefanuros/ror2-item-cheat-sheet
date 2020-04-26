const StackType = Object.freeze({
  LINEAR: Symbol("linear"),
  HYPERBOLIC: Symbol("hyperbolic"),
  EXPONENTIAL: Symbol("exponential"),
  SPECIAL: Symbol("special"),
  NONE: Symbol("none"),
});

const StatType = Object.freeze({
  DAMAGE: Symbol("Damage"),
  CHARGE: Symbol("Charge"),
  RADIUS: Symbol("Radius"),
  SPRINT_SPEED: Symbol("Sprint Speed"),
  DURATION: Symbol("Duration"),
  HEAL: Symbol("Heal"),
  MOVEMENT_SPEED: Symbol('Movement Speed'),
  SHIELD: Symbol('Shield'),
  CHANCE: Symbol("Chance"),
  ATTACK_SPEED: Symbol("Attack Speed"),
  COOLDOWN: Symbol("Cooldown"),
  EXTRA_JUMP: Symbol("Extra Jump"),
  TOTAL_HEALTH: Symbol("Total Health"),
  THRESHOLD: Symbol("Threshold"),
  ATTACK_SPEED_CAP: Symbol("Attack Speed Cap"),
  ARMOUR: Symbol("Armour"),
  BOOST: Symbol("Boost"),
  LUCK: Symbol("Luck"),
  ALLY_HEALTH: Symbol("Ally Health"),
  ALLY_DAMAGE: Symbol("Ally Damage"),
  CRITICAL_STRIKE_CHANCE: Symbol("Critical Strike Chance"),
  HEALTH_REGENERATION: Symbol("Health Regeneration"),
  AMOUNT: Symbol("Amount"),
  GOLD: Symbol("Gold"),
  HEAL_RATE: Symbol("Heal Rate"),
});

const ItemRarity = Object.freeze({
  COMMON: Symbol("common"),
  UNCOMMON: Symbol("uncommon"),
  LEGENDARY: Symbol("legendary"),
  BOSS: Symbol("boss"),
  LUNAR: Symbol("lunar"),
  EQUIPMENT: Symbol("equipment"),
  LUNAR_EQUIPMENT: Symbol("lunarEquipment"),
  ELITE_EQUIPMENT: Symbol("eliteEquipment"),
});

const Category = Object.freeze({
  DAMAGE: Symbol("Damage"),
  AI_BLACKLIST: Symbol("AI Blacklist"),
  UTILITY: Symbol("Utility"),
  HEALING: Symbol("Healing"),
  SPRINT_RELATED: Symbol("Sprint Related"),
  ON_KILL_EFFECT: Symbol("On Kill Effect"),
  EQUIPMENT_RELATED: Symbol("Equipment Related"),
  WORLD_UNIQUE: Symbol("World Unique"), // do we care about keeping this category?
  TRANSFORMATION: Symbol("Transformation"),
  MISC: Symbol("Misc"),
});

module.exports = {
  StackType,
  StatType,
  ItemRarity,
  Category,
};
