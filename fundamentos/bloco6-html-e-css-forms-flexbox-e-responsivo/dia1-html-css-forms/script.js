const btnEnviar = document.querySelector("#btnEnviar");

// const btnApagar = document.querySelector('#apagar');

// function checarDados(event) {
//   event.preventDefault();

//   // Referência - https://stackoverflow.com/questions/9887360/how-can-i-check-if-a-checkbox-is-checked
//   photosAuthorized = document.querySelector("#concordo2").checked;
//   if (photosAuthorized == false) {
//     alert("Somente pessoas que autorizam imagem podem enviar os dados");
//   }
//   console.log(photosAuthorized);
// }
//btnEnviar.addEventListener("click", checarDados);

// Estilizar data - https://github.com/Pikaday/Pikaday
let picker = new Pikaday({
  field: document.getElementById("datepicker"),
  format: "D/M/YYYY",
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
});

// Validação - https://github.com/horprogs/Just-validate
const validation = new JustValidate("#form", {
  errorFieldCssClass: "is-invalid",
});
const validate = new window.JustValidate("#form");

validation
  .addField("#name", [
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 30,
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Field is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ])
  .addField("#message", [
    {
      validator: (value) => {
        return value[0] === "!";
      },
    },
  ])
  .addField("#consent_checkbox", [
    {
      rule: "required",
    },
  ])
  .onSuccess((event) => {
    console.log("Validation passes and form submitted", event);
  });
