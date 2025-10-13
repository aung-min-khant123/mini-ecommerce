import React from 'react'

type Post = {
    title: string;
    [key: string]: any;
};
export default async function SeverSide() {
    const res = await fetch ("https://api.vercel.app/blog");
    const data = await res.json();
    console.log(data);
    return (
        <ul>
            {data?.map((post: Post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}