
		function getCookie(){
			var cookie = document.cookie;
		}

		// ÄíÅ°°Ë»ö
		function search(cookieName){
			var cookie = document.cookie;
			if( cookie.length > 0 ){
				var startIndex = cookie.indexOf(cookieName);
				if( startIndex != -1){
					startIndex += cookieName.length;
				}
			}
		}
		
		// option
		function f_conf(){
			alert('conf');
		}

		// del
		function f_delete(val){
			alert('delete');

		}
		
		// refresh
		function f_refresh(val){
			alert('refresh');
			getCookie();
		}

		// question
		function f_question(){
			
			setTimeout(function(){
				document.getElementById('f_question').style.display = "none";
			}, 2000);  
			document.getElementById('f_question').style.display = "block";
		}

		