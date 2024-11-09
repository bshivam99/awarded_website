
function timelineOne(){
    
    var tl = gsap.timeline({
        scrollTrigger : {
            trigger : "#home"  , 
            start : "top top"  , 
            scrub :1 ,    
            pin : true ,
            end : "bottom -250%"   
        }
    })
    tl.to("#centerimg"  , {
        left : "50%" , 
        duration : 5 ,
          
    })
    .to("#top" , {
        scale : 0.6 ,
        duration: 5   , 
        ease :Power1 , 
    } , "f")
    .to("#bottom" , {
        scale : 0.6 ,
        duration: 5   , 
        ease : Power1 , 
    
    } , "f")
    .to("#overlay>h1#gallery" , {
        bottom : "-22%" ,  
        duration : 5 , 
        rotate : "45deg"  , 
        ease : Power1 , 
    } , "f")
    .to("#gola" , {
        top : "50%" ,
        transform: "translate(-50% , -50%)" ,
        scale : 1.8 ,   
        duration : 5 ,  
        ease : Power1 , 
    } , "f")
    .to("#overlay>h1#pf" , {
        bottom : "2%" ,  
        duration : 5 ,     
        rotate : 0 , 
        ease : Power1 , 
    } , "j")
    .to("#circle #bottom .a" , {
        rotate : "-180deg"  , 
        stagger : 1 , 
        duration : 10 , 
        stagger : 1 ,
        scale : 0 ,  
        ease : Power1 , 
    } , "j")
    .to("#gola" , {
        scale : 0,
        duration : 5 ,   
        ease : Power1 , 
    } , "j")
    .to("#circle #top img" , {
        rotate : "180deg"  , 
        duration : 10 , 
        stagger : 1 ,
        scale : 0 ,  
        ease :Power1 , 
    } , "j")
    .to("#small-circle" , {
        scale : 0.5,
        delay : 1 , 
        ease : Power1 , 
    }, "j" )
    .to("#cimage img" , {
        scale : 0 , 
        duration : 5 
    } , "f")
    .to("#centerimg" , {
        scale : 0 ,
        opacity : 0 , 
        duration : 5 ,   
        ease : Power1 ,
    } , "f" )
    .to("#gola" , {
        scale : 0 ,   
        ease : Power1 , 
    } )
    .to("#pinkpart" , {
        top : "0%" ,    
        duration : 5 ,   
        ease : Power1 ,
    } , "b" )
    .to("#small-circle" , {
        scale : 0 ,     
        duration : 3 ,   
        ease : Power1 ,
    }, "b"  )
    .to("#pinkpart" , {
        top : "-55%" ,   
        duration : 2 ,   
        ease : Power1 ,
    }  )
    }
    
    timelineOne() ; 
    
    function timelineTwo() {
        var tl2 = gsap.timeline({
            scrollTrigger  : {
                trigger : "#second" ,  
                scrub : 2 , 
                start : "top top" , 
                markers : true ,  
                end : "botttom -150%" , 
                pin : true
            }  
        })
    
    tl2
        .to(".circle" , {
            top : "50%" , 
            stagger : .1 ,
            ease : Power1 ,
        })
        .to(".circle" , {
            left : "50%" , 
            stagger : .1 ,
            transform: "translate(-50% , -50%)",
            ease : Power1 ,
        })
        .to(".pi" , {
            scale : 12 ,
            duration : 3 , 
            ease : Power1 ,
        } )
        .to(".pi" , {
            background:  "linear-gradient(to right , #d5a7b4 , #B4AAD5)" , 
            ease : Power1 ,
        })
        .to("#stop h1" , {
            left : "-220%" ,
            duration : 8 , 
            ease : Power1 ,
        } ,"a")
        .to("#sbtm #two" , {
            opacity : 0  ,
            duration : 2 ,
             ease : Power1 ,
         } ,"a")
        .to("#sbtm #one" , {
           opacity : 1  ,
           duration : 3 ,
            ease : Power1 ,
        } ,"a")
       
        
    }
    
    
    
    timelineTwo() ; 
    
    
    