import { createTable, filterTable } from "./table_maker.js";

let table = document.querySelector("#employee-table");
let filter;
let data;

// Default table heading, you can change them if you please.
let table_heading = [
  ["ID", "Employee ID"],
  ["Name", "Full Name"],
  ["Department", "Department"],
  ["Job Title", "Job Title"],
  ["Hire Date", "Hire Date"],
];

// Get the data from the json file.
async function getData() {
  if (!data) {
    let response = await fetch("assets/data/employees_data.json");
    data = await response.json();
  }
}

await getData();

// For getting the filter key word from the user and filter the table
let filterInput = document.getElementById("filter");
try {
  filterInput.addEventListener("input", (e) => {
    filter = filterInput.value.toLowerCase();
    filterTable(filter);
  });
} catch (error) {
  console.warn("Couldn't find the filter for the table.");
}

// For the choose columns for the employees table
try {
  let tableColumnsSelector = document.getElementById("employee-table-columns");
  // Loop over the keys for the employee and add an option for each one
  for (const key in data[0]) {
    const li = document.createElement("li");
    li.className = "dropdown-item";

    const input = document.createElement("input");
    input.className = "form-check-input";
    input.type = "checkbox";
    input.value = key;
    input.id = key.replace(" ", "_");

    const label = document.createElement("label");
    label.className = "form-check-label ms-1";
    label.htmlFor = key.replace(" ", "_");

    input.addEventListener("change", (event) => {
      if (input.checked) {
        table_heading.push([label.innerText, input.value]);
      } else {
        table_heading = table_heading.filter((val) => val[1] !== input.value);
      }
      createTable(table, data, table_heading);
    });

    li.appendChild(input);
    li.appendChild(label);
    const colName = table_heading.find((val) => val[1] === key);
    if (colName) {
      input.checked = true;
      label.innerText = colName[0];
    } else {
      label.innerText = key;
    }
    tableColumnsSelector.appendChild(li);
  }
} catch (error) {
  console.warn(
    "You should add the 'heading option' component in order to add or remove table columns"
  );
}

// Add data to the table in the start of the code
createTable(table, data, table_heading);
