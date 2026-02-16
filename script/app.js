document.addEventListener("DOMContentLoaded", () => {
    const liContainer = document.querySelectorAll(".li_container");
    const allLI = document.querySelectorAll(".li_container li");
    // console.log(allLI);
    // console.log(liContainer);
    liContainer.forEach(ul => {
        ul.addEventListener("click", (e) => {
            const clickedLi = e.target.closest("li");
            if (!clickedLi) return;
            allLI.forEach(li => {
                li.classList.remove("active");
            });
            clickedLi.classList.add("active");
        })
    })
    const currentPage=window.location.pathname.split("/").pop();
    allLI.forEach(li=>{
        const link=li.querySelector("a");
        if(link && link.getAttribute("href")===currentPage){
            li.classList.add("active");
        }
    })
})
