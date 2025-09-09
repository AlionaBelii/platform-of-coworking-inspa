import React from 'react'
import clients from "../data/clients.json"

const ListingClients = (client) => {
  return (
    <div className="flex items-center gap-3 mt-5">
        <img className="h-[50px] w-[50px] rounded-full object-cover" src={`../images/clients/${client.item.photo}`} alt={client.item.full_name} />
        <p>{client.item.full_name}</p>
    </div>
  )
}

export default ListingClients