export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';

    const info = document.createElement('p');
    info.textContent = '📍 Address: 123 Odin Street, Valhalla\n📞 Phone: +1234567890';

    content.appendChild(heading);
    content.appendChild(info);

}