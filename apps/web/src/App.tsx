import { For, createSignal, onMount, type Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { returnBlogs } from '@core/utils';
import type { Blog } from '@core/types';
import axios from 'axios';

const App: Component = () => {
  const [blogs, setBlogs] = createSignal<Blog[]>([]);

  onMount(() => {
    console.log('trigger');
    axios.get('http://localhost:8000/api/blogs').then((res) => {
      setBlogs(res.data.blogs);
    });
  });

  return (
    <div class={styles.App}>
      <For each={blogs()}>
        {(blog) => (
          <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>{blog.id}</p>
          </div>
        )}
      </For>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
