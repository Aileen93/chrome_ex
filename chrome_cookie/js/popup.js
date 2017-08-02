var Cookie =
{
    cookie_arr : null,
 
    set : function (name,value,options)
    {
        options = options || {};
 
        this.cookie_arr = [escape(name) + '=' + escape(value)];
 
        //-- expires
        if (options.expires)
        {
            if( typeof options.expires === 'object' && options.expires instanceof Date )
            {
                var date = options.expires;
                var expires = "expires=" + date.toUTCString();
                this.cookie_arr.push (expires);
            }
        }
        else if (options.expires_day)
        {
            this.set_expires_date (options.expires_day , 24*60*60);
        }
        else if (options.expires_hour)
        {
            this.set_expires_date (options.expires_hour , 60*60);
        }
 
        //-- domain
        if (options.domain)
        {
            var domain = "domain=" + options.domain;
            this.cookie_arr.push (domain);
        }
 
        //-- path
        if (options.path)
        {
            var path = 'path=' + options.path;
            this.cookie_arr.push (path);
        }
 
        //-- secure
        if( options.secure === true )
        {
            var secure = 'secure';
            this.cookie_arr.push (secure);
        }
 
        document.cookie = this.cookie_arr.join('; ');
        //console.log (this.cookie_arr.join('; '));
    },
 
    get : function (name)
    {
        var nameEQ = escape(name) + "=";
        var ca = document.cookie.split(';');
 
        for(var i=0;i < ca.length;i++)
        {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length,c.length));
        }
        return null;
    },
 
    del : function (name , options)
    {
        options = options || {};
        options.expires_day = -1;
        this.set ( name , '' , options );
    },
 
    set_expires_date : function (expires , time)
    {
        var date = new Date();
        date.setTime(date.getTime()+(expires*time*1000));
        var expires = "expires=" + date.toUTCString();
        this.cookie_arr.push (expires);
    }
};


function getCookie(cname){
	document.getElementById('cookie_list').innerHTML="이순신";
}

// search
document.getElementById("search").addEventListener("keyup", search);
function search(event){
	
// 	var n_input = String.fromCharCode(event.keyCode).toLowerCase();
	var o_input = document.getElementById('search').value;
	
	var cName = o_input+'=';
	if(cName != ''){
		var cookie = document.cookie;
		var startIndexOf = cookie.indexOf('SFN=');
		alert(startIndexOf);

		var cValue = '';
		if(startIndexOf != -1){
			startIndexOf += cName.length;
			var endIndexOf = cookieData.indexOf(';', startIndexOf);
			if(endIndexOf == -1)endIndexOf = cookieData.length;
			cValue = cookieData.substring(startIndexOf, endIndexOf);
		}
	}
	
	document.getElementById('search').focus();
}

// f_refresh
document.getElementById("f_refresh").addEventListener("click", f_refresh);
function f_refresh(){
	getCookie();
}

// f_delete
document.getElementById("f_delete").addEventListener("click", f_delete);
function f_delete(val){
	alert('쓰레기쓰레기');

	var expireDate = new Date();
	if(val.length == 0){  
		//어제 날짜를 쿠키 소멸 날짜로 설정한다.
		expireDate.setDate( expireDate.getDate() - 1 );
		document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";

	}else{  

		//어제 날짜를 쿠키 소멸 날짜로 설정한다.
		expireDate.setDate( expireDate.getDate() - 1 );
		document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";

	}
}

// f_conf
document.getElementById("f_conf").addEventListener("click", f_conf);
function f_conf(){
	alert('준비 중 입니다.');
}

// f_question
document.getElementById("f_question").addEventListener("click", myFunction);
function myFunction(){
	var objDiv = document.getElementById("contents"); 
	objDiv.scrollTop = objDiv.scrollHeight;
}

// ad
document.getElementById("ad_area").style.backgroundImage = "url(http://helpdesk.nate.com/img/snb/bi_nate.png)";
document.getElementById("ad_area").addEventListener("click", ad);
function ad(){
	window.open('http://www.nate.com ', '_blank'); 
}


