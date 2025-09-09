import React from 'react'
import users from "../data/users.json"
import { div } from 'motion/react-client'

const ListingUser = ({user}) => {
    
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="rounded-full justify-self-center lg:justify-self-end flex overflow-hidden h-[200px] w-[200px] lg:h-[400px] lg:w-[400px] lg:order-2">
            {
                users.map((user, index) => index === 0 ? (
                    <img className="h-full object-cover" src={`../images/users/${user.photo}`} alt={user.user_name} />
                ) : null)
            }
        </div>
        <div className="grid grid-cols-2">
            <div className="mt-[30px] lg:order-1">
                <h3 className="text-xl font-bold" style={{color: 'var(--blue-color)'}}>
                    Role:
                </h3>
                <span className="text-sm lg:text-xl">
                    {
                        users.map((user, index) => index === 0 ? (
                            user.role
                        ) : null)
                    }
                </span>
            </div>
            <div className="mt-[30px]">
                <h3 className="text-xl font-bold" style={{color: 'var(--blue-color)'}}>
                    Full Name:
                </h3>
                <span className="text-sm lg:text-xl">
                    {
                        users.map((user, index) => index === 0 ? (
                            user.user_name
                        ) : null)
                    }
                </span>
            </div>
            <div className="mt-[30px]">
                <h3 className="text-xl font-bold" style={{color: 'var(--blue-color)'}}>
                    Login:
                </h3>
                <span className="text-sm lg:text-xl">
                    {
                        users.map((user, index) => index === 0 ? (
                            user.user_login
                        ) : null)
                    }
                </span>
            </div>
            <div className="mt-[30px]">
                <h3 className="text-xl font-bold" style={{color: 'var(--blue-color)'}}>
                    Company Name:
                </h3>
                <span className="text-sm lg:text-xl">
                    {
                        users.map((user, index) => index === 0 ? (
                            user.company_name
                        ) : null)
                    }
                </span>
            </div>
            <div className="mt-[30px]">
                <h3 className="text-xl font-bold" style={{color: 'var(--blue-color)'}}>
                    E-mail:
                </h3>
                <span className="text-sm lg:text-xl">
                    {
                        users.map((user, index) => index === 0 ? (
                            user.e_mail
                        ) : null)
                    }
                </span>
            </div>
            <div className="mt-[30px]">
                <h3 className="text-xl font-bold" style={{color: 'var(--blue-color)'}}>
                    Phone number:
                </h3>
                <span className="text-sm lg:text-xl">
                    {
                        users.map((user, index) => index === 0 ? (
                            user.phone_number
                        ) : null)
                    }
                </span>
            </div>
        </div>
    </div>
  )
}

export default ListingUser
