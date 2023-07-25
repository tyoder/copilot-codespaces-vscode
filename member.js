function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var memberText = document.getElementById("memberText");
    var skillsText = document.getElementById("skillsText");
    var projectsText = document.getElementById("projectsText");
    var contactText = document.getElementById("contactText");

    memberText.style.display = "block";
    skillsText.style.display = "none";
    projectsText.style.display = "none";
    contactText.style.display = "none";

    member.style.backgroundColor = "#4C4C4C";
    skills.style.backgroundColor = "#3B3B3B";
    projects.style.backgroundColor = "#3B3B3B";
    contact.style.backgroundColor = "#3B3B3B";
}