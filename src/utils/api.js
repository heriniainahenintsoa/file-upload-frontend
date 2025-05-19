async function getPosts() {
  const res = await fetch(`/api/posts`);
  const data = await res.json();
  if (res.ok) {
    return data.posts;
  } else {
    return { message: "Error while fetching posts" };
  }
}

export { getPosts };
