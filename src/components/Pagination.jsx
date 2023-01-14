import { useCallback, useState } from 'react';
import './pagination.css';

export const Pagination = ({ nextPage, prevPage }) => {
     return (
          <div className='container-buttons-pagination'>
               <button className='buttons-pagination' onClick={prevPage}> Prev </button>
               <button className='buttons-pagination' onClick={nextPage}> Next </button>
          </div>
     )
}