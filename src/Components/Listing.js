import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Listing extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.fetchData(id);
    }

    render() {
        console.log(this.props)
        
        return (
            <div>
                <h1>Title</h1>
            </div>
        )
    }
}

export default withRouter(Listing)