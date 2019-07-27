import React from 'react';
import Layout from '../components/common/Layout';
import ListHeroes from '../components/heroes/ListHeroes';
import ListLocations from '../components/locations/ListLocations';


const HomePage = props => {

    return (
        <React.Fragment>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col">                    
                            <h2 className="display-6">List Heroes</h2>
                            <ListHeroes />
                        </div>
                        <div className="col">
                            <h2 className="display-6">List Locations</h2>
                            <ListLocations />
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
}

export default HomePage;