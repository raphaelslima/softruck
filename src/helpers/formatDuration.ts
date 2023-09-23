export const formatDuration = (duration: number): string => {
  let min = 0;
  let hours = 0;
  if(duration >= 60){
    min = Math.ceil(duration / 60);
    if(min >= 60){
      hours = Math.ceil(min / 60);
    }
  }

  if(hours === 0) return `${min} Min`;

  if(min === 0) return  `${min} Min`;

  return `${hours} H e ${min} Min`;
}
