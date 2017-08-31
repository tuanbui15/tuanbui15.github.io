

<SCRIPT language=javascript>
/*
Trivia Quiz v 1.0
by POZ
comments, bug reports, suggestions will be welcome at
poz@yahoo.com
may be used freely as long as this credit is maintained.
*/

/*
Easy customizing instructions:

1. Add as many questions as you like according to the structure of the existing demo questions.
Make sure that every question is properly enveloped with <div id="questionX" style="display:none">...</div>
where X is the number of the question (numbers must be sequential)
2. Adjust the correctAnswers array to hold the letter of the correct answer for each question.
3. Enjoy.
*/

// how many seconds available to answer each question
var delay=10;

// an array listing the correct answer for each question in order of appearance
var correctAnswers=new Array("c","d","b","d","c");

// =====================================================
// do not change script below this line
// =====================================================
var q_num=1;
var timer;
var layer;
var clock=delay;
var score=0;

function show_question(){
	if (layer=eval("document.all.question"+q_num)){
		layer.style.display="inline";
		document.all.timeLeft.innerHTML=clock;
		hide_question();
	} else {
		document.all.timeLeft.innerHTML=0;
		document.all.quizScore.innerHTML="You have answered correctly "+score+" out of "+(q_num-1)+" questions.";
		document.all.quizScore.style.display="inline";
	}
}

function hide_question(){
	if (clock>0) {
		document.all.timeLeft.innerHTML=clock;
		clock--;
		timer=setTimeout("hide_question()",1000);
	} else {
		clearTimeout(timer);
		document.all.answerBoard.innerHTML="&nbsp;";
		clock=delay;
		layer.style.display="none";
		q_num++;
		show_question();
	}
}

function check_answer(answer){
	if (correctAnswers[q_num-1]==answer){
		score++;
		document.all.answerBoard.innerHTML="<i><b>Correct!</b></i>";
	} else {
		document.all.answerBoard.innerHTML="<i><b>Wrong!</b></i>";
	}
	clock=0;
	clearTimeout(timer);
	timer=setTimeout("hide_question()",1500);
}

window.onload=show_question;
</SCRIPT>
	<!--
    	This script downloaded from www.JavaScriptBank.com
    	Come to view and download over 2000+ free javascript at www.JavaScriptBank.com
	-->
