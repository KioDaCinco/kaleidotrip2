// Modal handling
const signInModal = document.getElementById("signInModal");
const signUpModal = document.getElementById("signUpModal");

document.getElementById("signInBtn").onclick = () => signInModal.style.display = "block";
document.getElementById("signUpBtn").onclick = () => signUpModal.style.display = "block";

document.getElementById("closeSignIn").onclick = () => signInModal.style.display = "none";
document.getElementById("closeSignUp").onclick = () => signUpModal.style.display = "none";

window.onclick = function(event) {
  if (event.target == signInModal) signInModal.style.display = "none";
  if (event.target == signUpModal) signUpModal.style.display = "none";
};

// Fake authentication
document.getElementById("submitSignIn").onclick = () => {
  const email = document.getElementById("signInEmail").value;
  const pass = document.getElementById("signInPassword").value;
  if (email && pass) {
    alert(`Welcome back, ${email}!`);
    signInModal.style.display = "none";
  } else alert("Please fill in all fields.");
};

document.getElementById("submitSignUp").onclick = () => {
  const name = document.getElementById("signUpName").value;
  const email = document.getElementById("signUpEmail").value;
  const pass = document.getElementById("signUpPassword").value;
  if (name && email && pass) {
    alert(`Account created for ${name}!`);
    signUpModal.style.display = "none";
  } else alert("Please complete all fields.");
};

// Flight search functionality
document.getElementById("searchBtn").onclick = () => {
  const from = document.getElementById("fromInput").value;
  const to = document.getElementById("toInput").value;
  const date = document.getElementById("dateInput").value;
  const pax = document.getElementById("passengersInput").value;
  const resultsContainer = document.getElementById("resultsContainer");
  const resultsSection = document.getElementById("resultsSection");

  if (!from || !to || !date || !pax) {
    alert("Please fill in all search fields.");
    return;
  }

  const sampleFlights = [
    { airline: "AirAsia", price: "₱12,500", time: "8:00 AM - 1:00 PM" },
    { airline: "Cebu Pacific", price: "₱13,200", time: "10:00 AM - 3:00 PM" },
    { airline: "Philippine Airlines", price: "₱15,000", time: "6:00 AM - 11:00 AM" }
  ];

  resultsContainer.innerHTML = "";
  sampleFlights.forEach(f => {
    const card = document.createElement("div");
    card.classList.add("flight-card");
    card.innerHTML = `<h3>${f.airline}</h3>
                      <p>${from} → ${to}</p>
                      <p>${date} | ${pax} Passenger(s)</p>
                      <strong>${f.price}</strong><br>
                      <span>${f.time}</span>`;
    resultsContainer.appendChild(card);
  });

  resultsSection.style.display = "block";
};