function sendJSON(data) {
  let xhr = new XMLHttpRequest();
  let url = "";

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send(data);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const formJSON = Object.fromEntries(data.entries());

  const results = JSON.stringify(formJSON, null, 2);

  sendJSON(results);
}

const form = document.querySelector(".new-object-form");
form.addEventListener("submit", handleFormSubmit);
