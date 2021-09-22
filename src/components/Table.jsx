import { useData } from "../hooks/useData";
import TableRow from "./TableRow";
export default function Table() {
  const [data] = useData();
  console.log(data.covidData?.[data.typeData], data, data.covidData);
  return (
    <table>
      <tbody>
        {data.covidData[data.typeData] &&
          data.covidData[data.typeData].map((region) => (
            <TableRow key={region.id} data={region}></TableRow>
          ))}
      </tbody>
    </table>
  );
}
