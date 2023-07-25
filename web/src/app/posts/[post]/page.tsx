"use client";
import { Post } from "@/interfaces";
import PostBody from "@/app/components/posts/PostBody";
import PostTitle from "@/app/components/posts/PostTitle";
import { api } from "@/app/lib/api";
import { useState, useCallback, useEffect } from "react";
import { markdownConvert } from "@/app/lib/markdown";
import axios, { CancelTokenSource } from "axios";

interface markdownProps {
    postNumber: number;
    title: string;
    subtitle: string;
    date: string;
    author: string;
    tags: Array<string>;
    data: string;
}

async function getPost(postId: string, cancelToken: CancelTokenSource) {
    const res = await api.get(`/posts/${postId}`, {
        cancelToken: cancelToken.token,
    });

    return res.data;
}

export default function Post() {
    const [markdown, setMarkdown] = useState<markdownProps | undefined>();
    const cancelToken = axios.CancelToken.source();

    const handleResults = useCallback(
        async (tag: string) => {
            const response = await getPost(tag, cancelToken);
            setMarkdown(response);
        },
        [cancelToken]
    );

    useEffect(() => {
        try {
            const postId = location.href.split("/")[4]!;
            handleResults(postId);
        } catch (err) {
            console.log(err);
        }
        return () => {
            cancelToken.cancel();
        };
    }, [handleResults, cancelToken]);

    return (
        <main className="flex flex-col items-center">
            <PostTitle title={markdown?.title} date={markdown?.date} />

            <PostBody
                content={markdownConvert(markdown?.data)}
                tags={markdown?.tags}
                author={markdown?.author}
            />
        </main>
    );
}
