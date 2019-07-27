import React from 'react';
import { connect } from 'react-redux';

const ListHeroes = props => {

    const { heroes } = props;

    return (
        <React.Fragment>

        
        <table className="table table-hover table-bordered">
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Race</th>
                  <th>Age</th>
                  <th>Weapon</th>                  
                </tr>
            </thead>
          <tbody>
            {
                heroes.map((hero, index) => 
                    <tr key={index}>
                        <td>{hero.name}</td>
                        <td>{hero.race}</td>
                        <td>{hero.age}</td>
                        <td>{hero.weapon}</td>
                    </tr>
                )
            }
          </tbody>
        </table>
        </React.Fragment>
    );
}



const mapStateToProps = state => ({
    ...state.heroes
}) 

export default connect(mapStateToProps, {})(ListHeroes);
