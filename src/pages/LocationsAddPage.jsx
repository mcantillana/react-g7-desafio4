import React from 'react';
import Layout from '../components/common/Layout';
import AddLocation from '../components/locations/AddLocation';



const LocationsAddPage = props => {

    return (
        <Layout>
            
            <div className="container">
            <div className="row">
                <h1 className="display-6">Add new Location</h1>
            </div>
            <div className="row">
                <div className="col">
                    <AddLocation />
                </div>
            </div>
            </div>
        </Layout>
    );
}

export default LocationsAddPage;