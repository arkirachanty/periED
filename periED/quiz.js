	var a = 0;
	var b = 0; 
	var c = 0; 
	var d = 0; 
	var e = 0; 
	var f = 0; 
	function changeBack1() {
			if (a>1) {
				document.getElementById('0').style.background='rgb(46, 184, 184)';
				document.getElementById('1').style.background='rgb(46, 184, 184)';
				document.getElementById('2').style.background='rgb(46, 184, 184)';
				document.getElementById('3').style.background='rgb(46, 184, 184)';
				document.getElementById('4').style.background='rgb(46, 184, 184)';
				document.getElementById('5').style.background='rgb(46, 184, 184)';
				document.getElementById('6').style.background='rgb(46, 184, 184)';
				document.getElementById('7').style.background='rgb(46, 184, 184)';
				document.getElementById('8').style.background='rgb(46, 184, 184)';
				document.getElementById('9').style.background='rgb(46, 184, 184)';
				document.getElementById('10').style.background='rgb(46, 184, 184)';
				a = 0;
			}
		}
	
	function changeImage0() {
		document.getElementById('0').style.background='rgb(0, 163, 122)';
		a = a + 1; 
		changeBack1()
	}
	function changeImage1() {
		document.getElementById('1').style.background='rgb(0, 163, 122)';
		a = a + 1; 
		changeBack1()
	}
	function changeImage2()	{
		document.getElementById('2').style.background='rgb(0, 163, 122)';
		a = a + 1; 
		changeBack1()
	}
	function changeImage3() {
		document.getElementById('3').style.background='rgb(0, 163, 122)';
		a = a + 1; 
		changeBack1()
	}
	function changeImage4() {
		document.getElementById('4').style.background='rgb(0, 163, 122)';
		a = a + 1; 		
		changeBack1()
	}
	function changeImage5() {
		document.getElementById('5').style.background='rgb(0, 163, 122)';
		a = a + 1; 
		changeBack1()	
	}
	function changeImage6() {
		document.getElementById('6').style.background='rgb(0, 163, 122)';
		a = a + 1; 
		changeBack1()	
	}
	function changeImage7() {
		document.getElementById('7').style.background='rgb(0, 163, 122)';
		a = a + 1; 
		changeBack1()
	}
	function changeImage8() {
		document.getElementById('8').style.background='rgb(0, 163, 122)';
		a = a + 1; 
		changeBack1()	
	}
	function changeImage9() {
		document.getElementById('9').style.background='rgb(0, 163, 122)';
		a = a + 1; 
		changeBack1()	
	}
	function changeImage10() {
		document.getElementById('10').style.background='rgb(0, 163, 122)';
		a = a + 1; 
		changeBack1()	
	}

	function changeBack2() {
			if (b>1) {
				document.getElementById('yesnotaproblem').style.background='rgb(46, 184, 184)';	
				document.getElementById('yesapplicatoronly').style.background='rgb(46, 184, 184)';
				document.getElementById('no1').style.background='rgb(46, 184, 184)';	
				b = 0; 
			}
		}
	
	function changeImage11() {
		document.getElementById('yesnotaproblem').style.background='rgb(0, 163, 122)';	
		b = b + 1; 
		changeBack2()
	}

	function changeImage12() {
		document.getElementById('yesapplicatoronly').style.background='rgb(0, 163, 122)';
		b = b + 1; 
		changeBack2()	
	}
	function changeImage13() {
		document.getElementById('no1').style.background='rgb(0, 163, 122)';	
		b = b + 1; 
		changeBack2()
	}

	function changeBack3() {
		if (c>1) {
			document.getElementById('yessports').style.background='rgb(46, 184, 184)';	
			document.getElementById('yesnoswim').style.background='rgb(46, 184, 184)';
			document.getElementById('nosports').style.background='rgb(46, 184, 184)';	
			c = 0; 
		}
	}
	function changeImage14() {
		document.getElementById('yessports').style.background='rgb(0, 163, 122)';
		c = c + 1; 
		changeBack3()	
	}
	function changeImage15() {
		document.getElementById('yesnoswim').style.background='rgb(0, 163, 122)';
		c = c + 1; 
		changeBack3()		
	}
	function changeImage16() {
		document.getElementById('nosports').style.background='rgb(0, 163, 122)';
		c = c + 1; 
		changeBack3()		
	}

	function changeBack4() {
		if (d>1) {
			document.getElementById('yes2').style.background='rgb(46, 184, 184)';
			document.getElementById('no2').style.background='rgb(46, 184, 184)';		
			d = 0; 
		}
	}
	function changeImage17() {
		document.getElementById('yes2').style.background='rgb(0, 163, 122)';	
		d = d + 1; 
		changeBack4()		
	}
	function changeImage18() {
		document.getElementById('no2').style.background='rgb(0, 163, 122)';
		d = d + 1; 
		changeBack4()			
	}

	function changeBack5() {
		if (e>1) {
			document.getElementById('onetimeonly').style.background='rgb(46, 184, 184)';	
			document.getElementById('reusableonly').style.background='rgb(46, 184, 184)';
			document.getElementById('either').style.background='rgb(46, 184, 184)';		
			e = 0; 
		}
	}
	function changeImage19() {
		document.getElementById('onetimeonly').style.background='rgb(0, 163, 122)';	
		e = e + 1; 
		changeBack5()	
	}
	function changeImage20() {
		document.getElementById('reusableonly').style.background='rgb(0, 163, 122)';
		e = e + 1; 
		changeBack5()	
	}
	function changeImage21() {
		document.getElementById('either').style.background='rgb(0, 163, 122)';	
		e = e + 1; 
		changeBack5()	
	}

	function changeBack6() {
		if (f>1) {
			document.getElementById('notsure').style.background='rgb(46, 184, 184)';			
			document.getElementById('light').style.background='rgb(46, 184, 184)';	
			document.getElementById('lightmod').style.background='rgb(46, 184, 184)';
			document.getElementById('mod').style.background='rgb(46, 184, 184)';	
			document.getElementById('modheavy').style.background='rgb(46, 184, 184)';	
			document.getElementById('heavy').style.background='rgb(46, 184, 184)';			
			f = 0; 
		}
	}
	function changeImage22() {
		document.getElementById('notsure').style.background='rgb(0, 163, 122)';
		f = f + 1; 
		changeBack6()			
	}
	function changeImage23() {
		document.getElementById('light').style.background='rgb(0, 163, 122)';	
		f = f + 1; 
		changeBack6()	
	}
	function changeImage24() {
		document.getElementById('lightmod').style.background='rgb(0, 163, 122)';
		f = f + 1; 
		changeBack6()				
	}
	function changeImage25(){
		document.getElementById('mod').style.background='rgb(0, 163, 122)';	
		f = f + 1; 
		changeBack6()	
	}
	function changeImage26() {
		document.getElementById('modheavy').style.background='rgb(0, 163, 122)';
		f = f + 1; 
		changeBack6()		
	}
	function changeImage27() {
		document.getElementById('heavy').style.background='rgb(0, 163, 122)';	
		f = f + 1; 
		changeBack6()	
	}

	function changeImage28() {
		if (a===1 && b==1 && c===1 && d===1 && e===1&& f===1) {
			document.getElementById('done').style.background='rgb(36, 71, 178)';
			
		/*
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.fillRect(20, 20, 150, 100);*/
			//RETURN HIGHEST VALUES WITH PICS HERE
		}
		else {
			alert("You've gotta answer all of the questions first!")
		}
		
	}

