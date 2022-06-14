const createFormNavLinks = function() {
    const linksContainer = document.createElement('div');
    linksContainer.className = 'nav';

    const ul = document.createElement('ul');
        ul.className = 'nav-links';
    linksContainer.appendChild(ul);
    //  Create li
    const li1 = document.createElement('li');
        li1.className = 'nav-links__sign-active';
        li1.innerHTML = 'Sign in';
    ul.appendChild(li1);
    //  Create li
    const li2 = document.createElement('li');
        li2.className = 'nav-links__sign-inactive';
        li2.innerHTML = 'Sign up';
    ul.appendChild(li2)

    return linksContainer;
}