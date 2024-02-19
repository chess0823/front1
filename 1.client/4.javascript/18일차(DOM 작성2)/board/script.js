function writeSave(){
    //작성자
    if(document.writeform.writer.value==""){
        alert("작성자를 먼저 입력하십시오!");
        document.writeform.writer.focus();
        return false;//=>return writeSave()의 결과값이 fa;se->전송x
    }
    //제목
    if(document.writeform.subject.value==""){
        alert("제목을 먼저 입력하십시오!");
        document.writeform.subject.focus();
        return false;
    }
    //내용
    if(document.writeform.contentr.value==""){
        alert("내용을 먼저 입력하십시오!");
        document.writeform.writer.focus();
        return false;
    }
    //비밀번호
    if(document.writeform.passwd.value==""){
        alert("비밀번호를 먼저 입력하십시오!");
        document.writeform.passwd.focus();
        return false;
    }
    //일반버튼의 이벤트처리->document.writeform.submit()(0
    //onsubmit의 경우에는 document.writeform.submit()(x)
}