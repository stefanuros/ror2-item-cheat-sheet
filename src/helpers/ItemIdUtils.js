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

/**
 * Filters out items that do not match the given filter values. Filtering in the
 * same key is an OR operation and filtering between keys is an AND operation.
 * 
 * EX. Filtering DAMAGE and ATTACK_SPEED in category would show all items that 
 * have damage and all items that have attack speed. 
 * Filtering COMMON on rarity as well as above would show only items of COMMON 
 * rarity that give damage and only items in COMMON rarity that give attack speed
 * 
 * @param {[int]} itemIds - A list of itemIds
 * @param {Object} filterBy  - An object with 2 keys, category and rarity. The 
 *                             values of the keys should be lists of filter values
 */
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
