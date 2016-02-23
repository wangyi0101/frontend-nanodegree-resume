var bio = {
    "name": "Yi Wang",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "669-226-9738",
        "email": "wangyi0101@gmail.com",
        "github": "https://github.com/wangyi0101",
        "location": "Fremont,CA"
    },
    "welcomeMessage": "I'm a front-end Apprentice, who spend more than 10 hours each day to polish HTML5, CSS3 and JavaScript skills. I am eager to become a professional web developer, since web for me has infinite possibilities. I enjoy work that challenges me to explore new technical skills and touch the next level of achievement. ",
    "skills": ["HTML5, CSS3, JavaScript, JQuery, Git, Bash, Bootstrap, Responsive Design, Python, SQL"],
    "biopic": "images/myimg.jpg"
};

/* This functon is used to update name, role, contact information, bio image, welcome message and skills to the resume */
bio.display = function() {
    var data = "%data%";
    var $header = $("#header");
    var $footer = $("#footerContacts");
    var $top = $("#topContacts");

    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedHeaderName = HTMLheaderName.replace(data, bio.name);
    var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);


    $header.prepend(formattedHeaderName, formattedRole);
    $header.append(formattedBiopic, formattedWelcome);
    $top.append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    $footer.append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    if (bio.skills.length > 0) {
        var formattedSkills = HTMLskills.replace(data, bio.skills);
        $header.append(HTMLskillsStart, formattedSkills);
    }
};

bio.display();

var work = {
    "jobs": [{
        "employer": "Jinku Times Technology of Financial Planning Standards Board China",
        "title": "Sr. Product Marketing Manager",
        "location": "Beijing, China",
        "dates": "2008-2010",
        "url": "http://jinku.com",
        "description": "<li>Completed web traffics data analysis to optimize Web content, functionality, user experience and monetization.</li><li>Managed the life cycle of system project, including user requirement, development, testing, implementation and maintenance support. </li><li>Led a team to initiate the “Certificate Financial Planner Member Communication” magazine. </li>"
    }, {
        "employer": "SouFun Holdings Limited ",
        "title": "Web Content Manager",
        "location": "Beijing, China",
        "dates": "2006-2008",
        "url": "http://bj.fang.com",
        "description": "<li>Analyzed real-estate industry information to provide usable sources to digital users.</li><li>Launched coverage, press on websites and social networks.</li><li>Managed the daily website updates.</li>"
    }, {
        "employer": "Beijing Sina Co. Ltd.",
        "title": "product marketing manager",
        "location": "Beijing, China",
        "dates": "2004-2006",
        "url": "http://www.sina.com.cn",
        "description": "<li>Conducted local business database project. My responsibilities include: gathering requirements, defining minimal viable product, conducting UX usability study, designing database schemas and assisting partners to gather the local businesses data into the databases.</li><li>Utilized clickstream analysis and root cause analysis to identify performance metrics, converted digital data into business strategies, and executed strategic plans to improve website performance.</li><li>Served as the central liaison of internal business units to target new market segment and expand existing AD business partners base.</li>"
    }]
};

/* This function is used to update work section to the resume */
work.display = function() {
    var data = "%data%";
    for (var i = 0; i < work.jobs.length; i++) {
        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
        formattedEmployer = formattedEmployer.replace("#", work.jobs[i].url);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace(data, work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
    }
};

work.display();

var education = {
    "schools": [{
        "name": "University of Nebraska - Lincoln",
        "location": "Lincoln, NE",
        "degree": "Master",
        "majors": ["MBA Specialized in Management Information Systems (MIS)"],
        "dates": "August 2012 - May 2015",
        "url": "http://www.unl.edu"
    }, {
        "name": "Beijing Wuzi University",
        "location": "Beijing, China",
        "degree": "Bachelor of Economics",
        "majors": ["International business and trades"],
        "dates": "August 2012 - May 2015",
        "url": "http://www.bwu.edu.cn"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "September 2015 - Present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
    }]
};

education.display = function() {
    var data = "%data%";
    for (var j = 0; j < education.schools.length; j++) {
        var formattedSchoolName = HTMLschoolName.replace(data, education.schools[j].name);
        formattedSchoolName = formattedSchoolName.replace("#", education.schools[j].url);
        var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[j].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[j].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[j].location);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation);
        for (var k = 0; k < education.schools[j].majors.length; k++) {
            var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[j].majors[k]);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

    }

    $("#education").append(HTMLonlineClasses);

    for (var l = 0; l < education.onlineCourses.length; l++) {
        var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[l].title);
        formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[l].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[l].school);
        var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[l].date);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates);
    }
};

education.display();

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
};
/* This function is used to update project section. */
projects.display = function() {
    var data = "%data%";
    for (var m = 0; m < projects.projects.length; m++) {
        var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[m].title);
        formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[m].url);
        var formattedDates = HTMLprojectDates.replace(data, projects.projects[m].dates);
        var formattedProjectDes = HTMLprojectDescription.replace(data, projects.projects[m].description);
        var formattedProjectProgress = HTMLprojectProgress.replace("#", projects.projects[m].width);
        formattedProjectProgress = formattedProjectProgress.replace(data, projects.projects[m].progress);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedProjectTitle, formattedDates, formattedProjectDes, formattedProjectProgress);
    }
};

projects.display();

/* This function is building a button to internationalize Names */
function inName(name) {
    name = bio.name.split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toLocaleUpperCase() + name[0].slice(1).toLowerCase();
    finalName = name[0] + " " + name[1];
    console.log(finalName);
    return finalName;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);