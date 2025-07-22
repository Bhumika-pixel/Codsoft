const display = document.getElementById('display');
const keys = document.querySelectorAll('.btn');
let current = "";

// Add click events using a loop
for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', function () {
    const val = keys[i].getAttribute('data-key');
    
    if (val === '.' && current.includes('.')) return;

    current += val;
    display.value = current;
  });
}

// Clear button functionality
document.getElementById('clear').addEventListener('click', function () {
  if (current !== "") {
    current = "";
    display.value = "";
  } else {
    display.value = "Cleared!";
  }
});

// Equals (=) button functionality
document.getElementById('equals').addEventListener('click', function () {
  if (current.trim() === "") {
    display.value = "Enter something";
    return;
  }

  try {
    const result = eval(current);
    if (isNaN(result) || !isFinite(result)) {
      display.value = "Math Error";
    } else {
      display.value = result;
      current = result.toString();
    }
  } catch (e) {
    display.value = "Invalid input";
    current = "";
  }
});