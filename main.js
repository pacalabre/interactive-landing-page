var ctrl = new ScrollMagic.Controller({
    // globalSceneOptions: {
    //     triggerHook: 'onLeave'
    // }
});

//WORKING Scroll Magic Code
$("section").each(function() {
    var name = $(this).attr('id');
    new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 'onLeave'
    })
    .setPin(this)
    .addTo(ctrl);
 });



var sectionTwoQuote = new ScrollMagic.Scene({
    triggerElement: "#sectionTwoQuoteTrigger"
})
.setTween('#sectionTwoQuote', 1, {opacity: 1})
.addIndicators({name: 'section2'})
.addTo(ctrl);

var footerScene = new ScrollMagic.Scene({
  triggerElement: "#footerTrigger"
})

.setTween("#sectionLogo", 0.75, { backgroundColor: '#003b40'})
// .addIndicators({name: 'animate footer'})
.addTo(ctrl);




// var ctrl = new ScrollMagic.Controller({
//     globalSceneOptions: {
//         triggerHook: 'onLeave'
//     }
// });


// //WORKING Scroll Magic Code
// $("section").each(function() {
//     var name = $(this).attr('id');
//     new ScrollMagic.Scene({
//         triggerElement: this
//     })
//     .setPin(this)
//     .addTo(ctrl);

//  });

// var footerScene = new ScrollMagic.Scene({
//   triggerElement: "#footerTrigger",
//   triggerHook: 0,
//   duration: 0.5
//   // triggerHook: 0
// })

// .setTween("#footerTrigger", 0.5, { backgroundColor: '#003b40'})
// .addIndicators({name: 'animate it'})
// .addTo(ctrl);


