'use client'
import { IPost } from "@/interfaces/post.interface"
import { useState, useEffect } from "react"

export default function Posts(){
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        async function carregarPosts(){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await response.json()
            setPosts(json)
        }

        carregarPosts()
    }, [])
    return (
        <div>
            <h1>Lista de posts</h1>
            <div className="grid grid-cols-3 gap-5">
            {
                posts.map((post) => (
                    <div 
                    className="border-1 border-dotted border-red-600" 
                    key={post.id}>
                        {post.title}
                    </div>
                ))
            }
            </div>
        </div>
    )
}