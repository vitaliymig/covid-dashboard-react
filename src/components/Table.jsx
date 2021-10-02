import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";
import { translations } from "../translations/translations";
import TableRow from "./TableRow";

export default function Table() {
  const [data] = useData();
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {}, []);
  return (
    <table>
      <thead>
        <tr>
          <th>{translations[data.lang].place[data.typeData]}</th>
          <th>{translations[data.lang].confirmed}</th>
          <th>{translations[data.lang].deaths}</th>
          <th>{translations[data.lang].recovered}</th>
          <th>{translations[data.lang].existing}</th>
        </tr>
      </thead>
      <tbody>
        {data.covidData[data.typeData] &&
          data.covidData[data.typeData].map((region) => (
            <TableRow lang={data.lang} key={region.id} data={region}></TableRow>
          ))}
      </tbody>
    </table>
  );
}
