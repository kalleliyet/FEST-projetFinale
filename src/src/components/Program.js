import './styles/Program.css';
import React, { useState, useEffect } from 'react';
import Data from './data.json'
import ReactPaginate from 'react-paginate';
import './styles/Show.css'
import {BiTimeFive} from "react-icons/bi";


function Program() {
  const [shows, setShows] = useState(Data.slice(0, 30));
  const [pageNumber, setPageNumber] = useState(0);

  const [showsPerPage, setShowsPerPage] = useState(4);
  const pagesVisited = pageNumber * showsPerPage;

  const displayShows = shows.slice(pagesVisited, pagesVisited + showsPerPage).map((show) => {
    return (
      <div className='show'>
        <img/>
        <BiTimeFive className='time-icon'/>
        <div className='time'>{show.time}</div>
        <div className='song'>Song : {show.song}</div>
        <div className='artist'>Artist : <span>{show.artist}</span></div>   
      </div>
    );
  });

  const pageCount = Math.ceil(shows.length / showsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    localStorage.setItem('currentPage', selected); 
  };
  useEffect(() => {
    const updateShowsPerPage = () => {
      let windowWidth=window.innerWidth
      if (windowWidth >= 1680) {
        setShowsPerPage(4); // Desktop Large
      } else if (windowWidth >= 1440) {
        setShowsPerPage(4); // Desktop Medium
      } else if (windowWidth >= 1200) {
        setShowsPerPage(3); // Desktop Small
      } else if (windowWidth >= 992) {
        setShowsPerPage(3); // Tablet Large
      } else if (windowWidth > 790) {
        setShowsPerPage(2); // Tablet Small
      } else if (windowWidth >= 480) {
        setShowsPerPage(1); // Mobile Medium (landscape)
      } else {
        setShowsPerPage(1); // Mobile Small (portrait)
      }
    };

    updateShowsPerPage();

    window.addEventListener('resize', updateShowsPerPage);

    return () => window.removeEventListener('resize', updateShowsPerPage);
  }, []);

  
      

  return (
    <div className='program-body'>
      <div className='program-container'>
                <div>
                  <h1 className='gradient-text'>PROGRAM</h1>
                  <div className='show-container'>
                  <div className="displayShows">
                    {displayShows}
                  </div>

                  <div className='buttons-container'>
                  <ReactPaginate
                      previousLabel={"Previous"}
                      nextLabel={"Next"}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={"paginationButtons"}
                      previousLinkClassName={"nextButton"}
                      activeClassName={"paginationActive"}
                      forcePage={pageNumber} 
                    />
                  </div>
                  
                  </div>
                </div>
      </div>
    </div>
  );
}

export default Program;