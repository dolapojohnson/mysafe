import React from 'react';


const Navigation = ({username, onRouteChange}) => {
    return(
        <div style={{height: '15'}} className="mt0">
            <header className="top mt0 bg-black fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                <div style={{bottom: '0'}} className="flex w-100">
                    <div style={{bottom: '0'}}>
                        <h1 className="lobster">MySafe</h1>
                    </div>
                    <div style={{bottom: '0'}}>
                        <h3 className="blue mt3 f5">Welcome, {username}</h3>
                    </div>
                    <div className="mt1 f6 fw6 ttu">
                        <p className="link dim white dib mr3 pointer">Guide</p>
                        <p onClick={() => onRouteChange('saveit')} className="link dim white dib mr3 pointer"> Want to save?</p>
                        <p onClick={() => onRouteChange('login')} className="link dim white dib mr3 pointer">  Log Out</p>
                        {/* <SignOut className="dim white dib" /> */}
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navigation;