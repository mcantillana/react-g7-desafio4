import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const AddHeroes = props => {
    const styleActiveItem = {
      fontWeight: 'bold'
    }
    const isActive = (path, match, location) => !!(match || path === location.pathname);

    const styleHeaderTitle = {
      textDecoration: 'none',
      color: 'black'
    }

    return (
        <React.Fragment>
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
              <h5 className="my-0 mr-md-auto font-weight-normal"><Link style={styleHeaderTitle} to="/">React G7 / Desafío 4</Link></h5>
              <nav className="my-2 my-md-0 mr-md-3">
                <NavLink activeStyle={styleActiveItem} exact={true}  className="p-2 text-dark" to="/">Home</NavLink>
                <NavLink activeStyle={styleActiveItem} isActive={isActive.bind(this, '/heroes')}  className="p-2 text-dark" to="/heroes">Heroes</NavLink>
                <NavLink activeStyle={styleActiveItem} isActive={isActive.bind(this, '/locations')} className="p-2 text-dark" to="/locations">Locations</NavLink>
              </nav>
            </div>
          
        </header>

        {props.children}

        <div className="container">
          <footer className="pt-1 my-md-5 pt-md-3 border-top">
            <div className="row">
              <div className="col-6">
                <img className="mb-2" src="http://blog.desafiolatam.com/wp-content/uploads/2019/02/logo.png" alt=""  height="50" />
              </div>
              <div className="col-6">
                <small className="d-block mb-3 text-muted float-right">&copy; 2019 - Miguel Cantillana</small>
              </div>
            </div>
          </footer>
        </div>
        </React.Fragment>
    );
}

export default AddHeroes;