import { useState, useEffect, memo } from "react";
import { useData } from "../hooks/useData";
import { translations } from "../translations/translations";

const TableHead = memo(function TableHead() {
  const [data, dispatchData] = useData();
  const [sortingParams, setSortingParams] = useState({
    key: "confirmed",
    order: -1,
  });
  console.log("TableHead render!");
  useEffect(() => {
    if (sortingParams.key) {
      dispatchData({ type: "CHANGE_SORTING_PARAMS", payload: sortingParams });
    }
  }, [sortingParams]);

  function changeSortingParams(key) {
    setSortingParams((prev) => ({ ...prev, key, order: prev.order * -1 }));
  }

  function SortingArrow({ type }) {
    return (
      <>
        {type === sortingParams.key &&
          (sortingParams.order > 0 ? <>&#9650;</> : <>&#9660;</>)}
      </>
    );
  }
  return (
    <thead>
      <tr>
        <th onClick={() => changeSortingParams("label")}>
          <SortingArrow type="label" />
          {translations[data.lang].place[data.typeData]}
        </th>
        <th onClick={() => changeSortingParams("confirmed")}>
          <SortingArrow type="confirmed" />
          {translations[data.lang].confirmed}
        </th>
        <th onClick={() => changeSortingParams("deaths")}>
          <SortingArrow type="deaths" />
          {translations[data.lang].deaths}
        </th>
        <th onClick={() => changeSortingParams("recovered")}>
          <SortingArrow type="recovered" />
          {translations[data.lang].recovered}
        </th>
        <th onClick={() => changeSortingParams("existing")}>
          <SortingArrow type="existing" />
          {translations[data.lang].existing}
        </th>
      </tr>
    </thead>
  );
});
export default TableHead;
