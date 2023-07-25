"use client";
import { useState, useMemo } from "react";
import DateCard from "../components/Home/DateCard";
import PostCard from "../components/Home/PostCard";
import { api } from "../lib/api";
import { formatPostNumber, formatPostDate } from "../lib/dates";
import axios from "axios";

interface Post {
    id: string;
    postNumber: number;
    title: string;
    subtitle: string;
    date: string;
    author: string;
    tags: Array<string>;
    driveId: string;
}

export default function Home() {
    const [posts, setPosts] = useState<Post[]>();
    const memo = useMemo(async () => {
        const cancelToken = axios.CancelToken.source();
        await api
            .get("/posts", {
                cancelToken: cancelToken.token,
            })
            .then((res) => setPosts(res.data))
            .catch((err) => {
                if (axios.isCancel(err)) {
                    console.log("Requisição cancelada");
                }
            });
        return () => {
            cancelToken.cancel();
        };
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
