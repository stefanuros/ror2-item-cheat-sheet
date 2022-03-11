import { StackType, ItemRarity, Tag, Category, SelectionType } from './constants';

const constant = {
  StackType,
  ItemRarity,
  Tag,
  Category,
};

export const items = Object.freeze({
  /** 
   * Get all non-hidden, item keys
   * @param getHidden - Optional, false by default. If true, will return hidden values too
  */
  getItemIds() {
    return Object.keys(this).filter(key => {
      return typeof this[key] === "object";
    });
  },
  0: {
    wikiLink: "https://riskofrain2.gamepedia.com/Soldier%27s_Syringe",
    name: "Soldier's Syringe",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/f/f2/Soldier%27s_Syringe.png",
    shortDescription: "Increases attack speed.",
    description: "Increases attack speed by 15% (+15% per stack).",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.ATTACK_SPEED,
    ],
    unlock: {
      name: "Advancement",
      description: "The achievement is obtained by completing a Teleporter Event.",
      link: "https://riskofrain2.fandom.com/wiki/Advancement",
    },
    id: 0,
    stats: [{
      stat: "Attack Speed",
      value: "15%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+15%",
    }],
  },
  1: {
    wikiLink: "https://riskofrain2.gamepedia.com/Tougher_Times",
    name: "Tougher Times",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/3/39/Tougher_Times.png",
    shortDescription: "Chance to block incoming damage.",
    description: "15% (+15% per stack) chance to block incoming damage. Unaffected by luck.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.SURVIVABILITY,
    ],
    unlock: {
      name: "Learning Process",
      description: "Die 5 times.",
      link: "https://riskofrain2.gamepedia.com/Learning_Process",
    },
    id: 1,
    stats: [{
      stat: "Block Chance",
      value: "15%",
      stackType: constant.StackType.HYPERBOLIC,
      stackValue: "+15%",
    }],
  },
  2: {
    wikiLink: "https://riskofrain2.gamepedia.com/Brilliant_Behemoth",
    name: "Brilliant Behemoth",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/f/fa/Brilliant_Behemoth.png",
    shortDescription: "All your attacks explode!",
    description: "All your attacks explode in a 4m (+1.5m per stack) radius for a bonus 60% TOTAL damage to nearby enemies.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.AOE,
      constant.Category.DAMAGE,
      constant.Category.ON_HIT_EFFECT,
    ],
    id: 2,
    stats: [{
      stat: "Explosion Radius",
      value: "4m",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1.5m",
    }],
  },
  3: {
    wikiLink: "https://riskofrain2.gamepedia.com/AtG_Missile_Mk._1",
    name: "AtG Missile Mk. 1",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/6/6a/AtG_Missile_Mk._1.png",
    shortDescription: "Chance to fire a missile.",
    description: "10% chance to fire a missile that deals 300% (+300% per stack) TOTAL damage.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.TRACKING_PROJECTILE,
      constant.Category.ON_HIT_EFFECT,
    ],
    id: 3,
    stats: [{
      stat: "Damage",
      value: "300%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+300%",
    }],
  },
  4: {
    wikiLink: "https://riskofrain2.gamepedia.com/Will-o%27-the-wisp",
    name: "Will-o'-the-wisp",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/c/c4/Will-o%27-the-wisp.png",
    shortDescription: "Detonate enemies on kill.",
    description: "On killing an enemy, spawn a lava pillar in a 12m (+2.4m per stack) radius for 350% (+280% per stack) base damage.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.ON_KILL_EFFECT,
    ],
    category: [
      constant.Category.AOE,
      constant.Category.ON_KILL_EFFECT,
      constant.Category.DAMAGE,
    ],
    id: 4,
    stats: [{
      stat: "Damage",
      value: "350%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+280%",
    },
    {
      stat: "Pillar Radius",
      value: "12m",
      stackType: constant.StackType.LINEAR,
      stackValue: "+2.4m",
    }],
  },
  5: {
    wikiLink: "https://riskofrain2.gamepedia.com/Ceremonial_Dagger",
    name: "Ceremonial Dagger",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/7/76/Ceremonial_Dagger.png",
    shortDescription: "Killing an enemy releases homing daggers.",
    description: "Killing an enemy fires out 3 homing daggers that deal 150% (+150% per stack) base damage.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.ON_KILL_EFFECT,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.TRACKING_PROJECTILE,
      constant.Category.ON_KILL_EFFECT,
    ],
    id: 5,
    stats: [{
      stat: "Damage",
      value: "150%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+150%",
    }],
  },
  6: {
    wikiLink: "https://riskofrain2.gamepedia.com/Monster_Tooth",
    name: "Monster Tooth",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/3/3b/Monster_Tooth.png",
    shortDescription: "Drop a healing orb on kill.",
    description: "Killing an enemy spawns a healing orb that heals for 8 plus an additional 2% (+2% per stack) of maximum health.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.HEALING,
      constant.Tag.ON_KILL_EFFECT,
    ],
    category: [
      constant.Category.HEALING,
      constant.Category.ON_KILL_EFFECT,
    ],
    id: 6,
    stats: [
      {
        stat: "Heal",
        value: "2%",
        stackType: constant.StackType.LINEAR,
        stackValue: "+2%",
      },
    ],
  },
  7: {
    wikiLink: "https://riskofrain2.gamepedia.com/Lens-Maker%27s_Glasses",
    name: "Lens-Maker's Glasses",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/2/23/Lens-Maker%27s_Glasses.png",
    shortDescription: "Chance to 'Critically Strike', dealing double damage.",
    description: "Your attacks have a 10% (+10% per stack) chance to 'Critically Strike', dealing double damage.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.CRITICAL_STRIKE,
      constant.Category.ON_HIT_EFFECT,
    ],
    id: 7,
    stats: [{
      stat: "Critical Strike Chance",
      value: "10%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+10%",
      effectiveMax: 10,
    }],
  },
  8: {
    wikiLink: "https://riskofrain2.gamepedia.com/Paul%27s_Goat_Hoof",
    name: "Paul's Goat Hoof",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/4/4a/Paul%27s_Goat_Hoof.png",
    shortDescription: "Move faster.",
    description: "Increases movement speed by 14% (+14% per stack).",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.MOBILITY,
    ],
    unlock: {
      name: "Is This Bugged",
      description: "Fail the Shrine of Chance 3 times in a row.",
      link: "https://riskofrain2.gamepedia.com/%22Is_This_Bugged%3F%22",
    },
    id: 8,
    stats: [{
      stat: "Movement Speed",
      value: "14%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+14%",
    }],
  },
  9: {
    wikiLink: "https://riskofrain2.gamepedia.com/Hopoo_Feather",
    name: "Hopoo Feather",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/3/3a/Hopoo_Feather.png",
    shortDescription: "Gain an extra jump.",
    description: "Gain +1 (+1 per stack) maximum jump count.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.AI_BLACKLIST,
    ],
    category: [
      constant.Category.MOBILITY,
    ],
    id: 9,
    stats: [{
      stat: "Extra Jump",
      value: "1",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1",
    }],
  },
  11: {
    wikiLink: "https://riskofrain2.gamepedia.com/Ukulele",
    name: "Ukulele",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/9/98/Ukulele.png",
    shortDescription: "...and his music was electric.",
    description: "25% chance to fire chain lighting for 80% TOTAL damage on up to 3 (+2 per stack) targets within 20m (+2m per stack).",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.ON_HIT_EFFECT,
      constant.Category.TRACKING_PROJECTILE,
    ],
    id: 11,
    stats: [{
      stat: "Targets",
      value: "3",
      stackType: constant.StackType.LINEAR,
      stackValue: "+2",
      effectiveMax: 22,
    },
    {
      stat: "Radius",
      value: "20m",
      stackType: constant.StackType.LINEAR,
      stackValue: "+2m",
    }],
  },
  13: {
    wikiLink: "https://riskofrain2.gamepedia.com/Leeching_Seed",
    name: "Leeching Seed",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/a/a0/Leeching_Seed.png",
    shortDescription: "Dealing damage heals you.",
    description: "Dealing damage heals you for 1 (+1 per stack) health.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.HEALING,
      constant.Category.ON_HIT_EFFECT,
    ],
    id: 13,
    stats: [{
      stat: "Heal",
      value: "1",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1",
    }],
  },
  14: {
    wikiLink: "https://riskofrain2.gamepedia.com/Frost_Relic",
    name: "Frost Relic",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/5/58/Frost_Relic.png",
    shortDescription: "Killing enemies surrounds you with an ice storm.",
    description: "Killing an enemy surrounds you with an ice storm that deals 600% damage per second and slows enemies by 80% for 1.5s. The storm grows with every kill, increasing its radius by 1m. Stacks up to 6m (+3m per stack).",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.ON_KILL_EFFECT,
    ],
    category: [
      constant.Category.AOE,
      constant.Category.ON_KILL_EFFECT,
      constant.Category.DAMAGE,
    ],
    id: 14,
    stats: [{
      stat: "Ice Storm Radius",
      value: "6m",
      stackType: constant.StackType.LINEAR,
      stackValue: "+3m",
    }],
  },
  15: {
    wikiLink: "https://riskofrain2.gamepedia.com/Happiest_Mask",
    name: "Happiest Mask",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/d/d4/Happiest_Mask.png",
    shortDescription: "Chance on killing an enemy to summon a ghost.",
    description: "Killing enemies has a 7% chance to spawn a ghost of the killed enemy with 1500% damage. Lasts 30s (+30s per stack).",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.UTILITY,
      constant.Tag.ON_KILL_EFFECT,
    ],
    category: [
      constant.Category.MINION,
      constant.Category.DAMAGE,
    ],
    id: 15,
    stats: [{
      stat: "Ghost Duration",
      value: "30s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+30s",
    }],
  },
  16: {
    wikiLink: "https://riskofrain2.gamepedia.com/Bustling_Fungus",
    name: "Bustling Fungus",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/3/33/Bustling_Fungus.png",
    shortDescription: "Heal all nearby allies after standing still for 1 seconds.",
    description: "After standing still for 1 second, create a zone that heals for 4.5% (+2.25% per stack) of your health every second to all allies within 3m (+1.5m per stack).",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.HEALING,
      constant.Tag.AI_BLACKLIST,
    ],
    category: [
      constant.Category.HEALING,
      constant.Category.AOE,
    ],
    id: 16,
    stats: [{
      stat: "Health per Second",
      value: "4.5%/s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+2.25%/s",
      effectiveMax: 44,
    },
    {
      stat: "Radius",
      value: "3m",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1.5m",
    }],
  },
  17: {
    wikiLink: "https://riskofrain2.gamepedia.com/Crowbar",
    name: "Crowbar",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/c/c0/Crowbar.png",
    shortDescription: "Deal bonus damage to enemies above 90% health.",
    description: "Deal 75% (+75% per stack) damage to enemies above 90% health.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.ON_HIT_EFFECT,
    ],
    unlock: {
      name: "The Basics",
      description: "Discover 10 unique white items.",
      link: "https://riskofrain2.gamepedia.com/The_Basics",
    },
    id: 17,
    stats: [{
      stat: "Damage",
      value: "75%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+75%",
    }],
  },
  19: {
    wikiLink: "https://riskofrain2.gamepedia.com/Predatory_Instincts",
    name: "Predatory Instincts",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/3/39/Predatory_Instincts.png",
    shortDescription: "'Critical Strikes' increase attack speed. Stacks 3 times.",
    description: "Gain 5% critical chance (+0% per stack). Critical strikes increase attack speed by 12%. Maximum cap of 36% (+24% per stack) attack speed.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.ATTACK_SPEED,
      constant.Category.CRITICAL_STRIKE,
    ],
    unlock: {
      name: "Rapidfire",
      description: "Reach +200% attack speed.",
      link: "https://riskofrain2.gamepedia.com/Rapidfire",
    },
    id: 19,
    stats: [{
      stat: "Attack Speed Cap",
      value: "36%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+24%",
    },
    {
      stat: "Critical Strike Chance",
      value: "5%",
      stackType: constant.StackType.NONE,
      stackValue: "+0%",
    }],
  },
  20: {
    wikiLink: "https://riskofrain2.gamepedia.com/Tri-Tip_Dagger",
    name: "Tri-Tip Dagger",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/1/17/Tri-Tip_Dagger.png",
    shortDescription: "Chance to bleed enemies on hit.",
    description: "10% (+10% per stack) chance to bleed an enemy for 240% base damage.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.ON_HIT_EFFECT,
    ],
    id: 20,
    stats: [{
      stat: "Bleed Chance",
      value: "10%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+10%",
      effectiveMax: 10,
    }],
  },
  21: {
    wikiLink: "https://riskofrain2.gamepedia.com/Red_Whip",
    name: "Red Whip",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/2/2a/Red_Whip.png",
    shortDescription: "Move fast out of combat.",
    description: "Leaving combat boosts your movement speed by 30% (+30% per stack).",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.MOBILITY,
    ],
    id: 21,
    stats: [{
      stat: "Movement Speed",
      value: "30%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+30%",
    }],
  },
  22: {
    wikiLink: "https://riskofrain2.gamepedia.com/H3AD-5T_v2",
    name: "H3AD-5T v2",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/3/36/H3AD-5T_v2.png",
    shortDescription: "Increase jump height. Hold 'Interact' to slam down to the ground.",
    description: "Increase jump height. Creates a 5m-100m radius kinetic explosion on hitting the ground, dealing 1000%-10000% base damage that scales up with fall distance. Recharges in 10 (-50% per stack) seconds.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.UTILITY,
      constant.Tag.AI_BLACKLIST,
    ],
    category: [
      constant.Category.MOBILITY,
      constant.Category.DAMAGE,
      constant.Category.AOE,
    ],
    id: 22,
    stats: [{
      stat: "Recharge Time",
      value: "10s",
      stackType: constant.StackType.EXPONENTIAL,
      stackValue: "-50%",
      effectiveMax: 7,
    }],
  },
  23: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Wicked_Ring",
    name: "H3AD-5T v2",
    image: "",
    shortDescription: "Gain 5% critical chance. Critical strikes reduces all your cooldowns by 1.",
    description: "",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [],
    id: 23,
    hidden: true,
  },
  24: {
    wikiLink: "https://riskofrain2.gamepedia.com/Warbanner",
    name: "Warbanner",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/f/f0/Warbanner.png",
    shortDescription: "Drop a Warbanner on level up or starting the Teleporter event. Grants allies attack and movement speed.",
    description: "On level up or starting the Teleporter event, drop a banner that strengthens all allies within 16m (+8m per stack). Raise attack and movement speed by 30%.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.AI_BLACKLIST,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.AOE,
    ],
    id: 24,
    stats: [{
      stat: "Banner Radius",
      value: "16m",
      stackType: constant.StackType.LINEAR,
      stackValue: "+8m",
    }],
  },
  25: {
    wikiLink: "https://riskofrain2.gamepedia.com/Old_War_Stealthkit",
    name: "Old War Stealthkit",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/2/2c/Old_War_Stealthkit.png",
    shortDescription: "Turn invisible at low health.",
    description: "Falling below 25% health causes you to gain 40% movement speed and invisibility for 5s. Recharges every 30 seconds (-50% per stack).",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.SURVIVABILITY,
    ],
    id: 25,
    stats: [{
      stat: "Cooldown",
      value: "30s",
      stackType: constant.StackType.LINEAR,
      stackValue: "-50%",
    }],
  },
  26: {
    wikiLink: "https://riskofrain2.gamepedia.com/Harvester%27s_Scythe",
    name: "Harvester's Scythe",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/e/e1/Harvester%27s_Scythe.png",
    shortDescription: "'Critical Strikes' heal you.",
    description: "Gain 5% critical chance. Critical strikes heal for 8 (+4 per stack) health.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.CRITICAL_STRIKE,
      constant.Category.HEALING,
      constant.Category.ON_HIT_EFFECT,
    ],
    unlock: {
      name: "Prismatically Aligned",
      description: "Complete a Prismatic Trial.",
      link: "https://riskofrain2.gamepedia.com/Prismatically_Aligned",
    },
    id: 26,
    stats: [{
      stat: "Heal",
      value: "8",
      stackType: constant.StackType.LINEAR,
      stackValue: "+4",
    },
    {
      stat: "Critical Strike Chance",
      value: "5%",
      stackType: constant.StackType.NONE,
      stackValue: "+0%",
    }],
  },
  27: {
    wikiLink: "https://riskofrain2.gamepedia.com/Cautious_Slug",
    name: "Cautious Slug",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/c/c6/Cautious_Slug.png",
    shortDescription: "Rapidly heal outside of danger.",
    description: "Increases base health regeneration by +4 hp/s (+4 hp/s per stack) while outside of combat.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.HEALING,
    ],
    id: 27,
    stats: [{
      stat: "Health Regeneration",
      value: "4 hp/s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+4 hp/s",
    }],
  },
  29: {
    wikiLink: "https://riskofrain2.gamepedia.com/Personal_Shield_Generator",
    name: "Personal Shield Generator",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/e/e0/Personal_Shield_Generator.png",
    shortDescription: "Gain a recharging shield.",
    description: "Gain a shield equal to 8% (+8% per stack) of your maximum health. Recharges outside of danger.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.SHIELD,
      constant.Category.SURVIVABILITY,
    ],
    id: 29,
    stats: [{
      stat: "Shield",
      value: "8%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+8%",
    }],
  },
  30: {
    wikiLink: "https://riskofrain2.gamepedia.com/Fuel_Cell",
    name: "Fuel Cell",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/4/4d/Fuel_Cell.png",
    shortDescription: "Hold an additional equipment charge. Reduce equipment cooldown.",
    description: "Hold an additional equipment charge (+1 per stack). Reduce equipment cooldown by 15% (+15% per stack).",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.ON_KILL_EFFECT,
      constant.Tag.EQUIPMENT_RELATED,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.EQUIPMENT_RELATED,
    ],
    unlock: {
      name: "Experimenting",
      description: "Pick up 5 different types of Equipment.",
      link: "https://riskofrain2.gamepedia.com/Experimenting",
    },
    id: 30,
    stats: [{
      stat: "Charges",
      value: "1",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1",
      effectiveMax: 254,
    },
    {
      stat: "Cooldown",
      value: "15%",
      stackType: constant.StackType.EXPONENTIAL,
      stackValue: "+15%",
      effectiveMax: 43,
    }],
  },
  31: {
    wikiLink: "https://riskofrain2.gamepedia.com/N%27kuhana%27s_Opinion",
    name: "N'kuhana's Opinion",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/c/c9/N%27kuhana%27s_Opinion.png",
    shortDescription: "Fire haunting skulls when healed.",
    description: "Store 100% (+100% per stack) of healing as Soul Energy. After your Soul Energy reaches 10% of your maximum health, fire a skull that deals 250% of your Soul Energy as damage.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.TRACKING_PROJECTILE,
    ],
    unlock: {
      name: "Her Concepts",
      description: "Find the Altar to N'kuhana.",
      link: "https://riskofrain2.gamepedia.com/Her_Concepts",
    },
    id: 31,
    stats: [{
      stat: "Damage",
      value: "100%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+100%",
    }],
  },
  32: {
    wikiLink: "https://riskofrain2.gamepedia.com/Unstable_Tesla_Coil",
    name: "Unstable Tesla Coil",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/e/e4/Unstable_Tesla_Coil.png",
    shortDescription: "Shock all nearby enemies every 10 seconds.",
    description: "Fire out lightning that hits 3 (+2 per stack) enemies for 200% base damage every 0.5s. The Tesla Coil switches off every 10 seconds.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.TRACKING_PROJECTILE,
    ],
    unlock: {
      name: "Macho",
      description: "Deal 5000 damage in one shot.",
      link: "https://riskofrain2.gamepedia.com/Macho",
    },
    id: 32,
    stats: [{
      stat: "Targets",
      value: "3",
      stackType: constant.StackType.LINEAR,
      stackValue: "+2",
    }],
  },
  33: {
    wikiLink: "https://riskofrain2.gamepedia.com/Infusion",
    name: "Infusion",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/7/7d/Infusion.png",
    shortDescription: "Killing an enemy permanently increases your health, up to 100.",
    description: "Killing an enemy increases your health permanently by 1 (+1 per stack), up to a maximum of 100 (+100 per stack) health.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.HEALING,
      constant.Tag.ON_KILL_EFFECT,
    ],
    category: [
      constant.Category.SURVIVABILITY,
      constant.Category.HEALING,
    ],
    unlock: {
      name: "Slaughter",
      description: "Defeat 3000 enemies.",
      link: "https://riskofrain2.gamepedia.com/Slaughter",
    },
    id: 33,
    stats: [
      {
        stat: "Health Per Kill",
        value: "1",
        stackType: constant.StackType.LINEAR,
        stackValue: "+1",
      },
      {
        stat: "Health Increase",
        value: "100",
        stackType: constant.StackType.LINEAR,
        stackValue: "+100",
      }
    ],
  },
  35: {
    wikiLink: "https://riskofrain2.gamepedia.com/57_Leaf_Clover",
    name: "57 Leaf Clover",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/e/e5/57_Leaf_Clover.png",
    shortDescription: "Luck is on your side.",
    description: "All random effects are rolled +1 (+1 per stack) times for a favorable outcome.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.UTILITY,
    ],
    unlock: {
      name: "The Long Road",
      description: "Complete 20 stages in a single run.",
      link: "https://riskofrain2.gamepedia.com/The_Long_Road",
    },
    id: 35,
    stats: [{
      stat: "Luck",
      value: "1",
      stackType: constant.StackType.EXPONENTIAL,
      stackValue: "+1",
    }],
  },
  36: {
    wikiLink: "https://riskofrain2.gamepedia.com/Medkit",
    name: "Medkit",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/0/0f/Medkit.png",
    shortDescription: "Receive a delayed heal after taking damage.",
    description: "2 seconds after getting hurt, heal for 20 plus an additional 5% (+5% per stack) of maximum health.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.HEALING,
    ],
    unlock: {
      name: "Elite Slayer",
      description: "Defeat an Elite-type monster.",
      link: "https://riskofrain2.gamepedia.com/Elite_Slayer",
    },
    id: 36,
    stats: [
      {
        stat: "Heal",
        value: "5%",
        stackType: constant.StackType.LINEAR,
        stackValue: "+5%",
      }
    ],
  },
  37: {
    wikiLink: "https://riskofrain2.gamepedia.com/Bandolier",
    name: "Bandolier",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/6/62/Bandolier.png",
    shortDescription: "Chance on kill to drop an ammo pack that resets all skill cooldowns.",
    description: "18% (+10% per stack) chance on kill to drop an ammo pack that resets all skill cooldowns.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.ON_KILL_EFFECT,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.ON_KILL_EFFECT,
    ],
    id: 37,
    stats: [{
      stat: "Chance",
      value: "18%",
      stackType: constant.StackType.SPECIAL,
      stackValue: "+10%",
    }],
  },
  38: {
    wikiLink: "https://riskofrain2.gamepedia.com/Sentient_Meat_Hook",
    name: "Sentient Meat Hook",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/e/e7/Sentient_Meat_Hook.png",
    shortDescription: "Chance to hook all nearby enemies.",
    description: "20% (+20% per stack) chance on hit to fire homing hooks at up to 10 (+5 per stack) enemies for 100% TOTAL damage.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.ON_HIT_EFFECT,
      constant.Category.DAMAGE,
      constant.Category.TRACKING_PROJECTILE,
    ],
    unlock: {
      name: "Deja Vu?",
      description: "Loop back to the first stage.",
      link: "https://riskofrain2.gamepedia.com/Deja_Vu%3F",
    },
    id: 38,
    stats: [{
      stat: "Chance",
      value: "20%",
      stackType: constant.StackType.HYPERBOLIC,
      stackValue: "+20%",
    },
    {
      stat: "Targets",
      value: "10",
      stackType: constant.StackType.LINEAR,
      stackValue: "+5",
    }],
  },
  39: {
    wikiLink: "https://riskofrain2.gamepedia.com/Gasoline",
    name: "Gasoline",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/6/6e/Gasoline.png",
    shortDescription: "Killing enemies sets nearby enemies on fire.",
    description: "Killing an enemy ignites all enemies within 12m (+4m per stack) for 150% base damage. Additionally, enemies burn for 150% (+75% per stack) base damage. ",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.ON_KILL_EFFECT,
    ],
    category: [
      constant.Category.ON_KILL_EFFECT,
      constant.Category.DAMAGE,
      constant.Category.AOE,
    ],
    id: 39,
    stats: [{
      stat: "Damage",
      value: "150%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+75%",
    },
    {
      stat: "Radius",
      value: "12m",
      stackType: constant.StackType.LINEAR,
      stackValue: "+4m",
    }],
  },
  41: {
    wikiLink: "https://riskofrain2.gamepedia.com/Stun_Grenade",
    name: "Stun Grenade",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/2/27/Stun_Grenade.png",
    shortDescription: "Chance to stun on hit.",
    description: "5% (+5% on stack) chance on hit to stun enemies for 2 seconds.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.AI_BLACKLIST,
    ],
    category: [
      constant.Category.ON_HIT_EFFECT,
      constant.Category.UTILITY,
    ],
    id: 41,
    stats: [{
      stat: "Chance",
      value: "5%",
      stackType: constant.StackType.HYPERBOLIC,
      stackValue: "+5%",
    }],
  },
  42: {
    wikiLink: "https://riskofrain2.gamepedia.com/Bundle_of_Fireworks",
    name: "Bundle of Fireworks",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/3/3d/Bundle_of_Fireworks.png",
    shortDescription: "Activating an interactable launches fireworks at nearby enemies.",
    description: "Activating an interactable launches 8 (+4 per stack) fireworks that deal 300% base damage.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.AI_BLACKLIST,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.TRACKING_PROJECTILE,
    ],
    unlock: {
      name: "...Maybe One More",
      description: "Duplicate the same item 7 times in a row with a 3D Printer.",
      link: "https://riskofrain2.gamepedia.com/...Maybe_One_More",
    },
    id: 42,
    stats: [{
      stat: "Fireworks",
      value: "8",
      stackType: constant.StackType.LINEAR,
      stackValue: "+4",
    }],
  },
  43: {
    wikiLink: "https://riskofrain2.gamepedia.com/Shaped_Glass",
    name: "Shaped Glass",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/f/ff/Shaped_Glass.png",
    shortDescription: "Double your damage... BUT halve your health.",
    description: "Increase base damage by 100% (+100% per stack). Reduce maximum health by 50% (+50% per stack).",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
    ],
    id: 43,
    stats: [{
      stat: "Damage",
      value: "100%",
      stackType: constant.StackType.EXPONENTIAL,
      stackValue: "+100%",
    },
    {
      stat: "Total Health",
      value: "-50%",
      stackType: constant.StackType.EXPONENTIAL,
      stackValue: "-50%",
      effectiveMax: 127,
    }],
  },
  44: {
    wikiLink: "https://riskofrain2.gamepedia.com/Brittle_Crown",
    name: "Brittle Crown",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/a/ae/Brittle_Crown.png",
    shortDescription: "Gain gold on hit... BUT lose gold on getting hit.",
    description: "30% chance on hit to gain 2 gold (+2 per stack). Scales over time.\n\nLose gold on taking damage equal to 100% (+100% per stack) of the maximum health percentage you lost.",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.UTILITY,
    ],
    id: 44,
    stats: [{
      stat: "Gold Gained",
      value: "2",
      stackType: constant.StackType.LINEAR,
      stackValue: "+2",
    },
    {
      stat: "Gold Lost",
      value: "100%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+100%",
    }],
  },
  46: {
    wikiLink: "https://riskofrain2.gamepedia.com/Berzerker%27s_Pauldron",
    name: "Berzerker's Pauldron",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/a/a6/Berzerker%27s_Pauldron.png",
    shortDescription: "Enter a frenzy after killing 3 enemies in quick succession.",
    description: "Killing 3 enemies within 1 second sends you into a frenzy for 6s (+4s per stack). Increases movement speed by 50% and attack speed by 100%.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.ON_KILL_EFFECT,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.MOBILITY,
      constant.Category.ATTACK_SPEED,
      constant.Category.ON_KILL_EFFECT,
    ],
    unlock: {
      name: "Glorious Battle",
      description: "Charge the Teleporter with less than 10% health.",
      link: "https://riskofrain2.gamepedia.com/Glorious_Battle",
    },
    id: 46,
    stats: [{
      stat: "Frenzy Duration",
      value: "6s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+4s",
    }],
  },
  49: {
    wikiLink: "https://riskofrain2.gamepedia.com/Transcendence",
    name: "Transcendence",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/8/85/Transcendence.png",
    shortDescription: "Convert all your health into shield. Increase maximum health.",
    description: "Convert all but 1 health into regenerating shields. Gain 50% (+25% per stack) maximum health.",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.SHIELD,
      constant.Category.UTILITY,
    ],
    id: 49,
    stats: [{
      stat: "Maximum Health",
      value: "50%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+25%",
    }],
  },
  50: {
    wikiLink: "https://riskofrain2.gamepedia.com/Alien_Head",
    name: "Alien Head",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/2/25/Alien_Head.png",
    shortDescription: "Reduces cooldowns for your skills.",
    description: "Reduce skill cooldowns by 25% (+25% per stack).",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.COOLDOWN,
    ],
    id: 50,
    stats: [{
      stat: "Cooldown",
      value: "25%",
      stackType: constant.StackType.EXPONENTIAL,
      stackValue: "+25%",
      effectiveMax: 19,
    }],
  },
  51: {
    wikiLink: "https://riskofrain2.gamepedia.com/Soulbound_Catalyst",
    name: "Soulbound Catalyst",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/f/f1/Soulbound_Catalyst.png",
    shortDescription: "Kills reduce equipment cooldown.",
    description: "Kills reduce equipment cooldown by 4s (+2s per stack).",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.ON_KILL_EFFECT,
      constant.Tag.EQUIPMENT_RELATED,
    ],
    category: [
      constant.Category.COOLDOWN,
      constant.Category.EQUIPMENT_RELATED,
      constant.Category.ON_KILL_EFFECT,
    ],
    unlock: {
      name: "Newtist",
      description: "Discover and activate 8 unique Newt Altars.",
      link: "https://riskofrain2.gamepedia.com/Newtist",
    },
    id: 51,
    stats: [{
      stat: "Cooldown",
      value: "4s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+2s",
      effectiveMax: 69,
    }],
  },
  52: {
    wikiLink: "https://riskofrain2.gamepedia.com/Titanic_Knurl",
    name: "Titanic Knurl",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/9/9f/Titanic_Knurl.png",
    shortDescription: "Boosts health and regeneration.",
    description: "Increase maximum health by 40 (+40 per stack) and health regeneration by 1.6 (+1.6 per stack) health / second.",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Stone Titan",
      url: "https://riskofrain2.fandom.com/wiki/Stone_Titan"
    },
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.SURVIVABILITY,
      constant.Category.HEALING,
    ],
    id: 52,
    stats: [{
      stat: "Maximum Health",
      value: "40",
      stackType: constant.StackType.LINEAR,
      stackValue: "+40",
    },
    {
      stat: "Health Regeneration",
      value: "1.6",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1.6",
    }],
  },
  53: {
    wikiLink: "https://riskofrain2.gamepedia.com/Queen%27s_Gland",
    name: "Queen's Gland",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/0/0b/Queen%27s_Gland.png",
    shortDescription: "Recruit a Beetle Guard.",
    description: "Every 30 seconds, summon a Beetle Guard with bonus 300% damage and 100% health. Can have up to 1 (+1 per stack) Guards at a time.",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Beetle Queen",
      url: "https://riskofrain2.fandom.com/wiki/Beetle_Queen"
    },
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.MINION,
      constant.Category.UTILITY,
    ],
    id: 53,
    stats: [{
      stat: "Beetle Guard",
      value: "1",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1",
    }],
  },
  57: {
    wikiLink: "https://riskofrain2.gamepedia.com/Energy_Drink",
    name: "Energy Drink",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/7/7e/Energy_Drink.png",
    shortDescription: "Sprint faster.",
    description: "Sprint speed is improved by 25% (+25% per stack).",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.SPRINT_RELATED,
    ],
    category: [
      constant.Category.MOBILITY,
    ],
    id: 57,
    stats: [{
      stat: "Sprint Speed",
      value: "25%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+25%",
    }],
  },
  58: {
    wikiLink: "https://riskofrain2.gamepedia.com/Backup_Magazine",
    name: "Backup Magazine",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/f/f3/Backup_Magazine.png",
    shortDescription: "Add an extra charge of your Secondary skill.",
    description: "Add +1 (+1 per stack) charge of your Secondary skill.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.UTILITY,
    ],
    unlock: {
      name: "Flawless",
      description: "Fully charge a Teleporter without getting hit.",
      link: "https://riskofrain2.gamepedia.com/Flawless",
    },
    id: 58,
    stats: [{
      stat: "Charge",
      value: "1",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1",
    }],
  },
  59: {
    wikiLink: "https://riskofrain2.gamepedia.com/Sticky_Bomb",
    name: "Sticky Bomb",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/7/74/Sticky_Bomb.png",
    shortDescription: "Chance on hit to attach a bomb to enemies.",
    description: "5% (+5% per stack) chance on hit to attach a bomb to an enemy, detonating for 180% TOTAL damage.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.ON_HIT_EFFECT,
    ],
    id: 59,
    stats: [{
      stat: "Chance",
      value: "5%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+5%",
      effectiveMax: 20,
    }],
  },
  60: {
    wikiLink: "https://riskofrain2.gamepedia.com/Rusted_Key",
    name: "Rusted Key",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/9/9b/Rusted_Key.png",
    shortDescription: "Gain access to a Rusty Lockbox that contains a powerful item.",
    description: "A hidden cache containing an item (80%/20%) will appear in a random location on each stage. Opening the cache consumes this item.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.AI_BLACKLIST,
    ],
    category: [
      constant.Category.UTILITY,
    ],
    unlock: {
      name: "Keyed Up",
      description: "Defeat the Teleporter boss under 15 seconds.",
      link: "https://riskofrain2.gamepedia.com/Keyed_Up",
    },
    id: 60,
    stats: [],
  },
  61: {
    wikiLink: "https://riskofrain2.gamepedia.com/Armor-Piercing_Rounds",
    name: "Armor-Piercing Rounds",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/f/f0/Armor-Piercing_Rounds.png",
    shortDescription: "Deal extra damage to bosses.",
    description: "Deal an additional 20% damage (+20% per stack) to bosses.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.AI_BLACKLIST,
    ],
    category: [
      constant.Category.DAMAGE,
    ],
    unlock: {
      name: "Advancement",
      description: "Complete a Teleporter event.",
      link: "https://riskofrain2.gamepedia.com/Advancement",
    },
    id: 61,
    stats: [{
      stat: "Damage",
      value: "20%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+20%",
    }],
  },
  62: {
    wikiLink: "https://riskofrain2.gamepedia.com/Rose_Buckler",
    name: "Rose Buckler",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/2/2f/Rose_Buckler.png",
    shortDescription: "Reduce incoming damage while sprinting.",
    description: "Increase armor by 30 (+30 per stack) while sprinting.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.SPRINT_RELATED,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.SURVIVABILITY,
    ],
    id: 62,
    stats: [{
      stat: "Armour",
      value: "30",
      stackType: constant.StackType.LINEAR,
      stackValue: "+30",
    }],
  },
  63: {
    wikiLink: "https://riskofrain2.gamepedia.com/Runald%27s_Band",
    name: "Runald's Band",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/0/05/Runald%27s_Band.png",
    shortDescription: "High damage hits also blasts enemies with runic ice. Recharges over time.",
    description: "Hits that deal more than 400% damage also blasts enemies with a runic ice blast, slowing them by 80% for 3s (+3s per stack) and dealing 250% (+250% per stack) TOTAL damage. Recharges every 10 seconds.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.ON_HIT_EFFECT,
    ],
    unlock: {
      name: "Death Do Us Part",
      description: "Discover the hidden chamber in the Abandoned Aqueduct.",
      link: "https://riskofrain2.gamepedia.com/Death_Do_Us_Part",
    },
    id: 63,
    stats: [
      {
        stat: "Duration",
        value: "3s",
        stackType: constant.StackType.LINEAR,
        stackValue: "+3s",
      },
      {
        stat: "Damage",
        value: "250%",
        stackType: constant.StackType.LINEAR,
        stackValue: "+250%",
      }
    ],
  },
  64: {
    wikiLink: "https://riskofrain2.gamepedia.com/Kjaro%27s_Band",
    name: "Kjaro's Band",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/e/eb/Kjaro%27s_Band.png",
    shortDescription: "High damage hits also blasts enemies with a runic flame tornado. Recharges over time.",
    description: "Hits that deal more than 400% damage also blasts enemies with a runic flame tornado, dealing 300% (+300% per stack) TOTAL damage over time. Recharges every 10 seconds.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.ON_HIT_EFFECT,
    ],
    unlock: {
      name: "Death Do Us Part",
      description: "Discover the hidden chamber in the Abandoned Aqueduct.",
      link: "https://riskofrain2.gamepedia.com/Death_Do_Us_Part",
    },
    id: 64,
    stats: [
      {
        stat: "Damage",
        value: "300%",
        stackType: constant.StackType.LINEAR,
        stackValue: "+300%",
      }
    ],
  },
  65: {
    wikiLink: "https://riskofrain2.gamepedia.com/Chronobauble",
    name: "Chronobauble",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/3/38/Chronobauble.png",
    shortDescription: "Slow enemies on hit.",
    description: "Slow enemies on hit for -60% movement speed for 2s (+2s per stack).",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.ON_HIT_EFFECT,
    ],
    id: 65,
    stats: [{
      stat: "Slow Duration",
      value: "2s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+2s",
    }],
  },
  66: {
    wikiLink: "https://riskofrain2.gamepedia.com/Dio%27s_Best_Friend",
    name: "Dio's Best Friend",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/d/dc/Dio%27s_Best_Friend.png",
    shortDescription: "Cheat death. Consumed on use.",
    description: "Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.SURVIVABILITY,
    ],
    unlock: {
      name: "The Lone Survivor",
      description: "Stay alive for 30 consecutive minutes.",
      link: "https://riskofrain2.gamepedia.com/The_Lone_Survivor",
    },
    id: 66,
    stats: [{
      stat: "Uses",
      value: "1",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1",
    }],
  },
  68: {
    wikiLink: "https://riskofrain2.gamepedia.com/Hardlight_Afterburner",
    name: "Hardlight Afterburner",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/2/20/Hardlight_Afterburner.png",
    shortDescription: "Add 2 extra charges of your Utility skill. Reduce Utility skill cooldown.",
    description: "Add +2 (+2 per stack) charges of your Utility skill. Reduces Utility skill cooldown by 33%.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.COOLDOWN,
    ],
    id: 68,
    stats: [{
      stat: "Charges",
      value: "2",
      stackType: constant.StackType.LINEAR,
      stackValue: "+2",
    }],
  },
  69: {
    wikiLink: "https://riskofrain2.gamepedia.com/Wake_of_Vultures",
    name: "Wake of Vultures",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/f/f8/Wake_of_Vultures.png",
    shortDescription: "Temporarily steal the power of slain elites.",
    description: "Gain the power of any killed elite monster for 8s (+5s per stack).",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.UTILITY,
      constant.Tag.AI_BLACKLIST,
      constant.Tag.ON_KILL_EFFECT,
    ],
    category: [
      constant.Category.ON_KILL_EFFECT,
      constant.Category.DAMAGE,
    ],
    id: 69,
    stats: [{
      stat: "Duration",
      value: "8s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+5s",
    }],
  },
  70: {
    wikiLink: "https://riskofrain2.gamepedia.com/Brainstalks",
    name: "Brainstalks",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/c/c0/Brainstalks.png",
    shortDescription: "Skills have NO cooldowns for a short period after killing an elite.",
    description: "Upon killing an elite monster, enter a frenzy for 4s (+4s per stack) where skills have no cooldowns.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.AI_BLACKLIST,
      constant.Tag.ON_KILL_EFFECT,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.ON_KILL_EFFECT,
    ],
    unlock: {
      name: "Decide",
      description: "Defeat an Elite boss on Monsoon difficulty.",
      link: "https://riskofrain2.gamepedia.com/Deicide",
    },
    id: 70,
    stats: [{
      stat: "Duration",
      value: "4s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+4s",
    }],
  },
  71: {
    wikiLink: "https://riskofrain2.gamepedia.com/Corpsebloom",
    name: "Corpsebloom",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/3/31/Corpsebloom.png",
    shortDescription: "Double your healing... BUT it's applied over time.",
    description: "Heal +100% (+100% per stack) more. All healing is applied over time. Can heal for a maximum of 10% (reduced by 50% per stack) of your health per second.",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.HEALING,
    ],
    id: 71,
    stats: [{
      stat: "Heal",
      value: "100%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+100%",
    },
    {
      stat: "Maximum Heal",
      value: "10%",
      stackType: constant.StackType.EXPONENTIAL,
      stackValue: "-50%",
      effectiveMax: 7,
    }],
  },
  74: {
    wikiLink: "https://riskofrain2.gamepedia.com/Gesture_of_the_Drowned",
    name: "Gesture of the Drowned",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/c/c9/Gesture_of_the_Drowned.png",
    shortDescription: "Dramatically reduce Equipment cooldown... BUT it automatically activates.",
    description: "Reduce Equipment cooldown by 50% (+15% per stack). Forces your Equipment to activate whenever it is off cooldown.",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.EQUIPMENT_RELATED,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.COOLDOWN,
    ],
    unlock: {
      name: "The Demons And The Crabs",
      description: "Kill 20 Hermit Crabs by chasing them off the edge of the map.",
      link: "https://riskofrain2.gamepedia.com/The_Demons_And_The_Crabs",
    },
    id: 74,
    stats: [{
      stat: "Cooldown",
      value: "-50%",
      stackType: constant.StackType.EXPONENTIAL,
      stackValue: "-15%",
      effectiveMax: 40,
    }],
  },
  75: {
    wikiLink: "https://riskofrain2.gamepedia.com/Rejuvenation_Rack",
    name: "Rejuvenation Rack",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/0/0a/Rejuvenation_Rack.png",
    shortDescription: "Double the strength of healing.",
    description: "Heal +100% (+100% per stack) more.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.HEALING,
    ],
    unlock: {
      name: "Naturopath",
      description: "Without healing, reach and complete the 3rd Teleporter event.",
      link: "https://riskofrain2.gamepedia.com/Naturopath",
    },
    id: 75,
    stats: [{
      stat: "Heal",
      value: "100%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+100%",
    }],
  },
  76: {
    wikiLink: "https://riskofrain2.gamepedia.com/Wax_Quail",
    name: "Wax Quail",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/6/6c/Wax_Quail.png",
    shortDescription: "Jumping while sprinting boosts you forward.",
    description: "Jumping while sprinting boosts you forward by 10m (+10m per stack).",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.SPRINT_RELATED,
    ],
    category: [
      constant.Category.MOBILITY,
    ],
    unlock: {
      name: "Going Fast Recommended",
      description: "Reach +300% movespeed (includes sprinting).",
      link: "https://riskofrain2.gamepedia.com/Going_Fast_Recommended",
    },
    id: 76,
    stats: [{
      stat: "Boost",
      value: "10m",
      stackType: constant.StackType.LINEAR,
      stackValue: "+10m",
    }],
  },
  78: {
    wikiLink: "https://riskofrain2.gamepedia.com/Old_Guillotine",
    name: "Old Guillotine",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/8/8d/Old_Guillotine.png",
    shortDescription: "Instantly kill low health Elite monsters.",
    description: "Instantly kill Elite monsters below 13% (+13% per stack) health.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.AI_BLACKLIST,
    ],
    category: [
      constant.Category.ON_HIT_EFFECT,
      constant.Category.DAMAGE,
    ],
    unlock: {
      name: "Cut Down",
      description: "Defeat 500 elite monsters.",
      link: "https://riskofrain2.gamepedia.com/Cut_Down",
    },
    id: 78,
    stats: [{
      stat: "Threshold",
      value: "13%",
      stackType: constant.StackType.HYPERBOLIC,
      stackValue: "+13%",
    }],
  },
  79: {
    wikiLink: "https://riskofrain2.gamepedia.com/War_Horn",
    name: "War Horn",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/9/9c/War_Horn.png",
    shortDescription: "Activating your Equipment gives you a burst of attack speed.",
    description: "Activating your Equipment gives you +70% attack speed for 8s (+4s per stack).",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.EQUIPMENT_RELATED,
    ],
    category: [
      constant.Category.ATTACK_SPEED,
      constant.Category.EQUIPMENT_RELATED,
    ],
    unlock: {
      name: "Warmonger",
      description: "Complete 3 Combat Shrines in a single stage.",
      link: "https://riskofrain2.gamepedia.com/Warmonger",
    },
    id: 79,
    stats: [{
      stat: "Duration",
      value: "8s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+4s",
    }],
  },
  80: {
    wikiLink: "https://riskofrain2.gamepedia.com/Aegis",
    name: "Aegis",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/e/e5/Aegis.png",
    shortDescription: "Healing past full grants you a temporary barrier.",
    description: "Healing past full grants you a temporary barrier for 50% (+50% per stack) of the amount you healed.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.SHIELD,
    ],
    id: 80,
    stats: [{
      stat: "Healing Converted",
      value: "50%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+50%",
    }],
  },
  82: {
    wikiLink: "https://riskofrain2.gamepedia.com/Halcyon_Seed",
    name: "Halcyon Seed",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/e/e6/Halcyon_Seed.png",
    shortDescription: "Summon Aurelionite during the Teleporter event.",
    description: "Summon Aurelionite during the teleporter event. It has 100% (+50% per stack) damage and 100% (+100% per stack) health.",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Aurelionite",
      url: "https://riskofrain2.fandom.com/wiki/Aurelionite"
    },
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.WORLD_UNIQUE,
    ],
    category: [
      constant.Category.MINION,
    ],
    id: 82,
    stats: [
      {
        stat: "Damage",
        value: "100%",
        stackType: constant.StackType.LINEAR,
        stackValue: "+50%",
      },
      {
        stat: "Health",
        value: "100%",
        stackType: constant.StackType.LINEAR,
        stackValue: "+100%",
      }
    ],
  },
  83: {
    wikiLink: "https://riskofrain2.gamepedia.com/Little_Disciple",
    name: "Little Disciple",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/0/08/Little_Disciple.png",
    shortDescription: "Fire tracking wisps while sprinting.",
    description: "Fire a tracking wisp for 300% (+300% per stack) damage. Fires every 1.6 seconds while sprinting. Fire rate increases with movement speed.",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Grovetender",
      url: "https://riskofrain2.fandom.com/wiki/Grovetender"
    },
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.SPRINT_RELATED,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.TRACKING_PROJECTILE,
    ],
    id: 83,
    stats: [{
      stat: "Damage",
      value: "300%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+300%",
    }],
  },
  84: {
    wikiLink: "https://riskofrain2.gamepedia.com/Topaz_Brooch",
    name: "Topaz Brooch",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/c/c5/Topaz_Brooch.png",
    shortDescription: "Gain a temporary barrier on kill.",
    description: "Gain a temporary barrier on kill for 15 health (+15 per stack).",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.HEALING,
      constant.Tag.ON_KILL_EFFECT,
    ],
    category: [
      constant.Category.SHIELD,
      constant.Category.ON_KILL_EFFECT,
    ],
    id: 84,
    stats: [{
      stat: "Shield",
      value: "15",
      stackType: constant.StackType.LINEAR,
      stackValue: "+15",
    }],
  },
  85: {
    wikiLink: "https://riskofrain2.gamepedia.com/Shattering_Justice",
    name: "Shattering Justice",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/2/2d/Shattering_Justice.png",
    shortDescription: "Reduce the armor of enemies after repeatedly striking them.",
    description: "After hitting an enemy 5 times, reduce their armor by 60 for 8 (+8 per stack) seconds.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
    ],
    id: 85,
    stats: [{
      stat: "Duration",
      value: "8s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+8s",
    }],
  },
  86: {
    wikiLink: "https://riskofrain2.gamepedia.com/Lepton_Daisy",
    name: "Lepton Daisy",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/7/73/Lepton_Daisy.png",
    shortDescription: "Periodically release a healing nova during the Teleporter event and 'Holdout Zones' such as the Void Fields.",
    description: "Release a healing nova during the Teleporter event, healing all nearby allies for 50% of their maximum health. Occurs 1 (+1 per stack) times.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.HEALING,
      constant.Tag.AI_BLACKLIST,
    ],
    category: [
      constant.Category.HEALING,
    ],
    id: 86,
    stats: [{
      stat: "Healing Nova",
      value: "1",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1",
    }],
  },
  87: {
    wikiLink: "https://riskofrain2.gamepedia.com/Focus_Crystal",
    name: "Focus Crystal",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/5/59/Focus_Crystal.png",
    shortDescription: "Deal bonus damage to nearby enemies.",
    description: "Increase damage to enemies within 13m by 20% (+20% per stack).",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
    ],
    id: 87,
    stats: [{
      stat: "Damage",
      value: "20%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+20%",
    }],
  },
  88: {
    wikiLink: "https://riskofrain2.gamepedia.com/Strides_of_Heresy",
    name: "Strides of Heresy",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/1/1a/Strides_of_Heresy.png",
    shortDescription: "Replace your Utility Skill with 'Shadowfade'.",
    description: "Replace your Utility Skill with Shadowfade.\n\nFade away, becoming intangible and gaining +30% movement speed. Heal for 25% (+25% per stack) of your maximum health. Lasts 3 (+3 per stack) seconds.",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.HEALING,
    ],
    unlock: {
      name: "Blockade Breaker",
      description: "Kill 15 boss monsters in a single run.",
      link: "https://riskofrain2.gamepedia.com/Blockade_Breaker",
    },
    id: 88,
    stats: [{
      stat: "Heal",
      value: "25%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+25%",
      effectiveMax: 4,
    },
    {
      stat: "Duration",
      value: "3s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+3s",
    }],
  },
  90: {
    wikiLink: "https://riskofrain2.gamepedia.com/Razorwire",
    name: "Razorwire",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/a/ac/Razorwire.png",
    shortDescription: "Retaliate in a burst of razors on taking damage.",
    description: "Getting hit causes you to explode in a burst of razors, dealing 160% damage. Hits up to 5 (+2 per stack) targets in a 25m (+10m per stack) radius.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.AI_BLACKLIST,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.TRACKING_PROJECTILE,
    ],
    id: 90,
    stats: [{
      stat: "Targets",
      value: "5",
      stackType: constant.StackType.LINEAR,
      stackValue: "+2",
      effectiveMax: 21,
    },
    {
      stat: "Radius",
      value: "25m",
      stackType: constant.StackType.LINEAR,
      stackValue: "+10m",
    }],
  },
  91: {
    wikiLink: "https://riskofrain2.gamepedia.com/Bison_Steak",
    name: "Bison Steak",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/9f/Bison_Steak.png",
    shortDescription: "Gain 25 max health.",
    description: "Increases maximum health by 25 (+25 per stack).",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.SURVIVABILITY,
      constant.Category.UTILITY,
    ],
    id: 91,
    stats: [{
      stat: "Duration",
      value: "3s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+3s",
    }],
  },
  92: {
    wikiLink: "https://riskofrain2.gamepedia.com/Pearl",
    name: "Pearl",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/7/73/Pearl.png",
    shortDescription: "Increase your maximum health.",
    description: "Increases maximum health by 10% (+10% per stack).",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Cleansing Pool",
      url: "https://riskofrain2.fandom.com/wiki/Cleansing_Pool",
    },
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.WORLD_UNIQUE,
    ],
    category: [
      constant.Category.SURVIVABILITY,
    ],
    id: 92,
    stats: [{
      stat: "Maximum Health",
      value: "10%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+10%",
    }],
  },
  93: {
    wikiLink: "https://riskofrain2.gamepedia.com/Irradiant_Pearl",
    name: "Irradiant Pearl",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/e/ef/Irradiant_Pearl.png",
    shortDescription: "Increase ALL of your stats.",
    description: "Increases ALL stats by 10% (+10% per stack).",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Cleansing Pool",
      url: "https://riskofrain2.fandom.com/wiki/Cleansing_Pool"
    },
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.HEALING,
      constant.Tag.UTILITY,
      constant.Tag.WORLD_UNIQUE,
    ],
    category: [
      constant.Category.HEALING,
      constant.Category.SURVIVABILITY,
      constant.Category.MOBILITY,
      constant.Category.ATTACK_SPEED,
      constant.Category.CRITICAL_STRIKE,
      constant.Category.DAMAGE,
    ],
    id: 93,
    stats: [{
      stat: "Maximum Health",
      value: "10%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+10%",
    },
    {
      stat: "Health Regen",
      value: "10%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+10%",
    },
    {
      stat: "Movement Speed",
      value: "10%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+10%",
    },
    {
      stat: "Damage",
      value: "10%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+10%",
    },
    {
      stat: "Attack Speed",
      value: "10%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+10%",
    },
    {
      stat: "Critical Strike Chance",
      value: "10%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+10%",
    },
    {
      stat: "Armour",
      value: "10%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+10%",
    }],
  },
  94: {
    wikiLink: "https://riskofrain2.gamepedia.com/Ghor%27s_Tome",
    name: "Ghor's Tome",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/9/9a/Ghor%27s_Tome.png",
    shortDescription: "Chance on kill to drop a treasure.",
    description: "4% (+4% on stack) chance on kill to drop a treasure worth $25. Scales over time.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.ON_KILL_EFFECT,
    ],
    category: [
      constant.Category.ON_KILL_EFFECT,
      constant.Category.MISC,
    ],
    id: 94,
    stats: [{
      stat: "Drop Chance",
      value: "4%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+4%",
      effectiveMax: 25,
    }],
  },
  95: {
    wikiLink: "https://riskofrain2.gamepedia.com/Resonance_Disc",
    name: "Resonance Disc",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/8/8d/Resonance_Disc.png",
    shortDescription: "Obtain a Resonance Disc charged by killing enemies. Fires automatically when fully charged.",
    description: "Killing enemies charges the Resonance Disc. The disc launches itself toward a target for 300% base damage (+300% per stack), piercing all enemies it doesn't kill, and then explodes for 1000% base damage (+1000% per stack). Returns to the user, striking all enemies along the way for 300% base damage (+300% per stack).",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.ON_KILL_EFFECT,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.ON_KILL_EFFECT,
    ],
    id: 95,
    stats: [{
      stat: "Damage",
      value: "300%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+300%",
    },
    {
      stat: "Explosion Damage",
      value: "1000%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1000%",
    }],
  },
  96: {
    wikiLink: "https://riskofrain2.gamepedia.com/Visions_of_Heresy",
    name: "Visions of Heresy",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/3/31/Visions_of_Heresy.png",
    shortDescription: "Replace your Primary Skill with 'Hungering Gaze'.",
    description: "Replace your Primary Skill with Hungering Gaze.\n\nFire a flurry of tracking shards that detonate after a delay, dealing 120% base damage. Hold up to 12 charges (+12 per stack) that reload after 2 seconds (+2 per stack).",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.TRACKING_PROJECTILE,
    ],
    unlock: {
      name: "Blockade Breaker",
      description: "Kill 15 boss monsters in a single run.",
      link: "https://riskofrain2.gamepedia.com/Blockade_Breaker",
    },
    id: 96,
    stats: [{
      stat: "Charges",
      value: "12",
      stackType: constant.StackType.LINEAR,
      stackValue: "+12",
    },
    {
      stat: "Reload",
      value: "2s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+2s",
    }],
  },
  97: {
    wikiLink: "https://riskofrain2.gamepedia.com/Genesis_Loop",
    name: "Genesis Loop",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/c/c8/Genesis_Loop.png",
    shortDescription: "Fire an electric nova at low health.",
    description: "Falling below 25% health causes you to explode, dealing 6000% base damage. Recharges every 30 / (2 +1 per stack) seconds.",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Wandering Vagrant",
      url: "https://riskofrain2.fandom.com/wiki/Wandering_Vagrant"
    },
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.AOE,
    ],
    id: 97,
    stats: [{
      stat: "Recharge Speed",
      value: "100%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+50%",
    }],
  },
  98: {
    wikiLink: "https://riskofrain2.gamepedia.com/Beads_of_Fealty",
    name: "Beads of Fealty",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/0/07/Beads_of_Fealty.png",
    shortDescription: "Seems to do nothing... but...",
    description: "Celestial Portals will take the player to \"A Moment, Whole\" instead of \"A Moment, Fractured\".",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.LUNAR,
    ],
    category: [
      constant.Category.MISC,
    ],
    id: 98,
  },
  101: {
    wikiLink: "https://riskofrain2.gamepedia.com/Artifact_Key",
    name: "Artifact Key",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/1/17/Artifact_Key.png",
    shortDescription: "A stone shard with immense power.",
    description: "They are used to deal damage to the Artifact Reliquary, who is otherwise completely impervious to normal damage.",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Bulwark's Ambry",
      url: "https://riskofrain2.fandom.com/wiki/Bulwark%27s_Ambry"
    },
    tag: [
      constant.Tag.WORLD_UNIQUE,
    ],
    category: [
      constant.Category.MISC,
    ],
    id: 101,
    hidden: true,
  },
  102: {
    wikiLink: "https://riskofrain2.gamepedia.com/Repulsion_Armor_Plate",
    name: "Repulsion Armor Plate",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/a/aa/Repulsion_Armor_Plate.png",
    shortDescription: "Receive flat damage reduction from all attacks.",
    description: "Reduce all incoming damage by 5 (+5 per stack). Cannot be reduced below 1.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.SURVIVABILITY,
    ],
    id: 102,
    stats: [{
      stat: "Damage Reduction",
      value: "5",
      stackType: constant.StackType.LINEAR,
      stackValue: "+5",
    }],
  },
  103: {
    wikiLink: "https://riskofrain2.gamepedia.com/Squid_Polyp",
    name: "Squid Polyp",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/d/de/Squid_Polyp.png",
    shortDescription: "Activating an interactable summons a Squid Turret nearby.",
    description: "Activating an interactable summons a Squid Turret that attacks nearby enemies at 100% (+100% per stack) attack speed. Lasts 30 seconds.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.AI_BLACKLIST,
    ],
    category: [
      constant.Category.MINION,
    ],
    unlock: {
      name: "Automation Activation",
      description: "Activate 6 turrets in a single run.",
      link: "https://riskofrain2.gamepedia.com/Automation_Activation",
    },
    id: 103,
    stats: [{
      stat: "Attack Speed",
      value: "100%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+100%",
    }],
  },
  104: {
    wikiLink: "https://riskofrain2.gamepedia.com/Death_Mark",
    name: "Death Mark",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/3/34/Death_Mark.png",
    shortDescription: "Enemies with 4 or more debuffs are marked for death, taking bonus damage.",
    description: "Enemies with 4 or more debuffs are marked for death, increasing damage taken by 50% from all sources for 7 (+7 per stack) seconds.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
    ],
    id: 104,
    stats: [
      {
        stat: "Duration",
        value: "7s",
        stackType: constant.StackType.LINEAR,
        stackValue: "+7s",
      }
    ],
  },
  105: {
    wikiLink: "https://riskofrain2.gamepedia.com/Interstellar_Desk_Plant",
    name: "Interstellar Desk Plant",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/1/1e/Interstellar_Desk_Plant.png",
    shortDescription: "Plant a healing fruit on kill.",
    description: "On kill, plant a healing fruit seed that grows into a plant after 5 seconds.\n\nThe plant heals for 10% of maximum health every second to all allies within 5m (+5.0m per stack). Lasts 10 seconds.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.HEALING,
      constant.Category.AOE,
    ],
    id: 105,
    stats: [{
      stat: "Radius",
      value: "5m",
      stackType: constant.StackType.LINEAR,
      stackValue: "+5m",
    }],
  },
  106: {
    wikiLink: "https://riskofrain2.gamepedia.com/Ancestral_Incubator",
    name: "Ancestral Incubator",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/5/51/Ancestral_Incubator.png",
    shortDescription: "Chance on kill to summon an Ancestral Pod.",
    description: "7% chance (+1% per stack) on kill to summon an Ancestral Pod that distracts enemies.\n\nOnce it fully grows, it will hatch into an allied Parent with 100% health (+100% per stack).",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Grandparent",
      url: "https://riskofrain2.fandom.com/wiki/Grandparent"
    },
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.ON_KILL_EFFECT,
    ],
    category: [],
    id: 106,
    stats: [{
      stat: "Chance",
      value: "7%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1%",
    },
    {
      stat: "Parent Health",
      value: "100%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+100%",
    }],
    hidden: true,
  },
  107: {
    wikiLink: "https://riskofrain2.gamepedia.com/Focused_Convergence",
    name: "Focused Convergence",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/2/2c/Focused_Convergence.png",
    shortDescription: "Increase the speed of Teleporter charging... BUT reduce the size of the zone.",
    description: "Teleporters charge 30% (+30% per stack) faster, but the size of the Teleporter zone is 50% (-50% per stack) smaller.",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.AI_BLACKLIST,
    ],
    category: [
      constant.Category.UTILITY,
    ],
    unlock: {
      name: "Never Back Down",
      description: "In 4 consecutive stages don’t leave the teleporter radius until it is fully charged.",
      link: "https://riskofrain2.gamepedia.com/Never_Back_Down",
    },
    id: 107,
    stats: [{
      stat: "Charge Speed",
      value: "30%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+30%",
    },
    {
      stat: "Teleporter Zone",
      value: "50%",
      stackType: constant.StackType.HYPERBOLIC,
      stackValue: "-50%",
    }],
  },
  111: {
    wikiLink: "https://riskofrain2.gamepedia.com/Defensive_Microbots",
    name: "Defensive Microbots",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/d/dd/Defensive_Microbots.png",
    shortDescription: "Shoot down nearby projectiles. Recharge rate scales with attack speed.",
    description: "Shoot down 1 (+1 per stack) projectiles within 20m every 0.5 seconds. Recharge rate scales with attack speed.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.WORLD_UNIQUE,
    ],
    category: [
      constant.Category.SURVIVABILITY,
    ],
    id: 111,
    stats: [
      {
        stat: "Projectiles Shot",
        value: "1",
        stackType: constant.StackType.LINEAR,
        stackValue: "+1",
      }
    ],
  },
  112: {
    wikiLink: "https://riskofrain2.gamepedia.com/Molten_Perforator",
    name: "Molten Perforator",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/7/71/Molten_Perforator.png",
    shortDescription: "Chance on hit to fire magma balls.",
    description: "10% chance on hit to call forth 3 magma balls from an enemy, dealing 300% (+300% per stack) damage each.",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Magma Worm",
      url: "https://riskofrain2.fandom.com/wiki/Magma_Worm"
    },
    tag: [
      constant.Tag.BOSS,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.AOE,
    ],
    id: 112,
    stats: [{
      stat: "Damage",
      value: "300%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+300%",
    }],
  },
  113: {
    wikiLink: "https://riskofrain2.gamepedia.com/Shatterspleen",
    name: "Shatterspleen",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/c/cd/Shatterspleen.png",
    shortDescription: "Critical strikes always bleed enemies. Bleeding enemies now explode.",
    description: "Gain 5% critical chance. Critical Strikes bleed enemies for 240% base damage. Bleeding enemies explode on death for 400% (+400% per stack) damage, plus an additional 15% (+15% per stack) of their maximum health.",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Imp Overlord",
      url: "https://riskofrain2.fandom.com/wiki/Imp_Overlord"
    },
    tag: [
      constant.Tag.BOSS,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.CRITICAL_STRIKE,
      constant.Category.ON_HIT_EFFECT,
      constant.Category.ON_KILL_EFFECT,
    ],
    id: 113,
    stats: [{
      stat: "Damage (Base)",
      value: "400%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+400%",
    },
    {
      stat: "Damage (Max HP)",
      value: "15%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+15%",
    },
    {
      stat: "Crit Chance",
      value: "5%",
      stackType: constant.StackType.NONE,
      stackValue: "+0%",
    }],
  },
  114: {
    wikiLink: "https://riskofrain2.gamepedia.com/Mired_Urn",
    name: "Mired Urn",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/6/62/Mired_Urn.png",
    shortDescription: "Siphon health from nearby enemies while in combat.",
    description: "While in combat, the nearest 1 (+1 per stack) enemies to you within 13m will be 'tethered' to you, dealing 100% damage per second, applying tar, and healing you for 100% of the damage dealt.",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Clay Dunestrider",
      url: "https://riskofrain2.fandom.com/wiki/Clay_Dunestrider"
    },
    tag: [
      constant.Tag.BOSS,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.HEALING,
    ],
    id: 114,
    stats: [{
      stat: "Tethered Enemies",
      value: "1",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1",
    }],
  },
  115: {
    wikiLink: "https://riskofrain2.gamepedia.com/Defiant_Gouge",
    name: "Defiant Gouge",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/b/b5/Defiant_Gouge.png",
    shortDescription: "Using a Shrine summons enemies nearby.",
    description: "Using a Shrine summons enemies (stronger per stack) nearby. Scales over time.",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.AI_BLACKLIST,
    ],
    category: [
      constant.Category.UTILITY,
    ],
    stats: [{
      stat: "Enemy Difficulty",
      value: "100%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+100%",
    }],
    id: 115,
  },
  116: {
    wikiLink: "https://riskofrain2.gamepedia.com/Mercurial_Rachis",
    name: "Mercurial Rachis",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/2/25/Mercurial_Rachis.png",
    shortDescription: "Randomly create a Ward of Power. ALL characters deal bonus damage while in the Ward.",
    description: "Creates a Ward of Power in a random location nearby that buffs both enemies and allies within 16m (+50% per stack), causing them to deal +50% damage.",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.DAMAGE,
    ],
    id: 116,
    stats: [{
      stat: "Range",
      value: "16m",
      stackType: constant.StackType.LINEAR,
      stackValue: "+50%",
    }],
  },
  117: {
    wikiLink: "https://riskofrain2.gamepedia.com/Item_Scrap,_White",
    name: "Item Scrap, White",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/99/Item_Scrap%2C_White.png",
    shortDescription: "Does nothing. Prioritized when used with 3D Printers.",
    description: "Does nothing. Prioritized when used with 3D Printers.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.WORLD_UNIQUE,
      constant.Tag.SCRAP,
    ],
    category: [
      constant.Category.UTILITY,
    ],
    id: 117,
    stats: [],
  },
  118: {
    wikiLink: "https://riskofrain2.gamepedia.com/Item_Scrap,_Green",
    name: "Item Scrap, Green",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/01/Item_Scrap%2C_Green.png",
    shortDescription: "Does nothing. Prioritized when used with 3D Printers.",
    description: "Does nothing. Prioritized when used with 3D Printers.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.WORLD_UNIQUE,
      constant.Tag.SCRAP,
    ],
    category: [
      constant.Category.UTILITY,
    ],
    id: 118,
    stats: [],
  },
  119: {
    wikiLink: "https://riskofrain2.gamepedia.com/Item_Scrap,_Red",
    name: "Item Scrap, Red",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/4/48/Item_Scrap%2C_Red.png",
    shortDescription: "Does nothing. Prioritized when used with 3D Printers.",
    description: "Does nothing. Prioritized when used with 3D Printers.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.WORLD_UNIQUE,
      constant.Tag.SCRAP,
    ],
    category: [
      constant.Category.UTILITY,
    ],
    id: 119,
    stats: [],
  },
  120: {
    wikiLink: "https://riskofrain2.gamepedia.com/Item_Scrap,_Yellow",
    name: "Item Scrap, Yellow",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/7f/Item_Scrap%2C_Yellow.png",
    shortDescription: "Does nothing. Prioritized when used with 3D Printers.",
    description: "Does nothing. Prioritized when used with 3D Printers.",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Scrapper",
      url: "https://riskofrain2.fandom.com/wiki/Scrapper"
    },
    tag: [
      constant.Tag.WORLD_UNIQUE,
      constant.Tag.SCRAP,
    ],
    category: [
      constant.Category.UTILITY,
    ],
    id: 120,
    stats: [],
  },
  121: {
    wikiLink: "https://riskofrain2.gamepedia.com/Purity",
    name: "Purity",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/a/a2/Purity.png",
    shortDescription: "Reduce your skill cooldowns by 2 seconds. You are unlucky.",
    description: "All skill cooldowns are reduced by 2 (+1 per stack) seconds. All random effects are rolled +1 (+1 per stack) times for an unfavorable outcome.",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.UTILITY,
      constant.Tag.AI_BLACKLIST,
    ],
    category: [
      constant.Category.UTILITY,
    ],
    unlock: {
      name: "The Calm",
      description: "Beat the game on Monsoon difficulty.",
      link: "https://riskofrain2.gamepedia.com/The_Calm",
    },
    id: 121,
    stats: [{
      stat: "Cooldown Reduction",
      value: "2s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1s",
    },
    {
      stat: "Unfavourable Rolls",
      value: "1",
      stackType: constant.StackType.LINEAR,
      stackValue: "1",
    }],
  },
  122: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Hooks_of_Heresy",
    name: "Hooks of Heresy",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/66/Hooks_of_Heresy.png",
    shortDescription: "Replace your Secondary Skill with 'Slicing Maelstrom'.",
    description: "Replace your Secondary Skill with Slicing Maelstrom.\n\nCharge up a projectile that deals 175% damage per second to nearby enemies, exploding after 3 seconds to deal 700% damage and root enemies for 3 (+3 per stack) seconds. Recharges after 5 (+5 per stack) seconds.",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.AI_BLACKLIST,
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
    ],
    unlock: {
      name: "Blockade Breaker",
      description: "Kill 15 boss monsters in a single run.",
      link: "https://riskofrain2.fandom.com/wiki/Blockade_Breaker",
    },
    id: 122,
    stats: [{
      stat: "Root Duration",
      value: "3s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+3s",
    },
    {
      stat: "Recharge Time",
      value: "5s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+5s",
    }],
  },
  123: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Essence_of_Heresy",
    name: "Essence of Heresy",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/3e/Essence_of_Heresy.png",
    shortDescription: "Replace your Special Skill with 'Ruin'.",
    description: "Replace your Special Skill with Ruin.\n\nDealing damage adds a stack of Ruin for 10 (+10 per stack) seconds. Activating the skill detonates all Ruin stacks at unlimited range, dealing 300% damage plus 120% damage per stack of Ruin. Recharges after 8 (+8 per stack) seconds.",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.AI_BLACKLIST,
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
    ],
    unlock: {
      name: "Blockade Breaker",
      description: "Kill 15 boss monsters in a single run.",
      link: "https://riskofrain2.fandom.com/wiki/Blockade_Breaker",
    },
    id: 123,
    stats: [{
      stat: "Ruin Duration",
      value: "10s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+10s",
    },
    {
      stat: "Recharge Time",
      value: "8s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+8s",
    }],
  },
  124: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Empathy_Cores",
    name: "Empathy Cores",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/5/51/Empathy_Cores.png",
    shortDescription: "Recruit a pair of Solus Probes that gain power with more allies.",
    description: "Every 30 seconds, summon two Solus Probes that gain +100% (+100% per stack) damage per ally on your team.",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Solus Control Unit",
      url: "https://riskofrain2.fandom.com/wiki/Solus_Control_Unit"
    },
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.MINION,
      constant.Category.DAMAGE,
      constant.Category.UTILITY,
    ],
    id: 124,
    stats: [{
      stat: "Probe Damage",
      value: "100%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+100%",
    }],
  },
  125: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Charged_Perforator",
    name: "Charged Perforator",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/cc/Charged_Perforator.png",
    shortDescription: "Chance on hit to call down a lightning strike.",
    description: "10% chance on hit to down a lightning strike, dealing 500% (+500% per stack) damage.",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Overloading Worm",
      url: "https://riskofrain2.fandom.com/wiki/Overloading_Worm"
    },
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.ON_HIT_EFFECT,
    ],
    id: 125,
    stats: [{
      stat: "Damage",
      value: "500%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+500%",
    }],
  },
  126: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Planula",
    name: "Planula",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/a9/Planula.png",
    shortDescription: "Receive flat healing when attacked.",
    description: "Heal from incoming damage for 15 (+15 per stack).",
    itemRarity: constant.ItemRarity.BOSS,
    dropsFrom: {
      source: "Grandparent",
      url: "https://riskofrain2.fandom.com/wiki/Grandparent"
    },
    tag: [
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.HEALING,
    ],
    id: 126,
    stats: [{
      stat: "Healing",
      value: "15",
      stackType: constant.StackType.LINEAR,
      stackValue: "+15",
    }],
  },
  127: {
    wikiLink: "https://riskofrain2.gamepedia.com/Disposable_Missile_Launcher",
    name: "Disposable Missile Launcher",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/7/78/Disposable_Missile_Launcher.png",
    shortDescription: "Fire a swarm of missiles.",
    description: "Fire a swarm of 12 missiles that deal 12x300% damage.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.TRACKING_PROJECTILE,
    ],
    id: 128,
    cooldown: "45s",
  },
  129: {
    wikiLink: "https://riskofrain2.gamepedia.com/Foreign_Fruit",
    name: "Foreign Fruit",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/d/d0/Foreign_Fruit.png",
    shortDescription: "Heal on use.",
    description: "Instantly heal for 50% of your maximum health.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.HEALING,
      constant.Category.SURVIVABILITY,
    ],
    id: 129,
    cooldown: "45s",
  },
  130: {
    wikiLink: "https://riskofrain2.gamepedia.com/Glowing_Meteorite",
    name: "Glowing Meteorite",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/f/f4/Glowing_Meteorite.png",
    shortDescription: "Rain meteors from the sky, hurting both enemies and allies.",
    description: "Rain meteors from the sky, damaging ALL characters for 600% damage per blast. Lasts 20 seconds.",
    itemRarity: constant.ItemRarity.LUNAR_EQUIPMENT,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.AOE,
    ],
    unlock: {
      name: "Moon Worshipper",
      description: "Carry 5 Lunar items in a single run.",
      link: "https://riskofrain2.gamepedia.com/Moon_Worshipper",
    },
    id: 130,
    cooldown: "140s",
  },
  131: {
    wikiLink: "https://riskofrain2.gamepedia.com/Ifrit%27s_Distinction",
    name: "Ifrit's Distinction",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/0/08/Ifrit%27s_Distinction.png",
    shortDescription: "Become an aspect of fire.",
    description: "You become Blazing. A trail of fire will follow you. Enemies that you attack, or that make contact with your trail will be ignited for 4s dealing 100% damage.",
    dropsFrom: {
      source: "Blazing Elites",
      url: "https://riskofrain2.fandom.com/wiki/Monsters#Elites"
    },
    itemRarity: constant.ItemRarity.ELITE_EQUIPMENT,
    tag: [
      constant.Tag.TRANSFORMATION,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.MISC,
      constant.Category.TRANSFORMATION,
    ],
    cooldown: "N/A",
    id: 131,
  },
  132: {
    wikiLink: "https://riskofrain2.gamepedia.com/Silence_Between_Two_Strikes",
    name: "Silence Between Two Strikes",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/0/0a/Silence_Between_Two_Strikes.png",
    shortDescription: "Become an aspect of lightning.",
    description: "You become Overloading. 50% of your health is replaced by sheilds that rapidly recharge 7 seconds after you've stopped taking damage. Attacks attach a bomb that explodes after 1.5s dealing 100% damage.",
    dropsFrom: {
      source: "Overloading Elites",
      url: "https://riskofrain2.fandom.com/wiki/Monsters#Elites"
    },
    itemRarity: constant.ItemRarity.ELITE_EQUIPMENT,
    tag: [
      constant.Tag.TRANSFORMATION,
    ],
    category: [
      constant.Category.SHIELD,
      constant.Category.SURVIVABILITY,
      constant.Category.DAMAGE,
      constant.Category.TRANSFORMATION,
      constant.Category.MISC,
    ],
    cooldown: "N/A",
    id: 132,
  },
  133: {
    wikiLink: "https://riskofrain2.gamepedia.com/Her_Biting_Embrace",
    name: "Her Biting Embrace",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/8/8b/Her_Biting_Embrace.png",
    shortDescription: "Become an aspect of ice.",
    description: "You become Glacial. Attacked enemies are slowed for 80% on hit for 1.5s. When a player holding this equipment dies, after 2s they will explode for 150% damage in addition to freezing enemies around them.",
    dropsFrom: {
      source: "Glacial Elites",
      url: "https://riskofrain2.fandom.com/wiki/Monsters#Elites"
    },
    itemRarity: constant.ItemRarity.ELITE_EQUIPMENT,
    tag: [
      constant.Tag.TRANSFORMATION,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.TRANSFORMATION,
      constant.Category.MISC,
      constant.Category.AOE,
    ],
    cooldown: "N/A",
    id: 133,
  },
  134: {
    wikiLink: "https://riskofrain2.gamepedia.com/N%27kuhana%27s_Retort",
    name: "N'kuhana's Retort",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/9/9b/N%27kuhana%27s_Retort.png",
    shortDescription: "Become an aspect of corruption.",
    description: "You become Malachite. You periodically release 3-4 spiked balls that sprout spike pits when they land. On death you have a chance to spawn a Malachite Urchin that shoots spikes until it expires.",
    dropsFrom: {
      source: "Malachite Elites",
      url: "https://riskofrain2.fandom.com/wiki/Monsters#Elites"
    },
    itemRarity: constant.ItemRarity.ELITE_EQUIPMENT,
    tag: [
      constant.Tag.TRANSFORMATION,
    ],
    category: [
      constant.Category.TRANSFORMATION,
      constant.Category.MISC,
      constant.Category.DAMAGE,
      constant.Category.MINION,
    ],
    cooldown: "N/A",
    id: 134,
  },
  135: {
    wikiLink: "https://riskofrain2.gamepedia.com/Primordial_Cube",
    name: "Primordial Cube",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/d/d9/Primordial_Cube.png",
    shortDescription: "Fire a black hole that draws enemies in.",
    description: "Fire a black hole that draws enemies within 30m into its center. Lasts 10 seconds",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.AOE,
    ],
    id: 135,
    cooldown: "60s",
  },
  136: {
    wikiLink: "https://riskofrain2.gamepedia.com/Ocular_HUD",
    name: "Ocular HUD",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/6/68/Ocular_HUD.png",
    shortDescription: "Gain 100% Critical Strike Chance for 8 seconds.",
    description: "Gain +100% Critical Strike Chance for 8 seconds.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.CRITICAL_STRIKE,
      constant.Category.ON_HIT_EFFECT,
    ],
    id: 136,
    cooldown: "60s",
  },
  137: {
    wikiLink: "https://riskofrain2.gamepedia.com/The_Back-up",
    name: "The Back-up",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/3/39/The_Back-up.png",
    shortDescription: "Call drones for back up. Lasts 25 seconds.",
    description: "Call 4 Strike Drones to fight for you. Lasts 25 seconds.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.MINION,
    ],
    unlock: {
      name: "Mechanic",
      description: "Repair 30 drones or turrets.",
      link: "https://riskofrain2.gamepedia.com/Mechanic",
    },
    id: 138,
    cooldown: "100s",
  },
  139: {
    wikiLink: "https://riskofrain2.gamepedia.com/Preon_Accumulator",
    name: "Preon Accumulator",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/f/fe/Preon_Accumulator.png",
    shortDescription: "Fire a ball of energy that electrocutes nearby enemies before detonating.",
    description: "Fires preon tendrils, zapping enemies within 35m for up to 600% damage/second. On contact, detonate in an enormous 20m explosion for 4000% damage.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.AOE,
    ],
    unlock: {
      name: "[REDACTED]",
      description: "Open the Timed Security Chest on Rallypoint Delta.",
      link: "https://riskofrain2.gamepedia.com/REDACTED",
    },
    id: 139,
    cooldown: "140s",
  },
  140: {
    wikiLink: "https://riskofrain2.gamepedia.com/Milky_Chrysalis",
    name: "Milky Chrysalis",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/e/e3/Milky_Chrysalis.png",
    shortDescription: "Gain temporary flight.",
    description: "Sprout wings and fly for 15 seconds. Gain +20% movement speed for the duration.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.MOBILITY,
      constant.Category.TRANSFORMATION,
    ],
    id: 140,
    cooldown: "60s",
  },
  141: {
    wikiLink: "https://riskofrain2.gamepedia.com/Royal_Capacitor",
    name: "Royal Capacitor",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/e/ef/Royal_Capacitor.png",
    shortDescription: "Call down a lightning strike on a targeted monster.",
    description: "Call down a lightning strike on a targeted monster, dealing 3000% damage and stunning nearby monsters.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.TRACKING_PROJECTILE,
      constant.Category.AOE,
    ],
    unlock: {
      name: "Ascendant",
      description: "Defeat the Teleporter bosses after activating 2 Shrines of the Mountain.",
      link: "https://riskofrain2.gamepedia.com/Ascendant",
    },
    id: 141,
    cooldown: "20s",
  },
  142: {
    wikiLink: "https://riskofrain2.gamepedia.com/The_Crowdfunder",
    name: "The Crowdfunder",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/d/d4/The_Crowdfunder.png",
    shortDescription: "Toggle to fire. Costs gold per bullet.",
    description: "Fires a continuous barrage that deals 100% damage per bullet. Costs $1 per bullet. Cost increases over time.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.MISC,
    ],
    unlock: {
      name: "Funded!",
      description: "Collect $30,480 total gold.",
      link: "https://riskofrain2.gamepedia.com/Funded!",
    },
    id: 142,
    cooldown: "N/A",
  },
  143: {
    wikiLink: "https://riskofrain2.gamepedia.com/Gnarled_Woodsprite",
    name: "Gnarled Woodsprite",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/d/d8/Gnarled_Woodsprite.png",
    shortDescription: "Heal over time. Activate to send to an ally.",
    description: "Gain a Woodsprite follower that heals for 1.5% of your maximum health/second. Can be sent to an ally to heal them for 10% of their maximum health.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.HEALING,
      constant.Category.SURVIVABILITY,
    ],
    unlock: {
      name: "One with the Woods",
      description: "Fully upgrade a Shrine of the Woods.",
      link: "https://riskofrain2.gamepedia.com/One_with_the_Woods",
    },
    id: 143,
    cooldown: "15s",
  },
  144: {
    wikiLink: "https://riskofrain2.gamepedia.com/Helfire_Tincture",
    name: "Helfire Tincture",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/4/4d/Helfire_Tincture.png",
    shortDescription: "Burn everything nearby... including you and allies.",
    description: "Ignite ALL characters within 8m. Deal 5% of your maximum health/second as burning to yourself. The burn is 0.5x stronger on allies, and 24x stronger on enemies.",
    itemRarity: constant.ItemRarity.LUNAR_EQUIPMENT,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.AOE,
    ],
    id: 144,
    cooldown: "45s",
  },
  145: {
    wikiLink: "https://riskofrain2.gamepedia.com/Radar_Scanner",
    name: "Radar Scanner",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/7/7f/Radar_Scanner.png",
    shortDescription: "Reveal all nearby interactables.",
    description: "Reveal all interactables within 500m for 10 seconds.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.UTILITY,
    ],
    unlock: {
      name: "Bookworm",
      description: "Collect 10 Monster or Environment Logs.",
      link: "https://riskofrain2.gamepedia.com/Bookworm",
    },
    id: 145,
    cooldown: "45s",
  },
  146: {
    wikiLink: "https://riskofrain2.gamepedia.com/Effigy_of_Grief",
    name: "Effigy of Grief",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/4/45/Effigy_of_Grief.png",
    shortDescription: "Drop a permanent effigy that cripples ALL characters inside. Can place up to 5.",
    description: "ALL characters within are slowed by 50% and have their armor reduced by 20. Can place up to 5.",
    itemRarity: constant.ItemRarity.LUNAR_EQUIPMENT,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.UTILITY,
      constant.Category.MISC,
    ],
    cooldown: "N/A",
    id: 146,
  },
  147: {
    wikiLink: "https://riskofrain2.gamepedia.com/Eccentric_Vase",
    name: "Eccentric Vase",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/c/ce/Eccentric_Vase.png",
    shortDescription: "Create a quantum tunnel between two locations.",
    description: "Create a quantum tunnel of up to 1000m in length. Lasts 30 seconds.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.MOBILITY,
    ],
    id: 147,
    cooldown: "45s",
  },
  148: {
    wikiLink: "https://riskofrain2.gamepedia.com/Spinel_Tonic",
    name: "Spinel Tonic",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/2/29/Spinel_Tonic.png",
    shortDescription: "Gain a massive boost to ALL stats. Chance to gain an affliction that reduces ALL stats.",
    description: "Drink the Tonic, gaining a boost for 20 seconds. Increases damage by +100%. Increases attack speed by +70%. Increases armor by +20. Increases maximum health by +50%. Increases passive health regeneration by +300%. Increases movespeed by +30%.\n\nWhen the Tonic wears off, you have a 20% chance to gain a Tonic Affliction, reducing all of your stats by -5% (-5% per stack).",
    itemRarity: constant.ItemRarity.LUNAR_EQUIPMENT,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.ATTACK_SPEED,
      constant.Category.SURVIVABILITY,
      constant.Category.HEALING,
      constant.Category.MOBILITY,
    ],
    id: 148,
    cooldown: "60s",
  },
  149: {
    wikiLink: "https://riskofrain2.gamepedia.com/Fuel_Array",
    name: "Fuel Array",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/f/fe/Fuel_Array.png",
    shortDescription: "Looks like it could power something. EXTREMELY unstable...",
    description: "Can be used to unlock Rex in the Abyssal Depths stage. Falling below 50% health will force the array to explode dealing 300% of play health as damage.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.MISC,
    ],
    category: [
      constant.Category.MISC,
    ],
    cooldown: "N/A",
    id: 149,
  },
  150: {
    wikiLink: "https://riskofrain2.gamepedia.com/Blast_Shower",
    name: "Blast Shower",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/4/4f/Blast_Shower.png",
    shortDescription: "Cleanse all negative effects.",
    description: "Cleanse all negative effects. Includes debuffs, damage over time, and nearby projectiles.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.SURVIVABILITY,
    ],
    id: 150,
    cooldown: "20s",
  },
  151: {
    wikiLink: "https://riskofrain2.gamepedia.com/Volcanic_Egg",
    name: "Volcanic Egg",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/2/2e/Volcanic_Egg.png",
    shortDescription: "Transform into a speeding draconic fireball, dealing damage as you pass through enemies.",
    description: "Turn into a draconic fireball for 5 seconds. Deal 500% damage on impact. Detonates at the end for 800% damage.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.MOBILITY,
      constant.Category.UTILITY,
      constant.Category.TRANSFORMATION,
    ],
    id: 151,
    cooldown: "30s",
  },
  152: {
    wikiLink: "https://riskofrain2.gamepedia.com/Spectral_Circlet",
    name: "Spectral Circlet",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/d/d2/Spectral_Circlet.png",
    shortDescription: "Become an aspect of incorporeality.",
    description: "You become Celestine. Your attacks apply an 80% slow for 3 seconds.",
    dropsFrom: {
      source: "Celestine Elites",
      url: "https://riskofrain2.fandom.com/wiki/Monsters#Elites"
    },
    itemRarity: constant.ItemRarity.ELITE_EQUIPMENT,
    tag: [
      constant.Tag.TRANSFORMATION,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.TRANSFORMATION,
      constant.Category.MISC,
    ],
    cooldown: "N/A",
    id: 152,
  },
  153: {
    wikiLink: "https://riskofrain2.gamepedia.com/Jade_Elephant",
    name: "Jade Elephant",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/4/41/Jade_Elephant.png",
    shortDescription: "Gain massive armor for 5 seconds.",
    description: "Gain 500 armor for 5 seconds.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.SURVIVABILITY,
    ],
    id: 153,
    cooldown: "45s",
  },
  154: {
    wikiLink: "https://riskofrain2.gamepedia.com/Sawmerang",
    name: "Sawmerang",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/6/62/Sawmerang.png",
    shortDescription: "Throw a fan of buzzing saws that come back to you.",
    description: "Throw three large saw blades that slice through enemies for 3x400% damage. Also deals an additional 3x100% damage per second while bleeding enemies. Can strike enemies again on the way back.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.AOE,
    ],
    id: 154,
    cooldown: "45s",
  },
  155: {
    wikiLink: "https://riskofrain2.gamepedia.com/Recycler",
    name: "Recycler",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/6/67/Recycler.png",
    shortDescription: "Transform an Item or Equipment into a different one. Can only recycle once.",
    description: "Transform an Item or Equipment into a different one. Can only be converted into the same tier one time.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.UTILITY,
    ],
    unlock: {
      name: "Cleanup Duty",
      description: "Destroy 20 flying rocks in Sky Meadow.",
      link: "https://riskofrain2.gamepedia.com/Cleanup_Duty",
    },
    id: 155,
    cooldown: "45s",
  },
  156: {
    wikiLink: "https://riskofrain2.gamepedia.com/Super_Massive_Leech",
    name: "Super Massive Leech",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/a/ae/Super_Massive_Leech.png",
    shortDescription: "Heal for a percentage of the damage you deal for 8 seconds.",
    description: "Heal for 20% of the damage you deal. Lasts 8 seconds.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.HEALING,
    ],
    id: 156,
    cooldown: "60s",
  },
  157: {
    wikiLink: "https://riskofrain2.gamepedia.com/Gorag%27s_Opus",
    name: "Gorag's Opus",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/5/56/Gorag%27s_Opus.png",
    shortDescription: "You and all your allies enter a frenzy.",
    description: "All allies enter a frenzy for 7 seconds. Increases movement speed by 50% and attack speed by 100%.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.ATTACK_SPEED,
      constant.Category.MOBILITY,
    ],
    id: 157,
    cooldown: "45s",
  },
  158: {
    wikiLink: "https://riskofrain2.gamepedia.com/Forgive_Me_Please",
    name: "Forgive Me Please",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/7/78/Forgive_Me_Please.png",
    shortDescription: "Throw a cursed doll that repeatedly triggers your 'On Kill' effects.",
    description: "Throw a cursed doll out that triggers any On-Kill effects you have every 1 second for 8 seconds.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.ON_KILL_EFFECT,
    ],
    unlock: {
      name: "I Love Dying!",
      description: "Die 20 times.",
      link: "https://riskofrain2.gamepedia.com/I_Love_Dying!",
    },
    id: 158,
    cooldown: "45s",
  },
  159: {
    wikiLink: "https://riskofrain2.gamepedia.com/Spectral_Circlet",
    name: "Shared Design",
    image: "https://gamepedia.cursecdn.com/riskofrain2_gamepedia_en/d/d2/Spectral_Circlet.png",
    shortDescription: "Become an aspect of perfection.",
    description: "You become Perfected. Your health is replaced by shields that rapidly recharge 7 seconds after you've stopped taking damage. Your attacks also apply crippled",
    dropsFrom: {
      source: "Perfected Elites",
      url: "https://riskofrain2.fandom.com/wiki/Monsters#Elites"
    },
    itemRarity: constant.ItemRarity.ELITE_EQUIPMENT,
    tag: [
      constant.Tag.TRANSFORMATION,
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.TRANSFORMATION,
      constant.Category.MISC,
    ],
    hidden: true,
    cooldown: "N/A",
    id: 159,
  }
});

