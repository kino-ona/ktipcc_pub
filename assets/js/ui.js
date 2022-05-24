'use strict';

/* iphone scroll bug */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

/* accordion */

class Accordion {
	constructor(heading) {
		this.heading = heading;
	}
	
	allowOne() {
		const accordionHeading = document.querySelectorAll(this.heading);

		accordionHeading.forEach((item, key) => {
			item.addEventListener('click', () => { 
				accordionHeading.forEach(element => {
					element.classList.contains('accordion__header--active') ? 
					element.classList.remove('accordion__header--active') : null;
				});
					
				item.classList.add('accordion__header--active');
			});
		});
	}
	
	allowMulti() {
		const accordionHeading = document.querySelectorAll(this.heading);

		accordionHeading.forEach((item, key) => {
			item.addEventListener('click', () => { 
				item.classList.contains('accordion__header--active') ? 
				item.classList.remove('accordion__header--active') :            
				item.classList.add('accordion__header--active');
			});
		});
	}
}

const accordion = new Accordion('.accordion__header');
accordion.allowMulti();



const spinnerBar = `
<div class="spinner">
<div class="spinner__circle">
<div class="spinner__bar"></div>
<div class="spinner__bar"></div>
<div class="spinner__bar"></div>
<div class="spinner__bar"></div>
<div class="spinner__bar"></div>
<div class="spinner__bar"></div>
<div class="spinner__bar"></div>
<div class="spinner__bar"></div>
<div class="spinner__bar"></div>
<div class="spinner__bar"></div>
<div class="spinner__bar"></div>
<div class="spinner__bar"></div>
</div></div>
<p>
`;
function loadingFn() {
const element = document.getElementById('spinner');
element.innerHTML = spinnerBar;
} 

document.querySelectorAll('.button-radius').forEach((item) => {
	item.addEventListener('click', () => {
		item.nextElementSibling.style.display = "block";
	})
})

// let cookiedata = document.cookie; 
// if ( cookiedata.indexOf("ncookie=done") < 0 ){ 
// 	document.getElementById('popup').style.display = "block";    //  팝업창 아이디
// } else {
// 	document.getElementById('popup').style.display = "none";    // 팝업창 아이디
// }


function setCookie( name, value, expiredays ) { 
	let todayDate = new Date(); 
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}


function closeWin() { 
	document.querySelectorAll('#modal').forEach((item) => {
		item.style.display = "none";
	})   
}

function todaycloseWin() { 
	setCookie( "ncookie", "done" , 1 );     // 저장될 쿠키명 , 쿠키 value값 , 기간( ex. 1은 하루, 7은 일주일)
	document.querySelectorAll('#modal').forEach((item) => {
		item.style.display = "none";
	})

}
