var crsr = document.querySelector("#cursor");/*querySelector is used to set html element in JS.*/
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){

    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    blur.style.left = dets.x - 250 +"px";//ye -250px jo hai wo blur waale div ko sath mai chalane ke liye hai.*/
    blur.style.top = dets.y - 250 +"px";
 
})


/* document.addEventListener -> means purre html document pe ,
                                eventListener laga do kon sa laga do?
   "mousemove"  -> mouse move laga do (it give each and every info about mouse movement).
    
   function(dets) ->we pass an function and we pass as "dets" as parameter in it.
                    "dets" is used to tell about each and every action and event ocour with
                     mouse cursor.
                  ->dets.x : tells the mouse event in x axis.
                  ->dets.y : tells the mouse evnt in y axis.


*/                           

gsap.to("#nav", {

    backgroundColor:"#228B22", 
    duration:0.5,/*0.5sec baad background color change hoga.*/
    height:"110px",
   
    scrollTrigger:{ /*opening of scroll_Trigger*/

        trigger:"#nav", /*kis element ko trigger kr rahe ho*/
        scroller:"body",/*scroll kya hora hai(body of "nav"*/
        // markers:true, /*markers dikhte hai ise likhne se (start end)*/ 
        start:"top -10%", /*hm start point ko set kr rahe hai "top" se "-10"*/
        end: "top -11%",
        scrub:1 /*is smooth ho jaata hai scrolling effect*/

    }
})

// HOW TO USE GSAP ?
// ->write gsap.to("name_OF_Element"{ opening of object


//        property of Object.
//        method
// })

// scrollTrigger is used to add some effects, property or animal on scroll



gsap.to("#main",{

    backgroundColor: "#000",
    scrollTrigger:{
        
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub:2
    }
})


/*for changing the cursor div to hollow circle*/

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){

    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2;
        crsr.style.border = "0.5px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })

    elem.addEventListener("mouseleave",function(){

        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    })
})

/*querySelectorAll will select all the h4 elements inside
  the #nav div if we use querySelector only it will only
  select one h4 tag.
  mouseenter -> when ever mouse cursor will enter to that area.
  mouseleave -> when ever mouse cursor will leave from that area.
  */


  gsap.from("#about-us img, about-us-in",{

            y:50, //->y-axis se upper ki tarag uthenge.
            opacity: 0, //->initial opecity
            duration: 1, 
            // stagger: 0.4, -> alag alag element move honge
            
            scrollTrigger:{

                trigger:"#about-us",
                scroller:"body",
                // markers: true,
                start: "top 60%",
                end: "top 58%",
                scrub: 2
        
        }
  })



 gsap.from("#colon1",{

     x:-70,
     x:-70,

     scrollTrigger:{

        trigger:"#colon1",
        scroller: "body",
        // markers:true,
        start:"top 55%",
        end:"top 45%" ,
        scrub: 4
     }

 })


 gsap.from("#colon2",{

    x:70,
    x:70,

    scrollTrigger:{

       trigger:"#colon1",
       scroller: "body",
    //    markers:true,
       start:"top 55%",
       end:"top 45%" ,
       scrub: 4
    }

})

gsap.from("#page4 h1",{

    y:50,

    scrollTrigger:{

        trigger:"#page4 h1",
        scroller: "body",
     //    markers:true,
        start:"top 75%",
        end:"top 70%" ,
        scrub: 2
     }

})



// var h4all = document.querySelectorAll(".elem, .elem h4");
// h4all.forEach(function(elem){

//     elem.addEventListener("mouseenter",function(){
//         crsr.style.scale = 2;
//         crsr.style.border = "0.5px solid #fff";
//         crsr.style.backgroundColor = "transparent";
//     })

//     elem.addEventListener("mouseleave",function(){

//         crsr.style.scale = 1;
//         crsr.style.border = "0px solid #95C11E";
//         crsr.style.backgroundColor = "#95C11E";
//     })
// })