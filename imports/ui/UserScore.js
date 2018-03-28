import React from 'react';
import { GifStyling, Fame } from '../styles/Styling';

const UserScore = (props) => {
  return (
    <Fame>
      <h3>{props.gif.user}</h3>
      <h1>{props.gif.score} </h1>
      <GifStyling src={props.gif.urlGif} alt="" />
    </Fame>
  );
};

export default UserScore;