var products = ["DivaCup0", "SoftCup1", "SpongeTampons2", "PadsLight3", "PadsModerate4", "PadsHeavy5", "TamponsRegular6", "TamponsSuper7", "TamponsSuperPlus8", "SportTamponsRegular9", "SportTamponsSuper10", "SportTamponsSuperPlus11", "SportPadsRegular12", "SportPadsLong13", "OrganicTamponsRegular14", "OrganicTamponsSuper15", "OrganicTamponsSuperPlus16", "NoApplicatorRegular17", "NoApplicatorSuper18", "NoApplicatorSuperPlus19"];
var score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var results = [0, 0, 0];
var questionsAnswered = [false, false, false, false, false, false];

function questionOne(answer) {
	if(!questionsAnswered[5]) {
		if(answer==1){
			changeImage0()
		}
		if(answer == 2) 
		{
			changeImage1()
		}

		if(answer == 3)
		{
			changeImage2()
		}

		if(answer == 4)
		{
			changeImage3()
		}

		if(answer == 5)
		{
			changeImage4()
		}

		if(answer == 6)
		{
			changeImage5()
			score[14] += 1;
			score[15] += 1;
			score[16] += 1;
			score[0] += 1; 
			score[1] += 1;
			score[2] += 1; 
		}

		if(answer == 7)
		{
			changeImage6()
			score[14] += 1;
			score[15] += 1;
			score[16] += 1;
			score[0] += 1; 
			score[1] += 1;
			score[2] += 1; 
		}

		if(answer == 8)
		{
			changeImage7()
			score[14] += 1;
			score[15] += 1;
			score[16] += 1;
			score[0] += 1; 
			score[1] += 1;
			score[2] += 1; 
		}

		if(answer == 9)
		{
			changeImage8()
			score[14] += 1;
			score[15] += 1;
			score[16] += 1;
			score[0] += 1; 
			score[1] += 1;
			score[2] += 1; 
		}

		if(answer == 10)
		{
			changeImage9()
			score[14] += 1;
			score[15] += 1;
			score[16] += 1;
			score[0] += 1; 
			score[1] += 1;
			score[2] += 1; 
		}

		if(answer==11)
		{
			changeImage10()
			score[14] += 1;
			score[15] += 1;
			score[16] += 1;
			score[0] += 1; 
			score[1] += 1;
			score[2] += 1; 
		}
			questionsAnswered[5] = true;
	}
}

