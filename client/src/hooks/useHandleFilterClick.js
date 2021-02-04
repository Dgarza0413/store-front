import { useState } from 'react'

const useHandleFilter = () => {
    const [data, setData] = useState();

    const handleFilter = (e) => {
        const { value } = e.target
        setData(prev => {
            if (prev.includes(value)) {
                return prev.filter(e => e !== value)
            } else {
                return [...prev, value]
            }
        })
    }
    return [data, handleFilter]
}

export default useHandleFilter