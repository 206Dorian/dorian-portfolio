import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
import profile from '../assets/profile.PNG'


const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      {/* <Button color='pink' text='Hey there'/>
<Button /> */}

      <container id="profile"> <img src={profile} />
      </container>

    </header>
  )
}

Header.defaultProps = {
  title: "Dorian's Portfolio"
}

Header.propTypes = {
  title: PropTypes.string,
}
export default Header
