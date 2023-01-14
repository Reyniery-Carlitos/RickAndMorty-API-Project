import { useFetch } from '../hooks/useFetch';

import './card.css';
import { Loading } from './Loading';
import { Filter } from './Filter';

export const Card = ({ results, loading }) => {
     return (
          <>
               {loading ? (
                    <Loading />
               ) : (
                    <div className='cards'>
                         {results.map((item) => (
                              <div className='container-card' key={item.id}>
                                   <div className='container--image'>
                                        <img src={item.image} />
                                        <p> <small className={item.status}> • </small> </p>
                                   </div>
                                   <div className='container--info'>
                                        <h2> {item.name} </h2>
                                        <p> {item.species} - {item.gender} - {item.status} </p>

                                        <h3> Origen </h3>
                                        <p>
                                             {item.origin.name}
                                        </p>

                                        <h3> Ultima localizacion </h3>
                                        <p>
                                             {item.location.name}
                                        </p>
                                   </div>
                              </div>
                         ))}
                    </div>
               )
               }
          </>
     )
};