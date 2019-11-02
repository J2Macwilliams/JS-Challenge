// Your code goes here
// Fun Bus Logo change size
//1--------------(mouseenter)-------------------
const logoSize = document.querySelector(".logo-heading");

logoSize.addEventListener("mouseenter" , () => {
 logoSize.style.transform = "scale(1.3)";
 logoSize.style.trasition = "all 0.4s"
})

//2---------------(mouseleave)------------------
logoSize.addEventListener("mouseleave" , () => {
    logoSize.style.transform = "scale(1)";
    logoSize.style.trasition = "all 0.4s"
   })


//Background Change Color
// 3------------------(click)----------------
const bodyBackground = document.querySelector("body");

bodyBackground.addEventListener("click", () => {
    bodyBackground.style.backgroundColor = "#fde250"
})

//NavBackground Change Color
// 3------------------(click)----------------
const navBackground = document.querySelector(".main-navigation");

navBackground.addEventListener("click", (event) => {
    navBackground.style.backgroundColor = "#98cc9e";
    //stop Propagation--------------------------------------
    event.stopPropagation();
})

//Nav Links change color
// 3------------------(click)----------------
document.querySelectorAll(".nav-link").forEach(e => {
    e.addEventListener("click" , () => {
        e.style.color = "white";
    })
})

const stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", (event) => {
  console.log("stopped link");
  
  event.preventDefault();
})

//add Hidden Background
// 4------------------(dblclick)----------------
const hiddenBackground = document.querySelector("body");
//Change Font Color
const fontColorChange = document.querySelector(".content-pick")

hiddenBackground.addEventListener("dblclick", () => {
    hiddenBackground.style.background = "url('img/confetti.jpg')";
    hiddenBackground.style.backgroundSize = "cover";
    hiddenBackground.style.backgroundRepeat = "no-repeat";
    hiddenBackground.style.backgroundRepeat = "no-repeat";
    fontColorChange.style.color = "white";
})

//Change Image
//5--------------------(resize)--------------
const changeImg = document.querySelector(".img-fluid");

window.addEventListener("resize", () => {
    changeImg.src = "img/partybus.jpg"
})

//Change Image
//6--------------------(mouseover)----------------
const maneuverOn = document.querySelector(".south-seas");

maneuverOn.addEventListener("mouseover", () => {
    maneuverOn.src = "img/mountain-lake.jpg"
})

//Change Image back
//7----------------------(mouseout)------------------
const getOff = document.querySelector(".south-seas");

getOff.addEventListener("mouseout", () => {
    getOff.src = "img/destination.jpg"
})

//Map Zoom
//8--------------------(wheel)-------------------

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    mapZoom.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  const mapZoom = document.querySelector(".quest");
  mapZoom.onwheel = zoom;

  mapZoom.addEventListener("wheel", zoom);

//Flip the image
//9------------------(keydown)--------------------
//Only 1 window event listener will occur.

  const warped = document.querySelector(".bus-sand");
 
function rotate(){
    warped.style.transform = "rotate(180deg)";
}


window.addEventListener("keydown", rotate);



//Change background
//10----------------(scroll)---------------------
window.addEventListener("scroll", () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  });

//Add Music
//Fun--------------------------------
const lastContent = document.createElement("iframe");
lastContent.src = "https://www.youtube.com/embed/6Zbi0XmGtMw"
lastContent.style.width = "100%"
lastContent.style.height = "300px"
lastContent.style.marginTop = "20px"
lastContent.style.borderRadius = "10px"


const ParentSection = document.querySelector(".content-destination");

ParentSection.appendChild(lastContent);


//Rotate Bus on Open
//Stretch-------------------------------------
  TweenMax.to('.bus-sand', 1, {
    rotation: 720,
    ease: Elastic.easeOut.config( 1, 0.75)
  })
  
 


  