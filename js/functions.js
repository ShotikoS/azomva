function SetSlideSize(){
    $(document).ready(function(){
        $(window).resize(function(){
            let sliderWidth = $(".Slider__container").width();
            $(".Slideshow li").width(sliderWidth);
        })
    })
    $(document).ready(function(){
        let sliderWidth = $(".Slider__container").width();
        $(".Slideshow li").width(sliderWidth);
    })
}

function al(){
    alert("test")
}


exports.al = al;