// 스크롤이벤트 밑줄 긋기
$(window).scroll(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 280){
            $(".border3").css({
                "animation":"drawline 2s"
            })
        }
    });
})
$(window).scroll(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 570){
            $(".border4").css({
                "animation":"drawline 2s"
            })
        }
    });
})