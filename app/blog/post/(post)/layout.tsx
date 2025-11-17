import { Page, View } from "@dakarai/components";
import { getPosts } from "../../get-posts";
import { Header } from "./header";

export const revalidate = 60;

export default async function Layout({ children }) {
  const posts = await getPosts();

  return (
    <Page>
      <View>
        <article className="w-full text-gray-800 dark:text-gray-300 mb-10 text-center">
          <Header posts={posts} />

          {children}

          <p className="text-xs pt-4 text-center text-foreground-secondary">
            You reached the end, thanks for reading.
            <br />
            Do these posts resonate with you?
            <br />
            Consider supporting the blog by{" "}
            <a className="text-foreground-primary" href="https://buymeacoffee.com/mrcundiff">
              buying me a book
            </a>
            .
          </p>
        </article>
      </View>
    </Page>
  );
}
