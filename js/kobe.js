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
    /* 
     * Lazy Line Painter - Path Object 
     * Generated using 'SVG to Lazy Line Converter'
     * 
     * http://lazylinepainter.info 
     * Copyright 2013, Cam O'Connell  
     *  
     */

    var pathObj = {
        "signature": {
            "strokepath": [
                {
                    "path": "  M36.335,30.919c5.873,3.726,11.168,8.361,15.639,13.689c5.933,7.071,10.544,16.567,7.721,25.355  c-2.86,8.905-12.421,13.97-21.618,15.67c-9.556,1.766-20.582,0.386-26.971-6.937c-5.739-6.578-6.299-16.301-4.52-24.847  c3.955-19,18.628-35.387,37.077-41.41c12.139-3.963,27.468-2.64,34.956,7.703c4.051,5.596,5.086,12.778,5.644,19.664  c3.267,40.317-5.58,80.554-15.264,119.827c-14.516,58.869-31.041,117.22-47.562,175.558",
                    "duration": 800
                },
                {
                    "path": "  M192.398,34.045c-42.653,92.539-55.392,195.649-66.347,296.955c0.334-28.02-5.503-56.096-16.978-81.661  c-8.158-18.176-21.355-36.648-40.961-40.188c-2.269-0.41-4.764-0.564-6.729,0.643c-1.786,1.098-2.776,3.1-3.634,5.013  c-4.425,9.866-7.806,20.2-10.067,30.774c-0.838,3.918-1.494,8.149,0.126,11.814c2.256,5.104,8.125,7.454,13.547,8.775  c31.061,7.566,64.055-2.722,91.523-19.078s50.946-38.512,76.539-57.669c3.051,8.253,6.101,16.506,9.152,24.759  c-4.025-4.704-11.53-4.996-17.104-2.304c-5.575,2.692-9.641,7.681-13.408,12.594c-16.936,22.093-31.875,46.292-39.14,73.165  c-2.373,8.78-3.648,18.998,1.847,26.245c35.69-23.908,58.473-66,58.973-108.955c-4.509,24.432-8.148,49.025-10.909,73.717  c-1.009,9.025-1.853,18.455,1.403,26.932c0.57,1.485,1.428,3.073,2.953,3.528c1.313,0.391,2.705-0.192,3.911-0.843  c9.701-5.237,15.823-15.187,20.874-24.986c11.271-21.868,19.509-45.295,24.406-69.404c-7.759,24.588-13.611,49.777-17.489,75.266  c-0.862,5.67,0.472,13.861,6.201,13.584c20.003-31.992,37.396-65.615,51.95-100.426c-14.724,45.289-27.924,91.132-37.457,137.791  c-3.645,17.838-6.926,36.251-16.455,51.766c-9.529,15.514-27.085,27.659-45.092,24.968c-8.393-1.254-16.731-6.276-19.587-14.267  c-4.07-11.39,4.086-23.502,13.261-31.384c20.025-17.202,46.136-25.335,68.653-39.117c32.506-19.895,56.617-51.029,76.222-83.71  c40.424-67.384,64.679-144.394,70.168-222.781c0.094-1.345,0.171-2.756-0.397-3.979c-1.319-2.839-5.567-3.112-8.129-1.312  s-3.832,4.886-4.951,7.81c-33.881,88.489-47.79,183.142-61.472,276.903c17.44-46.437,41.552-90.029,65.573-133.428  c-17.399,25.18-31.868,52.383-43.023,80.884c34.23,8.688,63.64,34.536,76.651,67.367",
                    "duration": 1800
                },
                {
                    "path": "  M483.694,337.507c61.261-29.55,103.118-89.061,130.068-151.509c20.296-47.028,33.691-97.027,39.625-147.903  c0.635-5.444,0.432-12.329-4.535-14.646c-4.231-1.974-9.053,0.841-12.8,3.626c-41.001,30.471-74.011,72.151-91.952,119.981  c-17.941,47.83-20.368,101.747-4.437,150.283c2.909,8.862,7.196,18.38,15.769,22.055c13.51,5.791,27.762-6.171,36.737-17.812  c25.068-32.51,42.144-71.137,49.318-111.558c-16.113,38.956-28.795,79.332-37.851,120.505c8.59-9.081,18.944-16.487,30.314-21.682  c4.076-1.862,8.934-3.419,12.887-1.308c2.558,1.366,4.148,3.989,5.615,6.49c5.213,8.89,10.426,17.781,15.64,26.671  c6.219-4.794,12.438-9.588,18.657-14.382c2.091-1.612,4.253-3.26,6.799-3.957c3.277-0.897,6.75-0.109,10.068,0.623  c41.379,9.134,84.709,9.325,126.167,0.557c21.004-4.442,41.815-11.186,63.284-11.119",
                    "duration": 1400
                }
            ],
            "dimensions": {
                "width": 900,
                "height": 434
            }
        }
    };


    /* 
     Setup and Paint your lazyline! 
     */

    $(document).ready(function () {
        $('#signature').lazylinepainter(
        {
            "svgData": pathObj,
            "strokeWidth": 5,
            "strokeColor": "#fff",
            "responsive": true,
            "strokeOpacity": 0.9,
            "drawSequential": false
    }).lazylinepainter('paint');
    });
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
    if ($(window).width() <= 768 && !scrollMagicIsDestroyed) {
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

    $('section').each(function() {
        var cardTween = TweenMax.fromTo('#'+$(this).attr('id')+' .wrap', 1,
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
        .setTween(cardTween);
    });
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