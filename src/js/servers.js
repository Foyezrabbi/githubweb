$(document).ready(function() {
    console.log("%cOwO", "font: 50px sans-serif; font-weight:bold; color:grey;");
    console.log("%cWaccha duin here?", "font: 15px sans-serif; font-weight:bold; color:grey;");
    setInterval(function() {
        $.ajax({
            url: "https://api.mcsrvstat.us/2/play.pixeledgebd.com"
        }).then(function(data) {
            if (data.online == true) {
            $("#pixeledge").html(`<h2>PixelEdge: </h2><h3>${data.players.online}</h3>`);
            } else {
                $("#pixeledge").html(`<h2>PixelEdge: </h2><h3>Offline</h3>`);
            }
        });
        $.ajax({
            url: "https://api.mcsrvstat.us/2/play.minecraftersbd.com"
        }).then(function(data) {
            if (data.online == true) {
                $("#banglacraft").html(`<h2>BanglaCraft: </h2><h3>${data.players.online}</h3>`);
                } else {
                    $("#banglacraft").html(`<h2>BanglaCraft: </h2><h3>Offline</h3>`);
                }
        });
        $.ajax({
            url: "https://api.mcsrvstat.us/2/play.ultracraftbd.com"
        }).then(function(data) {
            if (data.online == true) {
                $("#ultracraft").html(`<h2>UltraCraft: </h2><h3>${data.players.online}</h3>`);
                } else {
                    $("#ultracraft").html(`<h2>UltraCraft: </h2><h3>Offline</h3>`);
                }
        });
        $.ajax({
            url: "https://api.mcsrvstat.us/2/zombiecraft.mcpro.io"
        }).then(function(data) {
            if (data.online == true) {
                $("#zombikeraft").html(`<h2>ZombieCraft: </h2><h3>${data.players.online}</h3>`);
                } else {
                    $("#zombikeraft").html(`<h2>ZombieCraft: </h2><h3>Offline</h3>`);
                }
        });
        $.ajax({
            url: "https://api.mcsrvstat.us/2/play.graycraftbd.tk"
        }).then(function(data) {
            if (data.online == true) {
                $("#gerekeraft").html(`<h2>GrayCraft: </h2><h3>${data.players.online}</h3>`);
                } else {
                    $("#gerekeraft").html(`<h2>GrayCraft: </h2><h3>Offline</h3>`);
                }
        });
    }, 5000)
})
