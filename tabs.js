const allAnchor = document.getElementsByClassName("tabs__anchor");
const allContent = document.querySelectorAll(".tabs__content");

Array.from(allAnchor).map((anchor, i) => {

    anchor.addEventListener("click",(event) => { 
        Array.from(allAnchor).map((anchor) => {
            anchor.classList.remove("tabs__anchor-active");
        });

        Array.from(allContent).map((content) => {
            content.classList.remove("tabs__content-active");
        });

        event.target.classList.add("tabs__anchor-active");
        allContent[i].classList.add("tabs__content-active");
    });

});
