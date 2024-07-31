const container = document.querySelector('.dot-container');
const dotSize = 3;
const repulsionRadius = 200;
const maxMovement = 50;
const spacing = 40;

// Create dots
function createDots() {
    for (let i = 0; i < (window.innerWidth - spacing / 2) / spacing; i++) {
        for (let j = 0; j < (window.innerHeight - spacing / 2) / spacing; j++)
        {
            const dot = document.createElement('div');
            const x = spacing * i + spacing / 2;
            const y = spacing * j + spacing / 2;
            dot.setAttribute('originalX', `${x}`);
            dot.setAttribute('originalY', `${y}`);
            dot.classList.add('dot');
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
            container.appendChild(dot);
        }
    }
}

function destroyDots() {
    container.innerHTML = '';
}


// Function to calculate distance between two points
function getDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Function to handle mouse move
function handleMouseMove(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    document.querySelectorAll('.dot').forEach(dot => {
        const dotX = dot.offsetLeft + dotSize / 2;
        const dotY = dot.offsetTop + dotSize / 2;
        const distance = getDistance(mouseX, mouseY, dotX, dotY);

        if (distance < repulsionRadius) {
            const angle = Math.atan2(dotY - mouseY, dotX - mouseX);

            const move = -maxMovement / repulsionRadius * distance + maxMovement + 5;

            dot.style.transform = `translate(${Math.cos(angle) * move }px, ${Math.sin(angle) * move}px)`;
            dot.classList.add('near');
            dot.classList.remove('far');
        }
        else{
            dot.style.transform = `translate(${parseInt(dot.getAttribute('originalX')) - dotX}px, ${parseInt(dot.getAttribute('originalY')) - dotY}px)`;
            dot.classList.add('far');
            dot.classList.remove('near');
        }
    });
}

function handleMouseLeave(event) {
    document.querySelectorAll('.dot').forEach(dot => {
        const dotX = dot.offsetLeft + dotSize / 2;
        const dotY = dot.offsetTop + dotSize / 2;

        dot.style.transform = `translate(${parseInt(dot.getAttribute('originalX')) - dotX}px, ${parseInt(dot.getAttribute('originalY')) - dotY}px)`;
        dot.classList.add('far');
        dot.classList.remove('near');
    });
}

const projects = document.getElementById('projects');
for (let i = 1; i < projects.children.length; i++) {
    const project = projects.children.item(i);
    project.addEventListener('mouseenter', (event) => {
        project.children.item(0).classList.add('thumbnail-hover');
    })
    project.addEventListener('mouseleave', (event) => {
        project.children.item(0).classList.remove('thumbnail-hover');
    })
}


createDots();
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseleave', handleMouseLeave);

window.addEventListener('resize', () => {
    console.log('resized');
    destroyDots();
    createDots();
});


let partying = false;
let interval;
const discoBall = document.getElementById("disco-ball");

function party() {
    if (partying) {
        discoBall.classList.remove("party");
        clearInterval(interval);
        document.querySelectorAll('.dot').forEach(dot => {  
            dot.style.backgroundColor = "black";
        });
        container.style.backgroundColor = "white";
        partying = false;
    } 
    else {
        discoBall.classList.add("party");
        interval = setInterval(() => {
            document.querySelectorAll('.dot').forEach(dot => {  
                dot.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
            });
        }, 100);
        container.style.backgroundColor = "black";
        partying = true; 
    }
}


const navigation = document.getElementById("navigation");
const projectsNavigation = document.getElementById("projects-navigation");
const header = document.getElementById("header");

const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) navigation.style.opacity = 0;
        else navigation.style.opacity = 100;
    });
});
headerObserver.observe(header);

const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) projectsNavigation.innerHTML = "-projects";
        else projectsNavigation.innerHTML = "projects";
    });
});
projectsObserver.observe(projects);

//setInterval(party, 100);