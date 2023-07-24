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
