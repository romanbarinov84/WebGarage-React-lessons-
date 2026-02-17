import { useState } from "react";


 export const useForm = (initialState) => {

     const [formData , setFormData] = useState(initialState);
    

    const handleChange = (key , value) => {
        setFormData({
            ...formData,
            [key]:value
        })
    }
     
    return {
        formData,
        handleChange
    }
  }
