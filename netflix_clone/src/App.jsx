import Home from './pages/home/Home'
import './App.css'
//tmdb api key 
//now playing movies 
/*const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjUyYjY5MDg1NWM2NWYyNmRiN2Q1MGM5MzViYzMwYyIsIm5iZiI6MTc4MjEzNjE0NS45NzEsInN1YiI6IjZhMzkzZDUxYjQ5NWZkMWYwMTQ1NDIwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ykGxVMyK6-BbyJVfKoGmUjqW8SRhywD9GPhxHXlalM'
  }
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/
function App() {


  return (
    <>
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App
