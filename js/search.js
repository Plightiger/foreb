// 정렬순
$(".option_1").hide();
$(".select_sort1,.option_1").mouseenter(function(){
    $(".option_1").toggle();
    $(".select_sort1 span").toggleClass("turn");
});
$(".select_sort1,.option_1").mouseleave(function(){
    $(".option_1").hide();
    $(".select_sort1 span").toggleClass("turn");
});
$(".select_sort1,.option_1").click(function(){
    $(".select_sort1 span").toggleClass("turn");
});


function option1_1(){
    document.getElementById("sort_by1").innerHTML = '최신순'
    $(".option_1").hide();
    $(".select_sort1 span").toggleClass("turn");
}
function option1_2(){
    document.getElementById("sort_by1").innerHTML = '오래된순'
    $(".option_1").hide();
    $(".select_sort1 span").toggleClass("turn");
}
function option1_3(){
    document.getElementById("sort_by1").innerHTML = '이름순'
    $(".option_1").hide();
    $(".select_sort1 span").toggleClass("turn");
}


$(".option_2").hide();
$(".select_sort2,.option_2").mouseenter(function(){
    $(".option_2").toggle();
    $(".select_sort2 span").toggleClass("turn");
});
$(".select_sort2,.option_2").mouseleave(function(){
    $(".option_2").hide();
    $(".select_sort2 span").toggleClass("turn");
});
$(".select_sort2,.option_2").click(function(){
    $(".select_sort2 span").toggleClass("turn");
});


function option2_1(){
    document.getElementById("sort_by2").innerHTML = '10개씩 보기'
    $(".option_2").hide();
    $(".select_sort2 span").toggleClass("turn");
}
function option2_2(){
    document.getElementById("sort_by2").innerHTML = '15개씩 보기'
    $(".option_2").hide();
    $(".select_sort2 span").toggleClass("turn");
}
function option2_3(){
    document.getElementById("sort_by2").innerHTML = '20개씩 보기'
    $(".option_2").hide();
    $(".select_sort2 span").toggleClass("turn");
}


// 스크롤이벤트 선 긋기
$(window).scroll(function(){
    var offset = $(".title").offset().top;
    $(window).scroll(function(){
        if($(this).scrollTop() > offset){
            $(".border").css({
                "animation":"drawline 1.5s"
            })
        }
    });
})

// 탭
$(function () {

    $('.novel').show(function () {
        $('.c1').show();
        $('.c2, .c3').hide();
    });



    $('.novel').click(function () {
        $('.c1').show();
        $('.c2, .b3, .b4').hide();
    });


    $('.essay').click(function () {
        $('.c2').show();
        $('.c1, .b3, .b4').hide();
    });


});
