let userName = "";

const song = document.getElementById("birthdaySong");


/* CHANGE PAGE */

function changePage(currentId, nextId) {

    document
        .getElementById(currentId)
        .classList.remove("active");

    setTimeout(() => {

        document
            .getElementById(nextId)
            .classList.add("active");

    }, 300);
}


/* START */

function startBirthday() {

    const input =
        document.getElementById("nameInput");

    userName =
        input.value.trim();

    if (userName === "") {

        input.focus();

        input.placeholder =
            "Please enter your name ❤️";

        return;
    }


    /* DISPLAY NAME */

    document.getElementById("userName")
        .textContent =
        `Happy Birthday ${userName} Garu ❤️`;

    document.getElementById("cakeName")
        .textContent =
        `${userName}`;

    document.getElementById("finalName")
        .textContent =
        `${userName} Garu ❤️`;

    document.getElementById("byeName")
        .textContent =
        `${userName} Garu ❤️`;


    /* START MUSIC */

    song.currentTime = 0;

    song.play().catch(() => {

        console.log(
            "Browser blocked autoplay."
        );

    });


    /* PARTICLES */

    createParticles();


    /* NEXT PAGE */

    changePage(
        "namePage",
        "welcomePage"
    );
}


/* SURPRISE */

function showSurprise() {

    createParticles();

    changePage(
        "welcomePage",
        "surprisePage"
    );
}


/* OPEN GIFT */

function openGift() {

    createParticles();

    changePage(
        "surprisePage",
        "cakePage"
    );
}


/* CAKE CUT */

function cutCake() {

    const cake =
        document.querySelector(".cake");

    cake.classList.add("cut");


    /* Hide flame */

    const flame =
        document.querySelector(".flame");

    flame.style.display = "none";


    /* Message */

    document
        .getElementById("cakeMessage")
        .classList.remove("hidden");


    document
        .getElementById("cutButton")
        .style.display = "none";


    document
        .getElementById("nextButton")
        .classList.remove("hidden");


    createParticles();

}


/* FINAL WISH */

function showFinalWish() {

    createParticles();

    changePage(
        "cakePage",
        "wishPage"
    );
}


/* GOODBYE */

function showGoodbye() {

    /*
       STOP MUSIC
    */

    song.pause();

    song.currentTime = 0;


    createParticles();


    changePage(
        "wishPage",
        "goodbyePage"
    );
}


/* PARTICLES */

function createParticles() {

    const container =
        document.getElementById("particles");

    const emojis = [
        "❤️",
        "💕",
        "🎉",
        "✨",
        "🎊",
        "💖",
        "🌸",
        "⭐"
    ];


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const particle =
            document.createElement("div");

        particle.className =
            "particle";

        particle.textContent =
            emojis[
                Math.floor(
                    Math.random()
                    * emojis.length
                )
            ];


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            (2 + Math.random() * 3)
            + "s";


        particle.style.animationDelay =
            Math.random() + "s";


        container.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 6000);

    }
}


/* ENTER KEY */

document
    .getElementById("nameInput")
    .addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                startBirthday();

            }

        }
    );