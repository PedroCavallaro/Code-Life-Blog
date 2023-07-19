import PostBody from "@/app/components/posts/PostBody";
import PostTitle from "@/app/components/posts/PostTitle";

interface pageProps {
  title: string;
}

export default function page() {
  return (
    <main className="flex flex-col items-center">
      <PostTitle
        title={
          "000 - “Hello World!” - First post, what to think about this blog."
        }
        date={"18 de Julho, 2023"}
      />

      <PostBody
        content={
          "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec dolor ex, imperdiet et nibh vel, finibus vestibulum eros. In id scelerisque ante, ac porta augue. Quisque vitae ex aliquam, dignissim mauris eget, volutpat diam. Donec id nisl ac ante tempor molestie quis vel elit. Integer pellentesque tortor pretium erat fermentum, in ultrices nunc commodo. Ut blandi t ligula id  augue placerat scelerisque. Pellentesque ornare mi urna, in tincidunt lorem tincidunt eget. Nulla id pharetra ante. Fusce fermentum, urna sit amet suscipit malesuada, mauris justo auctor risus, vitae fermentum nisi sem et justo."
        }
        tags={["#hasud", "#oadoad", "#ishjdiajs"]}
        author={"Enzo Firmino Campanari"}
      />
    </main>
  );
}
