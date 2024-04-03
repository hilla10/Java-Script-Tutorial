// Listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);

document.addEventListener('DOMContentLoaded', fetchBookmarks);

// Save Bookmark
function saveBookmark(e) {
  // prevent form from submitting
  e.preventDefault();

  // get form values
  const siteName = document.getElementById('siteName').value;
  const siteUrl = document.getElementById('siteUrl').value;

  if (!validateForm(siteName, siteUrl)) {
    return false;
  }

  const bookmark = {
    name: siteName,
    URL: siteUrl,
  };

  /*   // Local storage test
  localStorage.setItem('test', 'Hello World');
  console.log(localStorage.getItem('test'));
  localStorage.removeItem('test');
  console.log(localStorage.getItem('test')); */

  // test if bookmarks is null
  if (localStorage.getItem('bookmarks') === null) {
    // Init array
    const bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    //   get bookmarks from localStorage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //   Add bookmark to array
    bookmarks.push(bookmark);
    //   Reset back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Clear form
  document.getElementById('myForm').reset();

  // Refetch bookmarks
  fetchBookmarks();
}

// Delete bookmark
function deleteBookmark(url) {
  // Get bookmarks from localStorage
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop through bookmarks
  bookmarks.forEach((bookmark, i) => {
    if (bookmark.URL === url) {
      // Remove from array
      bookmarks.splice(i, 1);
    }
  });
  // set to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Refetch bookmarks
  fetchBookmarks();
}

// Fetch bookmarks
function fetchBookmarks() {
  //   get bookmarks from localStorage
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // get output id
  const bookmarksResults = document.getElementById('bookmarksResults');

  // Build output
  bookmarksResults.innerHTML = '';
  bookmarks.forEach((bookmark) => {
    const name = bookmark.name;
    const url = bookmark.URL;
    bookmarksResults.innerHTML += `
        <div class="well">
            <h3>${name}
            <a href="${url}" class="btn btn-default" target="_blank">Visit</a>
            <a onclick="deleteBookmark('${url}')" href="#" class="btn btn-danger">Delete</a>
            </h3>

        </div>
      `;
  });
}

function validateForm(siteName, siteUrl) {
  if (!siteName || !siteUrl) {
    alert('Please fill in the form');
    return false;
  }

  const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  const regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert('please use a valid url');
    return false;
  }
  return true;
}
