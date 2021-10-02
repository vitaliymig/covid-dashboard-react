import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";
import { translations } from "../translations/translations";

export default function SearchBar() {
  const [data, dispatchData] = useData();

  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    dispatchData({ type: `CHANGE_SEARCH_QUERY`, payload: searchValue });
  }, [searchValue]);
  return (
    <form>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="search"
        placeholder={translations[data.lang].search_placeholder}
      />
    </form>
  );
}
