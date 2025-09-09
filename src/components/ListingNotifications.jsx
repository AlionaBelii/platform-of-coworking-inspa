
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import designers from "../data/designers.json"
import { Link } from 'react-router';
import users from "../data/users.json"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const ListingNotifications = ({notif}) => {
  return (
    <div>
        <div>
            <div className="flex gap-5 items-center font-bold text-xl mb-[80px]" style={{color: 'var(--blue-color)'}}>
                <img src="../images/notifications.svg" alt="Notification's icon" />
                <span className="font-bold text-xl" style={{color: 'var(--blue-color)'}}>Notifications: {notif.length}</span>
            </div>
        </div>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">    
            {
                notif.map((project, index) => (
                    <SwiperSlide>
                    {
                        project.notifications && project.notifications.length > 0 ? (
                            project.notifications.map((notification) => (
                            <div className="grid grid-cols-1 lg:grid-cols-4 items-start justify-between">

                                <div className="flex items-center gap-2">
                                    {
                                        (
                                            () => {
                                                const designer = designers.find(d => d.full_name === notification.from)
                                                return designer ? 
                                                (
                                                    <div className="h-[50px] w-[50px] rounded-full overflow-hidden">
                                                        <img className="h-full object-cover" src={`../images/designers/${designer.photo}`} alt={designer.full_name} />
                                                    </div>
                                                ) : null
                                            } 
                                        )()
                                    }
                                    <span>
                                        {notification.from}
                                    </span>
                                    <div className="w-[15px] h-[15px] rounded-[1000%] bg-amber-600"></div>
                                </div>

                                <div className="lg:col-start-2 lg:col-end-5 flex flex-col items-start gap-5">
                                    {
                                        (
                                            () => 
                                                {
                                                    const userWithProject = users.find(user =>
                                                    user.ongoing_project.some(project => project.id === notification.id)
                                                    );

                                                    const project = userWithProject?.ongoing_project.find(project => project.id === notification.id);

                                                    return project ? <div className="text-xl font-bold" style={{color:'var(--black-color)'}}>{project.title}</div> : null;
                                                })()
                                    }
                                    <div className="">
                                        <p dangerouslySetInnerHTML={{ __html: notification.text}}></p>
                                    </div>
                                    <div className="flex justify-between w-full mt-[40px]">
                                        <div className="p-4 rounded-sm bg-gray-100 flex gap-5 ">
                                            <img src="../images/attached_icon.svg" alt="Icon" />
                                            <span>
                                                {notification.files_attached.length} files attached
                                            </span>
                                        </div>
                                        <Link className="blue-btn w-[150px]" to="/start">Reply</Link>
                                    </div>
                                </div>
                            </div>

                        ))
                        ) : (
                        <p>No notifications for this project.</p>
                        )
                    }
                    </SwiperSlide>
                ))
            }
        </Swiper>    
    </div>
  )
}

export default ListingNotifications