import { formatDeltaValue } from "../utils/formatters";

export default function TableRow({ data, lang }) {
  return (
    <tr>
      <td>{data.label[lang]}</td>
      <td>
        <div>
          <p>{data.confirmed}</p>
          <p>{formatDeltaValue(data.delta_confirmed)}</p>
        </div>
      </td>
      <td>
        <div>
          <p>{data.deaths}</p>
          <p>{formatDeltaValue(data.delta_deaths)}</p>
        </div>
      </td>
      <td>
        <div>
          <p>{data.recovered}</p>
          <p>{formatDeltaValue(data.delta_recovered)}</p>
        </div>
      </td>
      <td>
        <div>
          <p>{data.existing}</p>
          <p>{formatDeltaValue(data.delta_existing)}</p>
        </div>
      </td>
    </tr>
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
