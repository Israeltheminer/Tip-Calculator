var $ = require( "jquery" );

$(".reset_button").click(()=> {
   location.reload();
});


var percent;
$('.dark_button').on('click', function(){
   var percentInString = $(this).attr('id')
   percent = parseInt(percentInString)
})

function setAnswers(){
   const bill = $(".bill_input").val()
   const noOfPeople = $(".total_input").val()
   const customPercent = $(".custom_percent").val()

   if(bill>0 && noOfPeople>0 && customPercent>0){
      const tip = bill * customPercent
      const tipPerPerson = ((tip / 100) / noOfPeople).toFixed(2)
      const totalPerPerson = ((bill / noOfPeople)).toFixed(2)

      $('.total_per_person').text(`$${totalPerPerson}`)
      $('.tip_per_person').text(`$${tipPerPerson}`)
   }
   else if(bill>0 && noOfPeople>0 && percent>0){
      const tip = bill * percent
      const tipPerPerson = ((tip / 100) / noOfPeople).toFixed(2)
      const totalPerPerson = ((bill / noOfPeople)).toFixed(2)

      $('.total_per_person').text(`$${totalPerPerson}`)
      $('.tip_per_person').text(`$${tipPerPerson}`)        
   }
}

function validateInputs(){
   const bill = parseInt($(".bill_input").val())
   const noOfPeople = parseInt($(".total_input").val())
   const customPercent = parseInt($(".custom_percent").val())

   if(bill===0){
      $('.bill_alert').removeClass("hidden")
   }
   else{
      $('.bill_alert').addClass("hidden")
   }

   if(noOfPeople===0){
      $('.number_alert').removeClass("hidden")
   }
   else{
      $('.number_alert').addClass("hidden")
   }

   if(customPercent===0){
      $('.tip_alert').removeClass("hidden")
   }
   else{
      $('.tip_alert').addClass("hidden")
   }
}

$('body').on('click', setAnswers)
$('body').on('keyup', setAnswers, validateInputs)