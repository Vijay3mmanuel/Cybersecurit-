document.addEventListener('DOMContentLoaded', function() {
    // Modal 1
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('myModal');
    const closeModalBtn = document.querySelector('.close');

    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Modals 2 to 6
    for (let i = 2; i <= 6; i++) {
        const lire = document.getElementById(`lire${i}`);
        const liresuite = document.getElementById(`suite${i}`);
        const fermeLiresuiteBtn = document.querySelector(`.ferme${i}`);
        const videoPlayer = document.getElementById(`videoPlayer${i}`);

        lire.addEventListener('click', function() {
            liresuite.style.display = 'block';
            videoPlayer.play();
        });

        fermeLiresuiteBtn.addEventListener('click', function() {
            liresuite.style.display = 'none';
            videoPlayer.pause();
        });

        window.addEventListener('click', function(event) {
            if (event.target === liresuite) {
                liresuite.style.display = 'none';
                videoPlayer.pause();
            }
        });
    }
  // JavaScript code to get and display article views
  document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "vues"
    var vuesElements = document.querySelectorAll('.vues');

    // Loop through each element and extract the view count
    vuesElements.forEach(function (vuesElement) {
      var viewText = vuesElement.innerText;
      var viewCount = parseInt(viewText.split('')[0].replace(',', ''));
      console.log(viewCount); // You can use this count however you want, for now just printing to console
    });
  });

    // Article Search
    const articleTitles = document.querySelectorAll('.block h2');

    function searchArticles() {
        const searchTerm = document.getElementById('searchbar').value.toLowerCase();

        articleTitles.forEach(title => {
            const article = title.parentElement;
            if (title.textContent.toLowerCase().includes(searchTerm)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }

    document.getElementById('searchbar').addEventListener('input', searchArticles);
});
