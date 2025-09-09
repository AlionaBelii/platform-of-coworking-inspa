import React from 'react'
import users from "../data/users.json"

const ListingTotalAmount = () => {
    const user = users[0]
    const allProjects =
    [
        ...(user.completed_projects || []),
        ...(user.ongoing_project || []),
        ...(user.pending_approvals || [])
        
    ]

    const totalAmount = allProjects.reduce((sum, project) => sum + Number(project.price || 0), 0)

    const totalCount = allProjects.length

  return (
    <div>
      <div className="flex items-center gap-5 mb-[40px]">
            <img src={`../images/total_spent.svg`} alt="Icon of eye" />
            <span className="font-bold text-xl" style={{color: 'var(--blue-color)'}}>Total spent:</span>
        </div>
         <h1 className="font-bold text-5xl" style={{color: 'var(--blue-color)'}}>
            {totalAmount} EUR
        </h1>
        <p className="font-bold mt-[30px]" style={{color: 'var(--black-color)'}}>Total projects: {totalCount}</p>
    </div>
  )
}

export default ListingTotalAmount
