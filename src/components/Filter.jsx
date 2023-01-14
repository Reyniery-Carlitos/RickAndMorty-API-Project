import { memo } from 'react';
import './filter.css';

export const Filter = memo((props) => {
     const handleButtonStatus = ({ target }) => {
          props.searchByFilter({ status: target.name });
     };

     const handleButtonSpecie = ({ target }) => {
          props.searchByFilter({ specie: target.name });
     };

     const handleButtonGender = ({ target }) => {
          props.searchByFilter({ gender: target.name });
     };

     const handleButtonClear = ({ target }) => {
          props.searchByFilter({ gender: '', statud: '', specie: '' });
     };

     return (
          < div className="container-filters" >
               <h2> Filters </h2>
               <button onClick={handleButtonClear} name='clear'> Clear filters </button>

               <div className="container-individual-filter">
                    <div className="header-filter">
                         <h2>
                              Status
                         </h2>
                    </div>
                    <div className="buttons-filter">
                         <button name='alive' className='buttons-filter--status' onClick={handleButtonStatus}> Alive </button>
                         <button name='dead' className='buttons-filter--status' onClick={handleButtonStatus}> Dead </button>
                         <button name='unknown' className='buttons-filter--status' onClick={handleButtonStatus}> Unknown </button>
                    </div>
               </div>

               <div className="container-individual-filter">
                    <div className="header-filter">
                         <h2>
                              Specie
                         </h2>
                    </div>
                    <div className="buttons-filter">
                         <button name='human' className='buttons-filter--specie' onClick={handleButtonSpecie}> Human </button>
                         <button name='alien' className='buttons-filter--specie' onClick={handleButtonSpecie}> Alien </button>
                         <button name='humanoid' className='buttons-filter--specie' onClick={handleButtonSpecie}> Humanoid </button>
                         <button name='poopybutthole' className='buttons-filter--specie' onClick={handleButtonSpecie}> Poopybutthole </button>
                         <button name='mythological' className='buttons-filter--specie' onClick={handleButtonSpecie}> Mythological </button>
                         <button name='animal' className='buttons-filter--specie' onClick={handleButtonSpecie}> Animal </button>
                         <button name='robot' className='buttons-filter--specie' onClick={handleButtonSpecie}> Robot </button>
                         <button name='disease' className='buttons-filter--specie' onClick={handleButtonSpecie}> Disease </button>
                         <button name='unknown' className='buttons-filter--specie' onClick={handleButtonSpecie}> Unknown </button>
                    </div>
               </div>

               <div className="container-individual-filter">
                    <div className="header-filter">
                         <h2>
                              Gender
                         </h2>
                    </div>
                    <div className="buttons-filter">
                         <button name='male' className='buttons-filter--gender' onClick={handleButtonGender}> Male </button>
                         <button name='female' className='buttons-filter--gender' onClick={handleButtonGender}> Female </button>
                         <button name='unknown' className='buttons-filter--gender' onClick={handleButtonGender}> Unknown </button>
                         <button name='genderless' className='buttons-filter--gender' onClick={handleButtonGender}> Genderless </button>
                    </div>
               </div>
          </div >
     )
})