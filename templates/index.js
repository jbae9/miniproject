// 방명록 버튼 누를시 입력 양식과 방명록 보이기. 버튼 다시 누르면 감추기
function guestButton(){
    let guestLog = document.getElementById("guestLog")
    if (guestLog.style.display == 'none'){
        $('#guestLog').show()
        document.getElementById("showButton").innerHTML="방명록 닫기"
    } else {
        $('#guestLog').hide()
        document.getElementById("showButton").innerHTML="방명록 보기/작성하기"
    }
}

// Ajax와 연결해서 방명록 DB GET/POST 함수 만들기