import { formatTime } from "./formatTime"

export const formatTimeArrival = (currTime: string, arrivalTime: string): string => {

  const currHours = formatTime(currTime).slice(0,2);
  const currMin = formatTime(currTime).slice(3,5);

  const arrivalHours = formatTime(arrivalTime).slice(0,2);
  const arrivalMin = formatTime(arrivalTime).slice(3,5);

  if(currHours == arrivalHours){
    return ` ${parseInt(arrivalMin)-parseInt(currMin)} Min`;
  } else {
    const restHours = ( 60 - parseInt(currMin) ) + parseInt(arrivalMin);
    if(restHours >= 60){
      return ` ${parseInt(arrivalHours)-parseInt(currHours)} Hrs ${parseInt(arrivalMin)-parseInt(currMin)} Min`
    } else {
      return ` ${( 60 - parseInt(currMin) ) + parseInt(arrivalMin)} Min`
    }
  }
}
