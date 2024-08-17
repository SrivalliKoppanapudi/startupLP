const linksEl=document.querySelector(".links-toggle");
const iconEl=document.querySelector("#icon i");
const submitEl=document.getElementById("s-btn");
const imgEl=document.querySelector(".prof1");
const header = document.querySelector("header");
const toggle=document.querySelectorAll(".c-toggle i")
const body=document.querySelector("body")
iconEl.onclick=()=>{
   // linksEl.classList.toggle("links-toggle")
    linksEl.classList.toggle("active")
    iconEl.classList.toggle("fa-x")
    header.classList.toggle("sticky");

}
linksEl.onclick=()=>{
    linksEl.classList.toggle("active")
    iconEl.classList.toggle("fa-x")
}


window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 30);

});
toggle.forEach((t)=>{
    t.addEventListener("click",()=>{
        if(t.classList.contains("fa-moon")){
            t.classList.remove("fa-moon")
            t.classList.add("fa-sun")
            body.classList.toggle("dark")
        }
        else{
            t.classList.remove("fa-sun")
            t.classList.add("fa-moon")
            body.classList.toggle("dark")
        }
    })
})