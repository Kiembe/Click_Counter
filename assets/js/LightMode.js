const lightMode = document.querySelector('.bx-sun');


// const setLightModePreference = (isLightMode) => {
//     localStorage.setItem('lightMode', isLightMode);
// };

// const applyLightModePreference = () => {
//     const isLightMode = localStorage.getItem('lightMode');
//     const body = document.body;

//     if (isLightMode == true) {
//         body.classList.add('light-mode');
//     } else {
//         body.classList.remove('light-mode');
//     }
//     console.log(123);
// };

// applyLightModePreference();



lightMode.onclick = () => {
    const body = document.body;
    body.classList.toggle('light-mode');

    const root = document.documentElement;
    if (body.classList.contains('light-mode')) {
        root.style.setProperty('--bg-color', '#DDE6ED');
        root.style.setProperty('--text-color', '#27374D');
        root.style.setProperty('--border-color', '#526D82');
    } else {
        root.style.setProperty('--bg-color', '#27374D');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--border-color', '#DDE6ED');
    }

    const isLightMode = body.classList.contains('light-mode');
    lightMode.classList = isLightMode ? 'bx bx-moon' : 'bx bx-sun';

    // setLightModePreference(isLightMode);  
};


