const Notification = ({ message }) => {
  if (!message) {
    return null
  }

  const successStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  // Pilih objek gaya berdasarkan flag isError (boolean)
  const notificationStyle = message.isError ? errorStyle : successStyle

  return (
    <div style={notificationStyle}>
      {message.text}
    </div>
  )
}

export default Notification