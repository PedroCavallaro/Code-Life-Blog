"use client";

import MarkdownView from "react-showdown";
import { useMemo, useState } from "react";
import { api } from "../lib/api";

export default function Teste() {
    const [markdown, setMarkdown] = useState<string>();
    const memo = useMemo(async () => {
        await api
            .get("/file", {
                headers: {
                    "Content-Type": "text/markdown",
                },
            })
            .then((res) => {
                setMarkdown(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <MarkdownView markdown={markdown!} />
        </>
    );
}