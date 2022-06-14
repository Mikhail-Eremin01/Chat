function randomColor() {
    const colours = ['#143bd8b3', '#621890b3', '#ae35e2b3', '#e88f09b3', '#235531cc'];
    const randomNumb = Math.floor(Math.random() * colours.length);
    return colours[randomNumb];
}