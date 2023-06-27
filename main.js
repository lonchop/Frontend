const url = "https://backend-1-e2809487.deta.app";

const resultDiv = document.getElementById("result");

async function datos() {
  // Limpiar el contenido existente en el div
  resultDiv.innerHTML = "";
  const data = await fetch(`${url}/users`);
  const json = await data.json();
  console.log(json);
  
  json.forEach((user) => {
    const userPara = document.createElement("p");
    const userText = document.createTextNode(
      `Nombre: ${user.name}, Apellido: ${user.surname}`
    );
    userPara.appendChild(userText);
    resultDiv.appendChild(userPara);
  });
}

const click = document.getElementById("btn");

click.addEventListener("click", datos);

function hello() {
  console.log("hello");
}
