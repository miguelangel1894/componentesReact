import {useState} from "react";

export const useForm = (initialForm, validateForm) => {

    const[form, setForm] = useState(initialForm)
    const[error, setError] = useState({})
    const[loading, setLoading] = useState(false)
    const[response, setResponse] = useState(null)

    const handleChange = (e) =>{
        
        const {name, value} = e.target

        setForm({
            ...form, 
            [name]: value
        })
    }

    const handeBlur = (e) =>{
        handleChange(e)
        setError(validateForm(form))
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        setError(validateForm(form))

        if (Object.keys(error).length === 0) {
            alert("el objeto form pasó las validaciones")
            setLoading(true)
            /* Espacio para codear la petición http */
        }else{
            alert("El objeto form no pasó las validaciones de CONTROL DE FORMULARIO")
        }
    }

    return {
        form,
        error,
        loading,
        response,
        handleChange,
        handeBlur,
        handleSubmit
    }
}