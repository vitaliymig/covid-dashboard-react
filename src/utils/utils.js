export function formatDeltaValue(delta) {
    if (delta > 0) {
      return <>&#9650; {delta}</>;
    } else if (delta < 0) {
      return <>&#9660; {delta}</>;
    } else {
      return `-`;
    }
}
  
export function sumData(array,key) {
    return !array ? 0 : array.reduce((acc, obj) => {
        return acc + obj[key]
    },0)
}