"use client";
import { useState, useMemo } from "react";
import DateCard from "./components/Home/DateCard";
import PostCard from "./components/Home/PostCard";
import { api } from "./lib/api";

export interface Post {
    id: string;
    postNumber: number;
    title: string;
    subtitle: string;
    date: string;
    author: string;
    tags: Array<string>;
    driveId: string;
}
export function formatPostNumber(postNumber: number) {
    if (postNumber < 10) return `00${postNumber}`;
    if (postNumber >= 10 && postNumber <= 100) return `0${postNumber}`;
    return postNumber;
}
export function formatPostDate(date: string) {
    const newDate = new Date(date);
    let month = newDate.toLocaleString("default", {
        month: `long`,
    });

    return (
        month.charAt(0).toUpperCase() +
        month.slice(1) +
        ", " +
        newDate.getFullYear()
    );
}

export default function Home() {
    const [posts, setPosts] = useState<Post[]>();
    const memo = useMemo(async () => {
        await api.get("/posts").then((res) => setPosts(res.data));
    }, []);
    return (
        <main className="flex flex-col ">
            {posts?.map((post, index) => {
                let title =
                    formatPostNumber(post.postNumber - 1) +
                    " - " +
                    `"${post.title}"` +
                    " - " +
                    post.subtitle;
                return (
                    <div key={index.toString()} className="flex flex-col">
                        <DateCard date={formatPostDate(post.date)} />
                        <PostCard
                            title={title}
                            hashtags={post.tags}
                            id={post.id}
                        />
                    </div>
                );
            })}
        </main>
    );
}
