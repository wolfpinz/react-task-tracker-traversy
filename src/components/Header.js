// import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ onAdd }) => {
  return (
    <div className='header'>
      <h1>Task Tracker</h1>
      <Button onAdd={onAdd} />
    </div>
  )
}

// Header.propTypes = {
//
// }

export default Header
