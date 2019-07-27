import React from 'react';
import AddHero from '../components/heroes/AddHero';
import Layout from '../components/common/Layout';


const HeroesAddPage = props => {

    return (
        <Layout>
            
            <div className="container">
            <div className="row">
                <h1 className="display-6">Add new Hero</h1>
            </div>
            <div className="row">
                <div className="col">
                    <AddHero />
                </div>
            </div>
            </div>
        </Layout>
    );
}

export default HeroesAddPage;