 //in the firsrt two case it returns only the first occurence 
const ele=document.getElementById("con");
if(ele != null){
    //passing an html id 
}

const ele=document.querySelector("footer");
if(ele != null){
    // passing a css selctor
}





// now we gonna return mutiplre elements
const ele=document.querySelectorAll("nav a");
for(let elee of ele)
{
if(elee != null){
    elee.style.color="blue";
    elee.style.fontSize ="1.5";
    // passing a multiple css selctor
}
}
const ele=document.getElementsByClassName("list");
for(let curr of ele)
{
    curr
     //we process each element 
}
const elements=Array.from(document.getElementsByClassName("list"));
elements.filter(e=>e.tagname=="p")

//eventlistenrer
ele.addEventListener("click",()=>{try...}
);

//acessing and editing content 
const elem=document.querySelector("#footer");
const read=elem.textContent;
elem.textContent="hello wrold";

//working with innerHTML
const elem2=document.querySelector("#header h1");
elem2.innerHTML=`
<h1>si riadh</h1>
<p>hello world</p>
`;


//working with DOP API to create or edit content 
const elem3=document.querySelector("#header h1");
const h2=document.createElement("h1");
h2.textContent="My App";
elem3.appendChild(h2); //append h2 in elem3

const p=document.createElement("p");
p.textContent="the best platfrom for learning frontend";
elem3.appendChild(p);// append p in elem3
//biding the dom api
//onvent prorities: one proreity for each event(onload,onclick) 
//addeventlistner 

function eventHandler(event){

}
 ele.onload=eventHandler; 
 ele.onload=(event)=>{
    //it replaces  only the first handler
 };

 function eventHandler(event){

 }
  const options={
    once:true; //the eventhandler will be fired onnce the it will be removed
    passive:true; // not going to chnage the DOM
  }
  ele.addEventListener("click",eventHandler); 
  ele.addEventListener("load",eventHandler,options);
  ele.addEventListener("load",(event)=>{}); //this better and gives the chance to execute multiple events
  ele.removeEventListener("load",eventHandler); //only useful on single page web app


  // while scrolling the browser will wait for your event handler to see if you are changing the DOM the it will scroll
  const event = new Event("mycustomname");
  ele.dispatchEvent( event );//reusing the same system for our own custom events and messages


  //we can itemporay remove eventlistner but i will still in DOM api likie when we log in or log out
  //we cant't release threads parrellely it will work on by one(we nedd to work with workers)
  //the maximum eventlistener you can hook is 5000