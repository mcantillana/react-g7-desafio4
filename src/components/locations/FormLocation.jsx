import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../common/FormInput';


const FormLocation = props => {

    const { location, handlerOnSubmit, handlerOnChange, LabelBtn, CancelTo } = props;

    return (
        <form onSubmit={handlerOnSubmit}>

          <FormInput 
            required={true}
            handlerOnChange={handlerOnChange}
            placeholder="Name location"
            label="Name"
            name="name"
            value={location.name}
          />

          <FormInput 
            required={true}
            handlerOnChange={handlerOnChange}
            placeholder="Code location"
            label="Code"
            name="code"
            value={location.code}
          />
        
          <div className="text-right">            
            <Link to={CancelTo} className="btn btn-secondary btn-lg ">Cancel</Link>
            <button type="submit" className="btn btn-primary btn-lg ml-2 ">{LabelBtn}</button>
          </div>
        </form>


    );
}


export default FormLocation;