var toggleButton = document.getElementById("toggleSkills"); // Button to toggle skills visibility
var SkillsSection = document.getElementById("SkillsSection"); // Section containing skills
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    if (SkillsSection.style.display === 'none' || SkillsSection.style.display === '') {
        SkillsSection.style.display = 'block'; // Show skills section
    }
    else {
        SkillsSection.style.display = 'none'; // Hide skills section
    }
});
