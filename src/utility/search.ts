import fuse from "fuse.js";

const DEFAULT_SEARCH_THRESHOLD = 0.4;

export const configureSearcher = (
  list: any[],
  keys: string[],
  searchThreshold = DEFAULT_SEARCH_THRESHOLD
) => {
  return new fuse(list, {
    threshold: searchThreshold,
    keys,
    shouldSort: true,
    includeMatches: false,
  });
};
