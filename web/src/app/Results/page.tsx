"use client";

import { useCallback, useEffect, useState } from "react";
import DateCard from "../components/Home/DateCard";
import PostCard from "../components/Home/PostCard";
import { formatPostNumber, formatPostDate, Post } from "../page";
import { api } from "../lib/api";

async function getPosts(tag: string) {
    const res = await api.get(`/postsBytag/${tag}`);
    return res.data;
}
export default function Results() {
    const [results, setResults] = useState<Post[]>();

    const handleResults = useCallback(async (tag: string) => {
        const response = await getPosts(tag);
        setResults(response);
    }, []);

    useEffect(() => {
        try {
            const { searchParams } = new URL(location.href);
            const tag = searchParams.get("tag")!;
            handleResults(tag);
        } catch (err) {
            console.log(err);
        }
    }, [handleResults]);

    return (
        <main className="flex flex-col ">
            <h1 className="text-center mt-4 text-lg text-purple-400">
                Resultados encontrados:{" "}
            </h1>
            {results?.map((post, index) => {
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
