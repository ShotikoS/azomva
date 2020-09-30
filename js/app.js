const SlideShowMasive = [
    "url('./images/slideOne.jpg')", "url('./images/slideTwo.jpeg')", "url('./images/slideThree.jpg')"
]


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

function ShowHideService(){
    $(document).ready(function(){
        $(".Services__content li").click(function(){
            $(this).find(".Service__details").animate({
                height: "toggle"
            })
            $(this).find(".ServiceHeader").css({
                "border-bottom-left-radius": "0px",
                "border-bottom-right-radius": "0px"
            })
        })
    })
}
var index = 1;

setInterval(function(){
    if(index > (SlideShowMasive.length -1)){
        index = 0;
        document.getElementById("SliderImage").style.backgroundImage = SlideShowMasive[0];
    }else{
        document.getElementById("SliderImage").style.backgroundImage = SlideShowMasive[index];
    }
    index++;
}, 3000);

function changeSlide(){
    
}

ShowHideService();

SetSlideSize();