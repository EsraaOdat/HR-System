function createCard() {
  var entries = JSON.parse(localStorage.getItem("feedbackEntries")) || [];
  var emailToCardsMap = {}; // Map email to an array of cards (if any)
  var feedbackContainer = document.getElementById("feedbackContainer");

  // Clear existing content in feedback container
  feedbackContainer.innerHTML = '';

  entries.forEach(function (entry) {
    var email = entry.Email;

    // Check if an existing card already displays feedback from this email
    if (emailToCardsMap[email]) {
      // Append new feedback to the existing card
      var card = emailToCardsMap[email][0]; // Get the first card
      var feedbackText = document.createElement("p");
      feedbackText.innerHTML = `<strong>Subject:</strong> ${entry.Subject}<br>${entry.Message}`;
      card.querySelector('.FeedbackText').appendChild(feedbackText);
      document.querySelector('.FeedbackText').style.paddingTop='30px';
    } else {
      // Create a new card
      var card = document.createElement("div");
      card.className = "FullCard";

      // Profile image
      var profileImage = document.createElement("img");
      profileImage.src = entry.Gender === "Female" ? "assets/images/female.jpg" : "assets/images/male.jpg";
      profileImage.alt = "Profile Image";
      card.appendChild(profileImage);

      // Feedback text
      var feedbackText = document.createElement("div");
      feedbackText.className = "FeedbackText";
      feedbackText.innerHTML = `<h3>${entry.Subject}</h3>
                                <p>${entry.Message}</p>`;
      card.appendChild(feedbackText);

      // Card titles
      var cardTitles = document.createElement("div");
      cardTitles.className = "CardTitles";
      cardTitles.innerHTML = `<p>${entry.Name}</p>
                              <a href="#">${entry.Title}</a>
                              <p class="email">${entry.Email}</p>
                              <p class="dateNN">${new Date(entry.Date).toLocaleString()}</p>`;
      card.appendChild(cardTitles);

      // Add the card to the feedback container
      feedbackContainer.appendChild(card);

      // Map email to this newly created card
      emailToCardsMap[email] = [card]; // Initialize with an array containing this card
    }
  });
}

// Call createCard to display the feedback cards when the page loads
document.addEventListener("DOMContentLoaded", createCard);


