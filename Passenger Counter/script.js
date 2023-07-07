// document.getElementById("count-el").innerText = 5
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0
function increment(){
    count = count+1
    countEl.innerText = count
}

function save(){
    let countStr = count+" - "
    saveEl.innerText = saveEl.innerText + countStr 
    console.log(count)
}
