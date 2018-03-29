import React from 'react';
import { GifStyling, Fame } from '../styles/Styling';

const UserScore = (props) => {
  return (
    <Fame>
      <h3>
        {props.gif.user} - {props.gif.score}
      </h3>

      <GifStyling src={props.gif.urlGif} alt="" />
    </Fame>
  );
};

export default UserScore;
