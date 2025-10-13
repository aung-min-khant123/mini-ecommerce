"use client"
import { useEffect } from "react";
import React, { useState } from 'react'

type Post = {
    title: string;
    [key: string]: any;
};

function ClientSide() {
    const [posts, setPosts] = useState<Post[] | null>(null);

    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch ("https://dummyjson.com/posts");
            const data = await res.json();
            setPosts(data?.posts);
        }

        fetchPosts();
    }, [])
  return (
    <>
        <ul>
            {posts && posts.map ((post: Post) => (
                <li key={post.title}>{post.title}</li>
            ))}
        </ul>
    </>
  )
}

export default ClientSide