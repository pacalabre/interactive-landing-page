
var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});




$("section").each(function() {
    var name = $(this).attr('id');
    new ScrollMagic.Scene({
        triggerElement: this
    })
    .setPin(this)
    .addTo(ctrl);

 });



 // $(".main").tiltedpage_scroll({
 //    sectionContainer: "> section",     // In case you don't want to use <section> tag, you can define your won CSS selector here
 //    angle: 50,                         // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
 //    opacity: true,                     // You can toggle the opacity effect with this option. The default value is true
 //    scale: true,                       // You can toggle the scaling effect here as well. The default value is true.
 //    outAnimation: true                 // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
 //  });

