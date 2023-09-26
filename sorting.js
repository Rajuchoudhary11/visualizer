// let bars=[]; 
// for(let i=0; i<100; i++)
// {
//    bars.push(Math.floor(Math.random()*400)+1);
// }

let arrsizer=document.querySelector('#sizer');
arrsizer.addEventListener('input', function(){
generateBars(parseInt(arrsizer.value))});

generateBars();
// time function --->
let time=100;
let sortspeed=document.querySelector('#speed');
sortspeed.addEventListener('input',function(){
    time=245-parseInt(sortspeed.value);
});
// generateBars function - create number of array according to parameter
function generateBars(noBar=60){
document.getElementById("bar").innerHTML='';
let bars=[];
for(let i=0; i<noBar; i++)
{
    bars.push(Math.floor(Math.random()*400)+1);
}  


const divs=document.querySelector('#bar');
//add the featurs on bar like hight width by css and after add to divs
for(let x=0; x<noBar; x++) 
 {
    const temp=document.createElement("div");
    temp.classList.add('s');
    temp.classList.add('baritem');
    temp.style.height=bars[x]+"px";
    divs.append(temp);
 }
}
// when click on newarr butoon -- form here pass the arr size value
document.getElementById("newarr").addEventListener("click",function(){
    generateBars(arrsizer.value);
    
    enableSortingBtn();
    enableSizeSlider();
});

// this is swap function for swap two element --------

function swap(ele1, ele2)
{
    let temp=ele1.style.height;
    ele1.style.height=ele2.style.height;
    ele2.style.height=temp;
}
// this is the set setTimeout function set how much function  take time----

function delay(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
// function for disabled all sorting btn ---------
function disableSortingBtn(){
    document.querySelector("#bubble").disabled = true;
    document.querySelector("#insertion").disabled = true;
    document.querySelector("#merge").disabled = true;
    document.querySelector("#quick").disabled = true;
    document.querySelector("#selection").disabled = true;
}
// function for enable all sortingbuttons -------
function enableSortingBtn(){
    document.querySelector("#bubble").disabled = false;
    document.querySelector("#insertion").disabled = false;
    document.querySelector("#merge").disabled = false;
    document.querySelector("#quick").disabled = false;
    document.querySelector("#selection").disabled = false;
}
// function for disable the array size slider-------
function disableSizeSlider(){
    document.getElementById("sizer").disabled = true;
}
// function for disable the array size slider----------
function enableSizeSlider(){
    document.getElementById("sizer").disabled = false;
}