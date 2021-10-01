import { useData } from "../hooks/useData";
import { translations } from "../translations/translations";

export default function Tabs() {
  const [data, dispatchData] = useData();

  return (
    <div>
      {Object.keys(data.covidData).map((type) => (
        <button
          key={type}
          onClick={() =>
            dispatchData({ type: "CHANGE_TYPEDATA", payload: type })
          }
        >
          {translations[data.lang][type]}
        </button>
      ))}
    </div>
  );
}
