window.onload = function () { // Run this once the page has loaded.
    // search
    document.querySelector("#searchButton").addEventListener("click", searchGithub);
    function searchGithub() {
        const searchUserText = document.querySelector("#searchUser").value;

        
        // Obtain a list of users from the Github API that match searchUserText
        //  The final result will contain an array under the key 'items'
        // Pass this array to `renderUserList`

        fetch("https://developer.github.com/v3/search/#search-users.") 
        .then(renderUserList())
        .catch(renderUserList() 
        );
    }

    function renderUserList(githubUsers) {
        let html = "";
        html += "<ul>";
        for (let i = 0; i < githubUsers.length; i++) {
            let githubUser = githubUsers[i];
            html += "<li>";
            html += `<strong>${githubUser.login}</strong>`;
            html += `<a target="_blank" href="${githubUser.html_url}">`;
            html += "</li>";
        }
        html += "</ul>";

        document.querySelector("#resultsContainer").innerHTML = html;
    }
}