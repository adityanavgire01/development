export default function loadHome() {
    const content = document.getElementById('content');
  
    // Clear existing content
    content.innerHTML = '';
  
    // Create elements
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to The Odin Restaurant';
  
    const description = document.createElement('p');
    description.textContent = 'Enjoy the finest meals, crafted with passion and love.';
  
    const image = document.createElement('img');
    image.src = 'https://via.placeholder.com/300'; // Temporary image
    image.alt = 'Restaurant Image';
  
    // Append elements
    content.appendChild(heading);
    content.appendChild(description);
    content.appendChild(image);
  }
  
  