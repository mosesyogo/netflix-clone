import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">

      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="TRENDING" fetchUrl={requests.fetchTrending} isLargeRow={false} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} isLargeRow={false} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} isLargeRow={false} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} isLargeRow={false} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} isLargeRow={false} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} isLargeRow={false} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} isLargeRow={false} />

    </div>
  );
}

export default App;