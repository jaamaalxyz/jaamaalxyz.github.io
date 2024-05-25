import HeroSection from './HeroSection';
import LatestPosts from './LatestPosts';
import Spacer from './Spacer';

export default function Home() {
  return (
    <main className="flex max-w-4xl flex-col mx-auto p-3 bg-slate-950 min-h-screen justify-center">
      <Spacer />
      <HeroSection />
      <LatestPosts />
    </main>
  );
}
