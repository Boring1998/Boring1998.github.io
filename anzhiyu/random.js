var posts=["posts/bd0a9b9.html","posts/15edad24.html","posts/f782f02c.html","posts/5ffa2476.html","posts/6b7df25a.html","posts/eb44505a.html","posts/23df3862.html","posts/7f46148a.html","posts/1ded83c4.html","posts/7a6a6b5a.html","posts/2f8df7a1.html","posts/4a17b156.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };