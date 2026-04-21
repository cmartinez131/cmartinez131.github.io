// Smooth in-page scroll used by the About section's inline link to Projects.
export const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const yOffset = -32;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};
