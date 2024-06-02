/* Resize Navbar on Scroll */
var navbar = document.querySelector('.navbar');
//when the scroll is greater than 20px viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

/*===== Skills Animation =====*/
const skills_wrap = document.querySelector(".experience-skills"),
    skills_bar = document.querySelectorAll(".progress-line");
window.addEventListener("scroll", () => {
    skillsEffect();
})
// every time we scroll checking, we exceeded the experience-skills or not
function checkScroll(el) {
    //getting the top position of experience-skills relative to view port, in other words we need to get
    // amount of pixels between experience-skills and the top edge of the window.
    let rect = el.getBoundingClientRect();
    // after knowing the amount of pixels between the top edge of experience skills and the top edge of window
    // now we will check we exceeded the bottom edge of experience skills or not
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}
function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
}