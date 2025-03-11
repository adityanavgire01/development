import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './styles.css';

// functions to add event listners to buttons
function addNavEvents() {
    document.getElementById('home-btn').addEventListener('click', loadHome);
    document.getElementById('menu-btn').addEventListener('click', loadMenu);
    document.getElementById('contact-btn').addEventListener('click', loadContact);
}

// Initial page load
document.addEventListener('DOMContentLoaded', () => {
    loadHome(); // load home page initially
    addNavEvents(); // add event listeners
});


