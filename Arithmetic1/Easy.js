var lose = new Audio('Audio/sad.mp3');
var win = new Audio('Audio/happy.mp3')
var score = 0;
var i = 0;
const operations =['+', '-'];
var num1 = Math.floor(Math.random() * 10 );
var num2 = Math.floor(Math.random() * 10 );


var answer;
document.getElementById("qua1").innerHTML = generateQuestion();
var ans1 = answer;

document.getElementById("qua2").innerHTML = generateQuestion();
var ans2 = answer;
document.getElementById('qua3').textContent = generateQuestion();
var ans3 = answer;
document.getElementById('qua4').textContent = generateQuestion();
var ans4 = answer;
document.getElementById('qua5').textContent = generateQuestion();
var ans5 = answer;
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
    if (score >= 7) {
        document.body.style.background = "url('pic/fireworks.gif')";
        win.play();
        setTimeout(() => ImgWin(), 100);
    }
    if (score < 7) {
        lose.play();
        alert("Nooo your score = " + score + " please try Again")
        window.location = "EasyLevel.html"
    }
};
function ImgWin() {
    alert(" Great !! your score = " + score + "     please press Ok to move Intermediatel Level");
    window.location = "intermediat.html";
}
function generateQuestion() {
    num1 = Math.floor(Math.random() * 10 + 1);
    num2 = Math.floor(Math.random() * 10 + 1);
    const operation = operations[Math.floor(Math.random() * 2)]
    const question = `${num1} ${operation} ${num2}`;
    switch (operation) {
        case "+": answer = num1 + num2; break;
        case "-": answer = num1 - num2; break;
    }
    return question;
    }

