console.log("This");
$.ajax({
    url: 'blog/posts.json',
    success: function (data) {
        getPostCard(data[0], 0);
    },
    error: function (a,b,c) {
        console.log(a,b,c);
    },
    dataType: 'json'
});

function openPost(postSpan) {
    console.log(postSpan.getAttribute("post-id"));
}

function getPostCard(post, id) {
    var html = '<div class="card"><h3>' + post.title + '</h3><hr><p>' + post.desc + '</p>' +
        '<span class="btn-link" onclick="openPost(this)" post-id="' + id +
        '">See more...</span>' + '</div>';
    $("#content").append(html);
}