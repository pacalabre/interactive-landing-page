
var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});


//WORKING Scroll Magic Code
$("section").each(function() {
    var name = $(this).attr('id');
    new ScrollMagic.Scene({
        triggerElement: this
    })
    .setPin(this)
    .addTo(ctrl);

 });


