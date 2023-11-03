var lose = new Audio('Audio/sad.mp3');
var win = new Audio('Audio/happy.mp3')
var score = 0;
var i = 0;
const operations = ['+', '-', '*', '/'];
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
var num3 = Math.floor(Math.random() * 10);
var answer;

generateQuestion();
document.getElementById("qua1").innerHTML = num1 + '+' + num2 + '-' + num3;
var ans1 = num1 + '+' + num2 + '-' + num3;

document.getElementById("qua2").innerHTML = generate2Question();
var ans2 = answer;

document.getElementById("qua3").innerHTML = generate2Question();
var ans3 = answer;

generateQuestion();
document.getElementById("qua4").innerHTML = num1 + '/' + num2 + '+' + num3;
var ans4 = num1 + '/' + num2 + '+' + num3;

generateQuestion();
document.getElementById("qua5").innerHTML = num1 + '+' + num2 + '+' + num3;
var ans5 = num1 + '+' + num2 + '+' + num3;

document.getElementById("qua6").innerHTML = generate2Question();
var ans6 = answer;

generateQuestion();
document.getElementById("qua7").innerHTML = num1 + '-' + num2 + '*' + num3;
var ans7 = num1 + '-' + num2 + '*' + num3;

document.getElementById("qua8").innerHTML = generate2Question();
var ans8 = answer;

document.getElementById("qua9").innerHTML = generate2Question();
var ans9 = answer;

generateQuestion();
document.getElementById("qua10").innerHTML = num1 + '/' + num2 + '+' + num3;
var ans10 = num1 + '/' + num2 + '+' + num3;

generateQuestion();
document.getElementById("qua11").innerHTML = num1 + '-' + num2 + '+' + num3
var ans11 = num1 + '-' + num2 + '+' + num3;


document.getElementById("qua12").innerHTML = generate2Question();
var ans12 = answer;

generateQuestion();
document.getElementById("qua13").innerHTML = num1 + '*' + num2 + '-' + num3;
var ans13 = num1 + '*' + num2 + '-' + num3;

document.getElementById("qua14").innerHTML = generate2Question();
var ans14 = answer;

generateQuestion();
document.getElementById("qua15").innerHTML = num1 + '-' + num2 + '-' + num3;
var ans15 = num1 + '-' + num2 + '-' + num3;

document.getElementById("qua16").innerHTML = generate2Question();
var ans16 = answer;

document.getElementById("qua17").innerHTML = generate2Question();
var ans17 = answer;

generateQuestion();
document.getElementById("qua18").innerHTML = num1 + '*' + num2 + '-' + num3;
var ans18 = num1 + '*' + num2 + '-' + num3;

document.getElementById("qua19").innerHTML = generate2Question();
var ans19 = answer;

generateQuestion();
document.getElementById("qua20").innerHTML = num1 + '/' + num2 + '-' + num3;
var ans20 = num1 + '/' + num2 + '-' + num3;

document.getElementById("qua21").innerHTML = num1 + '+' + num2 + '-' + num3;
var ans21 = num1 + '+' + num2 + '-' + num3;

document.getElementById("qua22").innerHTML = generate2Question();
var ans22 = answer;

document.getElementById("qua23").innerHTML = generate2Question();
var ans23 = answer;

generateQuestion();
document.getElementById("qua24").innerHTML = num1 + '+' + num2 + '/' + num3;
var ans24 = num1 + '+' + num2 + '/' + num3;

document.getElementById("qua25").innerHTML = generate2Question();
var ans25 = answer;

const game = () => {
    var solution1 = document.getElementById('sol1').value;
    var solution2 = document.getElementById('sol2').value;
    var solution3 = document.getElementById('sol3').value;
    var solution4 = document.getElementById('sol4').value;
    var solution5 = document.getElementById('sol5').value;
    var solution6 = document.getElementById('sol6').value;
    var solution7 = document.getElementById('sol7').value;
    var solution8 = document.getElementById('sol8').value;
    var solution9 = document.getElementById('sol9').value;
    var solution10 = document.getElementById('sol10').value;
    var solution11 = document.getElementById('sol11').value;
    var solution12 = document.getElementById('sol12').value;
    var solution13 = document.getElementById('sol13').value;
    var solution14 = document.getElementById('sol14').value;
    var solution15 = document.getElementById('sol15').value;
    var solution16 = document.getElementById('sol16').value;
    var solution17 = document.getElementById('sol17').value;
    var solution18 = document.getElementById('sol18').value;
    var solution19 = document.getElementById('sol19').value;
    var solution20 = document.getElementById('sol20').value;
    var solution21 = document.getElementById('sol21').value;
    var solution22 = document.getElementById('sol22').value;
    var solution23 = document.getElementById('sol23').value;
    var solution24 = document.getElementById('sol24').value;
    var solution25 = document.getElementById('sol25').value;
    if (solution1 == ans1) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution2 == ans2) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution3 == ans3) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution4 == ans4) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution5 == ans5) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution6 == ans6) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution7 == ans7) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution8 == ans8) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution9 == ans9) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution10 == ans10) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution11 == ans11) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution12 == ans12) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution13 == ans13) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution14 == ans14) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution15 == ans15) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution16 == ans16) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution17 == ans17) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution18 == ans18) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution19 == ans19) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution20 == ans20) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution21 == ans21) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution22 == ans22) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution23 == ans23) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution24 == ans24) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (solution25 == ans25) {
        wrong = 0;
        score = score + 2;
        i++;
    }
    if (score < 45) {
        lose.play();
        alert("Nooo your score = " + score + "       please try Again")
        window.location = "hard.html";
    }

    if (score >= 45) {
        document.body.style.background = "url('pic/fireworks.gif')";
        win.play();
        setTimeout(() => ImgWin(), 100);
    }
    
};
function ImgWin() {
    alert(" Bravooo !! your score = " + score + "  you are completed all Level   please press Ok to Again This Level");
    window.location = "hard.html";
}
function generateQuestion() {
    num1 = Math.floor(Math.random() * 20 + 10);
    num2 = Math.floor(Math.random() * 5 + 1);
    num3 = Math.floor(Math.random() * 5 + 1);
}
function generate2Question() {
    num1 = Math.floor(Math.random() * 10 + 1);
    num2 = Math.floor(Math.random() * 10 + 1);
    const operation = operations[Math.floor(Math.random() * 2)]
    const question = `${num1} ${operation} ${num2}`;
    switch (operation) {
        case "+": answer = num1 + num2; break;
        case "-": answer = num1 - num2; break;
        case "*": answer = num1 * num2; break;
        case "/": answer = num1 / num2; break;
    }
    return question;
}