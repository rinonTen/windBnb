import React from 'react'

const Options = (props) => {
  return (
    <div className={props.optionsSection}>
      <section className={props.placesSelection}>
        {props.placeOptions.map((place, index) => (
          <div
            className='place'
            key={index}
            id={place}
            onClick={props.handlePlace}>
            <i className='material-icons'>location_on</i>
            {`Finland, ${place}`}
          </div>
        ))}
      </section>
      <section className={props.peopleSelection}>
        <div className='people-title'>Adults</div>
        <div className='people-subtitle'>Ages 13 or above</div>
        <div>
          <button
            id='adult'
            className='button-minus'
            onClick={props.lessPeople}>
            -
          </button>
          <span className='people-quantity'>{props.adultsQuantity}</span>
          <button id='adult' className='button-plus' onClick={props.morePeople}>
            +
          </button>
        </div>
        <div className='people-title'>Children</div>
        <div className='people-subtitle'>Ages 2-12</div>
        <div>
          <button
            id='child'
            className='button-minus'
            onClick={props.lessPeople}>
            -
          </button>
          <span className='people-quantity'>{props.childrenQuantity}</span>
          <button id='child' className='button-plus' onClick={props.morePeople}>
            +
          </button>
        </div>
      </section>
    </div>
  )
}
export default Options
