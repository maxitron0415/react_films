function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return <div id={id} className="movie card">
        <div className="card-image waves-effect waves-block waves-dark">
            {
                poster === 'N/A' ? (
                    <img className="activator" src={`https://via.placeholder.com/300x400?text=${title}`}/>
                ) :
                    <img className="activator animated-image" src={poster} />
            }
        </div>
        <div className="card-content">
            <p className="name-film">{title}</p>
            <p className="type-text">{type}</p>
        </div>
    </div>
}

export { Movie };