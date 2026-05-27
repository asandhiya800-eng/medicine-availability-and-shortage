let critical = 0;
let low = 0;
let adequate = 0;
let surplus = 0;

function login(){

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if(username === "admin" && password === "admin123"){

    document.getElementById("loginPage").style.display = "none";

    document.getElementById("mainWebsite").style.display = "block";

  }else{

    document.getElementById("loginError").style.display = "block";

  }
}

function logout(){

  document.getElementById("mainWebsite").style.display = "none";

  document.getElementById("loginPage").style.display = "flex";
}

function toggleTheme(){

  document.body.classList.toggle("dark");
}

function analyzeMedicine(){

  let medName =
    document.getElementById("medName").value;

  let currentStock =
    parseFloat(document.getElementById("currentStock").value);

  let minRequired =
    parseFloat(document.getElementById("minRequired").value);

  let supplier =
    document.getElementById("supplier").value;

  if(
    medName === "" ||
    isNaN(currentStock) ||
    isNaN(minRequired) ||
    supplier === ""
  ){
    alert("Please fill all fields");
    return;
  }

  let ratio = (currentStock / minRequired) * 100;

  let status = "";
  let badgeClass = "";

  if(ratio <= 20){

    status = "Critical";
    badgeClass = "badge-critical";
    critical++;

  }else if(ratio <= 50){

    status = "Low";
    badgeClass = "badge-low";
    low++;

  }else if(ratio <= 100){

    status = "Adequate";
    badgeClass = "badge-adequate";
    adequate++;

  }else{

    status = "Surplus";
    badgeClass = "badge-surplus";
    surplus++;
  }

  let row = `
    <tr>
      <td>${medName}</td>
      <td>${currentStock}</td>
      <td>${minRequired}</td>
      <td>${supplier}</td>
      <td>
        <span class="badge ${badgeClass}">
          ${status}
        </span>
      </td>
    </tr>
  `;

  document.getElementById("medTable").innerHTML += row;

  updateCounts();

  clearFields();
}

function updateCounts(){

  document.getElementById("criticalCount").innerText = critical;

  document.getElementById("lowCount").innerText = low;

  document.getElementById("adequateCount").innerText = adequate;

  document.getElementById("surplusCount").innerText = surplus;
}

function clearFields(){

  document.getElementById("medName").value = "";

  document.getElementById("currentStock").value = "";

  document.getElementById("minRequired").value = "";

  document.getElementById("supplier").value = "";
}

function resetData(){

  document.getElementById("medTable").innerHTML = "";

  critical = 0;
  low = 0;
  adequate = 0;
  surplus = 0;

  updateCounts();
}

