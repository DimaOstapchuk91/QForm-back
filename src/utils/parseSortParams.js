import { SORT_ORDER } from '../constans/constans.js';

const parseSortBy = (sortBy) => {
  const keysOfQuestionnaire = [
    'name',
    'totalQueston',
    'completions',
    'createdAt',
    'updatedAt',
  ];

  if (keysOfQuestionnaire.includes(sortBy)) return sortBy;

  return 'createdAt';
};

const parseSortOrder = (sortOrder) => {
  const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);

  if (isKnownOrder) return sortOrder;

  return SORT_ORDER.ASC;
};

export const parseSortParams = (query) => {
  const { sortBy, sortOrder } = query;

  const parsedSortBy = parseSortBy(sortBy);
  const parsedSortOrder = parseSortOrder(sortOrder);

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};
