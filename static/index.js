// 방명록 버튼 누를시 입력 양식과 방명록 보이기. 버튼 다시 누르면 감추기
function guestButton(){
    let guestLog = document.getElementById("guestLog")
    if (guestLog.style.display === 'none'){
        $('#guestLog').show()
        document.getElementById("showButton").innerHTML="방명록 닫기"
    } else {
        $('#guestLog').hide()
        document.getElementById("showButton").innerHTML="방명록 보기/작성하기"
    }
}


// Ajax와 연결해서 방명록 DB GET/POST 함수 만들기
// app.py (Flask)에서 전체 방명록 가져오기
$(document).ready(function () {
    show_log();
});

function show_log() {
    $.ajax({
        type: 'GET',
        url: '/guests',
        data: {},
        success: function (response) {
            // Create variable 'rows' from dic var 'response'
            let rows = response['guests']

            for (let i = 0; i < rows.length; i++) {
                let name = rows[i]['name']
                let comment = rows[i]['comment']

                // 받은 정보를 HTML로 전환
                let temp_html = `<div class="postcard">
                                    <div class="card-body">
                                        <blockquote class="blockquote mb-0">
                                            <p>${comment}</p>
                                            <footer class="blockquote-footer">${name}</footer>
                                        </blockquote>
                                    </div>
                                </div>`

                $('#mycard').append(temp_html)
            }
        }
    });
}

// 방명록 정보를 dic형태로 app.py에게 보내기
// app.py에서 정보가 성공적으로 MongoDB로 올려졌으면 'msg'를 받는다
function save_log() {
    let name = $('#nameField').val()
    let comment = $('#commentField').val()

    $.ajax({
        type: 'POST',
        url: '/guests',
        // Data sent by user on page
        data: {name_give: name, comment_give: comment},
        success: function (response) {
            // Alerts 'msg' received from app.py if successful
            alert(response['msg'])

            // Reloads window when complete
            window.location.reload()
        }
    });
}