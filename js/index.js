const container = document.querySelector(".blogs");

const renderPosts = async () => {
  const url = " http://localhost:3000/posts";
  const res = await fetch(url);
  const posts = await res.json();
  console.log(posts);

  let template = '';
  posts.forEach((post) => {
    template += `
      <div class='post'>
        <h1>${post.title}</h1>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 200)}</p>
        <a href="/details.html?id=${post.id}">read more...</a>
      <div/>
    `;
  });
  container.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderPosts());
