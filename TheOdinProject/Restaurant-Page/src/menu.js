export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const menuList = document.createElement('ul');
    const items = ['Pizza', 'Burger', 'Pasta', 'Salad'];

    items.forEach( item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        menuList.appendChild(listItem);
    });

    content.appendChild(heading);
    content.appendChild(menuList);
}