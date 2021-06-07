function matchingDaysFactoryFunction(){

  var matchingDays = [{day : 'Sunday', color: ""},
                      {day : 'Monday', color: ""}, 
                      {day : 'Tuesday', color: ""}, 
                      {day : 'Wednesday', color: ""}, 
                      {day : 'Thursday', color: ""}, 
                      {day : 'Friday', color: ""}, 
                      {day : 'Saturday', color: ""},
                      {day : 'Sunday', color: ""}]

  var firstDay = undefined;
  var secondDay = undefined;

  function setFirstDay(dateInput){
      firstDay = new Date(dateInput)
  }
  
  function setSecondDay(dateInput){
      secondDay = new Date(dateInput)
  }

  function getFirstDay(){
    if(firstDay){
      return matchingDays[firstDay.getDay()];
    }
  }

  function getSecondDay(){
    if(secondDay){
      return matchingDays[secondDay.getDay()];
    }
  }

  function checkMatchingDays(){

     
      if (secondDay === firstDay){
          matchingDays[secondDay].color = "darkolivegreen"
          return matchingDays;
        } 
      if (firstDay !== undefined && secondDay === undefined ){
          matchingDays[secondDay].color = "burlywood"
          return matchingDays;
        } 
      if (firstDay === undefined && secondDay !== undefined ){
          matchingDays[firstDay].color = "slateblue"
          return matchingDays;
        } else {
                matchingDays[secondDay].color = "burlywood"
                matchingDays[firstDay].color = "slateblue"
                return matchingDays;
               }
  }

  function getDays(){
      return matchingDays;
  }

  return {
      setFirstDay,
      setSecondDay,

      getFirstDay,
      getSecondDay,

      checkMatchingDays,
      getDays
  }
}