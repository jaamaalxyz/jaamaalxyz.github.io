import HeroSection from '@/components/HeroSection';
import LatestPosts from '@/components/LatestPosts';
import Spacer from '@/components/Spacer';

export default function Home() {
  return (
    <main className="flex max-w-4xl flex-col mx-auto p-3 bg-slate-950 min-h-screen justify-center">
      <Spacer />
      <HeroSection />
      <LatestPosts />
    </main>
  );
}
