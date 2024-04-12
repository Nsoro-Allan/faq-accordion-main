    // Get all faq-card elements
    const faqCards = document.querySelectorAll('.faq-card');

    // Set the first card to be open by default
    let currentOpenCard = faqCards[0];

    // Function to toggle the visibility of faq-card-content and change the icon
    function toggleCard(card, iconId, contentId) {
      const content = document.getElementById(contentId);
      const icon = document.getElementById(iconId);

      if (content.style.display === 'none' || !content.style.display) {
        // Close all other cards
        faqCards.forEach((c) => {
          if (c !== card) {
            c.querySelector('.faq-card-content').style.display = 'none';
            c.querySelector('img').src = './assets/images/icon-plus.svg';
          }
        });

        // Open the current card
        content.style.display = 'block';
        icon.src = './assets/images/icon-minus.svg';
      } else {
        // Close the current card
        content.style.display = 'none';
        icon.src = './assets/images/icon-plus.svg';
      }
    }

    // Add click event listeners to each faq-card
    faqCards.forEach((card, index) => {
      const iconId = `icon${index + 1}`;
      const contentId = `content${index + 1}`;
      const title = card.querySelector('.faq-card-title');
      title.addEventListener('click', () => {
        toggleCard(card, iconId, contentId);
      });
    });

    // Open the first card by default
    toggleCard(currentOpenCard, 'icon1', 'content1');