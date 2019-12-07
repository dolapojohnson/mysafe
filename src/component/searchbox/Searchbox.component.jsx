import React from 'react';

const SearchBox = ({ onInputChange }) => {
    return(
        <div style={{marginTop: '140px'}} className="w-100">
            <h2 style={{fontSize: '70px', paddingLeft: '25%'}} className="dance">Every moment here counts.</h2>
            <input onChange={onInputChange} style={{marginLeft: '10%'}} className="w-50 pa3 br2 search" type="text" placeholder="Search by platform..." />
            <input className="w-10 pa3 button dim pointer" type="button" value="Find" />
        </div>
    )
}

export default SearchBox;