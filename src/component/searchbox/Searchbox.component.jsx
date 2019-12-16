import React from 'react';

const SearchBox = ({ onInputChange }) => {
    return(
        <div style={{marginTop: '140px'}} className="w-100">
            <h2 style={{fontSize: '70px', paddingLeft: '25%'}} className="dance">Every minute here counts.</h2>
            <input onChange={onInputChange} style={{marginLeft: '10%', borderRadius: '30px'}} className="w-70 pa3 search" type="text" placeholder="Search by platform..." />
        </div>
    )
}

export default SearchBox;