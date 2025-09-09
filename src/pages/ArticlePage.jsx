import React from 'react'
import { useParams } from 'react-router'
import blog from "../data/blog.json"
import SubscribeInput from '../small-components/SubscribeInput'

const ArticlePage = () => {
    const { id } = useParams()
    const article = blog.find((art) => art.title == id)
   
    if (article)
    {
        return (
            <section>
                <div className="py-[45px]">
                    <span className="text-gray-500 text-sm lg:text-xl font-medium">{article.category}</span>
                    <h1 className="mt-6 text-2xl lg:text-3xl font-bold" style={{color:`var(--black-color)`}}>{article.title}</h1>

                    <div className="w-full flex flex-col lg:flex-row gap-10 items-start mt-[45px]">
                        <div className="h-[500px] lg:w-[40%] overflow-hidden">
                            <img className="w-full h-full object-cover object-center rounded-lg" src={`../images/blog/${article.photo}`} alt={article.title} />
                        </div>
                        <div className="lg:w-[60%]">
                            <p className="" dangerouslySetInnerHTML={{ __html: article.text}}></p>
                        </div>
                    </div>
                
                </div>
                 <SubscribeInput />
            </section>
           
        )
    }
    else 
    {
        return (
            <div>404</div>
        )
    }
}

export default ArticlePage
