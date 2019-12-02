import React from 'react';
import Card from './Card.component';

const CardList = ({ credentials }) => {
  return(
    <div>
      {
        credentials.map((user, i) => {
          return (
            <Card
              key={i}
              platform={credentials[i].platform}
              username={credentials[i].username}
              email={credentials[i].email}
              password={credentials[i].password}
            />
        );
      })
    }
    </div>
  );
}

export default CardList;
