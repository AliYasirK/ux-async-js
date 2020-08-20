window.onload = function () {
  // Run this once the page has loaded.
  // search
  document
    .querySelector("#searchButton")
    .addEventListener("click", searchGithub);
  function searchGithub() {
    const searchUserText = document.querySelector("#searchUser").value;

    // https://api.github.com/search/users?q=searchUserText

    // fetch the result with searchUserText as paremeter
    fetch(`https://api.github.com/search/users?q=${searchUserText}`)
      .then((response) => response.json())
      .then((data) => renderUserList(data.items));

    // Obtain a list of users from the Github API that match searchUserText
    //  The final result will contain an array under the key 'items'
    // Pass this array to `renderUserList`
  }

  function renderUserList(githubUsers) {
    let html = "";
    html += "<ul>";
    for (let i = 0; i < githubUsers.length; i++) {
      let githubUser = githubUsers[i];
      html += "<li>";
      html += `<strong>${githubUser.login}</strong><code>   -   </code>`;
      html += `<a target="_blank" href="${githubUser.html_url}">GitHub profile</a>`;
      html += "</br>";
      // Add in linked profile avatar image
      html += `<a target="_blank" href="${githubUser.html_url}"><image height="100px" src="${githubUser.avatar_url}"></a>`;
      html += "</br>";
      html += "</li>";
    }
    html += "</ul>";

    document.querySelector("#resultsContainer").innerHTML = html;
  }
};
