const envelope = document.getElementById("envelope");
const envelopeBtn = document.getElementById("envelopeBtn");
const message = document.getElementById("message");
onload = () => {
  document.body.classList.remove("container");
};


// Step 1: Click → flap opens → letter slides up → then show message
envelopeBtn.addEventListener("click", () => {
  envelope.classList.add("open");

  // wait for letter animation
  setTimeout(() => {
    envelope.style.display = "none";
    message.style.display = "block";
  }, 1500);
});

