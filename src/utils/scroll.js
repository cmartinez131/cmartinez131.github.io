// Helper function to account for nav bar when scrolling to a new section through (Home, Projects, Contact)
export const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const yOffset = -60; // Adjust for your fixed navbar height
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};