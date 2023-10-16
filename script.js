const cursor = document.getElementById("cursor");
const bButton = document.getElementById("b");
const eButton = document.getElementById("e");
const nButton = document.getElementById("n");
const bTimeline = document.getElementById("bTimeline");
const eTimeline = document.getElementById("eTimeline");
const nTimeline = document.getElementById("nTimeline");
const linkedin = document.getElementById("linkedin");
const github = document.getElementById("github");

var bClicked = false, bEnterInterval, bLeaveInterval, eClicked = false, eEnterInterval, eLeaveInterval, nClicked = false, nEnterInterval, nLeaveInterval;

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
});

document.addEventListener("scroll", (e) => {
    cursor.style.top = scrollY + parseInt(cursor.getAttribute("data-fromTop")) + "px";
});

document.addEventListener("mouseover", (e) => {
    cursor.style.opacity = "75%";
});

document.addEventListener("mouseout", (e) => {
    cursor.style.opacity = "0%";
});

bButton.addEventListener("mouseenter", (e) => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.4, 0.4)";
    cursor.style.background = "rgb(255, 255, 255, 1)";

    if (bClicked) return;
    bButton.style.width = "23vw";
    
    clearInterval(bLeaveInterval);
    var string = "Body of work", i = 0;
    bEnterInterval = setInterval((e) => {
        if (i >= string.length) clearInterval(bEnterInterval);
        bButton.textContent = string.substring(0, i);
        i += 1;
    }, 50);
});

bButton.addEventListener("mouseleave", (e) => {
    cursor.style.transform = "translate(-50%, -50%) scale(1, 1)";
    cursor.style.background = "rgb(200, 200, 200, 0.5)";

    if (bClicked) return;
    clearInterval(bEnterInterval)

    var string = bButton.textContent, i = string.length;

    if (string === "")
    {
        string = "B";
        i = 1;
    }

    bLeaveInterval = setInterval((e) => {
        if (i <= 1) clearInterval(bLeaveInterval);
        bButton.textContent = string.substring(0, i)
        i -= 1;
    }, 10);

    bButton.style.width = "5vw";
});

bButton.addEventListener("click", (e) => {
    bClicked = !bClicked;
    if (bClicked) {
        bButton.style.background = "rgb(255, 0, 0, 0.5)";
        bTimeline.style.display = "flex";
        bTimeline.style.animation = "fadeIn 0.5s linear";
    }
    else {
        bButton.style.background = "rgb(255, 0, 0, 1)";
        bTimeline.style.animation = "fadeOut 0.5s linear";
        setTimeout(() => {bTimeline.style.display = "none";}, 475);
    }
});

eButton.addEventListener("mouseenter", (e) => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.4, 0.4)";
    cursor.style.background = "rgb(255, 255, 255, 1)";

    if (eClicked) return;
    eButton.style.width = "20vw";

    clearInterval(eLeaveInterval);
    var string = "Experience", i = 0;
    eEnterInterval = setInterval((e) => {
        if (i >= string.length) clearInterval(eEnterInterval);
        eButton.textContent = string.substring(0, i);
        i += 1;
    }, 50);
});

e.addEventListener("mouseleave", (event) => {
    cursor.style.transform = "translate(-50%, -50%) scale(1, 1)";
    cursor.style.background = "rgb(200, 200, 200, 0.5)";

    if (eClicked) return;
    clearInterval(eEnterInterval)

    var string = eButton.textContent, i = string.length;
    if (string === "")
    {
        string = "E";
        i = 1;
    }
    eLeaveInterval = setInterval((e) => {
        if (i <= 1) clearInterval(eLeaveInterval);
        eButton.textContent = string.substring(0, i)
        i -= 1;
    }, 10);

    eButton.style.width = "5vw";
}
);

eButton.addEventListener("click", (e) => {
    eClicked = !eClicked;
    if (eClicked) {
        eButton.style.background = "rgb(56, 137, 196, 0.5)";
        eTimeline.style.display = "flex";
        eTimeline.style.animation = "fadeIn 0.5s linear";
    }
    else {
        eButton.style.background = "rgb(56, 137, 196, 1)";
        eTimeline.style.animation = "fadeOut 0.5s linear";
        setTimeout(() => {eTimeline.style.display = "none";}, 475);
    }
});

nButton.addEventListener("mouseenter", (e) => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.4, 0.4)";
    cursor.style.background = "rgb(255, 255, 255, 1)";

    if (nClicked) return;

    nButton.style.width = "12vw";
    
    clearInterval(nLeaveInterval);
    var string = "Nutty", i = 0;
    nEnterInterval = setInterval((e) => {
        if (i >= string.length) clearInterval(nEnterInterval);
        nButton.textContent = string.substring(0, i);
        i += 1;
    }, 50);
});

nButton.addEventListener("mouseleave", (e) => {
    cursor.style.transform = "translate(-50%, -50%) scale(1, 1)";
    cursor.style.background = "rgb(200, 200, 200, 0.5)";

    if (nClicked) return;
    clearInterval(nEnterInterval)

    var string = nButton.textContent, i = string.length;
    if (string === "")
    {
        string = "N";
        i = 1;
    }
    nLeaveInterval = setInterval((e) => {
        if (i <= 1) clearInterval(nLeaveInterval);
        nButton.textContent = string.substring(0, i)
        i -= 1;
    }, 10);

    nButton.style.width = "5vw";
});

nButton.addEventListener("click", (e) => {
    nClicked = !nClicked;
    if (nClicked) {
        nButton.style.background = "rgb(56, 137, 196, 0.5)";
        nTimeline.style.display = "flex";
        nTimeline.style.animation = "fadeIn 0.5s linear";
    }
    else {
        nButton.style.background = "rgb(56, 137, 196, 1)";
        nTimeline.style.animation = "fadeOut 0.5s linear";
        setTimeout(() => {nTimeline.style.display = "none";}, 475);
    }
});

linkedin.addEventListener("mouseenter", (e) => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.2, 0.2)";
    cursor.style.background = "rgb(255, 255, 255, 1)";
    linkedin.style.opacity = 1;
});

linkedin.addEventListener("mouseleave", (e) => {
    cursor.style.transform = "translate(-50%, -50%) scale(1, 1)";
    cursor.style.background = "rgb(200, 200, 200, 0.5)";
    linkedin.style.opacity = 0.5;
});

linkedin.addEventListener("click", (e) => {
    window.open("https://www.linkedin.com/in/benjamin-zhang-010837236/", '_blank');
})

github.addEventListener("mouseenter", (e) => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.2, 0.2)";
    cursor.style.background = "rgb(255, 255, 255, 1)";
    github.style.opacity = 1;
});

github.addEventListener("mouseleave", (e) => {
    cursor.style.transform = "translate(-50%, -50%) scale(1, 1)";
    cursor.style.background = "rgb(200, 200, 200, 0.5)";
    github.style.opacity = 0.5;
});

github.addEventListener("click", (e) => {
    window.open("https://github.com/bbbenzhang", '_blank')
});
