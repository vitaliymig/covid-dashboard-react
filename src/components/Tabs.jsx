import { useData } from "../hooks/useData";
import { translations } from "../translations/translations";

export default function Tabs() {
  const [data, dispatchData] = useData();

  return (
    <div>
      <button
        onClick={() =>
          dispatchData({ type: "CHANGE_TYPEDATA", payload: "ukraine" })
        }
      >
        {translations[data.lang].country}
      </button>
      <button
        onClick={() =>
          dispatchData({ type: "CHANGE_TYPEDATA", payload: "world" })
        }
      >
        {translations[data.lang].all}
      </button>
    </div>
  );
}
