import DateCard from "./components/Home/DateCard";
import PostCard from "./components/Home/PostCard";

export default function Home() {
  return (
    <main className="flex flex-col">
      <DateCard date={"Julho, 2023"} />
      <PostCard
        title="000 - “Hello World!” - First post, what to think about this blog."
        hashtags={["#oi", "#first_post", "#hello world"]}
      />
    </main>
  );
}
