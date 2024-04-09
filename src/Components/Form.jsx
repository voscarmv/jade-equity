import React, { useEffect, useState } from 'react'

const Form = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [email, setEmail] = useState('')

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
        if(email.length>0){
            setIsFocused(true);
        }else{
        setIsFocused(false);
    }
};


    const handleEmailChange = (event) => {
        // Actualiza el estado con el valor del correo ingresado
        setEmail(event.target.value);
      };

  return (
    <div className={`email-input ${isFocused ? 'focused' : ''}`}>
    <label>Email</label>
    <input
      type="email"
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder=""
      onChange={handleEmailChange}
    />
  </div>
  )
}

export default Form