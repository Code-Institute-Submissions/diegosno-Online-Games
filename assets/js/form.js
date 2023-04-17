document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const nameData = document.getElementById("name");
  const emailData = document.getElementById("email");
  const feedbackData = document.getElementById("feedback");
  const submitForm = document.getElementById("submit");
  const publicKey = "keVAYEv_z2E2Ed1Or";
  const serviceId = "service_krm73sn";
  const templateId = "template_4pvzm1f";

  emailjs.init(publicKey);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    submitForm.innerText = "Sending..";

    const inputText = {
      name: nameData.value,
      email: emailData.value,
      feedback: feedbackData.value,
    };

    emailjs.send(serviceId, templateId, inputText).then(
      () => {
        submitForm.innerText = "Message sent!";
        nameData.value = "";
        emailData.value = "";
        feedbackData.value = "";
      },

      (error) => {
        submitForm.innerText = "There was an error";
      }
    );
  });
});
