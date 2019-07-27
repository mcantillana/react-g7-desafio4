import React from 'react';
import ListHeroes from '../components/heroes/ListHeroes';
import Layout from '../components/common/Layout';
import { Link } from 'react-router-dom';


const HeroesPage = props => {

    return (
        <Layout>
            
            <div className="container">
            <div className="row">
                <div className="col-10">
                    <h1 className="display-6">List Heroes</h1>
                </div>
                <div className="col-2">
                    <Link className="btn btn-primary btn-block" to="/heroes/new">Add Hero</Link>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <ListHeroes />     
                </div>
            </div>
            </div>
        </Layout>
    );
}

export default HeroesPage;