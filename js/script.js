//Tap
$(".clearfix li a").click(function () {
    $(this).parent().addClass('see').siblings().removeClass('see');
});


// Festival Top button
$(".Top").click(function () {
    $("html,body").animate({
        scrollTop:0
    },1000)
});



// board

$(function() {
    $('.answer').hide();  // 초기에는 모든 답변을 숨깁니다.
    
    // 질문 항목 클릭 시 (답변 보이기/숨기기)
    $('.qna .arrow_btn').click(function() {
        var $li = $(this).closest('li');  // 클릭된 항목의 li를 찾음
        var $answer = $li.find('.answer');  // 해당 li의 answer 요소
        
        // 다른 열린 답변을 숨깁니다.
        $('.qna li').not($li).find('.answer').slideUp();
        $('.qna li').not($li).find('img').removeClass('rotated');
        
        // 현재 클릭된 항목의 답변을 슬라이드로 보이거나 숨깁니다.
        $answer.stop().slideToggle();
        
        // 플러스 버튼 이미지 회전 효과
        var $img = $(this).find('img');
        $img.stop().toggleClass('rotated');
    });

    // 탭을 클릭했을 때 열려있는 모든 답변을 숨깁니다.
    $('.flex_wrap ul li a').click(function() {
        $('.qna .answer').slideUp();  // 모든 답변을 숨깁니다.
        $('.qna img').removeClass('rotated');  // 모든 아이콘 회전 해제
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".flex_wrap ul li a");
    const questions = document.querySelectorAll(".qna li");
    
    tabs.forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();
            
            // 탭 선택 상태 변경
            tabs.forEach(t => t.classList.remove("selected"));
            this.classList.add("selected");
            
            // 필터링할 클래스 가져오기
            const filterClass = this.getAttribute("data-filter");
            
            // 질문 목록 필터링
            questions.forEach(question => {
                if (filterClass === "all") {
                    // 전체 탭을 클릭했을 때 모든 질문을 표시
                    question.style.display = "block";
                } else if (filterClass === "on" && question.innerHTML.includes("[주문/결제]")) {
                    question.style.display = "block";
                } else if (filterClass === "off" && question.innerHTML.includes("[배송관련]")) {
                    question.style.display = "block";
                } else if (filterClass === "other" && question.innerHTML.includes("[기타문의]")) {
                    question.style.display = "block";
                } else {
                    question.style.display = "none";
                }
            });
        });
    });
    
    // 초기화: 첫 번째 탭 활성화
    document.querySelector(".flex_wrap ul li a.selected").click();
});

