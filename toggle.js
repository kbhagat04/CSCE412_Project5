function setTheme(themeName) {
    var stylesheet = document.getElementById('theme-stylesheet');
    stylesheet.setAttribute('href', themeName);
    localStorage.setItem('theme', themeName);
}

function toggleTheme() {
    var currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'style.css') {
        setTheme('style2.css');
    } else {
        setTheme('style.css');
    }
}

document.getElementById('toggle-button').addEventListener('click', toggleTheme);

//Retains saved page on reload
(function() {
    var savedTheme = localStorage.getItem('theme') || 'style.css';
    setTheme(savedTheme);
})();