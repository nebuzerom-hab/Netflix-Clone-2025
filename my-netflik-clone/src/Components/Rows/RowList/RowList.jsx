import React from 'react'
import Row from '../Row/Row'
import Requests from '../../../Utility/Requests/Requests';

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargerRow={true}
      />
      <Row
        title="TRENDING"
        fetchUrl={Requests.fetchTrending}
        isLargerRow={true}
      />
      <Row
        title="TOP RATED MOVIES"
        fetchUrl={Requests.fetchTopRatedMovies}
        isLargerRow={true}
      />
      <Row
        title="ACTION MOVIES"
        fetchUrl={Requests.fetchActionMovies}
        isLargerRow={true}
      />
      <Row
        title="COMEDY MOVIES"
        fetchUrl={Requests.fetchComedyMovies}
        isLargerRow={true}
      />
      <Row
        title="HORROR MOVIES"
        fetchUrl={Requests.fetchHorrorMovies}
        isLargerRow={true}
      />
      <Row
        title="ROMANC MOVIES"
        fetchUrl={Requests.fetchRomanceMovies}
        isLargerRow={true}
      />
      <Row
        title="DOCUMENTARIES"
        fetchUrl={Requests.fetchDocumentaries}
        isLargerRow={true}
      />
      <Row title="TV SHOW" fetchUrl={Requests.fetchTvShow} isLargerRow={true} />
    </>
  );
}

export default RowList
