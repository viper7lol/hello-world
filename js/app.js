
/* =========================================
   STATE
========================================= */

let completedLessons =
    JSON.parse(
        localStorage.getItem(
            "completedLessons"
        )
    ) || [];

let currentFilter = "All";


/* =========================================
   DOM
========================================= */

const lessonCount =
    document.getElementById("lessonCount");

const completedCount =
    document.getElementById("completedCount");

const progressPercent =
    document.getElementById("progressPercent");

const topicCount =
    document.getElementById("topicCount");

const categoryGrid =
    document.getElementById("categoryGrid");

const recentLessons =
    document.getElementById("recentLessons");

const allLessons =
    document.getElementById("allLessons");

const filterButtons =
    document.getElementById("filterButtons");

const searchInput =
    document.getElementById("searchInput");

const modal =
    document.getElementById("lessonModal");

const modalContent =
    document.getElementById("modalContent");

const closeModal =
    document.getElementById("closeModal");


/* =========================================
   SAVE PROGRESS
========================================= */

function saveProgress() {

    localStorage.setItem(
        "completedLessons",
        JSON.stringify(
            completedLessons
        )
    );

}


/* =========================================
   CHECK COMPLETED
========================================= */

function isCompleted(id) {

    return completedLessons.includes(id);

}


/* =========================================
   STATISTICS
========================================= */

function updateStatistics() {

    const total =
        lessons.length;

    const completed =
        completedLessons.length;

    const percent =
        total === 0
            ? 0
            : Math.round(
                completed / total * 100
            );

    const categories =
        new Set(
            lessons.map(
                lesson =>
                    lesson.category
            )
        );

    lessonCount.textContent =
        total;

    completedCount.textContent =
        completed;

    progressPercent.textContent =
        percent + "%";

    topicCount.textContent =
        categories.size;


    const bigProgress =
        document.getElementById(
            "bigProgress"
        );

    const largeBar =
        document.getElementById(
            "largeProgressBar"
        );

    bigProgress.textContent =
        percent + "%";

    largeBar.style.width =
        percent + "%";


    const circle =
        document.querySelector(
            ".progress-circle"
        );

    circle.style.background =
        `conic-gradient(
            var(--purple)
            ${percent * 3.6}deg,
            #222
            0deg
        )`;

}


/* =========================================
   CATEGORIES
========================================= */

function renderCategories() {

    const categories = [
        {
            name: "HTML",
            icon: "🌐",
            description:
                "Structure & semantics"
        },

        {
            name: "CSS",
            icon: "🎨",
            description:
                "Design & responsive UI"
        },

        {
            name: "JavaScript",
            icon: "⚡",
            description:
                "Logic & interaction"
        },

        {
            name: "Backend",
            icon: "⚙️",
            description:
                "Servers & APIs"
        },

        {
            name: "Database",
            icon: "🗄️",
            description:
                "Data storage"
        },

        {
            name: "Mobile",
            icon: "📱",
            description:
                "Mobile applications"
        },

        {
            name: "Git",
            icon: "🔀",
            description:
                "Version control"
        }

    ];


    categoryGrid.innerHTML =
        categories.map(
            category => `

                <div
                    class="category-card"
                    onclick="openCategory(
                        '${category.name}'
                    )"
                >

                    <div class="category-icon">
                        ${category.icon}
                    </div>

                    <h3>
                        ${category.name}
                    </h3>

                    <p>
                        ${category.description}
                    </p>

                </div>

            `
        ).join("");

}


/* =========================================
   RECENT LESSONS
========================================= */

function renderRecentLessons() {

    const recent =
        lessons.slice(0, 5);

    recentLessons.innerHTML =
        recent.map(
            (lesson, index) => `

                <div
                    class="lesson-row"
                    onclick="openLesson(
                        ${lesson.id}
                    )"
                >

                    <div class="lesson-info">

                        <span class="lesson-number">
                            ${String(
                                index + 1
                            ).padStart(2,"0")}
                        </span>

                        <div>

                            <div class="lesson-title">
                                ${lesson.title}
                            </div>

                            <div class="lesson-category">
                                ${lesson.category}
                            </div>

                        </div>

                    </div>

                    <div class="lesson-status">

                        ${
                            isCompleted(
                                lesson.id
                            )
                                ? "✓ Completed"
                                : "→"
                        }

                    </div>

                </div>

            `
        ).join("");

}


/* =========================================
   FILTER BUTTONS
========================================= */

function renderFilters() {

    const categories = [
        "All",
        ...new Set(
            lessons.map(
                lesson =>
                    lesson.category
            )
        )
    ];


    filterButtons.innerHTML =
        categories.map(
            category => `

                <button
                    class="
                        filter-button
                        ${
                            currentFilter === category
                                ? "active"
                                : ""
                        }
                    "
                    onclick="
                        filterLessons(
                            '${category}'
                        )
                    "
                >

                    ${category}

                </button>

            `
        ).join("");

}


/* =========================================
   ALL LESSONS
========================================= */

