import reddit from './redditapi';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Form event listener
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get search term
  const searchTerm = searchInput.value;

  // Get sort
  const sortBy = document.querySelector('input[name = "sortby"]:checked').value;
  // Get limit
  const searchLimit = document.getElementById('limit').value;

  // Check input
  if (searchTerm === '') {
    // Show message
    showMessage('please add a search term', 'danger');
  }

  // Clear input
  searchInput.value = '';

  // Search Reddit
  reddit.search(searchTerm, searchLimit, sortBy).then((results) => {
    let output = `<div class="card-columns">`;
    console.log(results);
    //   Loop through posts
    results.forEach((post) => {
      // Check for img
      const image = post.preview
        ? post.preview.images[0].source.url
        : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';
      output += `
        <div class="card">
        <img src="${image}" alt="Card image Cap" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${truncateText(post.selftext, 100)}</p>
            <a href="${
              post.url
            }" target="_blank" class="btn btn-primary">Reade more</a>
            <hr>
            <span class="badge badge-secondary">Subreddit: ${
              post.subreddit
            }</span>
            <span class="badge badge-dark">Score: ${post.score}</span>
        </div>
        </div>
          `;
    });
    output += `</div>`;
    document.querySelector('#results').innerHTML = output;
  });
});

// Show Message
function showMessage(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert alert-${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const searchContainer = document.getElementById('search-container');
  // Get search
  const search = document.getElementById('search');

  //   Insert message
  searchContainer.insertBefore(div, search);

  // Timeout alert
  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

// Truncate text
function truncateText(text, limit) {
  const shortened = text.indexOf(' ', limit);
  if (shortened == -1) return text;
  return text.substring(0, shortened);
}
