
const lessons = [

    {
        id: 1,
        category: "HTML",
        icon: "🌐",
        title: "HTML Fundamentals",
        description:
            "Learn the basic structure of a modern HTML document.",

        content: `
            <p>
                HTML is the standard markup language
                used to structure content on the Web.
            </p>

            <h3>What you should learn</h3>

            <p>
                • HTML document structure<br>
                • Elements and attributes<br>
                • Headings and paragraphs<br>
                • Links and images<br>
                • Lists<br>
                • Forms
            </p>

            <h3>Example</h3>

            <code>
&lt;h1&gt;Hello World!&lt;/h1&gt;

&lt;p&gt;
    My first web page.
&lt;/p&gt;
            </code>
        `
    },


    {
        id: 2,
        category: "HTML",
        icon: "📄",
        title: "Semantic HTML",
        description:
            "Learn how to build meaningful and accessible HTML.",

        content: `
            <p>
                Semantic HTML uses meaningful elements
                to describe the purpose of content.
            </p>

            <h3>Important elements</h3>

            <p>
                header<br>
                nav<br>
                main<br>
                section<br>
                article<br>
                footer
            </p>
        `
    },


    {
        id: 3,
        category: "CSS",
        icon: "🎨",
        title: "CSS Fundamentals",
        description:
            "Learn how CSS controls the appearance of a website.",

        content: `
            <p>
                CSS is responsible for styling
                HTML elements.
            </p>

            <h3>Topics</h3>

            <p>
                • Selectors<br>
                • Colors<br>
                • Fonts<br>
                • Margin<br>
                • Padding<br>
                • Borders
            </p>

            <code>
body {
    background: #050505;
    color: white;
}
            </code>
        `
    },


    {
        id: 4,
        category: "CSS",
        icon: "▦",
        title: "Flexbox & Grid",
        description:
            "Master modern CSS layout techniques.",

        content: `
            <p>
                Flexbox and CSS Grid are two of the
                most important layout systems in modern CSS.
            </p>

            <h3>Flexbox</h3>

            <code>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
            </code>

            <h3>Grid</h3>

            <code>
.container {
    display: grid;
    grid-template-columns:
        repeat(3, 1fr);
}
            </code>
        `
    },


    {
        id: 5,
        category: "JavaScript",
        icon: "⚡",
        title: "JavaScript Fundamentals",
        description:
            "Learn programming fundamentals for the Web.",

        content: `
            <p>
                JavaScript adds logic and interaction
                to web applications.
            </p>

            <h3>Topics</h3>

            <p>
                • Variables<br>
                • Data types<br>
                • Functions<br>
                • Arrays<br>
                • Objects<br>
                • Conditions<br>
                • Loops
            </p>

            <code>
const name = "Web Developer";

console.log(name);
            </code>
        `
    },


    {
        id: 6,
        category: "JavaScript",
        icon: "🖱️",
        title: "DOM & Events",
        description:
            "Make web pages interactive with JavaScript.",

        content: `
            <p>
                The DOM allows JavaScript to interact
                with HTML elements.
            </p>

            <code>
const button =
    document.querySelector("button");

button.addEventListener(
    "click",
    () => {
        alert("Hello World!");
    }
);
            </code>
        `
    },


    {
        id: 7,
        category: "Backend",
        icon: "⚙️",
        title: "REST API",
        description:
            "Understand how frontend and backend communicate.",

        content: `
            <p>
                REST APIs allow applications to
                exchange data over HTTP.
            </p>

            <h3>Important concepts</h3>

            <p>
                GET<br>
                POST<br>
                PUT<br>
                DELETE<br>
                JSON<br>
                HTTP status codes
            </p>
        `
    },


    {
        id: 8,
        category: "Database",
        icon: "🗄️",
        title: "Database Fundamentals",
        description:
            "Learn how applications store and retrieve data.",

        content: `
            <p>
                Databases are used to permanently
                store application data.
            </p>

            <h3>Topics</h3>

            <p>
                • Tables<br>
                • Records<br>
                • Primary keys<br>
                • Relationships<br>
                • SQL
            </p>
        `
    },


    {
        id: 9,
        category: "Mobile",
        icon: "📱",
        title: "Mobile Application Development",
        description:
            "Explore the fundamentals of mobile applications.",

        content: `
            <p>
                Mobile application development focuses
                on building applications for smartphones
                and tablets.
            </p>

            <h3>Topics</h3>

            <p>
                • Mobile UI<br>
                • Navigation<br>
                • API communication<br>
                • Local storage<br>
                • Application architecture
            </p>
        `
    },


    {
        id: 10,
        category: "Git",
        icon: "🔀",
        title: "Git & GitHub",
        description:
            "Learn version control and collaborative development.",

        content: `
            <p>
                Git is a distributed version control system.
                GitHub provides a platform for hosting
                and collaborating on Git repositories.
            </p>

            <h3>Essential commands</h3>

            <code>
git init

git add .

git commit -m "Initial commit"

git push
            </code>
        `
    }

];

