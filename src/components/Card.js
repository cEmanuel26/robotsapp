import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green br3 pa3 ma2 grow dib bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots"></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
