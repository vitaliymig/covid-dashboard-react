import { useData } from "../hooks/useData";
import { translations } from "../translations/translations";

export default function LangSwitch() {
  const [data, dispatchData] = useData();

  return (
    <div>
      {Object.keys(translations).map((lang) => (
        <button
          key={lang}
          onClick={() => dispatchData({ type: "CHANGE_LANG", payload: lang })}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
