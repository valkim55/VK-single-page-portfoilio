import Navigation from './Navigation'

import PropTypes from 'prop-types'

const Header = ( {title} ) => {
  return (
    <header>
        <h1>{title}</h1>
        <Navigation />
    </header>
  )
}

Header.defaultProps = {
    title: "Val's React Portfolio"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header