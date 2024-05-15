import { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'O titulo',
        body: 'O corpo'
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
