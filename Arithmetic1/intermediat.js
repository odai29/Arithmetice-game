var lose = new Audio('Audio/sad.mp3');
var win = new Audio('Audio/happy.mp3')
var score = 0;
var i = 0;
const operations = ['+', '-', '*'];
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
var answer;

document.getElementById("qua1").innerHTML = generateQuestion();
var ans1 = answer;
document.getElementById("qua2").innerHTML = generateQuestion();
var ans2 = answer;
document.getElementById("qua3").innerHTML = generateQuestion();
var ans3 = answer;
document.getElementById("qua4").innerHTML = generateQuestion();
var ans4 = answer;
document.getElementById("qua5").innerHTML = generateQuestion();
var ans5 = answer;
document.getElementById("qua6").innerHTML = generateQuestion();
var ans6 = answer;
document.getElementById("qua7").innerHTML = generateQuestion();
var ans7 = answer;
document.getElementById("qua8").innerHTML = generateQuestion();
var ans8 = answer;
document.getElementById("qua9").innerHTML = generateQuestion();
var ans9 = answer;
document.getElementById("qua10").innerHTML = generateQuestion();
var ans10 = answer;

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
    if (score >= 15) {
        document.body.style.background = "url('pic/fireworks.gif')";
        win.play();
        setTimeout(() => ImgWin(), 100);
    }
    if (score < 15) {
        lose.play();
        alert("Nooo your score = " + score +       " please try Again")
        window.location = "intermediat.html";
    }
};
function ImgWin() {
    alert(" Great !! your score = " + score + "     please press Ok to move Intermediatel Level");
    window.location = "hard.html";
}
function generateQuestion() {
    num1 = Math.floor(Math.random() * 10 + 1);
    num2 = Math.floor(Math.random() * 10 + 1);
    const operation = operations[Math.floor(Math.random() * 2)]
    const question = `${num1} ${operation} ${num2}`;
    switch (operation) {
        case "+": answer = num1 + num2; break;
        case "-": answer = num1 - num2; break;
        case "*": answer = num1 * num2; break;
    }
    return question;
}