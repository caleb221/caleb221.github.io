const teacherNav = document.querySelector("#teacherNav");
const devNav = document.querySelector("#devNav");
const analyNav = document.querySelector("#analystNav");
const adventureNav = document.querySelector("#adventureNav");
const contactNav = document.querySelector("#contactNav");

const espnav = document.querySelector("#espLEAFnav");
const droidnav = document.querySelector("#droidNav");
const turbinenav = document.querySelector("#turbineNav");
const miscProjectnav = document.querySelector("#miscNav");

const expNav = document.querySelector("#experienceNav");
const stackNav = document.querySelector("#stackNav");
const mastersNav = document.querySelector("#mastersNav");
const collegeNav = document.querySelector("#collegeNav");

//Mobile version uses modals
var w =screen.width
var isMobile = false;
if( w<=1020)
{
 isMobile=true;
}

if(teacherNav!=null){

teacherNav.addEventListener('click',()=>{newBox("Teaching","#teacher-content","400px","400px");});
devNav.addEventListener('click',()=>{newBox("Development","#dev-content","400px","400px");});
analyNav.addEventListener('click',()=>{newBox("Analysis","#analyst-content","400px","400px");});
adventureNav.addEventListener('click',()=>{newBox("Adventure","#adventure-content","400px","400px");});
contactNav.addEventListener('click',()=>{newBox("Contact","#contact-content","400px","400px");
});
}
else if(espnav!=null)
{   
espnav.addEventListener('click',()=>{newBox("ESP32-Leaf","#espLeaf-content","500px","500px");});
 droidnav.addEventListener('click',()=>{newBox("R4-04","#droid-content","500px","500px");});
 turbinenav.addEventListener('click',()=>{newBox("Wind Turbine","#windTurbine-content","500px","500px");}); 
 miscProjectnav.addEventListener('click',()=>{newBox("Other projects","#misc-content","500px","500px");}); 
}
else if(expNav!=null)
{
    expNav.addEventListener('click',()=>{newBox("Experience","#experience-content","600px","400px");});
    stackNav.addEventListener('click',()=>{newBox("Stack","#stack-content","400px","400px");}); 
    mastersNav.addEventListener('click',()=>{newBox("Masters","#masters-content","400px","400px");}); 
    collegeNav.addEventListener('click',()=>{newBox("Undergraduate","#college-content","400px","400px");}); 
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
