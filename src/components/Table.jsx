import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";
import { serializeQueryStr } from "../utils/utils";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

export default function Table() {
  const [data] = useData();
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    if (data.covidData[data.typeData]) {
      let array = [...data.covidData[data.typeData]];
      if (data.searchQuery) {
        const query = serializeQueryStr(data.searchQuery);
        array = array.filter((region) => {
          return query.every((word) => {
            return region.label[data.lang].toLowerCase().includes(word);
          });
        });
      }
      if (data.sortingParams.key) {
        console.log("sorting");
        if (data.sortingParams.key === "label") {
          array.sort((a, b) => {
            return (
              a[data.sortingParams.key][data.lang].localeCompare(
                b[data.sortingParams.key][data.lang]
              ) * data.sortingParams.order
            );
          });
        } else {
          array.sort((a, b) => {
            return (
              (a[data.sortingParams.key] - b[data.sortingParams.key]) *
              data.sortingParams.order
            );
          });
        }
      }
      setDataArray(array);
    }
  }, [data]);

  return (
    <table>
      <TableHead />
      <tbody>
        {dataArray.map((region) => (
          <TableRow lang={data.lang} key={region.id} data={region}></TableRow>
        ))}
      </tbody>
    </table>
  );
}
