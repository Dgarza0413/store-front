import React, { useState, createContext } from 'react';

const SearchContext = createContext([{}, () => { }]);

const SearchProvider = props => {
    const [state, setState] = useState({
        increment: 0,
        dataTotal: [],
        dataSorted: [],
        searchTerm: '',
    });

    return (
        <SearchContext.Provider value={[state, setState]}>
            {props.children}
        </SearchContext.Provider>
    );
}

export { SearchContext, SearchProvider };