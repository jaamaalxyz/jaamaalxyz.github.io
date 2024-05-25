import { ALL_POSTS } from '@/data';
import ArticleCard from '../ArticleCard';

export default function Blog() {
  return (
    <div className="flex max-w-4xl flex-col mx-auto p-3 bg-slate-950 min-h-96 justify-center items-center">
      {ALL_POSTS.map((post) => (
        <ArticleCard key={post.title} data={post} />
      ))}
    </div>
  );
}
