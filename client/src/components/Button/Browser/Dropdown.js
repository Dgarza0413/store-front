import React from 'react'

const Dropdown = ({ title, data, search, searchType, show, setShow, handleFilterFlavorClick, handleFilterTypeCheck }) => {
    return (
        <div className="relative">
            <div className={`bg-white drop-box ${show ? "show" : 'display'}`}>
                {
                    data.map(e => {
                        return (
                            <div className={`d-flex align-items-center mx-3 my-2`}>
                                {
                                    title === "Flavor"
                                        ? <input
                                            checked={search.includes(e)}
                                            onClick={handleFilterFlavorClick}
                                            type='checkbox'
                                            value={e}
                                            name={e}
                                        />
                                        : <input
                                            checked={searchType === e}
                                            onClick={handleFilterTypeCheck}
                                            type='checkbox'
                                            value={e}
                                            name={e}
                                        />
                                }
                                <label className="m-0 pl-2 text-nowrap">{e}</label>
                            </div>
                        )
                    })
                }
            </div>
            <button className="btn btn-link" onClick={() => setShow(!show)}>{title}</button>
        </div>
    )
}

export default Dropdown
