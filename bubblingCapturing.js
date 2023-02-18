document.body.addEventListener('click', () => {
    console.log('Capturing Body');
}, { capture: true })

document.getElementById('grand-parent').addEventListener('click', (event) => {
    console.log('Capturing Grand-Parent');
}, { capture: true });

document.getElementById('parent').addEventListener('click', (event) => {
    console.log('Capturing Parent');
}, { capture: true });

document.getElementById('child').addEventListener('click', (event) => {
    console.log('Capturing Child');
}, { capture: true });

document.body.addEventListener('click', () => {
    console.log('Body Bubbling');
});

document.getElementById('grand-parent').addEventListener('click', (event) => {
    console.log('Grand-Parent Bubbling');
});

document.getElementById('parent').addEventListener('click', (event) => {
    console.log('Parent Bubbling');
});

document.getElementById('child').addEventListener('click', (event) => {
    console.log('Child Bubbling');
});