function renderLessons(
    search = ""
) {

    let filtered =
        lessons.filter(
            lesson => {

                const matchesCategory =
                    currentFilter === "All" ||
                    lesson.category ===
                        currentFilter;

                const searchText =
                    (
                        lesson.title +
                        lesson.description +
                        lesson.category
                    ).toLowerCase();

                const matchesSearch =
                    searchText.includes(
                        search.toLowerCase()
                    );

                return (
                    matchesCategory &&
                    matchesSearch
                );

            }
        );


    if (filtered.length === 0) {

        allLessons.innerHTML = `

            <p style="
                color: #777;
                padding: 30px;
            ">

                No lessons found.

            </p>

        `;

        return;

    }


    allLessons.innerHTML =
        filtered.map(
            lesson => `

                <article
                    class="lesson-card"
                    onclick="
                        openLesson(
                            ${lesson.id}
                        )
                    "
                >

                    <div class="category-icon">

                        ${lesson.icon}

                    </div>

                    <span class="tag">

                        ${lesson.category}

                    </span>

                    <h3>

                        ${lesson.title}

                    </h3>

                    <p>

                        ${lesson.description}

                    </p>

                    <div
                        style="
                            margin-top:20px;
                            color:
                            ${
                                isCompleted(
                                    lesson.id
                                )
                                ? "#5df2b3"
                                : "#777"
                            };
                            font-size:12px;
                        "
                    >

                        ${
                            isCompleted(
                                lesson.id
                            )
                                ? "✓ Completed"
                                : "Start lesson →"
                        }

                    </div>

                </article>

            `
        ).join("");

}


/* =========================================
   FILTER
========================================= */

function filterLessons(
    category
) {

    currentFilter =
        category;

    renderFilters();

    renderLessons(
        searchInput.value
    );

}


/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    () => {

        renderLessons(
            searchInput.value
        );

        showPage("lessons");

    }
);


/* =========================================
   OPEN LESSON
========================================= */

function openLesson(id) {

    const lesson =
        lessons.find(
            item =>
                item.id === id
        );

    if (!lesson) return;


    modalContent.innerHTML = `

        <div
            style="
                font-size:45px;
                margin-bottom:15px;
            "
        >
            ${lesson.icon}
        </div>

        <span
            style="
                color:var(--purple);
                letter-spacing:3px;
                font-size:11px;
            "
        >
            ${lesson.category}
        </span>

        <h2>
            ${lesson.title}
        </h2>

        ${lesson.content}

        <button
            class="primary-button complete-button"
            onclick="
                toggleComplete(
                    ${lesson.id}
                )
            "
        >

            ${
                isCompleted(
                    lesson.id
                )
                    ? "✓ Mark as Incomplete"
                    : "✓ Mark as Completed"
            }

        </button>

    `;

    modal.classList.add("show");

}


/* =========================================
   COMPLETE LESSON
========================================= */

function toggleComplete(id) {

    if (
        completedLessons.includes(id)
    ) {

        completedLessons =
            completedLessons.filter(
                lessonId =>
                    lessonId !== id
            );

    } else {

        completedLessons.push(id);

    }


    saveProgress();

    updateStatistics();

    renderRecentLessons();

    renderLessons(
        searchInput.value
    );

    openLesson(id);

}


/* =========================================
   CLOSE MODAL
========================================= */

closeModal.addEventListener(
    "click",
    () => {

        modal.classList.remove(
            "show"
        );

    }
);


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            modal.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================
   NAVIGATION
========================================= */

const navItems =
    document.querySelectorAll(
        ".nav-item"
    );


navItems.forEach(
    item => {

        item.addEventListener(
            "click",
            () => {

                const page =
                    item.dataset.page;

                showPage(page);

            }
        );

    }
);


function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(
            element =>
                element.classList.remove(
                    "active-page"
                )
        );


    const pageElement =
        document.getElementById(
            page + "Page"
        );

    if (pageElement) {

        pageElement.classList.add(
            "active-page"
        );

    }


    navItems.forEach(
        item => {

            item.classList.toggle(
                "active",
                item.dataset.page === page
            );

        }
    );


    const titles = {

        dashboard:
            "Learning Dashboard",

        lessons:
            "All Lessons",

        roadmap:
            "Learning Roadmap",

        progress:
            "My Progress"

    };


    document.getElementById(
        "pageTitle"
    ).textContent =
        titles[page] ||
        "Learning Dashboard";

}


/* =========================================
   CATEGORY NAVIGATION
========================================= */

function openCategory(
    category
) {

    showPage("lessons");

    filterLessons(category);

}


/* =========================================
   BUTTONS
========================================= */

document
    .getElementById(
        "viewAllButton"
    )
    .addEventListener(
        "click",
        () => {

            showPage(
                "lessons"
            );

        }
    );


document
    .getElementById(
        "continueButton"
    )
    .addEventListener(
        "click",
        () => {

            const nextLesson =
                lessons.find(
                    lesson =>
                        !isCompleted(
                            lesson.id
                        )
                );

            if (nextLesson) {

                openLesson(
                    nextLesson.id
                );

            } else {

                showPage(
                    "progress"
                );

            }

        }
    );


/* =========================================
   INITIALIZE
========================================= */

renderCategories();

renderRecentLessons();

renderFilters();

renderLessons();

updateStatistics();

