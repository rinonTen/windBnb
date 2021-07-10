import React from 'react';
import './Place.css';

const Place = (props) => {

  const { superHost, title, rating, photo, beds, type } = props.place;

  return (
    <div className="Place">
      <div className="place-image" style={{ backgroundImage: `url(${photo})` }} />
      <div className="place-info">
        { superHost ? <div className="place-super">Super Host</div> : '' }
        <div className="place-type">
          {type} . {beds} beds
        </div>
        <div className="place-rate">
          <i className="material-icons">star</i>
          <span>{rating}</span>
        </div>
      </div>
      <div className="place-description">
        {title}
      </div>
    </div>
  );
}
 
export default Place;