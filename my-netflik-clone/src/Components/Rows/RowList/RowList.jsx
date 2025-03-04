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
        isLargerRow={false}
      />
      <Row
        title="TOP RATED MOVIES"
        fetchUrl={Requests.fetchTopRatedMovies}
        isLargerRow={false}
      />
      <Row
        title="ACTION MOVIES"
        fetchUrl={Requests.fetchActionMovies}
        isLargerRow={false}
      />
      <Row
        title="COMEDY MOVIES"
        fetchUrl={Requests.fetchComedyMovies}
        isLargerRow={false}
      />
      <Row
        title="HORROR MOVIES"
        fetchUrl={Requests.fetchHorrorMovies}
        isLargerRow={false}
      />
      <Row
        title="ROMANC MOVIES"
        fetchUrl={Requests.fetchRomanceMovies}
        isLargerRow={false}
      />
      <Row
        title="DOCUMENTARIES"
        fetchUrl={Requests.fetchDocumentaries}
        isLargerRow={false}
      />
      <Row title="TV SHOW" fetchUrl={Requests.fetchTvShow} isLargerRow={false} />
    </>
  );
}

export default RowList
