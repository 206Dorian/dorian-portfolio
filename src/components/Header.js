import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header>
<h1>{title}</h1>
{/* <Button color='pink' text='Hey there'/>
<Button /> */}

    </header>
  )
}

Header.defaultProps = {
  title: 'Dorians Portfolio'
}

Header.propTypes = {
  title: PropTypes.string, 
}
export default Header
