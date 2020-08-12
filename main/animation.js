let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let gamebar = document.getElementById('gamebar');
let audio1 = document.getElementById('audio1');
let audio2 = document.getElementById('audio2');
let audio3 = document.getElementById('audio3');
let audio4 = document.getElementById('audio4');

let start = document.getElementById('start');

let computerArray = [];
let userArray = [];


//functions
// function save() {
// 	localStorage.setItem('valuesArray', JSON.stringify(valuesArray));
// 	// body...
// }


function onclickRadio() {
  let options = document.getElementsByName('options');
  for (let i = 0; i < options.length; i++) {
    if (options[i].type === 'radio' && options[i].checked) {
        rezult = options[i].value;
    }
  }
  
  return (rezult);
};

let uGotThat = 0;

function addInArray(numberr) {
	userArray.push(numberr);
	if (userArray[uGotThat] == computerArray[uGotThat]) {
				if (userArray.length == computerArray.length) {
					setTimeout(comparasion,1500);
				}
			} else {
				userArray.length = 0;
				computerArray.length = 0;
				alert('u loose...Try again')
			}
	uGotThat++;
	console.log(uGotThat);
};

// function Actions() {
// 			if (userArray[uGotThat] == computerArray[uGotThat]) {
// 				if (userArray.length == computerArray.length) {
// 					comparasion();
// 				}
// 			} else {
// 				console.log('u loose again')
// 			}
// 	uGotThat++;
// 	console.log(uGotThat);
// 	// body...
// }
function comparasion() {

let count = 0;
		if (computerArray[count] == userArray[count]) {
			let i = 0;
			intervalId = setInterval(function(){

				if (i < computerArray.length ) {
					switch (computerArray[i]){
						case 1 :
							Animation(one, audio1, "#F9E39F");
							i++;
						 	break;
						case 2 :
							Animation(two, audio2, "#F6B428");
							i++;
							break;
						case 3 :
							Animation(three, audio3, "#F12F09");
							i++;
							break;
						case 4 :
							Animation(four, audio4, "#F16809");
							i++;
							break;};

			} else {
				ActionComputer();
				uGotThat = 0;
				userArray.length = 0;
				clearInterval(intervalId);
				console.log(userArray + '/' + computerArray);
			}}, rezult);

		} else {
      computerArray.length = 0;
      userArray.length = 0;
      alert('your loose....try again!)');
		}
	count++;


};


function Animation(number, audio, color) {
	function retur () {
	number.style.backgroundColor = "#686868";
};
	audio.play();

	number.style.backgroundColor = color;
	setTimeout(retur,350);
};
//end

//Actions from user
one.addEventListener("click",function(){addInArray(1)});
two.addEventListener("click",function(){addInArray(2)});
three.addEventListener("click",function(){addInArray(3)});
four.addEventListener("click",function(){addInArray(4)});



window.addEventListener("click",onclickRadio);
one.addEventListener("click",function(){Animation(one, audio1, "#F9E39F")});
two.addEventListener("click",function(){Animation(two, audio2, "#F6B428")});
three.addEventListener("click",function(){Animation(three, audio3, "#F12F09")});
four.addEventListener("click",function(){Animation(four, audio4, "#F16809")});


//end


//Actions from computer
let randomClick = function randomClick() {
	min = 1;
	max = 5;
	random = Math.floor(Math.random() * (max - min) + min);
	switch (random){
		case 1 :
			Animation(one, audio1, "#F9E39F");
		 	break;
		case 2 :
			Animation(two, audio2, "#F6B428");
			break;
		case 3 :
			Animation(three, audio3, "#F12F09");
			break;
		case 4 :
			Animation(four, audio4, "#F16809");
			break;
	};

		computerArray.push(random);

		return;
};





let ActionComputer = function ActionComputer() {
	randomClick();

} ;

start.addEventListener('click',ActionComputer);























// let count = 0;


// intervalId = setInterval(function(){


// 		switch (array[count]){
// 		case 1 :
// 			oneAnimation();
// 		 	break;
// 		case 2 :
// 			twoAnimation();
// 			break;
// 		case 3 :
// 			threeAnimation();
// 			break;
// 		case 4 :
// 			fourAnimation();
// 			break;
// 	};
//
// 		count++;
// 		console.log(array + '/' + length + '/' + count)
// 		}, 1000)
