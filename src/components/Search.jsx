import { memo } from 'react';
import './search.css'

export const Search = memo((props) => {
     const handleSearch = ({ target }) => {
          props.search(target.value)
     };

     const handleSubmit = (e) => {
          e.preventDefault();
     }

     return (
          <form onSubmit={handleSubmit}>
               <input type="text" className='input-search' name='search' placeholder='Search' onChange={handleSearch} />
          </form>
     )
});   