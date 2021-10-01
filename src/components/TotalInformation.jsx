import { formatDeltaValue, sumData } from "../utils/utils";
import { useData } from "../hooks/useData";
import { translations } from "../translations/translations";

export default function TotalInformation() {
  const [data] = useData();
  console.log(data.covidData);
  return (
    <>
      <div>
        <span>{translations[data.lang].confirmed}: </span>
        <span>{sumData(data.covidData[data.typeData], "confirmed")}</span>
        <span>
          {formatDeltaValue(
            sumData(data.covidData[data.typeData], "delta_confirmed")
          )}
        </span>
      </div>
      <div>
        <span>{translations[data.lang].deaths}: </span>
        <span>{sumData(data.covidData[data.typeData], "deaths")}</span>
        <span>
          {formatDeltaValue(
            sumData(data.covidData[data.typeData], "delta_deaths")
          )}
        </span>
      </div>
      <div>
        <span>{translations[data.lang].recovered}: </span>
        <span>{sumData(data.covidData[data.typeData], "recovered")}</span>
        <span>
          {formatDeltaValue(
            sumData(data.covidData[data.typeData], "delta_recovered")
          )}
        </span>
      </div>
      <div>
        <span>{translations[data.lang].existing}: </span>
        <span>{sumData(data.covidData[data.typeData], "existing")}</span>
        <span>
          {formatDeltaValue(
            sumData(data.covidData[data.typeData], "delta_existing")
          )}
        </span>
      </div>
    </>
  );
}
