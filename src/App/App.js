import './App.css';
import SearchBar from '../components/searchBar';
import PostList from '../components/postList';

function App() {
  return (
    <div className="App">
      <h1>Reddit Client</h1>
      <SearchBar />
      <PostList />
    </div>
  );
}

export default App;