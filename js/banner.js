(function(){
    var timer;
    var i = 0;
    $(function() {
        $(".banner_imgs li").eq(0).show().siblings().hide();
        $(".dots span").eq(0).addClass("bg")

        showtime();

        $(".dots span").click(function() {
            clearInterval(timer);
            i = $(this).index();
            show();
            showtime();
        });


    })

    function show() {

        $(".banner_imgs li").eq(i).show().siblings().hide();
        $(".dots span").eq(i).addClass("bg").siblings().removeClass("bg");
    }

    function showtime() {
        timer = setInterval(function() {
            i++;
            if (i == 3) {
                i = 0;
            }
            show();
        }, 6000);
    }

}())
