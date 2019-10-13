const generateAbout = function () {
    let aboutHtml = `
    <p class='bio'>I’m a full-time software development student for Thinkful’s Engineering Immersion program. Being 32 years old, I have an extensive customer service management background outside of my newly acquired skills in coding. While I am beyond excited to begin this new adventure in my new career, I am grateful for the lessons I’ve learned and skills I have acquired throughout my previous career. I pride myself on my communication skills, healthy competitive nature, and desire for efficiency in all aspects of my life. Outside of work, I am an avid gamer and enjoy absorbing all forms of media, especially television shows and podcasts. I like to stay active with a combination of gym exercising and walking/hiking my golden retriever, Brady.</p>`;
    $('.main-content').html(aboutHtml);
}

const handleAboutClick = function() {
    $('.nav-list').on('click', '.about', e => {
        generateAbout();
    })
}

const generateProjects = function () {
    let projectsHtml = `
    <img class='quiz-screen' src='images/space-quiz-project.png' alt='Space Quiz App screenshot'>
    <h3>Space Quiz</h3>
    <p class='quiz-desc'> This is the first graded project for my Thinkful course. It is a series of basic questions and responses that demonstrate my ability to understand user flow, navigate the user through different page views, give feedback to the user based on input received, and give the user a final score based on the combined result of each question.</p>
    <ul class='quiz-techs'>
        <li class='techs'><i class="fab fa-js fa-3x"></i></span></li>
    </ul>
    <div class='project-links'>
        <a class='pro-link quiz-live' href='https://thinkful-ei-heron.github.io/Zac-and-Adam_Quiz-App/' target='_blank'>Live</a>
        <a class='pro-link quiz-repo' href='https://github.com/thinkful-ei-heron/Zac-and-Adam_Quiz-App' target='_blank'>Repo</a>
    </div>`
    $('.main-content').html(projectsHtml);
}

const handleProjectsClick = function () {
    $('.nav-list').on('click', '.projects', e => {
        generateProjects();
    })
}

const generateContact = function () {
    let contactHtml = `
    <p class='contact-text'>Please feel free to contact me with any questions or inqueries. I'd love to hear from you!</p>
    <ul class='contact-list'>
        <li class='con-link phone'>
            <a href='tel:9376819305'>937-681-9305</a>
        </li>
        <li class='con-link email'>
            <a href='mailto:adamnewhouser@gmail.com'>adamnewhouser@gmail.com</a>
        </li>
        <li class='con-link github'>
            <a href='https://github.com/AdamNewhouser/' target='_blank'>
                <i class="fab fa-github fa-2x fa-social"></i>
            </a>
        </li>
        <li class='con-link linkedin'>
            <a href='https://www.linkedin.com/in/adam-newhouser-2a1ba1120/' target='_blank'>
                <i class="fab fa-linkedin fa-2x fa-social"></i>
            </a>
        </li>
    </ul>`
    $('.main-content').html(contactHtml);
}

const handleContactClick = function () {
    $('.nav-list').on('click', '.contact', e => {
        generateContact();
    })
}


const docReady = function () {
    handleAboutClick();
    handleProjectsClick();
    handleContactClick();
}
$(docReady);