import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    };

    handeleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return <div className="row">
            <div className="center-align">
                <h1 className="search-title">Films search</h1>
                <div>
                    <label>
                        <input 
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span className="filter-text">All</span>
                    </label>
                    <label>
                        <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="movie"
                        onChange={this.handleFilter}
                        checked={this.state.type === "movie"}
                        />
                        <span className="filter-text">Movies</span>
                    </label>
                    <label>
                        <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="series"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'series'}
                        />
                        <span className="filter-text">Serials</span>
                    </label>
                    <label>
                        <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="game"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'game'}
                        />
                        <span className="filter-text">Games</span>
                    </label>
                </div>
            </div>
            <div className="col s12">
                <div className="input-field">
                    <input
                        className="validate"
                        placeholder="Type here"
                        type="search"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handeleKey}
                    />
                    
                </div>
                <div className="center-align">
                    <button className="login-btn"
                        onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
                </div>
                
            </div>
        </div>
    }
}

export { Search };