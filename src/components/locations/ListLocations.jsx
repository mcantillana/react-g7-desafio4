import React from 'react';
import { connect } from 'react-redux';

const ListLocations = props => {

    const { locations } = props;

    return (
        <React.Fragment>

        <table className="table table-hover table-bordered">
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Code</th>                  
                </tr>
            </thead>
          <tbody>
            {
                locations.map((location, index) => 
                    <tr key={index}>
                        <td>{location.name}</td>
                        <td>{location.code}</td>
                    </tr>
                )
            }
          </tbody>
        </table>
        </React.Fragment>
    );
}



const mapStateToProps = state => ({
    ...state.locations
}) 

export default connect(mapStateToProps, {})(ListLocations);
