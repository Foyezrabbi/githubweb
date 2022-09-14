function t() {
    if (document.getElementById('myText').value == '') {
        return
    }
    figlet(document.getElementById('myText').value, 'Standard', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Standard").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, '3-D', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#3-D").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, '1Row', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#1Row").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, '3D Diagonal', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#3D-Diagonal").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, '3D-ASCII', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#3D-ASCII").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'ANSI Shadow', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#ANSI").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, '3x5', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#3x5").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, '4Max', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#4Max").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, '5 Line Oblique', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#5Line").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Acrobatic', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Acrobatic").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Alligator', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Alligator").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Alligator2', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Alligator2").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Alpha', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Alpha").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Alphabet', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Alphabet").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'AMC 3 Line', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#AMCLine").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'AMC 3 Liv1', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#AMCLiv1").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'AMC AAA01', function(err, text) {
            if (err) {
                console.log('something went wrong...');
                console.dir(err);
                return;
            }
            $("#AMCLAAA01").html(`<pre>${text}</pre>`)
        });
    figlet(document.getElementById('myText').value, 'AMC Neko', function(err, text) {
                if (err) {
                    console.log('something went wrong...');
                    console.dir(err);
                    return;
                }
                $("#AMCNeko").html(`<pre>${text}</pre>`)
        });
    figlet(document.getElementById('myText').value, 'AMC Razor', function(err, text) {
            if (err) {
                console.log('something went wrong...');
                console.dir(err);
                return;
            }
            $("#AMCRazor").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'AMC Razor2', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#AMCRazor2").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'AMC Slash', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#AMCSlash").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'AMC Slider', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#AMCSlider").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'AMC Thin', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#AMCThin").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'AMC Tubes', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#AMCTubes").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'AMC Untitled', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#AMCUntitled").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'ANSI Regular', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#ANSIRegular").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'ANSI Shadow', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#ANSIShadow").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Arrows', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Arrows").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'ASCII New Roman', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#ASCIINewRoman").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Avatar', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Avatar").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'B1FF', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#B1FF").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Banner', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Banner").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Banner3-D', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Banner3-D").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Banner3', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Banner3").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Banner4', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Banner4").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Barbwire', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Barbwire").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Basic', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Basic").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Bear', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Bear").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Bell', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Bell").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Benjamin', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Benjamin").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Big Chief', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#BigChief").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Big Money-ne', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#BigMoney-ne").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Big Money-nw', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#BigMoney-nw").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Big Money-se', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#BigMoney-se").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Big Money-sw', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#BigMoney-sw").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Big', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Big").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Bigfig', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Bigfig").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Binary', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Binary").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Block', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Block").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Blocks', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Blocks").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Bloody', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Bloody").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Bolger', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Bolger").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Braced', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Braced").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Bright', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Bright").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Broadway KB', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#BroadwayKB").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Broadway', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Broadway").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Bubble', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Bubble").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Bulbhead', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Bulbhead").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Caligraphy', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Caligraphy").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Caligraphy2', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Caligraphy2").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Calvin S', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#CalvinS").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Cards', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Cards").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Catwalk', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Catwalk").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Chiseled', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Chiseled").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Chunky', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Chunky").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Coinstak', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Coinstak").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Cola', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Cola").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Colossal', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Colossal").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Computer', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Computer").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Contessa', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Contessa").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Contrast', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Contrast").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Cosmike', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Cosmike").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Crawford', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Crawford").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Crawford2', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Crawford2").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Crazy', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Crazy").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Cricket', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Cricket").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Cursive', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Cursive").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Cyberlarge', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Cyberlarge").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Cybermedium', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Cybermedium").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Cybersmall', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Cybersmall").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Cygnet', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Cygnet").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'DANC4', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#DANC4").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Dancing Font', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#DancingFont").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Decimal', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Decimal").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Def Leppard', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#DefLeppard").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Delta Corps Priest 1', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#DeltaCorpsPriest1").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Diamond', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Diamond").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Diet Cola', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#DietCola").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Digital', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Digital").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Doh', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Doh").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Doom', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Doom").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'DOS Rebel', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#DOSRebel").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Dot Matrix', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#DotMatrix").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Double Shorts', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#DoubleShorts").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Double', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Double").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Dr Pepper', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#DrPepper").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'DWhistled', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#DWhistled").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Efti Chess', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#EftiChess").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Efti Font', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#EftiFont").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Efti Italic', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#EftiItalic").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Efti Piti', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#EftiPiti").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Efti Robot', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#EftiRobot").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Efti Wall', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#EftiWall").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Efti Water', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#EftiWater").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Electronic', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Electronic").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Elite', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Elite").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Epic', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Epic").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Fender', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Fender").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Filter', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Filter").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Fire Font-k', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#FireFont-k").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Fire Font-s', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#FireFont-s").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Flipped', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Flipped").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Flower Power', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#FlowerPower").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Four Tops', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#FourTops").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Fraktur', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Fraktur").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Fun Face', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#FunFace").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Fun Faces', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#FunFaces").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Fuzzy', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Fuzzy").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Georgi16', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Georgi16").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Georgia11', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Georgia11").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Ghost', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Ghost").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Ghoulish', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Ghoulish").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Glenyn', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Glenyn").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Goofy', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Goofy").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Gothic', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Gothic").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Graceful', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Graceful").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Gradient', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Gradient").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Graffiti', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Graffiti").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Greek', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Greek").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Heart Left', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#HeartLeft").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Heart Right', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#HeartRight").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Henry 3D', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Henry3D").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Hex', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Hex").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Hieroglyphs', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Hieroglyphs").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Hollywood', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Hollywood").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Horizontal Left', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#HorizontalLeft").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Horizontal Right', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#HorizontalRight").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'ICL-1900', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#ICL-1900").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Impossible', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Impossible").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Invita', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Invita").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Isometric1', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Isometric1").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Isometric2', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Isometric2").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Isometric3', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Isometric3").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Isometric4', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Isometric4").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Italic', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Italic").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Ivrit', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Ivrit").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Jacky', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Jacky").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Jazmine', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Jazmine").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Jerusalem', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Jerusalem").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'JS Block Letters', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#JSBlockLetters").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'JS Bracket Letters', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#JSBracketLetters").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'JS Capital Curves', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#JSCapitalCurves").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'JS Cursive', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#JSCursive").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'JS Stick Letters', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#JSStickLetters").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Katakana', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Katakana").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Kban', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Kban").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Keyboard', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Keyboard").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Knob', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Knob").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Konto Slant', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#KontoSlant").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Konto', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Konto").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Larry 3D 2', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Larry3D2").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Larry 3D', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Larry3D").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'LCD', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#LCD").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Lean', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Lean").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Letters', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Letters").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Lil Devil', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#LilDevil").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Line Blocks', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#LineBlocks").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Linux', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Linux").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Lockergnome', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Lockergnome").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Madrid', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Madrid").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Marquee', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Marquee").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Maxfour', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Maxfour").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Merlin1', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Merlin1").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Merlin2', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Merlin2").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Mike', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Mike").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Mini', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Mini").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Mirror', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Mirror").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Mnemonic', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Mnemonic").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Modular', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Modular").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Morse', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Morse").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Morse2', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Morse2").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Moscow', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Moscow").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Mshebrew210', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Mshebrew210").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Muzzle', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Muzzle").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Nancyj-Fancy', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Nancyj-Fancy").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Nancyj-Improved', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Nancyj-Improved").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Nancyj-Underlined', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Nancyj-Underlined").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Nancyj', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Nancyj").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Nipples', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Nipples").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'NScript', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#NScript").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'NT Greek', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#NTGreek").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'NV Script', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#NVScript").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'O8', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#O8").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Octal', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Octal").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Ogre', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Ogre").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Old Banner', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#OldBanner").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'OS2', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#OS2").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Pagga', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Pagga").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, "Patorjk's Cheese", function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#PatorjksCheese").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Patorjk-HeX', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Patorjk-HeX").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Pawp', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Pawp").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Peaks Slant', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#PeaksSlant").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Peaks', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Peaks").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Pebbles', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Pebbles").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Pepper', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Pepper").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Poison', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Poison").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Puffy', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Puffy").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Puzzle', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Puzzle").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Pyramid', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Pyramid").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Rammstein', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Rammstein").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Rectangles', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Rectangles").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Red Phoenix', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#RedPhoenix").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Relief', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Relief").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Relief2', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Relief2").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Reverse', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Reverse").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Roman', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Roman").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Rot13', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Rot13").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Rotated', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Rotated").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Rounded', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Rounded").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Rowan Cap', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#RowanCap").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Rozzo', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Rozzo").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Runic', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Runic").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Runyc', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Runyc").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'S Blood', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#SBlood").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Santa Clara', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#SantaClara").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Script', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Script").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Serifcap', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Serifcap").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Shadow', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Shadow").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Shimrod', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Shimrod").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Short', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Short").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'SL Script', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#SLScript").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Slant Relief', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#SlantRelief").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Slant', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Slant").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Slide', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Slide").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Small Caps', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#SmallCaps").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Small Isometric1', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#SmallIsometric1").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Small Keyboard', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#SmallKeyboard").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Small Poison', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#SmallPoison").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Small Script', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#SmallScript").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Small Shadow', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#SmallShadow").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Small Slant', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#SmallSlant").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Small Tengwar', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#SmallTengwar").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Small', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Small").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Soft', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Soft").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Speed', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Speed").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Spliff', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Spliff").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Stacey', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Stacey").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Stampate', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Stampate").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Stampatello', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Stampatello").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Standard', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Standard").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Star Strips', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#StarStrips").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Star Wars', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#StarWars").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Stellar', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Stellar").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Stforek', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Stforek").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Stick Letters', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#StickLetters").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Stop', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Stop").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Straight', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Straight").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Stronger Than All', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#StrongerThanAll").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Sub-Zero', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Sub-Zero").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Swamp Land', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#SwampLand").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Swan', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Swan").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Sweet', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Sweet").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Tanja', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Tanja").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Tengwar', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Tengwar").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Term', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Term").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'The Edge', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#TheEdge").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Thick', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Thick").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Thin', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Thin").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'THIS', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#THIS").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Thorned', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Thorned").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Three Point', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#ThreePoint").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Ticks Slant', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#TicksSlant").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Ticks', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Ticks").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Tiles', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Tiles").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Tinker-Toy', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Tinker-Toy").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Tombstone', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Tombstone").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Train', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Train").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Trek', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Trek").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Tsalagi', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Tsalagi").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Tubular', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Tubular").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Twisted', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Twisted").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Two Point', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#TwoPoint").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Univers', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Univers").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'USA Flag', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#USAFlag").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Varsity', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Varsity").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Wavy', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Wavy").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Weird', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Weird").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Wet Letter', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#WetLetter").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Whimsy', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Whimsy").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Wow', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Wow").html(`<pre>${text}</pre>`)
    });


















    

}