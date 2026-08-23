const Notification = ({message}) => {

  if (message === null) {
    return null
  }

  const NotificationStyle = {
    color: "green",
    background: "lightgrey",
    border: "1",
    padding: "10px",
    }

  return (
    <div>
      <div style={NotificationStyle}>{message}</div>
    </div>
  )
}

export default Notification