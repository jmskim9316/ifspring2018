function openNav() {
	    document.getElementById("sidemenu").style.width = "300px";
	    document.getElementById("main").style.marginLeft = "300px";
	    document.getElementById("FirstGen").style.display = "none";
	    document.getElementById("SecondGen").style.display = "none";
	    document.getElementById("ThirdGen").style.display = "none";
	    document.getElementById("Redux").style.display = "none";
	    document.getElementById("nav").style.display = "none";
	    document.getElementById("introgif").style.display = "inline-block"
	    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	}


	function closeNav() {
	    document.getElementById("sidemenu").style.width = "0";
	    document.getElementById("main").style.marginLeft = "0";
	    document.getElementById("FirstGen").style.display = "inline-block";
	    document.getElementById("SecondGen").style.display = "inline-block";
	    document.getElementById("ThirdGen").style.display = "inline-block";
	    document.getElementById("Redux").style.display = "inline-block";
	    document.getElementById("nav").style.display = "inline-block";
	    document.getElementById("introgif").style.display = "none"
	    document.body.style.backgroundColor = "white";
	}