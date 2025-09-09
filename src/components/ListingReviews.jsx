import React from 'react'
import clients from "../data/clients.json"
import ListingClients from './ListingClients'

const ListingReviews = ({ client }) => {
  return (
    <>
      {
        client.reviews.map((rev) => (
        <li className="bg-white p-[20px]">
            <img className="mb-5 ml-5 mt-10" src="./images/quote-icon.svg" alt="" />
            <div>
                <p className="italic">{rev.text}</p>
            </div>
            <ListingClients item={client} />
        </li>
        ))
      }

    </>
  )
}

export default ListingReviews
