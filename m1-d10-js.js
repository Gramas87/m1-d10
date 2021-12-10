let x = "John"
let y = "Doe"
console.log(x + " <> " + y)

const obj = {
    name: "",
    surname:  "",
    email: ""
    }

delete obj.email

array = ["", "", "", "", "", "", "", "", "", "", "" ]

console.log(array)

let array100=[]
/*
for(i=0; i<100; i++){
    array100[i]=Math.floor(Math.random()*100)+1
}

const getMinAndMaxValues = function(){
let getArrayMax= Math.max.apply(null, array100)   
let getArrayMin=math.max.apply(null, array100)

getArraymax

}
     console.log(getMinAndMaxValues) bhooooooooooo... */


//                     dom  



let container=document.getElementById("container")

let td = document.getElementsByTagName("td")



for (let i = 0; i < td.length; index++) {
    let element = td[i];
     element.innerText="Hello"
    
}



let head = document.getElementsByTagName("h1")

function ChangeHead(text){
    head.innerText(text)
}
console.log(ChangeHead="hello")