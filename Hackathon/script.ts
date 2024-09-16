
 const toggleButton = document.getElementById("toggleSkills") as HTMLButtonElement; // Button to toggle skills visibility
const SkillsSection = document.getElementById("SkillsSection") as HTMLElement; // Section containing skills

toggleButton?.addEventListener('click', () => {
    if (SkillsSection.style.display === 'none' || SkillsSection.style.display === '') {
        SkillsSection.style.display = 'block'; // Show skills section
    } else {
        SkillsSection.style.display = 'none'; // Hide skills section
    }
});
