import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../common/FormInput';


const FormHero = props => {

    const { hero, handlerOnSubmit, handlerOnChange, LabelBtn, CancelTo } = props;

    return (
        <form onSubmit={handlerOnSubmit}>

          <FormInput 
            required={true}
            handlerOnChange={handlerOnChange}
            placeholder="Name hero"
            label="Name"
            name="name"
            value={hero.name}
          />

          <FormInput 
            required={true}
            handlerOnChange={handlerOnChange}
            placeholder="Race hero"
            label="Race"
            name="race"
            value={hero.race}
          />

          <FormInput 
            required={true}
            handlerOnChange={handlerOnChange}
            placeholder="Age hero"
            label="Age"
            name="age"
            value={hero.age}
          />

          <FormInput 
            required={true}
            handlerOnChange={handlerOnChange}
            placeholder="Weapon hero"
            label="Weapon"
            name="weapon"
            value={hero.weapon}
          />

        
          <div className="text-right">            
            <Link to={CancelTo} className="btn btn-secondary btn-lg ">Cancel</Link>
            <button type="submit" className="btn btn-primary btn-lg ml-2 ">{LabelBtn}</button>
          </div>
        </form>


    );
}


export default FormHero;