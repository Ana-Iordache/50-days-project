const panelsContainer = document.querySelector(".container");

panelsContainer.addEventListener('click', (event) => expandCard(event));

function expandCard(event) {
    if(event.target.classList.contains('panel')) {
        removeActiveClasses();
        event.target.classList.add('active');
    }
}

function removeActiveClasses() {
    document.querySelector('.panel.active').classList.remove('active')
}