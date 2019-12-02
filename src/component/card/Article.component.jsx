import React from 'react';

const Article = ({username, email, password}) => {
  return(
    <div>
      <div style={{minHeight: '150px'}} className="shadow-5 pointer grow br3 pa2 w-50 mt2 bg-white">
          <p style={{textAlign: 'center', fontSize: '15px'}}><span className='span'>Name:</span> {username}</p>
          <p style={{textAlign: 'center', fontSize: '15px'}}><span className='span'>Email:</span> {email}</p>
          <p style={{textAlign: 'center', fontSize: '15px'}}><span className='span'>Password:</span> {password}</p>
      </div>
    </div>
  );
}

export default Article;