function questionTwo(answer) {
	if(!questionsAnswered[0]) {
		if(answer==2){
			changeImage11()
		}
		if(answer == 3) {
			changeImage12()
			for (i = 3; i < 17; i++)
			{
				console.log(score);
				score[i] += 1;
				console.log(score);
			}
		}

		if(answer == 4){
			changeImage13()
			console.log(score);
			for (j = 3; j < 6; j++)
			{
				score[j] +=1;
				console.log(score);
			}
			
			for (k = 12; k < 14; k++)
			{
				score[k] += 1;
				console.log(score);
			}
		}
		questionsAnswered[0] = true;
	}
}

function questionThree(answer)
{
	if(!questionsAnswered[1])
	{
		if (answer == 1)
		{
			changeImage14()
			for(i = 9; i < 12; i++)
			{
				console.log(score);
				score[i] += 1;
				console.log(score);
			}
		}
		if (answer == 2)
		{
			changeImage15()
			for(j = 12; j < 14; j++)
			{
				console.log(score);
				score[j] += 1;
				console.log(score);
			}
		}

		if(answer == 3)
		{
			changeImage16()
		}
	}
	questionsAnswered[1] = true;
}

function questionFour(answer)
{
	if(!questionsAnswered[2])
	{
		if (answer == 1)
		{
			changeImage17()
			for(i = 2; i < 4; i++)
			{
				console.log(score);
				score[i] += 1;
				console.log(score);
			}
		}
		if (answer == 2)
		{
			changeImage18()
		}
	}
	questionsAnswered[2] = true;
}

