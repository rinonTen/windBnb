import React, { useState } from 'react'
import logo from '../../challenge/logo.svg'
import Options from './Options'
import './Header.css'

const Header = ({ search, fullHeader, setFullHeader }) => {
  const placeOptions = ['Helsinki', 'Turku', 'Oulu', 'Vaasa']
  const [place, setPlace] = useState('')
  const [numberPeople, setNumberPeople] = useState('Add people')
  const [placeActive, setPlaceActive] = useState(false)
  const [peopleActive, setPeopleActive] = useState(false)
  const [adultsQuantity, setAdultsQuantity] = useState(0)
  const [childrenQuantity, setChildrenQuantity] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    const searchData = {}
    searchData.place = place
    searchData.people = numberPeople
    setFullHeader(false)
    search(searchData)
  }

  const handleActive = (event) => {
    setFullHeader(true)
    if (event.currentTarget.id === 'local') {
      setPlaceActive(true)
      setPeopleActive(false)
    } else {
      setPlaceActive(false)
      setPeopleActive(true)
    }
  }

  const handlePlace = (event) => {
    setPlace(event.target.id)
  }

  const morePeople = (event) => {
    let valueOne = adultsQuantity
    let valueTwo = childrenQuantity

    if (event.target.id === 'adult') {
      valueOne = valueOne + 1
      setAdultsQuantity(valueOne)
    } else {
      valueTwo = valueTwo + 1
      setChildrenQuantity(valueTwo)
    }
    const total = `${valueOne + valueTwo}`
    setNumberPeople(total)
  }

  const lessPeople = (event) => {
    let valueOne = adultsQuantity
    let valueTwo = childrenQuantity

    if (event.target.id === 'adult' && adultsQuantity > 0) {
      valueOne = valueOne - 1
      setAdultsQuantity(valueOne)
    } else if (event.target.id === 'child' && childrenQuantity > 0) {
      valueTwo = valueTwo - 1
      setChildrenQuantity(valueTwo)
    }
    const total = `${valueOne + valueTwo}`
    setNumberPeople(total)
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  const logoDisplay = fullHeader ? 'display-none' : 'logo-section'
  const searchBar = fullHeader ? 'form-section full-search' : 'form-section'
  const formType = fullHeader ? 'form-full' : 'form'
  const localInput = fullHeader ? 'where-full' : 'where'
  const guestsInput = fullHeader ? 'people-full' : 'people'
  const searchTitle = fullHeader ? 'search-title' : 'display-none'
  const searchButton = fullHeader ? 'search-button-full' : 'search-button'
  const placeSection =
    fullHeader && placeActive
      ? 'active input-section border-right-full'
      : ' input-section border-right'
  const peopleSection =
    fullHeader && peopleActive
      ? 'active input-section border-right-full'
      : ' input-section border-right'
  const optionsSection = fullHeader ? 'options-section' : 'display-none'
  const placesSelection =
    fullHeader && placeActive ? 'place-options' : 'display-none'
  const peopleSelection =
    fullHeader && peopleActive ? 'people-options' : 'display-none'
  const editTitle = fullHeader ? 'edit-title' : 'display-none'
  const optionsBigScreen = fullHeader ? 'big-screen-options' : 'display-none'
  const optionsSmallScreen = fullHeader
    ? 'small-screen-options'
    : 'display-none'

  return (
    <div className={fullHeader ? 'Header Header_moved' : 'Header'}>
      <div className={logoDisplay} onClick={handleRefresh}>
        <img src={logo} alt='Logo' />
      </div>
      <div className={searchBar}>
        <div className={editTitle}>Edit your search</div>
        <div className={formType}>
          <div className={placeSection} id='local' onClick={handleActive}>
            <div className={searchTitle}>Location</div>
            <div className={localInput}>
              Finland
              {place ? <span>{`, ${place}`}</span> : ''}
            </div>
          </div>
          <div className={peopleSection} id='people' onClick={handleActive}>
            <div className={searchTitle}>Guests</div>
            <div className={guestsInput}>{numberPeople}</div>
          </div>
          <span className={optionsSmallScreen}>
            <Options
              placeOptions={placeOptions}
              optionsSection={optionsSection}
              placesSelection={placesSelection}
              handlePlace={handlePlace}
              peopleSelection={peopleSelection}
              lessPeople={lessPeople}
              adultsQuantity={adultsQuantity}
              morePeople={morePeople}
              childrenQuantity={childrenQuantity}
            />
          </span>
          <div className='search-section align-center'>
            <button
              type='submit'
              className={searchButton}
              onClick={handleSubmit}>
              <i className='material-icons'>search</i>
              {fullHeader ? <span className='search-text'>Search</span> : ''}
            </button>
          </div>
        </div>
        <span className={optionsBigScreen}>
          <Options
            placeOptions={placeOptions}
            optionsSection={optionsSection}
            placesSelection={placesSelection}
            handlePlace={handlePlace}
            peopleSelection={peopleSelection}
            lessPeople={lessPeople}
            adultsQuantity={adultsQuantity}
            morePeople={morePeople}
            childrenQuantity={childrenQuantity}
          />
        </span>
      </div>
    </div>
  )
}

export default Header
