fetch('https://icanhazdadjoke.com/search', {
  headers: { 'Accept': 'application/json' }
})
  .then((response) => response.json())
  .then((data) => {
    displayJokes(data.results);
  });
// Function to dp jokes
function displayJokes(jokes) {
  const container = document.getElementById('jokes-container');
  container.innerHTML = ''; 
  if (jokes.length === 0) {
    container.innerHTML = '<p class="text-center">No jokes found.</p>';
    return;
  }
  jokes.forEach((joke) => {
    const card = `<div class="col-md-4 mb-3">
      <div class="card">
        <div class="card-body">
          <p>${joke.joke}</p>
          <button class="btn btn-primary" onclick="saveFavourite('${joke.id}', '${joke.joke}')">Favourite</button>
        </div>
      </div>
    </div>`;
    container.innerHTML += card;
  });
}
function saveFavourite(id, joke) {
  fetch('http://localhost:3000/favourites', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, joke })
  })
    .then((res) => {
      if (res.ok) {
        alert('Joke saved!');
      } else {
        alert('Failed to save joke.');
      }
    })
    .catch((err) => console.error(err));
}

// Search jokes
function searchJokes() {
  const query = document.getElementById('search-input').value.trim();
  if (!query) {
    alert('Please enter a search term.');
    return;
  }
  fetch(`https://icanhazdadjoke.com/search?term=${query}`, {
    headers: { 'Accept': 'application/json' }
  })
    .then((response) => response.json())
    .then((data) => {
      displayJokes(data.results);
    })
    .catch((err) => console.error(err));
}
// View fv jokes
function viewFavourites() {
  fetch('http://localhost:3000/favourites')
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById('favourites-container');
      container.innerHTML = ''; 
      if (data.length === 0) {
        container.innerHTML = '<p>No favorite jokes found.</p>';
        return;
      }
      data.forEach((joke) => {
        const card = `<div class="mb-3">
          <div class="card">
            <div class="card-body">
              <p>${joke.joke}</p>
            </div>
          </div>
        </div>`;
        container.innerHTML += card;
      });
      // Show the modal
      const modal = new bootstrap.Modal(document.getElementById('favouritesModal'));
      modal.show();
    })
    .catch((err) => console.error(err));
}
