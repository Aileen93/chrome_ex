function getCookie(cname){   
    
    // clear
    // $('#c_contents').empty();
    
    // getCookie 
    
    // setCookieInfo
    var cDomain = "naver.com";
    var cName = "ENC";
    var cTitle = "▶ "+cName+" ("+cDomain+")";
    var cValue = "cj=&nick=&cpinfo=86d79930f59bdc981f8459d78c4dde45d3dba5e839506c8a41d6107a412a2bd34e94f0b55da359638cde8015c3ba75e8";
    var cExpire_dt = "2017-08-03 17:33:01";
    
    // common info
    var nColor = "EBFBFF";
    var sColor = "9DE4FF";
    
    var nTitle = cTitle;
    var sTitle = "<strong>"+cTitle+"</strong>";
    
    // cookieInfo innerHtml
    var innerHtmlForm = 
    "<li id=\"\" class=\"asdf\" style=\"padding-left:10px; background:#"+nColor+"; border:1px solid #E1F6FA\">"
    +    "<span id=\""+cName+"\" name=\""+cName+"\">"+nTitle+"</span>"
    +"<li>"
    +"<li id=\"\" style=\"display:none;\">"
    +   "<div id=\"\" name=\"\" class=\"input-group-sm\" style=\"padding-left:23px;\">"
    +       "<textarea id=\""+cName+"\" name=\"SFN\" class=\"form-control\" style=\"width:95%; height:100px; margin-bottom:5px; margin-top:10px;\" onload=\"setCookie();\">"+cValue+"</textarea>"
    +       "<div class=\"input-group input-group-sm\" style=\"width:95%;\">"
    +           "<div id=\"\" class=\"input-group-addon\" style=\"background:white;\">만료일</div>"
    +           "<input type=\"text\" id=\"expire_dt\" name=\"expire_dt\" class=\"form-control\" value=\""+cExpire_dt+"\" disabled=\"true\" readonly/>"
    +           "<div id=\"\" class=\"input-group-btn\">"
    +               "<button type=\"button\" id=\"f_save\" class=\"btn btn-default\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-floppy-disk\"></span></button>"
    +               "<button type=\"button\" id=\"f_delete\" class=\"btn btn-default\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-trash\"></span></button>"
    +           "</div>"
    +       "</div>"
    +   "</div></br>"
    +"</li>";
    
    document.getElementById("c_contents").innerHTML += innerHtmlForm;
    // document.getElementById("c_contents").appendChild(innerHtmlForm);
}

// f_search
document.getElementById("search").addEventListener("keyup", search);
function f_search(event){
    
    // 1. 이전에 선택된 모든 쿠키 값 닫기 display:block;
    
    
    // 2. 현재 쿠키이름과 동일한 쿠키 title 잡아서 display:none; 처리
	
// 	var n_input = String.fromCharCode(event.keyCode).toLowerCase();
	var o_input = document.getElementById('search').value;
	
	var cName = o_input+'=';
	if(cName != ''){
		var cookie = document.cookie;
		var startIndexOf = cookie.indexOf(cName);

		var cValue = '';
		if(startIndexOf != -1){
			startIndexOf += cName.length;
			var endIndexOf = cookieData.indexOf(';', startIndexOf);
			if(endIndexOf == -1)endIndexOf = cookieData.length;
			cValue = cookieData.substring(startIndexOf, endIndexOf);
            
            // 동일한 쿠키 이름만 none;
            
            // 그외는 모두 block; 처리
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
function f_delete(cookieName){

	var expireDate = new Date();
	if(cookieName.length > 0){
		// 쿠키 이름이 넘어올 경우 해당 쿠키만 삭제
		expireDate.setDate( expireDate.getDate() - 1 );
		document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";
        alert(cookieName+' 쿠키가 정상적으로 삭제 되었습니다.');
        f_refresh();
	}else{
		// 그외는 모두 삭제한다.
		expireDate.setDate( expireDate.getDate() - 1 );
		document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";
        alert('전체 쿠키가 삭제되었습니다.');
        f_refresh();
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


