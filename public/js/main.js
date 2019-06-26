const slider = document.getElementById("slider");
const header = document.getElementById("header");
let sliderBottom = slider.offsetTop + slider.offsetHeight - 20;
const buttons = document.querySelectorAll("#menu .skill");
const allButtons = document.querySelectorAll(".skill");
const skills = document.getElementById("skills");
let skillsTrigger = skills.offsetTop;
const work = document.getElementById("work");
let workTrigger = work.offsetTop - work.offsetHeight / 2;
const about = document.getElementById("about");
let aboutTrigger = about.offsetTop - about.offsetHeight / 2;
const contact = document.getElementById("contact");
let contactTrigger = contact.offsetTop - contact.offsetHeight;
// const form = document.querySelector("form");

const workProjs = document.querySelectorAll("#work .list-group-item");

const skillBars = document.querySelectorAll(".skill-bar");

function menu(y) {
    if (sliderBottom < y) {
        header.style.transform = "translateY(50px)";
    } else {
        header.style.transform = "translateY(-50px)";
    }
}

function highlighter(y) {
    if (skillsTrigger < y) {
        buttons[0].classList.add("highlighted");
    } else {
        buttons[0].classList.remove("highlighted");
    }
    if (workTrigger < y) {
        buttons[0].classList.remove("highlighted");
        buttons[1].classList.add("highlighted");
    } else {
        buttons[1].classList.remove("highlighted");
    }
    if (aboutTrigger < y) {
        buttons[1].classList.remove("highlighted");
        buttons[2].classList.add("highlighted");
    } else {
        buttons[2].classList.remove("highlighted");
    }
    if (contactTrigger < y) {
        buttons[2].classList.remove("highlighted");
        buttons[3].classList.add("highlighted");
    } else {
        buttons[3].classList.remove("highlighted");
    }
}

const langs = {
    "skill-js": "120px",
    "skill-python": "110px",
    "skill-golang": "80px",
    "skill-java": "80px",
    "skill-c": "60px",
    "skill-cs": "40px",
    "skill-db": "70px",
    "skill-os": "120px",
    "skill-network": "120px",
    "skill-office": "100px",
};

function bars(y) {
    skillBars.forEach((b, i) => {
        const barPos = window.scrollY + b.getBoundingClientRect().top - window.innerHeight;
        if (y > barPos + window.innerHeight + 60) {
            b.firstElementChild.style.width = "0px";
        } else if (y > barPos) {
            b.firstElementChild.style.width = langs[b.id] || "100px";
        } else {
            b.firstElementChild.style.width = "0px";
        }
    });
}

function projs(y) {
    workProjs.forEach((p, i) => {
        const barPos = window.scrollY + p.getBoundingClientRect().top - window.innerHeight;
        if (y > barPos + window.innerHeight) {
            p.firstElementChild.classList.remove("tada");
        } else if (y < barPos) {
            p.firstElementChild.classList.remove("tada");
        }
    });
}

document.addEventListener("scroll", e => {
    menu(window.pageYOffset + 132);
    highlighter(window.pageYOffset + 132);
    bars(window.pageYOffset + 132);
    projs(window.pageYOffset + 132);
});
allButtons.forEach(button => {
    button.addEventListener("click", event => {
        event.preventDefault();
        let element = document.querySelector(event.target.attributes["data-scrollTo"].value);
        if (element == null) {
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        } else {
            window.scroll({
                top: element.offsetTop - 150,
                left: 0,
                behavior: "smooth"
            });
        }
    });
});

workProjs.forEach(p => {
    p.addEventListener("mouseenter", () => {
        p.children[0].classList.add("tada");
    });
});
