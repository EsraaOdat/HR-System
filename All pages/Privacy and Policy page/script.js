document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("Privacy and Policy page/policy.JSON");
  const data = await response.json();
  const accordion = document.getElementById("accordionExample");

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const collapseId = `collapse${item.id}`;
    const accordionItem = document.createElement("div");
    accordionItem.className = "accordion-item";

    accordionItem.innerHTML = `
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#${collapseId}" style="font-weight: bold;">
                    ${item.head}
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    ${
                      Array.isArray(item.paragraph)
                        ? item.paragraph.join("<br><br>")
                        : item.paragraph
                    }
                </div>
            </div>
        `;
    accordion.appendChild(accordionItem);
  }
  
});
