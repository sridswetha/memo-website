import { notFound } from 'next/navigation';
import ArticlePage from '../../components/ArticlePage';
import { sampleArticles } from '../../data/sampleArticles';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Article({ params }: PageProps) {
  const { id } = await params;
  
  // Find the article by id
  const article = sampleArticles.find(article => article.id === id);
  
  // If article not found, show 404
  if (!article) {
    notFound();
  }
  
  return <ArticlePage article={article} />;
}

// Generate static params for all articles (optional - for better performance)
export async function generateStaticParams() {
  return sampleArticles.map((article) => ({
    id: article.id,
  }));
}