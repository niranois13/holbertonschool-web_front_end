function changeMode(size, weight, transform, background, color) {
  return function main() {
    document.body.style.fontSize = `${size}px`;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const paragraph = document.createElement('p');
    const paragraphContent = document.createTextNode('Welcome Holberton!');
    paragraph.appendChild(paragraphContent);
    document.body.appendChild(paragraph);

    const spookyButton = document.createElement('button');
    const spookyButtonContent = document.createTextNode('Spooky');
    spookyButton.appendChild(spookyButtonContent);
    document.body.appendChild(spookyButton);

    const darkModeButton = document.createElement('button');
    const darkModeButtonContent = document.createTextNode('Dark mode');
    darkModeButton.appendChild(darkModeButtonContent);
    document.body.appendChild(darkModeButton);

    const screamModeButton = document.createElement('button');
    const screamModeButtonContent = document.createTextNode('Scream mode');
    screamModeButton.appendChild(screamModeButtonContent);
    document.body.appendChild(screamModeButton);

    spookyButton.addEventListener("click", spooky);
    darkModeButton.addEventListener("click", darkMode);
    screamModeButton.addEventListener("click", screamMode);
}

main();
