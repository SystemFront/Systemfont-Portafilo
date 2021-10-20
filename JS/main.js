let home = document.querySelector("#home")
let about = document.querySelector("#about")
let servis = document.querySelector("#servis")
let portafilo = document.querySelector("#portafilo")
let blog = document.querySelector("#blog")
let contact = document.querySelector("#contact")

let button_home = document.querySelector("#home_button")
let about_button = document.querySelector("#about_button")
let servis_button = document.querySelector("#services_button")
let portafilo_button = document.querySelector("#portfolio_button")
let blog_button = document.querySelector("#blog_button")
let contact_button = document.querySelector("#contact_button")

//mobile buttons
let mobile_button_home = document.querySelector("#home_mubile_button")
let mobile_button_about = document.querySelector("#about_mubile_button")
let mobile_button_servis = document.querySelector("#services_mubile_button")
let mobile_button_portafilo = document.querySelector("#portfolio_mubile_button")
let mobile_button_blog = document.querySelector("#blog_mubile_button")
let mobile_button_contact = document.querySelector("#contact_mubile_button")


button_home.addEventListener("click", () => {
    home.style.display = "block"
    about.style.display = "none"
    servis.style.display = "none"
    portafilo.style.display = "none"
    blog.style.display = "none"
    contact.style.display = "none"
})
contact_button.addEventListener("click", () => {
    home.style.display = "none"
    about.style.display = "none"
    servis.style.display = "none"
    blog.style.display = "none"
    contact.style.display = "block"
    portafilo.style.display = "none"
})

blog_button.addEventListener("click", () => {
    home.style.display = "none"
    about.style.display = "none"
    servis.style.display = "none"
    blog.style.display = "block"
    contact.style.display = "none"
    portafilo.style.display = "none"
})

portafilo_button.addEventListener("click", () => {
    home.style.display = "none"
    about.style.display = "none"
    portafilo.style.display = "block"
    contact.style.display = "none"
    blog.style.display = "none"
    servis.style.display = "none"
})

about_button.addEventListener("click", () => {
    about.style.display = "block"
    servis.style.display = "none"
    portafilo.style.display = "none"
    contact.style.display = "none"
    blog.style.display = "none"

    home.style.display = "none"
})
servis_button.addEventListener("click", () => {
    about.style.display = "none"
    contact.style.display = "none"
    servis.style.display = "block"
    portafilo.style.display = "none"
    blog.style.display = "none"
    home.style.display = "none"
})

// mobile function 
mobile_button_home.addEventListener("click", () => {
    home.style.display = "block"
    contact.style.display = "none"
    home.style.display = "none"
    portafilo.style.display = "none"
    blog.style.display = "none"
    about.style.display = "none"
})
mobile_button_about.addEventListener("click", () => {
    about.style.display = "block"
    home.style.display = "none"
    contact.style.display = "none"
    blog.style.display = "none"
    portafilo.style.display = "none"
    home.style.display = "none"
})
mobile_button_servis.addEventListener("click", () => {
    about.style.display = "none"
    contact.style.display = "none"
    servis.style.display = "block"
    blog.style.display = "none"
    portafilo.style.display = "none"
    home.style.display = "none"
})
mobile_button_portafilo.addEventListener("click", () => {
    about.style.display = "none"
    servis.style.display = "none"
    blog.style.display = "none"
    contact.style.display = "none"
    portafilo.style.display = "block"
    home.style.display = "none"
})
mobile_button_blog.addEventListener("click", () => {
    home.style.display = "none"
    about.style.display = "none"
    servis.style.display = "none"
    contact.style.display = "none"
    blog.style.display = "block"
    portafilo.style.display = "none"
})
mobile_button_contact.addEventListener("click", () => {
    home.style.display = "none"
    about.style.display = "none"
    servis.style.display = "none"
    contact.style.display = "none"
    blog.style.display = "block"
    portafilo.style.display = "none"
})

// stting colors

let button_menu = document.querySelector(".open-menu")
let Menu = document.querySelector(".Menu-bars")
let bar = "close"
button_menu.addEventListener("click", () => {
    if (bar == "close"){
        Menu.style.right = "0px"
        bar = "open"
        console.log("ochiq")
    }else if (bar == "open"){
        Menu.style.right = "-180px"
        bar = "close"
        console.log("yoqpiq")
    }
})
let loader = document.querySelector(".loader")
window.onload = () => {
    loader.style.display = "none"
}
let html =  document.querySelector("html")
let setjavobi = window.localStorage.getItem("bg_color")
let color_setting = document.querySelector(".color_setting_text")
let texts = document.querySelectorAll(".text-color")
let setting_bg = document.querySelector(".setting_bg")
let redioblack = document.querySelector(".colorblack")
let header = document.querySelectorAll(".text__color")
color_setting.addEventListener("change", (e) => {
    for(let i = 0; i < texts.length; i++){
        texts[i].style.color = e.target.value
    }
})
if(setjavobi){
    if(setjavobi == "dark"){
        html.classList.add("dark")
        for(let i = 0; i < header.length; i++){
            header[i].style.color = "#fff"
        }
    }else {
        html.classList.remove("dark")
    }
}else {
    html.classList.add("dark")
    for(let i = 0; i < header.length; i++){
        header[i].style.color = "#fff"
    console.log("ss")

    }
}
setting_bg.addEventListener("click", (e) => {
    if(e.target.value == "dark"){
        redioblack.setAttribute("disabled", "disabled")
        html.classList.add("dark")
        window.localStorage.setItem("bg_color", e.target.value)
    }else if (e.target.value == "light"){
        html.classList.remove("dark")
        window.localStorage.setItem("bg_color", e.target.value)
        redioblack.removeAttribute("disabled")
    }
})
