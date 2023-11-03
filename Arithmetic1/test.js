

var score = 0;
var i = 0;

var randomnumber1 = Math.round(Math.random());
var randomnumber2 = Math.round(Math.random());


Generaterandom();
document.getElementById("qua1").innerHTML = randomnumber1 + '-' + randomnumber2;
var ans1 = randomnumber1 - randomnumber2;

Generaterandom();
document.getElementById("qua2").innerHTML = randomnumber1 + '-' + randomnumber2;
var ans2 = randomnumber1 - randomnumber2;

Generaterandom();
document.getElementById("qua3").innerHTML = randomnumber1 + '+' + randomnumber2
var ans3 = randomnumber1 + randomnumber2;

Generaterandom();
document.getElementById("qua4").innerHTML = randomnumber1 + '-' + randomnumber2;
var ans4 = randomnumber1 - randomnumber2;

Generaterandom();
document.getElementById("qua5").innerHTML = randomnumber1 + '+' + randomnumber2;
var ans5 = randomnumber1 + randomnumber2;

const game = () => {
    var solution1 = document.getElementById('sol1').value;
    var solution2 = document.getElementById('sol2').value;
    var solution3 = document.getElementById('sol3').value;
    var solution4 = document.getElementById('sol4').value;
    var solution5 = document.getElementById('sol5').value;


    if (solution1 == ans1) {
        wrong = 0;
        score = score + 2;
        i++;
        Generaterandom();
    }

    if (solution2 == ans2) {
        wrong = 0;
        score = score + 2;
        i++;
        Generaterandom();
    }

    if (solution3 == ans3) {
        wrong = 0;
        score = score + 2;
        i++;
        Generaterandom();
    }

    if (solution4 == ans4) {
        wrong =0;
        score = score + 2;
        i++;
        Generaterandom();
    }

    if (solution5 == ans5) {
        wrong = 0;
        score = score + 2;
        i++;
        Generaterandom();
    }


    if (score <= 5) {
        alert("Good your score = " + score + "    please press Ok to move Easy level");
        window.location = "EasyLevel.html";
    }
    if (score > 5 && score <= 7) {
        alert("Very Good your score = " + score + "   please press Ok to move Intermediat level")
        window.location = "intermediat.html";
    }
    if (score > 7) {
        alert("Bravoo your score = " + score + "    pleas press Ok to move Hard Level ")
        window.location = "hard.html";
    }
};
    function Generaterandom() {
        randomnumber1 = Math.floor(Math.random() * 10 + 1);
        randomnumber2 = Math.floor(Math.random() * 10 + 1);
    }