export const sotv = Object.freeze({
  /** Get all non-hidden, item keys */
  getItemIds() {
    return Object.keys(this).filter(key => {
      return typeof this[key] === "object";
    });
  },
  0: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Executive_Card",
    name: "Executive Card",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/8/82/Executive_Card.png",
    shortDescription: "Gain 10% cash back on all purchases. Multishops remain open.",
    description: "Whenever you make a gold purchase, get 10% of the spent gold back. If the purchase is a multishop terminal, the other terminals will remain open.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 0,
    cooldown: "0.1s",
  },
  1: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Goobo_Jr.",
    name: "Goobo Jr.",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/3a/Goobo_Jr..png",
    shortDescription: "Create a clone of you for 30 seconds.",
    description: "Spawn a gummy clone that has 200% damage and 200% health. Expires in 30 seconds.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 1,
    cooldown: "100s",
  },
  2: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Molotov_(6-Pack)",
    name: "Molotov (6-Pack)",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/b/bf/Molotov_%286-Pack%29.png",
    shortDescription: "Throw 6 flaming molotovs that ignite enemies upon shattering.",
    description: "Throw 6 molotov cocktails that ignites enemies for 500% base damage. Each molotov leaves a burning area for 200% damage per second.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE
    ],
    id: 2,
    cooldown: "45s",
  },
  3: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Trophy_Hunter%27s_Tricorn",
    name: "Trophy Hunter's Tricorn",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/72/Trophy_Hunter%27s_Tricorn.png",
    shortDescription: "Execute a large monster and claim its trophy. Consumed on use.",
    description: "Execute any enemy capable of spawning a unique reward, and it will drop that item. Equipment is consumed on use.",
    itemRarity: constant.ItemRarity.EQUIPMENT,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE
    ],
    id: 3,
    cooldown: "0s",
  },
  4: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Mocha",
    name: "Mocha",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/4/48/Mocha.png",
    shortDescription: "Slightly increase attack speed and movement speed.",
    description: "Increases attack speed by 7.5% (+7.5 per stack) and movement speed by 7% (+7% per stack).",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.DAMAGE,
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.ATTACK_SPEED,
      constant.Category.UTILITY,
    ],
    id: 4,
    stats: [{
      stat: "Attack Speed",
      value: "7.5%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+7.5%",
    },
    {
      stat: "Movement Speed",
      value: "7%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+7%",
    }],
  },
  5: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Power_Elixir",
    name: "Power Elixir",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/5/51/Power_Elixir.png/",
    shortDescription: "Receive an instant heal at low health. Consumed on use.",
    description: "Taking damage to below 25% health consumes this item, healing you for 75% of maximum health.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.HEALING,
    ],
    category: [
      constant.Category.HEALING
    ],
    id: 5,
  },
  6: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Delicate_Watch",
    name: "Delicate Watch",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c6/Delicate_Watch.png",
    shortDescription: "Deal bonus damage. Breaks at low health.",
    description: "Increase damage by 20% (+20% per stack). Taking damage to below 25% health breaks this item.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.DAMAGE,
    ],
    category: [
      constant.Category.DAMAGE,
    ],
    id: 6,
    stats: [{
      stat: "Damage",
      value: "20%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+20%",
    }],
  },
  7: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Oddly-shaped_Opal",
    name: "Oddly-shaped Opal",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/f3/Oddly-shaped_Opal.png",
    shortDescription: "Reduce damage the first time you are hit.",
    description: "Increase armor by 100 (+100 per stack) while out of danger.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.UTILITY,
    ],
    category: [
      constant.Category.UTILITY,
    ],
    id: 7,
    stats: [{
      stat: "Armor",
      value: "100",
      stackType: constant.StackType.LINEAR,
      stackValue: "+100",
    }],
  },
  8: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Roll_of_Pennies",
    name: "Roll of Pennies",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e9/Roll_of_Pennies.png",
    shortDescription: "Gain gold on taking damage.",
    description: "Gain 3 (+3 per stack) gold on taking damage from an enemy. Scales over time.",
    itemRarity: constant.ItemRarity.COMMON,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 8,
    stats: [{
      stat: "Base Gold",
      value: "3",
      stackType: constant.StackType.LINEAR,
      stackValue: "+3",
    }],
  },
  9: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Shipping_Request_Form",
    name: "Shipping Request Form",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/4/44/Shipping_Request_Form.png",
    shortDescription: "Get a delivery each stage that contains powerful items.",
    description: "A delivery containing 2 items (79%/20%/1%) will appear in a random location on each stage. (Increases rarity chances of the items per stack).",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 9
  },
  10: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Hunter's_Harpoon",
    name: "Hunter's Harpoon",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/c4/Hunter%27s_Harpoon.png",
    shortDescription: "Killing an enemy gives you a burst of movement speed.",
    description: "Killing an enemy increases movement speed by 125%, fading over 1 (+0.5 per stack) seconds.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY,
      constant.Category.ON_KILL_EFFECT
    ],
    id: 10,
    stats: [{
      stat: "Duration",
      value: "1s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+0.5s"
    }],
  },
  11: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Regenerating_Scrap",
    name: "Regenerating Scrap",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/77/Regenerating_Scrap.png",
    shortDescription: "Prioritized when used with Uncommon 3D Printers. Usable once per stage.",
    description: "Does nothing. Prioritized when used with Uncommon 3D Printers. At the start of each stage, it regenerates.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 11
  },
  12: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Shuriken",
    name: "Shuriken",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/a/ac/Shuriken.png",
    shortDescription: "Activating your Primary skill also throws a shuriken. Recharges over time.",
    description: "Activating your Primary skill also throws a shuriken that deals 400% (+100% per stack) base damage. You can hold up to 3 (+1 per stack) shurikens which all reload over 10 seconds.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE
    ],
    id: 12,
    stats: [{
      stat: "Damage",
      value: "400%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+100%"
    },
    {
      stat: "Shurikens",
      value: "3",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1"
    }],
  },
  13: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Ignition_Tank",
    name: "Ignition Tank",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/ed/Ignition_Tank.png",
    shortDescription: "Your ignite effects deal 2x more damage, and last 2x as long.",
    description: "Ignite effects deal +300% (+300% per stack) more damage over time.",
    itemRarity: constant.ItemRarity.UNCOMMON,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE
    ],
    id: 13,
    stats: [{
      stat: "Damage",
      value: "300%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+300%"
    }],
  },
  14: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Laser_Scope",
    name: "Laser Scope",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/0/00/Laser_Scope.png",
    shortDescription: "Your 'Critical Strikes' deal an additional 100% damage.",
    description: "Critical Strikes deal an additional 100% damage (+100% per stack).",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE
    ],
    id: 14,
    stats: [{
      stat: "Damage",
      value: "100%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+100%"
    }],
  },
  15: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Spare_Drone_Parts",
    name: "Spare Drone Parts",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/8/85/Spare_Drone_Parts.png",
    shortDescription: "Your drones fire faster, have less cooldowns, shoot missiles, and gain a bonus chaingun.",
    description: "Gain Col. Droneman. Drones gain +50% (+50% per stack) attack speed and cooldown reduction. Drones gain 10% chance to fire a missile on hit, dealing 300% TOTAL damage. Drones gain an automatic chain gun that deals 6x100% damage, bouncing to 2 enemies.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.ATTACK_SPEED
    ],
    id: 15,
    stats: [{
      stat: "Attack Speed",
      value: "50%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+50%"
    }],
  },
  16: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Ben%27s_Raincoat",
    name: "Ben's Raincoat",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/25/Ben%27s_Raincoat.png",
    shortDescription: "Become immune to all debuffs. Increase maximum health.",
    description: "Whenever you would receive a debuff, prevent it. Increases maximum health by 100 (+100 per stack).",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 16,
    stats: [{
      stat: "Max Health",
      value: "100",
      stackType: constant.StackType.LINEAR,
      stackValue: "+100"
    }],
  },
  17: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Pocket_I.C.B.M.",
    name: "Pocket I.C.B.M.",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/ff/Pocket_I.C.B.M..png",
    shortDescription: "All Missile items deal more damage and fire an additional two missiles.",
    description: "All missile items and equipment fire an additional 2 missiles. Increase missile damage by 0% (+50% per stack)",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE
    ],
    id: 17,
    stats: [{
      stat: "Damage",
      value: "0%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+50%"
    }],
  },
  18: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Symbiotic_Scorpion",
    name: "Symbiotic Scorpion",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/91/Symbiotic_Scorpion.png",
    shortDescription: "Permanently reduce armor on hit.",
    description: "100% chance on hit to reduce armor by 2 (+2 per stack) permanently.",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE
    ],
    id: 18,
    stats: [{
      stat: "Armor Reduction",
      value: "2",
      stackType: constant.StackType.LINEAR,
      stackValue: "+2"
    }],
  },
  19: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Bottled_Chaos",
    name: "Bottled Chaos",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/4/42/Bottled_Chaos.png",
    shortDescription: "Activating your Equipment triggers an additional, random Equipment effect.",
    description: "Trigger a random equipment effect 1 (+1 per stack) time(s).",
    itemRarity: constant.ItemRarity.LEGENDARY,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 19,
    stats: [{
      stat: "Effects",
      value: "1",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1"
    }],
  },
  20: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Defense_Nucleus",
    name: "Defense Nucleus",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/1/10/Defense_Nucleus.png",
    shortDescription: "Summon an Alpha Construct on killing an elite.",
    description: "Killing elite monsters spawns an Alpha Construct. Limited to 4 (+4 per stack).",
    dropsFrom: {
      source: "Xi Construct",
      url: "https://riskofrain2.fandom.com/wiki/Xi_Construct"
    },
    itemRarity: constant.ItemRarity.BOSS, 
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE
    ],
    id: 20,
    stats: [{
      stat: "Max Constructs",
      value: "4",
      stackType: constant.StackType.LINEAR,
      stackValue: "+4"
    }],
  },
  21: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Stone_Flux_Pauldron",
    name: "Stone Flux Pauldron",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/b/b1/Stone_Flux_Pauldron.png",
    shortDescription: "Double your health... BUT halve your speed.",
    description: "Increase max health by 100% (+100% per stack). Reduce movement speed by 50% (+50% per stack).",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 21,
    stats: [{
      stat: "Max Health",
      value: "100%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+100%"
    },
    {
      stat: "Speed",
      value: "50%",
      stackType: constant.StackType.HYPERBOLIC,
      stackValue: "-50%"
    }],
  },
  22: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Light_Flux_Pauldron",
    name: "Light Flux Pauldron",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/6e/Light_Flux_Pauldron.png",
    shortDescription: "Halve your cooldowns.. BUT halve your attack speed.",
    description: "Decrease skill cooldowns by 50% (+50% per stack). Decrease attack speed by 50% (+50% per stack).",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 22,
    stats: [{
      stat: "Skill Cooldowns",
      value: "50%",
      stackType: constant.StackType.HYPERBOLIC,
      stackValue: "-50%"
    },
    {
      stat: "Attack Speed",
      value: "50%",
      stackType: constant.StackType.HYPERBOLIC,
      stackValue: "-50%"
    }],
  },
  23: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Eulogy_Zero",
    name: "Eulogy Zero",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/1/12/Eulogy_Zero.png",
    shortDescription: "Items and equipment have a small chance to transform into a Lunar item instead.",
    description: "Items have a 5% (+5% per stack) chance to become a Lunar item instead.",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 23,
    stats: [{
      stat: "Effect Chance",
      value: "5%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+5%"
    }],
  },
  24: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Egocentrism",
    name: "Egocentrism",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/90/Egocentrism.png",
    shortDescription: "Gain multiple orbiting bombs. Every minute, assimilate another item into Egocentrism.",
    description: "Every 3 (-50% per stack) seconds, gain an orbiting bomb that detonates on impact for 360% damage, up to a maximum of 3 bombs (+1 per stack). Every 60 seconds, a random item is converted into this item.",
    itemRarity: constant.ItemRarity.LUNAR,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE
    ],
    id: 24,
    stats: [{
      stat: "Charge Time",
      value: "3s",
      stackType: constant.StackType.HYPERBOLIC,
      stackValue: "-50%"
    },
    {
      stat: "Max Orbs",
      value: "3",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1"
    }],
  },
  25: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Safer_Spaces",
    name: "Safer Spaces",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/9/9d/Safer_Spaces.png",
    shortDescription: "Block the next source of damage. Corrupts all Tougher Times.",
    description: "Blocks incoming damage once. Recharges after 15 seconds (-10% per stack) Corrupts all Tougher Times.",
    itemRarity: constant.ItemRarity.VOID,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 25,
    stats: [{
      stat: "Recharge",
      value: "15s",
      stackType: constant.StackType.HYPERBOLIC,
      stackValue: "-10%"
    }],
  },
  26: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Needletick",
    name: "Needletick",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/7/76/Needletick.png",
    shortDescription: "Chance to collapse enemies on hit. Corrupts all Tri-Tip Daggers.",
    description: "10% (+10% per stack) chance to collapse an enemy for 400% base damage. Corrupts all Tri-Tip Daggers.",
    itemRarity: constant.ItemRarity.VOID,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE
    ],
    id: 26,
    stats: [{
      stat: "Chance to Collapse",
      value: "10%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+10%"
    }],
  },
  27: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Lost_Seer%27s_Lenses",
    name: "Lost Seer's Lenses",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/1/14/Lost_Seer%27s_Lenses.png",
    shortDescription: "Gain a 0.5% chance to instantly kill a non-boss enemy. Corrupts all Lens-Maker's Glasses.",
    description: "Your attacks have a 0.5% (+0.5% per stack) chance to instantly kill a non-Boss enemy. Corrupts all Lens-Maker's Glasses.",
    itemRarity: constant.ItemRarity.VOID,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE
    ],
    id: 27,
    stats: [{
      stat: "Kill Chance",
      value: "0.5",
      stackType: constant.StackType.LINEAR,
      stackValue: "+0.5%"
    }],
  },
  28: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Weeping_Fungus",
    name: "Weeping Fungus",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/e/e1/Weeping_Fungus.png",
    shortDescription: "Heal while sprinting. Corrupts all Bustling Fungi.",
    description: "Heals for 2% (+2% per stack) of your health every second while sprinting. Corrupts all Bustling Fungi.",
    itemRarity: constant.ItemRarity.VOID,
    tag: [
      constant.Tag.HEALING
    ],
    category: [
      constant.Category.HEALING
    ],
    id: 28,
    stats: [{
      stat: "HP Per Second",
      value: "2%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+2%"
    }],
  },
  29: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Encrusted_Key",
    name: "Encrusted Key",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/f/fa/Encrusted_Key.png",
    shortDescription: "Gain access to an Encrusted Cache that contains a void item. Corrupts all Rusted Keys.",
    description: "A hidden cache containing an item (60%/30%/10%) will appear in a random location on each stage. Opening the cache consumes this item. Corrupts all Rusted Keys.",
    itemRarity: constant.ItemRarity.VOID,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 29
  },
  30: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Polylute",
    name: "Polylute",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/b/b5/Polylute.png",
    shortDescription: "Chance to repeatedly strike a single enemy with lightning. Corrupts all Ukuleles.",
    description: "25% chance to fire lightning for 60% TOTAL damage up to 3 (+3 per stack) times. Corrupts all Ukuleles.",
    itemRarity: constant.ItemRarity.VOID,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE
    ],
    id: 30,
    stats: [{
      stat: "Hits",
      value: "3",
      stackType: constant.StackType.LINEAR,
      stackValue: "+3"
    }],
  },
  31: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Singularity_Band",
    name: "Singularity Band",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/30/Singularity_Band.png",
    shortDescription: "High damage hits also create unstable black holes. Recharges over time. Corrupts all Runald's and Kjaro's Bands.",
    description: "Hits that deal more than 400% damage also fire a black hole that draws enemies within 15m into its center. Lasts 5 seconds before collapsing, dealing 100% (+100% per stack) TOTAL damage. Recharges every 20 seconds. Corrupts all Runald's and Kjaro's Bands.",
    itemRarity: constant.ItemRarity.VOID,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE
    ],
    id: 31,
    stats: [{
      stat: "Damage",
      value: "100%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+100%"
    }],
  },
  32: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Voidsent_Flame",
    name: "Voidsent Flame",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/69/Voidsent_Flame.png",
    shortDescription: "Full health enemies also detonate on hit. Corrupts all Will-o'-the-wisps.",
    description: "Upon hitting an enemy at full health, spawn a lava pillar in a 12m (+2.4m per stack) radius for 350% (+280% per stack) base damage. Corrupts all Will-o'-the-wisps.",
    itemRarity: constant.ItemRarity.VOID,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE
    ],
    id: 32,
    stats: [{
      stat: "Damage",
      value: "350%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+280%"
    },
    {
      stat: "Radius",
      value: "12m",
      stackType: constant.StackType.LINEAR,
      stackValue: "+2.4m"
    }],
  },
  33: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Plasma_Shrimp",
    name: "Plasma Shrimp",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/c/cf/Plasma_Shrimp.png",
    shortDescription: "While you have shield, fire missiles on every hit. Corrupts all AtG Missile Mk. 1s.",
    description: "Gain a shield equal to 10% of your maximum health. While you have a shield, hitting an enemy fires a missile that deals 40% (+40% per stack) TOTAL damage. Corrupts all AtG Missile Mk. 1s.",
    itemRarity: constant.ItemRarity.VOID,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE,
      constant.Category.UTILITY
    ],
    id: 33,
    stats: [{
      stat: "Damage",
      value: "40%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+40%"
    }],
  },
  34: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Tentabauble",
    name: "Tentabauble",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/6/64/Tentabauble.png",
    shortDescription: "Chance to root enemies on hit. Corrupts all Chronobaubles.",
    description: "5% (+5% per stack) chance on hit to root enemies for 1s (+1s per stack). Corrupts all Chronobaubles.",
    itemRarity: constant.ItemRarity.VOID,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 34,
    stats: [{
      stat: "Root Chance",
      value: "5%",
      stackType: constant.StackType.LINEAR,
      stackValue: "+5%"
    },
    {
      stat: "Duration",
      value: "1s",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1s"
    }],
  },
  35: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Benthic_Bloom",
    name: "Benthic Bloom",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/b/b0/Benthic_Bloom.png",
    shortDescription: "Upgrades your items at the start of each stage. Corrupts all 57 Leaf Clovers.",
    description: "Upgrades 3 (+3 per stack) random items to items of the next higher rarity at the start of each stage. Corrupts all 57 Leaf Clovers.",
    itemRarity: constant.ItemRarity.VOID,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 35,
    stats: [{
      stat: "Items Upgraded",
      value: "3",
      stackType: constant.StackType.LINEAR,
      stackValue: "+3"
    }],
  },
  36: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Newly_Hatched_Zoea",
    name: "Newly Hatched Zoea",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/5/55/Newly_Hatched_Zoea.png",
    shortDescription: "Periodically recruit allies from the Void. Corrupts all yellow items.",
    description: "Every 60 (-50% per stack) seconds, gain a random Void ally. Can have up to 1 (+1 per stack) allies at a time. Corrupts all yellow items.",
    itemRarity: constant.ItemRarity.VOID,
    tag: [
      constant.Tag.DAMAGE
    ],
    category: [
      constant.Category.DAMAGE
    ],
    id: 36,
    stats: [{
      stat: "Charge Time",
      value: "60s",
      stackType: constant.StackType.HYPERBOLIC,
      stackValue: "-50%"
    },
    {
      stat: "Max Allies",
      value: "1",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1"
    }],
  },
  37: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Pluripotent_Larva",
    name: "Pluripotent Larva",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/2/26/Pluripotent_Larva.png",
    shortDescription: "Get a corrupted extra life. Consumed on use. Corrupts all Dio's Best Friends.",
    description: "Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability, and all of your items that can be corrupted will be. Corrupts all Dio's Best Friends.",
    itemRarity: constant.ItemRarity.VOID,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 37
  },
  38: {
    wikiLink: "https://riskofrain2.fandom.com/wiki/Lysate_Cell",
    name: "Lysate Cell",
    image: "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/5/53/Lysate_Cell.png",
    shortDescription: "Add an extra charge of your Special skill. Corrupts all Fuel Cells.",
    description: "Add +1 (+1 per stack) charge of your Special skill. Reduces Special skill cooldown by 33%. Corrupts all Fuel Cells.",
    itemRarity: constant.ItemRarity.VOID,
    tag: [
      constant.Tag.UTILITY
    ],
    category: [
      constant.Category.UTILITY
    ],
    id: 38,
    stats: [{
      stat: "Charges",
      value: "1",
      stackType: constant.StackType.LINEAR,
      stackValue: "+1"
    }],
  },
});

/**
 * This maps the selection types to the appropriate lists
 */
export const SelectionTypeMapping = Object.freeze({
  [SelectionType.ITEM]: items,
  [SelectionType.SOTV]: sotv,
  // [SelectionType.ARTIFACT]: equipment,
  // [SelectionType.CHARACTER]: equipment,
});
