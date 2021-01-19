import React, { useState } from 'react'

const Dropdown = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            {/* <div className={`bg-white drop-box ${show ? "show" : 'display'}`}>
                {
                    types.map(e => {
                        return (
                            <div className={`d-flex align-items-center mx-3 my-2`}>
                                <input
                                    checked={search.includes(e)}
                                    onClick={handleFilterFlavorClick}
                                    type='checkbox'
                                    value={e}
                                    name={e}
                                />
                                <label className="m-0 pl-2">{e}</label>
                            </div>
                        )
                    })
                }
            </div>
            <button className="btn btn-link" onClick={() => setShow(!show)}>{e}</button> */}
        </>
    )
}

export default Dropdown;