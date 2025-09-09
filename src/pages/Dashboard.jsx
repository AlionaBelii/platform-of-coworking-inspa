import React, { useRef, useState } from 'react';
import users from "../data/users.json"
import { Link } from 'react-router'
import Looper from '../components/Looper'
import Blob from '../components/Blob'
import ListingOngProjects from '../components/ListingOngProjects'
import ListingComplProjects from '../components/ListingComplProjects';
import ListingPendingAppropvals from '../components/ListingPendingAppropvals';
import ListingTotalAmount from '../components/ListingTotalAmount';
import ReadyToStart from '../components/ReadyToStart';

const Dashboard = () => {
  return (
    <section>
      <div className="relative z-10 mt-[80px] py-[45px]">
          <h1 className="mono-display text-left text-4xl mb-[40px] md:text-5xl">Hello,
            <span>
              {
                users.map((user, index) => index === 0 ? (
                  user.user_name
                ) : null)
              }
            </span>
            </h1>
          <p>Ready to start a new project?</p>
          <div className="mt-[80px] flex gap-5 flex-wrap lg:flex-nowrap">
            <Link className="blue-btn" to="/start">Start a project</Link>
            <Link className="stroke-btn" to="/designers">Browse Designers ↗</Link>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-5 lg:mt-[160px]">
          <div className="grid grid-cols-1 gap-5 lg:w-[50%]">
            <div className="bg-white rounded-lg p-10 relative z-20 border border-gray-200 w-full">
              <ListingOngProjects ong_project={users[0].ongoing_project} />
            </div>
            <div className="bg-white rounded-lg p-10 relative z-20 border border-gray-200 w-full">
              <ListingTotalAmount />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:w-[50%] items-start">
            <div className="bg-white rounded-lg p-10 relative z-20 border border-gray-200 w-full">
              <ListingComplProjects compl_project={users[0].completed_projects} />
            </div>
            <div className="bg-white rounded-lg p-10 relative z-20 border border-gray-200 w-full">
              <ListingPendingAppropvals pend_approvals={users[0].pending_approvals} />
            </div>
          </div>
        </div>
      <div className="opacity-55 lg:opacity-100">
          <Blob />
          <Looper />
      </div>
      <ReadyToStart />
    </section>
  )
}

export default Dashboard
