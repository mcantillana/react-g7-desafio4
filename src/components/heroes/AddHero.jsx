import React, { useState } from 'react';
import FormHero from './FormHero';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddHeroAction } from '../../store/heroes/action';


const AddHero = props => {

    const EmptyHero = {
        name: '', 
        race: '', 
        age: '', 
        weapon: ''
    } 


    const [hero, setHero] = useState(EmptyHero);
    const [redirect, setRedirect] = useState(false);

    const handlerOnChange = ({target}) => {
        setHero({
            ...hero,
            [target.name]: target.value
        })
    }

    const handlerOnSubmit = event => {
        event.preventDefault();
        console.log(hero);
        props.addHeroToStore(hero);
        setRedirect(true);  
    }

    if (redirect) {
        return (<Redirect to="/heroes" />)
    }


    return (
        <React.Fragment>
        <FormHero 
            hero={hero}
            handlerOnChange={handlerOnChange}
            handlerOnSubmit={handlerOnSubmit}
            LabelBtn="Save Hero"
            CancelTo="/heroes"
        />
        </React.Fragment>
    );
}


const mapDispatchToProps = dispatch => ({
    addHeroToStore: payload => dispatch(AddHeroAction(payload))
})

export default connect(null, mapDispatchToProps)(AddHero);