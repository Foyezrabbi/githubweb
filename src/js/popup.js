$(document).ready(function() {
    var modal = document.getElementById("Projects");
    var btn = document.getElementById("project");
    var span = document.getElementsByClassName("close")[0];


    var modal1 = document.getElementById("Sitemap");
    var btn1 = document.getElementById("sitemap");
    var span1 = document.getElementsByClassName("close")[1];


    var notext = 'Hover Over The Project Button To View Details'


    btn1.onclick = function() {
    modal1.style.display = "block";
    }

    span1.onclick = function() {
    modal1.style.display = "none";
    }


    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    }


    $(".project-content #ctable").hover(function(){
            $(".project-content .project-container").html(`
            <div id="ctabletext">
                <p>GET &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  |  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  https://pixell.cf/status</p>
            </div>
            `)
            }, function(){
                //$(".project-content .project-container").html(`<p>${notext}</p>`)
        });
    $(".project-content #API").hover(function(){
        $(".project-content .project-container").html(`
        <div id="apitext">
            <p>GET &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  |  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  https://pixell.cf/status</p>
        </div>
        `)
        }, function(){
            //$(".project-content .project-container").html(`<p>${notext}</p>`)
    });
    
    $(".project-content #forkbot").hover(function(){
        $(".project-content .project-container").html(`
        <div id="forkbottext">
            <p>tttt</p>
        </div>
        `)
        }, function(){
            //$(".project-content .project-container").html(`<p>${notext}</p>`)
    });


})

