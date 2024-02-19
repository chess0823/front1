/* 
기능:회원가입 및 로그인을 위한 유효성검사
*/

function loginCheck(){
    if(document.login.mem_id.value==""){
        alert("아이디를 먼저 입력해주세요")
        document.login.mem_id.focus();
        return;
    }

    if(document.login.mem_password.value==""){
        alert("비밀번호를 먼저 입력해주세요")
        document.login.mem_password.focus();
        return;
    }
    document.login.submit();//documnet.폼객체명,submit()
}
//회원가입 체크유무
function inputCheck() {
    if(document.login.men_id.value==""){
        alert("아이디를 먼저 입력해주세요")
        document.login.men_id.focus();
        return; 
    }
    //mem_passwd
    if(document.login.men_passwd.value==""){
        alert("비밀번호를 먼저 입력해주세요")
        document.login.men_passwd.focus();
        return;
    }
    //mem_repasswd
    if(document.login.men_repasswd.value==""){
        alert("비밀번호를 확인 해주세요")
        document.login.men_repasswd.focus();
        return;
    }
    //mem_name
    if(document.login.men_name.value==""){
        alert("이름을 먼저 입력해주세요")
        document.login.men_name.focus();
        return;
    }
    //mem_email
    if(document.login.men_email.value==""){
        alert("이메일을 먼저 입력해주세요")
        document.login.men_email.focus();
        return;
    }
    //mem_phone
    if(document.login.men_phone.value==""){
        alert("연락처를 먼저 입력해주세요")
        document.login.men_phone.focus();
        return;
    }
    //mem_zipcode
    if(document.login.men_zipcode.value==""){
        alert("우편번호를 먼저 입력해주세요")
        document.login.men_zipcode.focus();
        return;
    }
    //mem_address
    if(document.login.men_address.value==""){
        alert("주소를 먼저 입력해주세요")
        document.login.men_address.focus();
        return;
    }
    //mem_job
    if(document.login.men_job.value==""){
        alert("직업을 먼저 입력해주세요")
        document.login.men_job.focus();
        return;
    }
     //암호가 서로 일치?
    if(document.reForm.men_passwd.value!=document.regForm.mem_repasswd.value){
        alert("비밀번호가 일치하지 않습니다.");
        document.regForm.men_repasswd.focus();
        return;
    }
    document.regForm.submit();
}
//중복id를 체크해주는 자바스크팁트 함수 선언
function idCheck(id){
    if(id==""){
        alert("아이디를 먼저 입력하세요");
        document.regForm.men_id.focus();
    }else{//입력했다면
        //window.open(1.불러올 문서명.2.창의제목,3,창의 옵션(위치,크기지정))
        open('idCheck.html','w','left=350,top=150,width=300,height=150');
    }
}
//우편번호를 검색해주는 함수선언
    //left,top,width,height+menubar,status(상태바),scrollbars(스크롤기능),toolbar=yes|no(출연유무)
function zipCheck(){
    open('ZipCheck.html','w','left=400,top=220,width=550,height=300'+
                        'menubar=no,status=yes,toolbar=no,scrollbars=yes');
}