function questionFive(answer)
{
	if(!questionsAnswered[3])
	{
		if (answer == 1)
		{
			changeImage19()
			for(i = 3; i < 20; i++)
			{
				console.log(score);
				score[i] += 2;
				console.log(score);
			}
		}
		else if (answer == 2)
		{
			changeImage20()
			for (i = 0; i < 3; i++)
			{
				console.log(score);
				score[i] += 2;
				console.log(score);
			}
		}
		if (answer==3)
		{
			changeImage21()
		}
	}
	questionsAnswered[3] = true;
}

function questionSix(answer)
{
	if(!questionsAnswered[4])
	{
		if (answer == 1)
		{
			changeImage22()
			score[3] += 2;
			score[6] += 2;
			score[9] += 2;
			score[12] += 2;
			score[14] += 2;
			score[17] += 2;
			console.log(score);
		}
		if (answer == 2)
		{
			changeImage23()
			score[4] += 2;
			score[6] += 2;
			score[9] += 2;
			score[12] += 2;
			score[14] += 2;
			score[17] += 2;
			console.log(score);

		}
		if (answer == 3)
		{
			changeImage24()
			score[4] += 2;
			score[6] += 2;
			score[9] += 2;
			score[12] += 2;
			score[14] += 2;
			score[17] += 2;
			console.log(score);

		}
		if (answer == 4)
		{
			changeImage25()
			score[5] += 2;
			score[7] += 2;
			score[10] += 2;
			score[13] += 2;
			score[15] += 2;
			score[18] += 2;
			console.log(score);

		}
		if (answer == 5)
		{
			changeImage26()
			score[5] += 2;
			score[8] += 2;
			score[11] += 2;
			score[13] += 2;
			score[16] += 2;
			score[19] += 2;
			console.log(score);
		}
		if (answer==6)
		{
			changeImage27()
		}
	}
	questionsAnswered[4] = true;
}

function findGreatest() {
  maxScore = 0;
  maxIndex = 0; 

  var products2 = ["DivaCup0", "SoftCup1", "SpongeTampons2", "PadsLight3", "PadsModerate4", "PadsHeavy5", "TamponsRegular6", "TamponsSuper7", "TamponsSuperPlus8", "SportTamponsRegular9", "SportTamponsSuper10", "SportTamponsSuperPlus11", "SportPadsRegular12", "SportPadsLong13", "OrganicTamponsRegular14", "OrganicTamponsSuper15", "OrganicTamponsSuperPlus16", "NoApplicatorRegular17", "NoApplicatorSuper18", "NoApplicatorSuperPlus19"];
var score2 = score;
var imgIDs = ["myImage", "myImage2", "myImage3"];
var imgArray = ["DivaCup0.jpg", "SoftCup1.jpg", "SpongeTampons2.jpg", "PadsLight3.jpg", "PadsModerate4.jpg", "PadsHeavy5.jpg", "TamponsRegular6.jpg", "TamponsSuper7.jpg", "TamponsSuperPlus8.jpg", "SportTamponsRegular9.jpg", "SportTamponsSuper10.jpg", "SportTamponsSuperPlus11.jpg", "SportPadsRegular12.jpg", "SportPadsLong13.jpg", "OrganicTamponsRegular14.jpg", "OrganicTamponsSuper15.jpg", "OrganicTamponsSuperPlus16.jpg", "NoApplicatorRegular17.jpg", "NoApplicatorSuper18.jpg", "NoApplicatorSuperPlus19.jpg"];

for (i = 0; i < 3; i++)
{
	maxScore = score2[0]; 
  	maxIndex = 0; 
  for (j = 0; j < score.length; j++)
  {

  	if(score2[j] > maxScore)
  	{
  		maxIndex = j;
  		maxScore = score2[j];

  	}
  	
  }
 

  	console.log("You Got " + products2[maxIndex]);
  	score2[maxIndex] = 0;
  	document.getElementById(imgIDs[i]).src = imgArray[maxIndex];


}
console.log(results);
}
