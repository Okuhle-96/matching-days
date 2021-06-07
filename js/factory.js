function matchingDaysFactoryFunction(){

  var matchingDays = [{day : 'Sunday', color: ""},
                      {day : 'Monday', color: ""}, 
                      {day : 'Tuesday', color: ""}, 
                      {day : 'Wednesday', color: ""}, 
                      {day : 'Thursday', color: ""}, 
                      {day : 'Friday', color: ""}, 
                      {day : 'Saturday', color: ""}]

  var firstDay = undefined;
  var secondDay = undefined;

  function setFirstDay(dateInput){
      firstDay = dateInput;
  }
  
  function setSecondDay(dateInput){
      secondDay = dateInput;
  }

  function getDays(){
    return matchingDays;
}


  function checkMatchingDays(){   

  var matchingDays = [{day : 'Sunday', color: ""},
  {day : 'Monday', color: ""}, 
  {day : 'Tuesday', color: ""}, 
  {day : 'Wednesday', color: ""}, 
  {day : 'Thursday', color: ""}, 
  {day : 'Friday', color: ""}, 
  {day : 'Saturday', color: ""}]

      if (secondDay === firstDay & secondDay !== undefined && firstDay != undefined){
         matchingDays[secondDay].color = "darkolivegreen";
         return matchingDays;
       } 
     if (firstDay !== undefined && secondDay === undefined){
          matchingDays[firstDay].color = "burlywood";
          return matchingDays;
      }
      if (secondDay !== undefined && firstDay === undefined){
        
        matchingDays[secondDay].color = "slateblue";
        return matchingDays;
      }
      else{
        matchingDays[firstDay].color = "burlywood";
        matchingDays[secondDay].color = "slateblue";
        return matchingDays;
      }
  }

  return {
      setFirstDay,
      setSecondDay,
      checkMatchingDays,
      getDays
  }
}