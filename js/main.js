$(document).ready(function(){

    $('.sponsors-slider').slick({
        autoplay: true
    });

    var eliteVideo = document.querySelector('.eliteVideo');

    $("#video").animatedModal({
        color: '#000000',
        afterOpen:function() {eliteVideo.play()},
        beforeClose:function() {eliteVideo.pause()}
    });

});