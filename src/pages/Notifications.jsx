import React from 'react'
import users from "../data/users.json"
import Looper from '../components/Looper'
import Blob from '../components/Blob'
import { Link } from 'react-router'
import ListingNotifications from '../components/ListingNotifications'
import JoinOurCommunity from '../small-components/JoinOurCommunity'

const Notifications = (user) => {
  return (
    <section className="mt-[80px] py-[45px]">
      <div className="relative z-10 ">
          <h1 className="mono-display text-left text-4xl mb-[40px] md:text-5xl">Hello,
            <span>
              {
                users.map((user, index) => index === 0 ? (
                  user.user_name
                ) : null)
              }
            </span>
            </h1>
          <p>Always check your notifications to be updated!</p>
          <div className="mt-[80px] flex gap-5 flex-wrap lg:flex-nowrap">
            <Link className="blue-btn" to="/start">Start a project</Link>
            <Link className="stroke-btn" to="/designers">Browse Designers ↗</Link>
          </div>
        </div>
        <div className="mt-[80px] lg:mt-[160px] bg-white rounded-lg p-10 w-full relative z-20 border border-gray-200">
          {
            users.map((user, index) => index === 0 ? (
            <ListingNotifications notif = {user.ongoing_project}/>
          ): null)
          }
        </div>
        <JoinOurCommunity />
      <div className="opacity-55 lg:opacity-100">
          <Blob />
          <Looper />
      </div>
    </section>
  )
}

export default Notifications
