
/* =========================
   TYPING EFFECT
========================= */

const text = "Hello World!";

const typingElement =
    document.getElementById("typing");

let index = 0;


function typeText() {

    if (index < text.length) {

        typingElement.textContent +=
            text[index];

        index++;

        setTimeout(typeText, 120);

    } else {

        setTimeout(() => {

            typingElement.textContent = "";

            index = 0;

            typeText();

        }, 3000);

    }

}


typeText();



/* =========================
   TERMINAL DEMO
========================= */

const button =
    document.getElementById("helloButton");

const output =
    document.getElementById("terminal-output");


button.addEventListener(
    "click",
    function () {

        output.textContent =
            "> Hello World! 🚀";

        output.style.color =
            "#8b7cff";

        button.textContent =
            "Executed ✓";

        setTimeout(() => {

            output.textContent =
                "Hello World!";

            output.style.color =
                "#6cffc1";

            button.textContent =
                "Run Program";

        }, 2000);

    }
);
