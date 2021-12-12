let x = "John"
let y = "Doe"
console.log(x + " <> " + y)

const obj = {
    name: "",
    surname:  "",
    email: ""
    }

delete obj.email

array = []
for (let i = 0; i <= 10; i++) {
    array[i]=("im array number" + i)

    
}
//console.log(array.join(", "))

for (let i = 0; i < array.length; i++) {
     array
console.log(array[i])    
}




array2 = []
for(i=0; i<100; i++){
    array2[i]=Math.floor(Math.random()*100)+1
}
console.log(array2)
const getMinAndMaxValues = function(){
console.log(Math.max(...array2));
console.log(Math.min(...array2))
    
}
     

getMinAndMaxValues()

function getMaxMin(numbers) {
    let max = numbers[0]
    let min = numbers[0]

   for (let number of numbers){
       max = number > max ? numbers : max
       min = number < min ? numbers : min
   }

   return {max, min}
 }
/*
let arrcontainer = []
for (let i = 0; i<10; i++) {
    randomnumber=Math.floor(Math.random()*90)+1
    */
    


 

    


//                     dom  




document.getElementById("container").style.color = "blue"





let td = document.getElementsByTagName("td")



for (let i = 0; i < td.length; i++) {

    console.log(td[i].textContent)
    
}




function changeHead(){
    document.getElementsByTagName("h1")[0].innerHTML= "Hello";
 }

changeHead()

function extraRow() {
    document.querySelector("table")
    let table = document.querySelector("table")


 let newRow = table.insertRow()
 for (let i = 0; i < 5; i++) {
    newRow.insertCell(0)
     
     
 }
 
}
extraRow()
/*
function write(text){
    let table= document.querySelector("table")
    
    let row = table.lastChild

    let row2 = row.lastChild
 
  
      console.log(row2)

  }
  write("aa")
  */
  
    
   
    




function addClass(){
    const row = document.querySelectorAll("tr")
   for (let i = 0; i < row.length; i++) {
       
    row[i].classList.add("test");
   }
    

    
    
    console.log(row)

}
addClass()

function changecolor(){
  let link = document.querySelectorAll("a")
  for (let i = 0; i < link.length; i++) {
      link[i].style.backgroundColor = 'red'
      
  }
}
changecolor()

window.onload = function () { 
    console.log("Page Loaded")
 }

 let addItems = document.querySelector("ul")
 function add1(){
    let newli = document.createElement("li")
    newli.innerText="ciao"
addItems.appendChild(newli)
}
 add1()
 
 console.log(addItems)

 function empty(){

     const list = document.querySelectorAll("ul > li")
     for (let i = 0; i < list.length; i++) {
         list[i].innerText = ""
         
     }
     }
 empty()