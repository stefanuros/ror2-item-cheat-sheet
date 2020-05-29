import { items } from "../data/items";
import { SortType, ItemRaritySortValue as rarityValues } from '../data/constants';

/**
 * Sorts a list of item ids, given a sort type
 * 
 * @param {[int]} itemIds - A list of item Ids
 * @param {Enum} sortBy - An enum specifying the type of sort to be done
 */
const sortOperation = (itemIds, itemList, sortBy) => {
  if (sortBy == null) {
    return itemIds;
  }

  // Sort the item ids based on the sortBy state value
  return itemIds.sort((a, b) => {
    // Sort by rarity
    if (sortBy === SortType.RARITY) {
      const aRarity = itemList[a].itemRarity;
      const bRarity = itemList[b].itemRarity;
      // If theyre the same rarity, sort by ID
      if (aRarity !== bRarity) {
        return rarityValues[aRarity] - rarityValues[bRarity];
      }
    }

    // Sort by Name
    if (sortBy === SortType.NAME) {
      return (itemList[a].name < itemList[b].name ? -1 : 1);
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
const filterOperation = (itemIds, itemList, filterBy) => {
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
      || itemList[id].category.some(val => {
        return category.includes(val);
      });

    // Check if the rarity is one to show
    const rarityMatches = (rarity.length === 0) 
      || rarity.includes(itemList[id].itemRarity);

    return categoryMatches && rarityMatches;
  });
};

/**
 * Filters out any items that do not match the search term. Search looks through
 * the item name, description, and short description
 * 
 * @param {[int]} itemIds - the list of itemIds
 * @param {String} searchTerm - The term with search for
 */
const searchOperation = (itemIds, itemList, searchTerm) => {
  if (searchTerm == null || searchTerm.length === 0) {
    return itemIds;
  }

  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  // Check if the search term is included in the name, or 2 description values
  return itemIds.filter(id => {
    const item = itemList[id];
    return item.name.toLowerCase().indexOf(lowerCaseSearchTerm) !== -1
      || item.description.toLowerCase().indexOf(lowerCaseSearchTerm) !== -1
      || item.shortDescription.toLowerCase().indexOf(lowerCaseSearchTerm) !== -1;
  });
};

/**
 * Filters out hidden items
 * 
 * @param {*} itemIds - The list of ids
 * @param {*} showHidden - Boolean stating whether hidden items should be shown
 *                         or not
 */
const showHiddenOperation = (itemIds, itemList, showHidden) => {
  if (showHidden) {
    return itemIds;
  }

  return itemIds.filter(id => {
    return !itemList[id].hidden;
  });
};

export default {
  sortOperation,
  filterOperation,
  searchOperation,
  showHiddenOperation,
};
