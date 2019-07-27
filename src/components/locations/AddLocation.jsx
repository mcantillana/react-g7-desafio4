import React, { useState } from 'react';
import FormLocation from './FormLocation';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddLocationAction } from '../../store/locations/action';


const AddLocation = props => {

    const EmptyLocation = {
        name: '', 
        code: '', 
    } 


    const [location, setLocation] = useState(EmptyLocation);
    const [redirect, setRedirect] = useState(false);

    const handlerOnChange = ({target}) => {
        setLocation({
            ...location,
            [target.name]: target.value
        })
    }

    const handlerOnSubmit = event => {
        event.preventDefault();
        console.log(location);
        props.addLocationToStore(location);
        setRedirect(true);  
    }

    if (redirect) {
        return (<Redirect to="/locations" />)
    }


    return (
        <React.Fragment>
        <FormLocation 
            location={location}
            handlerOnChange={handlerOnChange}
            handlerOnSubmit={handlerOnSubmit}
            LabelBtn="Save Location"
            CancelTo="/locations"
        />
        </React.Fragment>
    );
}


const mapDispatchToProps = dispatch => ({
    addLocationToStore: payload => dispatch(AddLocationAction(payload))
})

export default connect(null, mapDispatchToProps)(AddLocation);