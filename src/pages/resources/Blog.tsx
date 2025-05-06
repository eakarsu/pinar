import { ArrowRight, Clock } from 'lucide-react';
import Button from '../../components/Button';

const Blog = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Blog</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Explore the latest tips, news, and insights about AI photo organization and the Lindy platform.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-12">
              {blogPosts.map((post) => (
                <BlogPost key={post.id} post={post} />
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" size="lg">
                Load more articles
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Get the latest articles and news delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button variant="primary" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BlogPost = ({ post }: { post: BlogPostType }) => {
  return (
    <article className="border-b border-gray-100 pb-12 last:border-0">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover rounded-xl mb-6"
        />
      )}
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <span>{post.category}</span>
        <span className="mx-2">•</span>
        <span className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          {post.readTime} min read
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
        <a href="#" className="hover:text-primary transition-colors">
          {post.title}
        </a>
      </h2>
      <p className="text-gray-600 mb-5">{post.excerpt}</p>
      <div className="flex items-center">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="h-10 w-10 rounded-full mr-3"
        />
        <div>
          <p className="text-sm font-medium">{post.author.name}</p>
          <p className="text-sm text-gray-500">{post.date}</p>
        </div>
      </div>
      <div className="mt-6">
        <Button
          variant="ghost"
          icon={<ArrowRight />}
          iconPosition="right"
          className="text-primary hover:bg-primary/5"
        >
          Read article
        </Button>
      </div>
    </article>
  );
};

const categories = [
  'AI Technology',
  'Photo Organization',
  'Product Updates',
  'User Stories',
  'Tips & Tricks',
  'Company News',
];

type BlogPostType = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: number;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
};

const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: 'How AI is revolutionizing photo organization',
    excerpt:
      'Learn how artificial intelligence is making it easier than ever to organize and search through your photo library.',
    image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'AI Technology',
    readTime: 5,
    date: 'May 22, 2023',
    author: {
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  },
  {
    id: 2,
    title: 'Introducing natural language search for your photos',
    excerpt:
      'Our latest feature lets you search your photos using natural language. Just type what you\'re looking for, and our AI will find it.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Product Updates',
    readTime: 3,
    date: 'May 15, 2023',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  },
  {
    id: 3,
    title: '5 tips for organizing your family photo collection',
    excerpt:
      'Follow these expert tips to organize your family photos and make them easier to find and enjoy for generations to come.',
    image: 'https://images.pexels.com/photos/5650893/pexels-photo-5650893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Tips & Tricks',
    readTime: 7,
    date: 'May 8, 2023',
    author: {
      name: 'Michael Torres',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  },
];

export default Blog;