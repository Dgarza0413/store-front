import { useState } from 'react';


const useInputChange = () => {
    const [value, setValue] = useState()

    const handleInputChange = (e) => {
        setValue(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    return [value, handleInputChange]
}

export default useInputChange