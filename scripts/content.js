const blackboard_grades_url = 'https://elearning.utdallas.edu/ultra/grades'
const mainContent = document.getElementById("main-content");

if (window.location.href === blackboard_grades_url){
    const classes = document.getElementsByClassName("base-grades-term-wrapper");

    for(let course of classes){
        const course_title = course.querySelector(".course-number");
        const subheader = course.querySelector('.subheader');

        const p = document.createElement("h1");
        p.innerHTML = `<p>${course_title.textContent}</p>
                       <p>${subheader.textContent}</p>
                       <br />`;

        mainContent.prepend(p)
    }
}else{
    const mainContent = document.getElementById("main-content");
    mainContent.innerText = "Hopefully you don't have any homework teehee";
}