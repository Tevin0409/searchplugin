import React from'react';

class SearchBar extends React.Component{
    state= {term:''};

    onInputChange = (event)=> {
        this.setState({term:event.target.value})
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        // TODO: Call callback from parent component
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
            <div className="search-bar ui segment" style={{backgroundColor:"orange"}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                            placeholder="Search..."
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;