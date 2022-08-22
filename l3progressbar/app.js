var getprogressbar = document.querySelector(".progress-bar");
var getdownloadbtn = document.querySelector(".download-btn");
var seturl = "https://linkedin.com";

getdownloadbtn.addEventListener('click',function(){
	// console.log("hi");


	getdownloadbtn.setAttribute("disabled",true);


	var setwidth = 0;

	var setinv = setInterval(progressinc,100); // free so  second waint kine lx ya dr akyrr gy ha ha

	function progressinc(){

		if(setwidth >= 100){
			clearInterval(setinv);
			setwidth=0; // 0 ga start ml pyw dr ma pr lae ya
			window.location.href = seturl;
		}else{
			setwidth++;

			getprogressbar.style.width = `${setwidth}%`;
			getprogressbar.setAttribute('data-inc',`${setwidth}%`);
		}

	}



})