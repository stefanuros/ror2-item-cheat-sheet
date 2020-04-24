import * as constant from './constants';

module.exports = {
  items: {
    61: {
      wikiLink: "https://riskofrain2.fandom.com/wiki/Armor-Piercing_Rounds",
      name: "Armor-Piercing Rounds",
      image: "https://vignette.wikia.nocookie.net/riskofrain2/images/f/f0/Armor-Piercing_Rounds.png/revision/latest?cb=20190411034306",
      description: "Deal an additional 20% damage (+20% per stack) to bosses.",
      rarity: constant.ItemRarity.COMMON,
      type: constant.itemType.PASSIVE,
      category: [
        constant.Category.DAMAGE,
        constant.Category.AI_BLACKLIST,
      ],
      unlock: {
        name: "Advancement",
        description: "The achievement is obtained by completing a Teleporter Event.",
        link: "https://riskofrain2.fandom.com/wiki/Advancement",
      },
      id: 61,
      stats: [{
        stat: constant.StatType.DAMAGE,
        value: "20%",
        stackType: constant.StackType.LINEAR,
        stackValue: "20%",
        effectiveMax: -1, // How to deal with items with no effective max?
      }],
    },
    58: {
      wikiLink: "https://riskofrain2.fandom.com/wiki/Backup_Magazine",
      name: "Backup Magazine",
      image: "https://vignette.wikia.nocookie.net/riskofrain2/images/f/f3/Backup_Magazine.png/revision/latest?cb=20190411034315",
      description: "Add +1 (+1 per stack) charge of your Secondary skill.",
      rarity: constant.ItemRarity.COMMON,
      category: [
        constant.Category.UTILITY,
      ],
      unlock: {
        name: "Flawless",
        description: "The achievement is obtained by charging a Teleporter without getting hit.",
        link: "https://riskofrain2.fandom.com/wiki/Flawless",
      },
      id: 58,
      stats: [{
        stat: constant.StatType.CHARGE,
        value: "1",
        stackType: constant.StackType.LINEAR,
        stackValue: "1",
        effectiveMax: -1, // How to deal with items with no effective max?
      }],
    },
  },
};
