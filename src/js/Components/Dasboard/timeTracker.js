// track time and figure out how much time left
// track time(date) without hours
export const currentDate = () => {
  // hours ignored intentinally
  const today = new Date().setHours(0,0,0,0,0)
  return today;
 }

 function trackTimeInterval(deadLine, startDate) {
    // One day Time in ms (milliseconds) 
    const one_day = 1000 * 60 * 60 * 24 ;

   const Today = currentDate();
   
 
    console.log(deadLine, startDate)
    if(Today > deadLine) { return  -1}
      

  let TimeIntervalInmilli = deadLine - startDate;
       
   if(Today >= (startDate + one_day)) { 
     console.log(Today, startDate) 
    TimeIntervalInmilli = deadLine - Today;
   }

   const TimeIntervalInDay = Math.floor(TimeIntervalInmilli / one_day);

   return TimeIntervalInDay;
 }

 export default trackTimeInterval;