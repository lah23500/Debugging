document.getElementById("submitPost").addEventListener("click", function() {
    var title = document.getElementById("postTitle").value;
    var content = document.getElementById("postContent").value;

    var postHtml = '<div class="post"><h2>' + title + '</h2><p>' + content + '</p></div>';
    document.getElementById("blogPosts").innerHTML += postHtml;

    localStorage.setItem('blogPosts', document.getElementById("blogPosts").innerHTML);

    title = '';
    content = '';
});

window.onload = function() {
    if(localStorage.getItem('blogPosts')) {
        document.getElementById("blogPosts").innerHTML = localStorage.getItem('blogPosts');
    }
};
