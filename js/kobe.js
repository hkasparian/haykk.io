/*===================================
=            GLOBAL VARS            =
===================================*/
var scrollMagicIsDestroyed = false;
var scrollMagicController = new ScrollMagic.Controller();




/*=================================
=            DOM READY            =
=================================*/
$(function() {

    // Only if not IE, not touch, and not mobile
    if ($(window).width() > 768 && !is_touch_device() && !is_ie()) {

        // $('section').height($(window).height());

        createScrollMagic();
    } else {
        $('body').addClass('no-scroll-magic');
    }
});




/*===================================
=            WINDOW LOAD            =
===================================*/
$(window).load(function() {

});




/*=====================================
=            WINDOW RESIZE            =
=====================================*/
$(window).resize(function() {

    // Kill for small screens
    if ($(window).width() <= 200 && !scrollMagicIsDestroyed) {
        destroyScrollMagic();
        scrollMagicIsDestroyed = true;
        $('body').addClass('no-scroll-magic');
    }

    // Force better DOM repainting hack. Helps on mobile
    $('html').addClass('force-gpu').removeClass('force-gpu');
});



/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function createScrollMagic() {

    $('section:odd').each(function() {
        var cardTweenOdd = TweenMax.fromTo('#'+$(this).attr('id')+' .wrap', 1,
            {
                scale: 0,
                // z: 1,
                y: 500,
                x: 800,
                skewX: '200deg',
                transformPerspective: 200,
                rotation: '10deg'
            },
            {
                scale: 1,
                // z: 1,
                y: 0,
                x: 0,
                skewX: 0,
                rotation: 0
            }
        );

        var cardScene = new ScrollMagic.Scene({
            triggerElement: '#'+$(this).attr('id'),
            duration: $(window).height() * 0.7,
            offset: -250
        })
        .addTo(scrollMagicController)
        .setTween(cardTweenOdd);


    });
    $('section:even').each(function () {
        var cardTweenEven = TweenMax.fromTo('#' + $(this).attr('id') + ' .wrap', 1,
            {
                scale: 0,
                // z: 1,
                y: 500,
                x: -800,
                skewX: '-200deg',
                transformPerspective: -200,
                rotation: '10deg'
            },
            {
                scale: 1,
                // z: 1,
                y: 0,
                x: 0,
                skewX: 0,
                rotation: 0
            }
        );

        var cardScene = new ScrollMagic.Scene({
            triggerElement: '#' + $(this).attr('id'),
            duration: $(window).height() * 0.7,
            offset: -250
        })
        .addTo(scrollMagicController)
        .setTween(cardTweenEven);


    });
    // Begin Signature Tween

    function pathPrepare($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
    }

    var $letterH = $("path#letterH");
    var $ayk = $("path#ayk");
    var $kasparian = $("path#kasparian");

    // prepare SVG
    pathPrepare($letterH);
    pathPrepare($ayk);
    pathPrepare($kasparian);

    // build tween
    var tween = new TimelineMax()
        .add(TweenMax.to($letterH, 0.5, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
        .add(TweenMax.to($ayk, 1.2, { strokeDashoffset: 0, ease: Linear.easeNone }))  // draw dot for 0.4
        .add(TweenMax.to($kasparian, 1, { strokeDashoffset: 0, ease: Linear.easeNone }))  // draw dot for 1
        .add(TweenMax.to("path", 1, { stroke: "#FFF", ease: Linear.easeNone }), 0);			// change color during the animation

    // build scene
    var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 250, tweenChanges: true })
        .setTween(tween)
        .addTo(scrollMagicController);
}

function destroyScrollMagic() {
    scrollMagicController.destroy(true)
    scrollMagicController = null;
    $('*').removeAttr('style');
}

function is_touch_device() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
};

function is_ie() {
    // Disable for IE
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
        return true;
    }
}