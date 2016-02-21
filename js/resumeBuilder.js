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
    "welcomeMessage": "I'm a front-end Apprentice, who spend more than 10 hours each day to polish HTML5, CSS3 and JavaScript skills. I am eager to become a professional web developer, since web for me has infinite possibilities. I enjoy work that challenges me to explore new technical skills and touch the next level of achievement. ",
    "bioPic": "http://placehold.it/250x200",
    "skills": ["HTML5, CSS3, JavaScript, JQuery, Git, Bash, Bootstrap, Responsive Design, Python, SQL"]
}

/* This functon is used to update name, role, contact information, bio image, welcome message and skills to the resume */
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedHeaderName);

     var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBiopic);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkills =HTMLskills.replace("%data%", bio.skills);
        $("#header").append(formattedSkills);
    }
       
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

    // var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    // $("#topContacts").append(formattedTwitter);
    // $("#footerContacts").append(formattedTwitter);

 }

bio.display();

var work = {
    "jobs":[
    {
        "employer": "Jinku Times Technology of Financial Planning Standards Board China",
        "title": "Sr. Product Marketing Manager",
        "location": "Beijing, China",
        "dates": "2008-2010",
        "url": "http://jinku.com",
        "description": "<li>Completed web traffics data analysis to optimize Web content, functionality, user experience and monetization.</li><li>Managed the life cycle of system project, including user requirement, development, testing, implementation and maintenance support. </li><li>Led a team to initiate the “Certificate Financial Planner Member Communication” magazine. </li>"},
    {
        "employer": "SouFun Holdings Limited ",
        "title": "Web Content Manager",
        "location": "Beijing, China",
        "dates": "2006-2008",
        "url": "http://bj.fang.com",
        "description": "<li>Analyzed real-estate industry information to provide usable sources to digital users.</li><li>Launched coverage, press on websites and social networks.</li><li>Managed the daily website updates.</li>"},
    {
        "employer": "Beijing Sina Co. Ltd.",
        "title": "product marketing manager",
        "location": "Beijing, China",
        "dates": "2004-2006",
        "url": "http://www.sina.com.cn",
        "description": "<li>Conducted local business database project. My responsibilities include: gathering requirements, defining minimal viable product, conducting UX usability study, designing database schemas and assisting partners to gather the local businesses data into the databases.</li><li>Utilized clickstream analysis and root cause analysis to identify performance metrics, converted digital data into business strategies, and executed strategic plans to improve website performance.</li><li>Served as the central liaison of internal business units to target new market segment and expand existing AD business partners base.</li>"}]
}

/* This function is used to update work section to the resume */
function displayWork() {
    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url)
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
        "name": "University of Nebraska - Lincoln",
        "location": "Lincoln, NE",
        "degree": "Master",
        "majors": ["MBA Specialized in Management Information Systems (MIS)"],
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
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "September 2015 - Present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
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

        // var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        // var formattedOnlineURL = formattedOnlineURL.replace("#", education.onlineCourses[course].url);
        // $(".education-entry:last").append(formattedOnlineURL);
    }
}

displayEducation();

var projects = {
    "projects": [{
        "title": "Portfolio Site",
        "dates": "January 2016",
        "description": "This portfolio responsive website is my first Udacity Front-End Web Developer Nanodegree project. In this project I replicated a design mockup in HTML and CSS, and added a carousel and modals to personalize the page design. The techniques that I used include: <li>Bootstrap gribs system and Bootstrap carousel</li><li>Responsive image with Bootstrap's img-responsive calss，picture element, source element and srcset attribute</li><li>Typography responsive</li><li>Grunt to optimize images</li>",
        "width": "width:100%",
        "progress": "100% Complete",
        "url": "https://github.com/wangyi0101/udacity-portfolio"
    }, {
        "title": "Interactive Resume",
        "dates": "February 2016",
        "description": "This is my second Udacity Front-End Web Developer Nanodegree project. In this project I develop an interactive resume application, which reads resume content from a JSON file and dynamically display that content. Other than using a provided template, I personalized my resume via bootstrap and D3.js.",
        "width": "width:100%",
        "progress": "100% Complete",
        "url": "https://github.com/wangyi0101/frontend-nanodegree-resume"
    }, {
        "title": "Classic Arcade Game Clone",
        "dates": "2016",
        "description": "You will be provided with visual assets and a game loop engine; using these tools you must add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.",
        "width": "width:10%",
        "progress": "10% Complete",
        "url": "#"
    }, {
        "title": "Website Optimization",
        "dates": "2016",
        "description": "You will optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.",
        "width": "width:5%",
        "progress": "5% Complete",
        "url": "#"
    }, {
        "title": "Neighborhood Map",
        "dates": "2016",
        "description": "You will develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit. You will then add additional functionality to this application, including: map markers to identify popular locations or places you’d like to visit, a search function to easily discover these locations, and a listview to support simple browsing of all locations. You will then research and implement third-party APIs that provide additional information about each of these locations (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",
        "width": "width:3%",
        "progress": "3% Complete",
        "url": "#"
    }, {
        "title": "Feed Reader Testing",
        "dates": "2016",
        "description": "In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they’ve already included Jasmine and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we’re now left with an application with an incomplete test suite. That’s where you come in.",
        "width": "width:3%",
        "progress": "3% Complete",
        "url": "#"
    }]
}
/* This function is used to update project section. */
projects.display = function() {
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[project].url);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedProjectDes = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDes);

        // if(projects.projects[project].images.length > 0) {
        //     for (image in projects.projects[project].images) {
        //         var formattedProjectImg = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        //         $(".project-entry:last").append(formattedProjectImg);
        //     }
        // }

        var formattedProjectProgress = HTMLprojectProgress.replace("#", projects.projects[project].width);
        var formattedProjectProgress = formattedProjectProgress.replace("%data%", projects.projects[project].progress);
        $(".project-entry:last").append(formattedProjectProgress);
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
