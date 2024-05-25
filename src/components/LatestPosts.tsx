import { LATEST_POSTS } from '@/data';
import ArticleCard from './ArticleCard';

export default function LatestPosts() {
  return (
    <div className="flex flex-col min-h-96 px-2 py-24">
      <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold">
        Latest Articles
      </h2>
      <div className="flex flex-col gap-5">
        {LATEST_POSTS.map((post) => (
          <ArticleCard key={post.title} data={post} />
        ))}
      </div>
    </div>
  );
}
