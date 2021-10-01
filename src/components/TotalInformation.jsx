import { formatDeltaValue } from "../utils/formatters";
import { useData } from "../hooks/useData";
export default function TotalInformation() {
  const [data] = useData();
  return (
    <>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
// {
//     "id": 105,
//     "label": {
//         "en": "Vinnytsia",
//         "uk": "Вінницька область"
//     },
//     "country": 4907,
//     "confirmed": 74881,
//     "deaths": 1769,
//     "recovered": 71051,
//     "existing": 2061,
//     "suspicion": 59638,
//     "lat": 48.920517,
//     "lng": 28.685484,
//  formatDeltaValue(   "delta_confirmed":) 133,
//  formatDeltaValue(   "delta_deaths)": 4,
//  formatDeltaValue(   "delta_recovered"): 46,
//  formatDeltaValue(   "delta_existing"): 83,
//  formatDeltaValue(   "delta_suspicio)n": 0
// }
