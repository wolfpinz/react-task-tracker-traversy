// import PropTypes from 'prop-types'

const Button =  ({ text, color, onAdd })  => {
  return (
    <div
      className='btn'
      style={{
        backgroundColor: color,
      }}
      onClick={onAdd}
      >
      {text}
    </div>
  )
}

// Button.propTypes = {

// }

export default Button
