var bio = {
    "name": "Yi Wang",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "669-226-9738",
        "email": "wangyi0101@gmail.com",
        "twitter": "@yuanyuan0101",
        "github":"https://github.com/wangyi0101",
        "location":"Fremont,CA"
    },
    "welcomeMessage": "I am a front-end Apprentice, who spend more than 10 hours each day to polish HTML5, CSS3 and JavaScript skills.I am eager to become a professional front-end developer, since I love Web. Web for me has infinite possibilities. I enjoy work that challenges me to explore new technical skills and touch the next level of achievement.",
    "bioPic": "images/197x148.gif",
    "skills": ["HTML5", "CSS3", "JavaScript", "JQuery", "Git", "Bash ", "Bootstrap", "Responsive Design", "Python", "SQL"]
}

/* This functon is used to update name, role, contact information, bio image, welcome message and skills to the resume */
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedHeaderName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBiopic);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkills =HTMLskills.replace("%data%", bio.skills);
        $("#header").append(formattedSkills);
    }
}

bio.display();

var work = {
    "jobs":[
    {
        "employer": "Jinku Times Technology of Financial Planning Standards Board China",
        "title": "Sr. Product Marketing Manager",
        "location": "Beijing, China",
        "dates": "2008-2010",
        "description": "• Completed web traffics data analysis to optimize Web content, functionality, user experience and monetization."},
    {
        "employer": "SouFun Holdings Limited ",
        "title": "Web Content Manager",
        "location": "Beijing, China",
        "dates": "2008-2010",
        "description": "• Completed web traffics data analysis to optimize Web content, functionality, user experience and monetization."},
    {
        "employer": "Beijing Sina Co. Ltd.",
        "title": "product marketing manager",
        "location": "Beijing, China",
        "dates": "2004-2006",
        "description": "Twitter makes it easy to connect with experts in your field. Take advantage of your connections by re-tweeting and commenting on their tweets."}]
}

/* This function is used to update work section to the resume */
function displayWork() {
    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

var education = {
    "schools": [
    {
        "name": "Udacity",
        "location": "San Francisco, CA",
        "degree": "Nano Degree",
        "majors": ["Front-End Development"],
        "dates": "September 2015 - Present",
        "url": "https://www.udacity.com"},
    {
        "name": "University of Nebraska - Lincoln",
        "location": "Lincoln, NE",
        "degree": "Master",
        "majors": ["MBA"],
        "dates": "August 2012 - May 2015",
        "url": "http://www.unl.edu"},
    {
        "name": "Beijing Wuzi University",
        "location": "Beijing, China",
        "degree": "Bachelor of Economics",
        "majors": ["International business and trades"],
        "dates": "August 2012 - May 2015",
        "url": "http://www.bwu.edu.cn"}],
    "onlineCourses": [
    {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304-nd"
    },
    {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893-nd"
    }]
}

/* This function is used to update education section, which include schools and online courses. */
function displayEducation() {
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        if(education.schools[school].majors.length > 0) {
            for(major in education.schools[school].majors){
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $(".education-entry:last").append(formattedSchoolMajor);
            }
        }
    }

    $("#education").append(HTMLonlineClasses);

    for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineTitle);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        var formattedOnlineURL = formattedOnlineURL.replace("#", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
}

displayEducation();

var projects = {
    "projects" :[
    {
        "title" : "Portfolio",
        "dates" : "2016",
        "description": "In portfolio responsive website project I replicated a design mockup in HTML and CSS, and added a carousel and modals to personalize the page design. ",
        "images":["images/project.jpg"]},
    {
        "title" : "Resume",
        "dates" : "2016",
        "description": "I completed a resum project, which is build with JavaScript script.",
        "images": ["images/project.jpg"]}
    ]
}

/* This function is used to update project section. */
projects.display = function() {
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle= HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedProjectDes = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDes);

        if(projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedProjectImg = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectImg);
            }
        }
    }
}

projects.display();

/* This function is building a button to internationalize Names */
function inName(name){
    name = bio.name.split(" ");
    console.log(name);
    name[1]= name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toLocaleUpperCase() + name[0].slice(1).toLowerCase();
    finalName = name[0] + " " + name[1];
    console.log(finalName)
    return finalName;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
