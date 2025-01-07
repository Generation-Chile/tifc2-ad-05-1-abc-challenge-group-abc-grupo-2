document.querySelectorAll('h5').forEach(h5 => {
    h5.addEventListener('click', () => {
      const colors = ['green', 'blue', 'red'];
      const randomColors = Array.from({ length: 3 }, () => colors[Math.floor(Math.random() * colors.length)]);
      h5.style.color = randomColors[0];
      h5.style.backgroundColor = randomColors[1];
      h5.style.borderColor = randomColors[2];
      h5.style.borderStyle = 'solid';
      h5.style.borderWidth = '2px';
    });
  });