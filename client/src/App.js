import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [postTags, setPostTags] = useState([]);

  useEffect(() => {
    axios.get('/posts').then(res => setPosts(res.data));
    axios.get('/tags').then(res => setTags(res.data));
    axios.get('/post-tags').then(res => setPostTags(res.data));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Blog Posts & Tags (React)</h1>

      <section>
        <h2>📘 Posts</h2>
        <ul>
          {posts.map(p => (
            <li key={p.id}><strong>{p.title}</strong> - {p.content}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>🏷️ Tags</h2>
        <ul>
          {tags.map(t => (
            <li key={t.id}>{t.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>🔗 Post-Tag Relationships</h2>
        <ul>
          {postTags.map((pt, i) => (
            <li key={i}>{pt.title} — <em>{pt.tag}</em></li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
