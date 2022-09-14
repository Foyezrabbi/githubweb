$(document).ready(function() {
    console.log("%cOwO", "font: 50px sans-serif; font-weight:bold; color:grey;");
    console.log("%cWaccha duin here?", "font: 15px sans-serif; font-weight:bold; color:grey;");
    number = 1
    $("#name").click(function() {
        var color = [ "#f55142", "#f58a42", "#f5d442", "#a1f542", "#42f55a", "#42f5bf", "#42a7f5", "#685dfc", "#ca5dfc", "#fc5ddc", "#fc5d92" ]
        number +=1
        $(".notfound .notfound-404 h1").css("color", color[Math.floor(Math.random() * color.length)])
        //console.log(number)
        if (number > 10 && number < 20) {
            $("#description").html("<h2>Hmm....</h2>");
        } else if (number > 20 && number < 30) {
            $("#description").html("<h2>u nuts..?</h2>");
        } else if (number > 30 && number < 40) {
            $("#description").html("<h2>plz....stop ;-;</h2>");
        } else if (number > 40 && number < 50) {
            $("#description").html("<h2>MY EYES ARE BURNINGGG!!!!</h2>");
        } else if (number > 50 && number < 60) {
            $("#description").html("<h2>SOMEONE HELP!!!!</h2>");
        } else if (number > 60 && number < 70) {
            $("#description").html("<h2>YOU'RE A DEMON!</h2>");
            $(".notfound .notfound-404 h2").css("color", "red")
        } else if (number > 70) {
            $("#description").html("<h2>*DEAD*</h2>");
        }
    })
        
})



