// import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ onAdd, formState }) => {
  return (
    <div className='header'>
      <h1>Task Tracker</h1>
      <Button
      text={formState ? 'Close' : 'Add'}
      color={formState ? 'darkred' : 'darkgreen'}
      onAdd={onAdd} />
    </div>
  )
}

// Header.propTypes = {
//
// }

export default Header
