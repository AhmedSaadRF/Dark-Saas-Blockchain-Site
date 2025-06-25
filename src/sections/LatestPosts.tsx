import type { CollectionEntry } from "astro:content";
import { Card } from "../components/Card";
import { getPostColorFromCategory } from "../utils/postUtils";
import { Tag } from "../components/Tag";
import { CutCornerButton } from "../components/CutCornerButton";
import { twMerge } from "tailwind-merge";

export const LatestPosts = (props: {
  latestPosts: CollectionEntry<'blog'>[]
}) => {
  const { latestPosts } = props;
  return (
    <section>
      <div>
        <div>
          <h2>Your portal to everything blockchain.</h2>
          <p>Keep up with the newest trends, updates, and insights in the blockchain world, updated weekly.</p>
        </div>
        <div>
          <div>
            {latestPosts.map(({ data: { title, description, category } }, postIndex) => (
              <Card key={postIndex} buttonText="Read More" color={getPostColorFromCategory(category)}>
                <Tag color={getPostColorFromCategory(category)}>{category}</Tag>
                <h3>{title}</h3>
                <p>{description}</p>
              </Card>
            ))}
          </div>
          <div>
            {latestPosts.map(({ data: { title, description, category } }, postIndex) => (
              <Card key={postIndex} buttonText="Read More" color={getPostColorFromCategory(category)}>
                <Tag color={getPostColorFromCategory(category)}>{category}</Tag>
                <h3>{title}</h3>
                <p>{description}</p>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <CutCornerButton>Read the Blog</CutCornerButton>
        </div>
      </div>
    </section>
  )
};

