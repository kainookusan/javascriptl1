var slides = document.getElementsByClassName('carousel-item');
console.log(slides); //HTML Collection
// console.log(slides[0]);
var dots = document.querySelectorAll(".dot");
// console.log(dots); //NodeList


var currentslide = 1;

// Previous btn
document.getElementById('prev').addEventListener('click',function(){
	carousel(currentslide -= 1);
});

// Next btn
document.getElementById('next').addEventListener('click',function(){
	carousel(currentslide += 1);
});



for(var q=0; q < dots.length ; q++){
   // console.log(q);

   // dots[q] ga q ta ku  chin zi dine ko listen phoe array
   dots[q].addEventListener('click',function(){
   	// console.log(this.getAttribute("data-bs-slide-to"));

   	currentslide = this.getAttribute("data-bs-slide-to");
   	carousel(currentslide);
  
   });

}



carousel(currentslide); // fun go invote load tr load mha asa pyn yout


function carousel(slidenum){

	var x,y;

	// hide all slides
	for(x=0; x < slides.length ; x++){
		slides[x].style.display = 'none';
	}

	for(y=0; y < dots.length ; y++){
		// dots[y].classList.remove("active");
		// dots[y].className = "dot";
		dots[y].className = dots[y].className.replace("active","");
	}




	// res for currentslide 1 to 3 $ 3 to 1  (4 to 1) (0 to 4)
	if(slidenum > slides.length){
		currentslide = 1;
	}else if(slidenum < 1){
		currentslide = slides.length;
	}

	// console.log(currentslide);

	slides[currentslide-1].style.display = "block";

	// dots[currentslide-1].className = "dot active";
	dots[currentslide-1].className += " active";  //space clasName ta ku xi mhoe
	// dots[currentslide-1].classList.add("active");
}



// slide         0        1        2
// currentslide  1-1=0    2-1=1    3-1=2