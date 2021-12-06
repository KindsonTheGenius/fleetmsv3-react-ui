import React, {Component} from 'react'
import axios from 'axios'


class Countries extends Component{

    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8081/api/parameters/countries').then(response => {
            console.log(response);
        })
    }

    render() {

        return (
            <div>
                <h1>Country List</h1>
            </div>
        )

    }

}


export default Countries
