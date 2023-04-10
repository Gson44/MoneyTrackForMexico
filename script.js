var total = $("#totalValue")
var message = "Seeing updates"

console.log(message)
$("#btn1").click(function(){
    var meal1 = $("#meal1")
    var val1 = $("#value1")
    val1.html(meal1.val())
    var budget = parseInt(total.text()) - parseInt(meal1.val())
    total.html(budget)
    meal1.val("")
    
})

$("#btn2").click(function(){
    var meal2 = $("#meal2")
    var val1 = $("#value2")
    val1.html(meal2.val())
    var budget = parseInt(total.text()) - parseInt(meal2.val())
    total.html(budget)
    meal2.val("")
    
})

$("#btn3").click(function(){
    var meal3 = $("#meal3")
    var val1 = $("#value3")
    val1.html(meal3.val())
    var budget = parseInt(total.text()) - parseInt(meal3.val())
    total.html(budget)
    meal3.val("")
    
})