// WAIT FOR DOM TO LOAD
document.addEventListener("DOMContentLoaded", function () {
  // GET ELEMENTS
  const form = document.getElementById("form");
  const nameData = document.getElementById("name");
  const emailData = document.getElementById("email");
  const feedbackData = document.getElementById("feedback");
  const submitForm = document.getElementById("submit");

  // SET UP EMAIL JS VARIABLES
  const publicKey = "keVAYEv_z2E2Ed1Or";
  const serviceId = "service_krm73sn";
  const templateId = "template_4pvzm1f";

  // INITIALIZE EMAILJS WITH PUBLIC KEY
  emailjs.init(publicKey);

  // ADD SUBMIT EVEN LISTENER
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    submitForm.innerText = "Sending..";

    // GET DATA FROM THE FORM
    const inputText = {
      name: nameData.value,
      email: emailData.value,
      feedback: feedbackData.value,
    };

    // SEND EMAIL VIA EMAILJS
    emailjs.send(serviceId, templateId, inputText).then(
      () => {
        // UPDATE SUBMIT BUTTON TEXT WHEN MESSAGE IS SENT
        submitForm.innerText = "Message sent!";
        nameData.value = "";
        emailData.value = "";
        feedbackData.value = "";
        setTimeout(() => {
          submitForm.innerText = "Submit";
        }, 5000);
      },

      // IF THERE IS AN ERROR UPDATE SUBMIT BUTTON
      (error) => {
        submitForm.innerText = "Error";
      }
    );
  });
});
