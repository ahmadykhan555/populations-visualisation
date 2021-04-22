import "./SearchBox.scss";

import React, { useEffect, useState } from "react";

import { configureSearcher } from "../../utility/search";
import fuse from "fuse.js";

interface OwnProps {
  onSearchComplete: Function;
  placeholderText?: string;
  list: any[];
  searchFor: string[];
  searchThreshold?: number;
}
const SearchBoxComponent: React.FC<OwnProps> = ({
  placeholderText,
  list,
  searchFor,
  onSearchComplete,
}) => {
  const [searcher, setSearcher] = useState<fuse<any>>();
  const handleSearch = (query = "") => {
    if (!query.trim()) {
      onSearchComplete([]);
      return;
    }
    const searchResults = searcher?.search(query);
    onSearchComplete(searchResults?.map((e) => e.item));
  };

  useEffect(() => {
    if (list.length) {
      setSearcher(configureSearcher(list, searchFor));
    }
  }, [list]);
  return (
    <div className='search-box-component'>
      <input
        type='search'
        placeholder={placeholderText || "Type to start searching"}
        onChange={(e) => handleSearch(e.target.value)}></input>
    </div>
  );
};

export default SearchBoxComponent;
