import React from 'react'
import Blob from '../components/Blob'
import Looper from '../components/Looper'
import { Link } from 'react-router'
import ListingUser from '../components/ListingUser'
import users from "../data/users.json"
import JoinOurCommunity from '../small-components/JoinOurCommunity'
import ReadyToStart from '../components/ReadyToStart'

const MyAccount = (user) => {
  return (
    <section className="mt-[80px] py-[45px]">
      <div className="w-full">
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
          <p>Stay in the loop—don’t miss any updates!</p>
          <div className="mt-[80px] flex gap-5 flex-wrap lg:flex-nowrap">
            <Link className="blue-btn" to="/start">Start a project</Link>
            <Link className="stroke-btn" to="/designers">Browse Designers ↗</Link>
          </div>
        </div>

        <div className="mt-[80px] lg:mt-[160px] bg-white rounded-lg p-10 w-full relative z-20 border border-gray-200">
          <div className="flex items-center justify-between font-bold text-xl" style={{color: 'var(--blue-color)'}}>
            <div className="flex gap-5 items-center">
              <img src="../images/myaccount.svg" alt="User's icon" />
              <span>My account: </span>
            </div>
            <button className="blue-btn">Modify</button>
          </div>
          <div className="border-b border-b-gray-200 mt-[30px] mb-[30px]"></div>
          <div>
            {
              <ListingUser item={user} />
            }
          </div>
        </div>
      </div>
      <div className="opacity-55 lg:opacity-100">
          <Blob />
          <Looper />
      </div>
      <div className="mt-[80px]">
        <JoinOurCommunity  />
        <ReadyToStart />
      </div>
    </section>
  )
}

export default MyAccount
