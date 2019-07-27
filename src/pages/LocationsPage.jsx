import React from 'react';
import ListLocations from '../components/locations/ListLocations';
import Layout from '../components/common/Layout';
import { Link } from 'react-router-dom';


const LocationsPage = props => {

    return (
        <Layout>
            
            <div className="container">
            <div className="row">
                <div className="col-10">
                    <h1 className="display-6">List Location</h1>
                </div>
                <div className="col-2">
                    <Link className="btn btn-primary btn-block" to="/locations/new">Add Location</Link>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <ListLocations />
                </div>
            </div>
            </div>
        </Layout>
    );
}

export default LocationsPage;