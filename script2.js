//grab the button form HTML
const toggleButton = document.getElementById('theme-toggle');

//listen for a click on the button
toggleButton.addEventListener('click', () => {
    //check if HTML currently has a 'data-theme' attribute set to 'dark'
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        //if it's dark, switch back to light mode 
        document.documentElement.removeAttribute('data-theme');
        toggleButton.textContent = 'Switch to Dark mode';
    } else {
        //if it's light, add the dark attribute
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleButton.textContent = "Switch to light mode";
    }
});
