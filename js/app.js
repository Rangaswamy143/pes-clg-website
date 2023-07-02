// sidebar
function init(){
    const hamburger = document.querySelector(".hamburger")
    console.log(hamburger)
    
    const sidebarCloseBtn = document.querySelector(".close-button")
    console.log(sidebarCloseBtn)
    
    const sidebarContainer = document.querySelector(".sidebar-container")
    console.log(sidebarContainer)
    
    const openSidebar = () =>{
    console.log(sidebarContainer.classList)
    sidebarContainer.classList.add("show-sidebar")
    console.log(sidebarContainer.classList)
    }
    
    const closeSidebar = () =>{
        console.log(sidebarContainer.classList)
        sidebarContainer.classList.remove("show-sidebar")
        console.log(sidebarContainer.classList)
    }
    hamburger.addEventListener("click", openSidebar)
    
    sidebarCloseBtn.addEventListener("click" , closeSidebar)
}
init();
// sticky navbar
const init1 = () =>{
    const navContainer = document.querySelector(".nav-container")

    const navScroll = () =>{
       const scrollNumber = window.scrollY;
       const targetNumber = window.innerWidth >= 992 ? 70 : 50;
          if (scrollNumber >= targetNumber) {
                  navContainer.classList.add("sticky-nav");     
           }else{
                  navContainer.classList.remove("sticky-nav")
               }
    }
   window.addEventListener("scroll" , navScroll)  
}
init1();