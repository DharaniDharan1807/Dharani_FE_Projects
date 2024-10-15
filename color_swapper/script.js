let colortext=document.getElementById("color")
let btn=document.getElementById("btn")
let wrap=document.getElementById("wrap")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
btn.addEventListener('click',function(){
let hexcolor='#'
for(let i=1;i<=6;i++){
    hexcolor+=random()
}
wrap.style.backgroundColor=hexcolor
colortext.innerHTML=hexcolor
})

function random(){
    let randomindex=Math.floor(Math.random()*16)
    return hex[randomindex]
}