import { useState } from 'react';
import { Search, ChevronRight, FileText, Book, Code, Heart } from 'lucide-react';

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Documentation</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
            Everything you need to get the most out of Lindy AI for your photo organization.
          </p>
          
          <div className="max-w-2xl relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DocCategory
            icon={<Book className="h-8 w-8 text-primary" />}
            title="Getting Started"
            description="Learn the basics of Lindy AI and how to set up your account."
            links={[
              { text: 'What is Lindy AI', url: '#' },
              { text: 'Creating your account', url: '#' },
              { text: 'Uploading your first photos', url: '#' },
              { text: 'Understanding the interface', url: '#' },
            ]}
          />
          <DocCategory
            icon={<FileText className="h-8 w-8 text-primary" />}
            title="Core Features"
            description="Discover how to use the main features of the platform."
            links={[
              { text: 'AI photo organization', url: '#' },
              { text: 'Natural language search', url: '#' },
              { text: 'Creating collections', url: '#' },
              { text: 'Face recognition', url: '#' },
            ]}
          />
          <DocCategory
            icon={<Code className="h-8 w-8 text-primary" />}
            title="API Reference"
            description="Integrate Lindy AI into your own applications."
            links={[
              { text: 'API overview', url: '#' },
              { text: 'Authentication', url: '#' },
              { text: 'Photo endpoints', url: '#' },
              { text: 'Search endpoints', url: '#' },
            ]}
          />
          <DocCategory
            icon={<Heart className="h-8 w-8 text-primary" />}
            title="Best Practices"
            description="Tips and tricks to get the most out of Lindy AI."
            links={[
              { text: 'Organizing large collections', url: '#' },
              { text: 'Effective tagging strategies', url: '#' },
              { text: 'Optimizing search queries', url: '#' },
              { text: 'Privacy settings', url: '#' },
            ]}
          />
        </div>

        <hr className="my-16 border-gray-200" />

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-8">Popular articles</h2>
          <div className="space-y-6">
            {popularArticles.map((article) => (
              <a
                key={article.id}
                href="#"
                className="block p-6 border border-gray-100 rounded-xl hover:border-primary/20 hover:bg-primary/5 transition-all"
              >
                <h3 className="text-xl font-semibold text-secondary mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center text-primary">
                  <span>Read article</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const DocCategory = ({
  icon,
  title,
  description,
  links,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  links: { text: string; url: string }[];
}) => {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-card">
      <div className="bg-primary/5 rounded-full w-14 h-14 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.text}>
            <a
              href={link.url}
              className="flex items-center text-primary hover:text-primary-dark"
            >
              <ChevronRight className="h-4 w-4 mr-2" />
              <span>{link.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const popularArticles = [
  {
    id: 1,
    title: 'How to use natural language search to find specific photos',
    excerpt:
      'Learn how to craft effective search queries to find exactly what you\'re looking for in your photo library.',
  },
  {
    id: 2,
    title: 'Setting up automatic photo organization with AI',
    excerpt:
      'A step-by-step guide to configuring Lindy AI to automatically organize your photos as they\'re uploaded.',
  },
  {
    id: 3,
    title: 'Managing privacy settings for your photo library',
    excerpt:
      'Understand how privacy controls work in Lindy AI and how to ensure your photos remain private and secure.',
  },
  {
    id: 4,
    title: 'Integrating Lindy AI with other photo services',
    excerpt:
      'Connect Lindy AI with Google Photos, iCloud, Dropbox and other services to streamline your photo management.',
  },
];

export default Documentation;