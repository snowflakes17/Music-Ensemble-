//this idea is for a single drum only....


// //its a idea of passing a function as an input so that it can be called at a later time....
// document.querySelector("button").addEventListener("click",handClicked);  // (event,function)


// function handClicked(){
//     alert("I got clicked!!");
// }

// // another way...

// // document.querySelector("button").addEventListener("click", function() {
// //     alert("I got clicked!!");
// // });

// to show alert in every drum click...v should...

var lengthOfDrums=document.querySelectorAll(".drum").length;


for(var i=0;i<lengthOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        //alert("I got clicked!!");

        // var audio=new Audio("sounds/tom-1.mp3");
        // audio.play();
       // this.style.color="white";

    var buttonInnerHTML=this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    });
}

//detecting keyboard press

document.addEventListener("keydown",function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
    
});
// addEventListener("keypress",function(){
//     this.alert("key was pressed!!!");
// });

function makeSound(key){
    switch (key){

        case "w":
            var audio1=new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;

        case "a":
                var audio2=new Audio("sounds/tom-2.mp3");
                audio2.play();
                break;

        case "s":
                var audio3=new Audio("sounds/tom-3.mp3");
                audio3.play();
                break;

        case "d":
                var audio4=new Audio("sounds/tom-4.mp3");
                audio4.play();
                break;

        case "j":
                    var audio5=new Audio("sounds/crash.mp3");
                    audio5.play();
                    break;

        case "k":
                        var audio6=new Audio("sounds/snare.mp3");
                        audio6.play();
                        break;

        case "l":
                        var audio7=new Audio("sounds/kick-bass.mp3");
                        audio7.play();
                        break;

                        default:
                            console.log(key);
    }
}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function()  {
        activeButton.classList.remove("pressed");
    }, 100);
}