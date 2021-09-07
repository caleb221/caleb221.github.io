

const teacherNav = document.querySelector("#teacherNav");
const devNav = document.querySelector("#devNav");
const analyNav = document.querySelector("#analystNav");
const adventureNav = document.querySelector("#adventureNav");
const contactNav = document.querySelector("#contactNav");

const espnav = document.querySelector("#espLEAFnav");
const droidnav = document.querySelector("#droidNav");
const turbinenav = document.querySelector("#turbineNav");
const wearableNav = document.querySelector("#watchNav);


const miscProjectnav = document.querySelector("#miscNav");

const expNav = document.querySelector("#experienceNav");
const stackNav = document.querySelector("#stackNav");
const mastersNav = document.querySelector("#mastersNav");
const collegeNav = document.querySelector("#collegeNav");


var w = screen.width;
//var textSize = 
    console.log(document.body.style.font);
var isMobile = false;
if(w<1020)
{
 isMobile=true;
}

if(teacherNav!=null){
    
    var boxWidth="400px";
    var boxHeight="400px";
    if(isMobile)
        {
            boxWidth="700px";
            boxHeight="800px";
        }

teacherNav.addEventListener('click',()=>{newBox("Teaching","#teacher-content",boxWidth,boxHeight);});
devNav.addEventListener('click',()=>{newBox("Development","#dev-content",boxWidth,boxHeight);});
analyNav.addEventListener('click',()=>{newBox("Analysis","#analyst-content",boxWidth,boxHeight);});
adventureNav.addEventListener('click',()=>{newBox("Adventure","#adventure-content",boxWidth,boxHeight);});
contactNav.addEventListener('click',()=>{newBox("Contact","#contact-content",boxWidth,boxHeight);});

}
else if(espnav!=null)
{   
    var boxWidth="500px";
    var boxHeight="500px";
    if(isMobile)
        {
            boxWidth="700px";
            boxHeight="800px";
        }   
 espnav.addEventListener('click',()=>{newBox("ESP32-Leaf","#espLeaf-content",boxWidth,boxHeight);});
 droidnav.addEventListener('click',()=>{newBox("R4-04","#droid-content",boxWidth,boxHeight);});
 turbinenav.addEventListener('click',()=>{newBox("Wind Turbine","#windTurbine-content",boxWidth,boxHeight);});
 wearableNav.addEventListener('click',()=>{newBox("Wearables","#watch-content",boxWidth,boxHeight);});
 miscProjectnav.addEventListener('click',()=>{newBox("Other projects","#misc-content",boxWidth,boxHeight);}); 
}
else if(expNav!=null)
{
    var boxWidth="400px";
    var boxHeight="400px";
    if(isMobile)
        {
            boxWidth="700px";
            boxHeight="800px";
        } 
    
    expNav.addEventListener('click',()=>{newBox("Experience","#experience-content","600px","500px");});
    stackNav.addEventListener('click',()=>{newBox("Stack","#stack-content",boxWidth,boxHeight);}); 
    mastersNav.addEventListener('click',()=>{newBox("Masters","#masters-content",boxWidth,boxHeight);}); 
    collegeNav.addEventListener('click',()=>{newBox("Undergraduate","#college-content",boxWidth,boxHeight);}); 
}

else
{
    alert("something is wrong!");
}


function newBox(title,thisId,thisWidth,thisHeight)
{
            const newBox = new WinBox({
            title:title,
            background:"#00aa00",
            width:thisWidth,
            height:thisHeight,
            modal:isMobile,
         /* top:150,
            right:50,
            bottom:50,
            left:250,
          */
            mount:document.querySelector(thisId),            
            onfocus:function(){this.setBackground('#00aa00')},
            onblur:function(){this.setBackground('#777')}
    }) 
}


