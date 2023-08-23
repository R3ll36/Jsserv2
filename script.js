// Get all the circle elements with the .circle class
const circles = document.querySelectorAll('.circle');

// Function to toggle the .is--active class on the line and dot elements
function toggleActiveClasses(lineId, dotId) {
  const line = document.getElementById(lineId);
  const dot = document.getElementById(dotId);

  if (line && dot) {
    line.classList.toggle('is--active');
    dot.classList.toggle('is--active');
  }
}

// Function to remove .is--visible class from an element
function hideElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.remove('is--visible');
  }
}

// Function to show .is--visible class on an element
function showElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.add('is--visible');
  }
}

// Add click event listeners to the circles
circles.forEach((circle, index) => {
  const lineId = `line${index + 1}`;
  const dotId = `dot${index + 1}`;

  circle.addEventListener('click', () => {
    // Toggle the .is--active class on the line and dot elements
    toggleActiveClasses(lineId, dotId);

    // Show .is--visible on dot3 and line1, hide .is--visible on dot2
    if (index === 2) {
      showElement('dot3');
      showElement('line1');
      hideElement('dot2');
    }
  });
});
