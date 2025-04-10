
// Rotating country names
const rotatingText = document.getElementById("rotating-text");
const places = ["Italy", "Japan", "Canada", "Brazil", "India", "Australia"];
let index = 0;

setInterval(() => {
  rotatingText.textContent = `Visit ${places[index]}`;
  index = (index + 1) % places.length;
}, 200);

// Booking form validation
document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const destination = document.getElementById("destination").value;
  const persons = document.getElementById("persons").value;
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;
  const description = document.getElementById("description").value.trim();

  if (!destination || !persons || !startDate || !endDate || description.length < 50 || description.length > 500) {
    alert("Please fill all fields correctly.");
    return;
  }

  if (new Date(startDate) < new Date()) {
    alert("Start date must be in the future.");
    return;
  }

  if (new Date(endDate) <= new Date(startDate)) {
    alert("End date must be after start date.");
    return;
  }

  alert("Booking successful!");
  this.reset();
});

// Modal open/close if using new page fallback
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
