import React from 'react';
import CabService from './CabService';

class CabComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cabs:[]
        }

    }

    componentDidMount(){
        CabService.getCabs().then((response) => {
            this.setState({cabs: response.data})
        });
    }

    render () {
        return (
            <div>
                <h1 className = "text-center">Cabs List</h1>
                <table className = "table table-stripped">
                    <thead>
                        <tr>

                            <td> Cab Id </td>
                            <td> Car Type </td>
                            <td> Per Km Rate </td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cabs.map(
                                cab =>
                                <tr key = {cab.cabId}>
                                    <td> {cab.cabId}</td>
                                    <td> {cab.carType}</td>
                                    <td> {cab.perKmRate}</td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        )
    }

}
export default CabComponent