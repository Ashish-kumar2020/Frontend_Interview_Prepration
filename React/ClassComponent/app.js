function App() {
  return (
    <>
      <h1>Hi From Class Component</h1>
      <DisplayPost />
    </>
  );
}

class DisplayPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    this.setState({ posts: data });
  }

  componentDidMount() {
    this.fetchPosts();
  }
  componentDidUpdate() {
    console.log("All Posts  : ", this.state.posts);
  }
  render() {
    return (
      <h1>
        Hi From Display Component
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </h1>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
