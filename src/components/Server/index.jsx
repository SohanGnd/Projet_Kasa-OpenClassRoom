import React from 'react'

const Server = ({ host }) => {
  const isHostSplitted = host.name.split(' ')
  const [firstname, lastname] = isHostSplitted

  return (
    <div className="server">
      <div className="server_name">
        <p className="server_firstname">{firstname}</p>
        <p className="server_lastname">{lastname}</p>
      </div>

      <img src={host.picture} alt="" className="server_picture" />
    </div>
  )
}

export default Server
