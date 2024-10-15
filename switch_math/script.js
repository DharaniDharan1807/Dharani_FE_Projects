let button=document.querySelector("button") 
let result=document.createElement('div')
result.id='result'
document.getElementById('base').appendChild(result)
button.addEventListener('click',display)
function display(){
    let input=document.getElementById("input").value
    let l=input.split(" ")
    let num1=Number(l[0])
    let num2=Number(l[2])
    let ope=l[1]
    let ans
    switch (ope){
        case '+':
            ans=num1+num2
            break
        case '-':
            ans=num1-num2
            break
        case '*':
            ans=num1*num2
            break
        case '/':
            ans=num1/num2
            break
        default:
            ans="Enter only these +, _ ,* ,/ operators"
            break
    }
    document.getElementById("result").innerHTML=ans
}