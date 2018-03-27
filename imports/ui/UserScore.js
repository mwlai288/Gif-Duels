import React from 'react';

const UserScore = (props) => {
  return (
    <div>
      <h1>{props.gif.score} </h1>
      <img src={props.gif.urlGif} alt="" />
      <h3>{props.gif.user}</h3>
    </div>
  );
};

export default UserScore;
