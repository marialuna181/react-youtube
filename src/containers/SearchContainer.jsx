import React, {Component} from 'react'

class SearchContainer extends Component{
    state = {
        search : ''
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.search !== this.props.search){
            this.setState({search: nextProps.search})
        }
    }

    handlerOnChange = (e) => {
        this.setState({'search': e.target.value})
        this.props.handlerChangeSearch(e)
    }

    render(){
        return(           
            <input 
                    type="search"
                    className="input__search"
                    placeholder="Search"
                    name="search"
                    value={this.state.search}
                    onChange={(e)=>this.handlerOnChange(e)}
                />
        )
    }
}

export default SearchContainer