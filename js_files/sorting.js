function swap(a,b)
{
    let temp=a.style.height;
    a.style.height=b.style.height;
    b.style.height=temp;
    
}


function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
})}

function disableSortingBtn(){
    document.querySelector(".bubble").disabled = true;
    document.querySelector(".merge").disabled = true;
    document.querySelector(".quick").disabled = true;
    document.querySelector(".selection").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn(){
    document.querySelector(".bubble").disabled = false;
    document.querySelector(".merge").disabled = false;
    document.querySelector(".quick").disabled = false;
    document.querySelector(".selection").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#ar_size").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#ar_size").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn(){
    document.querySelector(".btn-arr").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn(){
    document.querySelector(".btn-arr").disabled = false;
}

let arr_size=document.querySelector('#ar_size');

arr_size.addEventListener('input',function(){
    createNewArray(parseInt(arr_size.value));
});

let arr_speed=document.querySelector('#ar_speed');

let delay=150;
arr_speed.addEventListener('input',function(){
    delay=280-parseInt(arr_speed.value);
});


let array = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new array input size of array
function createNewArray(noOfBars=60) {
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 200) + 1);
    }
    
// select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar '
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".btn-arr");
newArray.addEventListener("click", function(){
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(parseInt(arr_size.value));
});

