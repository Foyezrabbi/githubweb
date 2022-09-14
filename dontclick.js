$(document).ready(function() {
    var color = [ "#f55142", "#f58a42", "#f5d442", "#a1f542", "#42f55a", "#42f5bf", "#42a7f5", "#685dfc", "#ca5dfc", "#fc5ddc", "#fc5d92" ]
    var angle = [ "20", "10", "15", "25", "5", "8", "23", "-26", "35", "-29", "10" ]
    setInterval(function() {
        console.log("%cWHY??", `font: 50px sans-serif; font-weight:bold; color:${color[Math.floor(Math.random() * color.length)]};`);
        $(".notfound .notfound-404 h1").css({
            "color": color[Math.floor(Math.random() * color.length)],
            "transform":  `skewY(${angle[Math.floor(Math.random() * angle.length)]}deg)`,
            "transform":`rotate(${angle[Math.floor(Math.random() * angle.length)]}deg)`,
            "left":`${angle[Math.floor(Math.random() * angle.length)]}%`,
            "right":`${angle[Math.floor(Math.random() * angle.length)]}%`,
            "top":`${angle[Math.floor(Math.random() * angle.length)]}%`
        })

    }, 150)
})