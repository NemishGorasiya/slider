let slider_container = document.getElementById("slider-container");

let prev_btn = document.getElementById("prev-btn");
let next_btn = document.getElementById("next-btn");
window.addEventListener("resize",()=>{
    slider_container.scrollLeft=0;
    setTimeout(toggleButtons,500);
});
function toggleButtons() {
    // Check if there is space to scroll left
    if(slider_container.scrollLeft <= 0){
        prev_btn.classList.add("disabled");
        // prev_btn.setAttribute("disabled",true);
    }else{
        prev_btn.classList.remove("disabled");
    }
    if(slider_container.scrollLeft >= (slider_container.scrollWidth - slider_container.clientWidth)){
        next_btn.classList.add("disabled");
    }else{
        next_btn.classList.remove("disabled");
    }
}
toggleButtons();
let prev = () => {
    slider_container.scrollLeft -= slider_container.clientWidth;
    // toggleButtons();
    setTimeout(toggleButtons,500);
}
let next = () => {
    slider_container.scrollLeft += slider_container.clientWidth;
    setTimeout(toggleButtons,500);
    // toggleButtons();
}

