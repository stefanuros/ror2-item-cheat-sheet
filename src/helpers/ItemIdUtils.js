import { items } from "../data/items";
import { SortType, ItemRaritySortValue as rarityValues } from '../data/constants';

/**
 * Sorts a list of item ids, given a sort type
 * 
 * @param {[int]} itemIds - A list of item Ids
 * @param {Enum} sortBy - An enum specifying the type of sort to be done
 */
export const sortOperation = (itemIds, sortBy) => {
  if (sortBy == null) {
    return itemIds;
  }

  // Sort the item ids based on the sortBy state value
  return itemIds.sort((a, b) => {
    // Sort by rarity
    if (sortBy === SortType.RARITY) {
      const aRarity = items[a].itemRarity;
      const bRarity = items[b].itemRarity;
      // If theyre the same rarity, sort by ID
      if (aRarity !== bRarity) {
        return rarityValues[aRarity] - rarityValues[bRarity];
      }
    }

    // Sort by Name
    if (sortBy === SortType.NAME) {
      return (items[a].name < items[b].name ? -1 : 1);
    }

    // Sort by ID (default)
    return a - b;
  });
};

export const filterOperation = (itemIds, filterBy) => {
  if (filterBy == null) {
    return itemIds;
  }

  let { category, rarity } = filterBy;

  if (category == null) {
    category = [];
  }
  
  if (rarity == null) {
    rarity = [];
  }

  return itemIds.filter(id => {
    // Check if a category matches if it has some filter values
    const categoryMatches = (category.length === 0)
    || items[id].category.some(val => {
      return category.includes(val);
    });

    // Check if the rarity is one to show
    const rarityMatches = (rarity.length === 0) 
    || rarity.includes(items[id].itemRarity);

    return categoryMatches && rarityMatches;
  });
};
