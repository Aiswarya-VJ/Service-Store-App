function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
}

// Load the default section (Dashboard) when the page loads
window.onload = function() {
    showSection('dashboard');
};
