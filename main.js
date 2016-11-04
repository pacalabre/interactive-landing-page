
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

var footerScene = new ScrollMagic.Scene({
  triggerElement: "#footerTrigger"
})

.setTween("#footerTrigger", 0.5, { backgroundColor: '#003b40'})
.addIndicators({name: 'animate footer'})
.addTo(ctrl);


