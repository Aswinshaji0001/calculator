let input=document.getElementById("txt");
let buttons=document.querySelectorAll("button");
console.log(buttons);
let str='';
let arr=Array.from(buttons);
arr.map(button=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target.innerHTML);
        if(e.target.innerHTML=="="){
            str=eval(str)
            input.value=str
        }
        else if(e.target.innerHTML=="AC"){
            str="";
            input.value=str;
        }
        else if(e.target.innerHTML=="DEL"){
            str=str.substring(1,str.length);
            input.value=str;
        }
        else{
            str+=e.target.innerHTML;
            input.value=str;
        }
    })
})