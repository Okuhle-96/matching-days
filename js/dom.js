document.addEventListener('DOMContentLoaded', function(){

  var matchDaysTemplate = document.querySelector('.userTemplate').innerHTML
  var template = Handlebars.compile(matchDaysTemplate)

  //  WEEKDAY BAR
  var weekDaysElement = document.querySelector('.weekdays')

  //  DATES ELEMENTS
  var dateOneElement = document.querySelector('.first')
  var dateTwoElement = document.querySelector('.second')

  // DATE COLOR CHANGING ELEMENTS
  var colorOneElement = document.getElementById('firstt');
  var colorTwoElement = document.getElementById('secondd');

  // CTREATING AN INSTANCE
  var matchingInstance = matchingDaysFactoryFunction()

  weekDaysElement.innerHTML = template ({days : matchingInstance.getDays()})

  var matchingDays = function(){
      
    // DATE VALUES
      var one = dateOneElement.value;
      var two = dateTwoElement.value;

      if (one){
          var firstDate = new Date(one)
          matchingInstance.setFirstDay(firstDate.getDay())
        //   matchingInstance.getFirstDay()
        // alert('dwegyfgtwyetgfvyw')
          weekDaysElement.innerHTML = template ({days : matchingInstance.checkMatchingDays()})
          // if(firstDate.getDay()){
          //   document.getElementById("color").classList.remove("darkolivegreen");
          //   document.getElementById("color").classList.remove("slateblue");
          //   document.getElementById("color").classList.add("burlywood");
          // }
      } 
      if (two){
          var secondDate = new Date(two)
          matchingInstance.setSecondDay(secondDate.getDay())
          // matchingInstance.getSecondDay()
          weekDaysElement.innerHTML = template ({days : matchingInstance.checkMatchingDays()})
          // if(secondDate.getDay()){
          //   document.getElementById("color").classList.remove("darkolivegreen");
          //   document.getElementById("color").classList.remove("burlywood");
          //   document.getElementById("color").classList.add("slateblue");
          // }
      }
  }
  colorOneElement.addEventListener('change', matchingDays)
  colorTwoElement.addEventListener('change', matchingDays)
})
