


function func(x) {
    var display = document.querySelector(".display")
    display.innerHTML+= x.innerHTML
}

function space() {
    var display = document.querySelector(".display")
    display.innerHTML+="        "
}

function del(){
    var display=document.querySelector(".display")
    var chanumbers=display.innerHTML.length
    display.innerHTML=display.innerHTML.slice(0,chanumbers-1)
}