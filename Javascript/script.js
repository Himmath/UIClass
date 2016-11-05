function validate  ()
			{
				var error = 0;
			var spans = document.getElementsByTagName("span");
			var id = document.vacation.id;
			if (id.value === "")
				{
					spans[0].setAttribute("style", "visibility:visible");
					var error = 1;  // using  css
				}
			else {
				 spans[0].setAttribute("style", "visibility:hidden");
				 var error = 0;
			}	
			var name = document.vacation.fname;
			if (name.value === "")
				{
				  spans[1].style.visibility="visible";  
				  var error = 1;  // using js
				}	
			else{
				 spans[1].style.visibility="hidden";
				 var error = 0;
			}
			var flag=1;
			var gender = document.vacation.gender;
			var generror = document.getElementById("errgen");
			for ( var i in gender)
				 {
				 	if(gender[i].checked)
				 		flag = 0;
				 }
			if (flag == 1)
			{
				generror.style.visibility="visible";
				var error = 1;
			}
			else{
				generror.style.visibility="hidden";
				var error = 0;
			}

			var errpos = document.getElementById("errpos");
			var position = document.vacation.position.value;
			if (position === "default")
			{
				errpos.style.visibility = "visible";
				var error = 1;
			} 
			else{

			errpos.style.visibility = "hidden";
			var error = 0

		  }
		  if ( error == 0){

		  	 return true;
		  }
		  else 	{

		  	 return false;
		  }
		}