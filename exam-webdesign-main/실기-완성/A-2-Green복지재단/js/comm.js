// 준비 이벤트
// (html 코드를 다 읽고 실행해줘)
// $(document).ready(function(){})

// $(이름값).동작(){$(이름값)}

$(function () {
  // modal 추가
  // lst-bbs li:first-child 를 클릭했을때
  $(".lst-bbs li:first-child").click(function () {
    // a태그의 링크 값 없애기
    event.preventDefault();

    // modal을 찾아서 display:felx 로 변경
    $("#modal").css("display", "flex");
  });

  $(".modal-box .btn-close").on("click focus", function () {
    $("#modal").hide();
  });
});
