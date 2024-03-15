import { Movie } from './Movie';
import errorico from '../img/error-icon.png';

function Movies(props) {
    const { movies } = props;

    return (
        <div className='movies'>
            {movies && movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie}/>)
            ) : (
                <div className="center-align">
                    <div className="error-block">
                        <h2 className='errorr'>Films or series not found</h2>
                        <img src={errorico}/>
                    </div>
                </div>
                
                
                
                
            )}
        </div>
    )
}

export { Movies };