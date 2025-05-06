import { Download, Link, Calendar, ArrowRight } from 'lucide-react';
import Button from '../../components/Button';

const Press = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Press & Media</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            Find the latest news, press releases, media resources, and contact information for press inquiries.
          </p>
        </div>
      </div>

      {/* Press Kit */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-secondary mb-6">Press Kit</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our press kit includes logos, product screenshots, founder headshots, and company information 
                that you can use in your publications. Please refer to our brand guidelines when using these assets.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <a
                  href="#"
                  className="flex items-center p-5 border border-gray-200 rounded-xl hover:border-primary/20 hover:bg-primary/5 transition-all"
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-1">Logo Package</h3>
                    <p className="text-sm text-gray-600">Includes PNG, SVG, and EPS formats</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center p-5 border border-gray-200 rounded-xl hover:border-primary/20 hover:bg-primary/5 transition-all"
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-1">Product Screenshots</h3>
                    <p className="text-sm text-gray-600">High-resolution UI images</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center p-5 border border-gray-200 rounded-xl hover:border-primary/20 hover:bg-primary/5 transition-all"
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-1">Team Photos</h3>
                    <p className="text-sm text-gray-600">Headshots of founders and leadership</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center p-5 border border-gray-200 rounded-xl hover:border-primary/20 hover:bg-primary/5 transition-all"
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-1">Brand Guidelines</h3>
                    <p className="text-sm text-gray-600">How to use our brand assets correctly</p>
                  </div>
                </a>
              </div>

              <p className="text-sm text-gray-600 mb-8">
                By downloading and using these materials, you agree to our
                <a href="/terms" className="text-primary hover:underline ml-1">terms of use</a>.
              </p>

              <h2 className="text-3xl font-bold text-secondary mb-6">Company Facts</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-1">About Lindy AI</h3>
                  <p className="text-gray-600">
                    Lindy AI is a leading AI-powered platform for photo organization and discovery. 
                    Our mission is to help people rediscover their photo memories through intuitive 
                    organization and intelligent search capabilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-1">Founded</h3>
                  <p className="text-gray-600">
                    2022 by Sarah Chen and David Rodriguez in San Francisco, California.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-1">Funding</h3>
                  <p className="text-gray-600">
                    $28M in venture funding from top-tier investors including Sequoia Capital, 
                    Andreessen Horowitz, and Y Combinator.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-1">Team</h3>
                  <p className="text-gray-600">
                    45+ employees across engineering, product, design, and operations.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-secondary mb-4">Press Contact</h3>
                <p className="text-gray-600 mb-4">
                  For press inquiries, please contact our media relations team.
                </p>
                <p className="mb-1 font-medium">Jessica Davis</p>
                <p className="mb-1">Director of Communications</p>
                <p className="mb-4">
                  <a href="mailto:press@lindy.ai" className="text-primary hover:underline">
                    press@lindy.ai
                  </a>
                </p>
                <Button variant="outline" className="w-full">
                  Contact for Media Inquiries
                </Button>
              </div>

              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-secondary mb-4">Follow Us</h3>
                <div className="space-y-3">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Press Releases */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-12">Recent Press Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((release) => (
              <PressReleaseCard key={release.id} {...release} />
            ))}
          </div>
        </div>
      </section>

      {/* In the News */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-12">Lindy AI in the News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsArticles.map((article) => (
              <NewsArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const PressReleaseCard = ({ title, date, excerpt }: PressReleaseProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-card">
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <Calendar className="h-4 w-4 mr-1" />
        <span>{date}</span>
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <a
        href="#"
        className="inline-flex items-center text-primary hover:text-primary-dark"
      >
        Read full release
        <ArrowRight className="h-4 w-4 ml-1" />
      </a>
    </div>
  );
};

const NewsArticleCard = ({ publication, logo, title, date, url }: NewsArticleProps) => {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:border-primary/20 hover:shadow-sm transition-all">
      <div className="flex items-center mb-4">
        <img
          src={logo}
          alt={publication}
          className="h-8"
        />
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-3">{title}</h3>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <Calendar className="h-4 w-4 mr-1" />
        <span>{date}</span>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-primary hover:text-primary-dark"
      >
        <Link className="h-4 w-4 mr-1" />
        Read article
      </a>
    </div>
  );
};

type PressReleaseProps = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
};

type NewsArticleProps = {
  id: number;
  publication: string;
  logo: string;
  title: string;
  date: string;
  url: string;
};

const pressReleases: PressReleaseProps[] = [
  {
    id: 1,
    title: "Lindy AI Raises $15M Series A to Revolutionize Photo Organization",
    date: "April 15, 2023",
    excerpt: "Funding will accelerate product development and team expansion as Lindy AI continues to transform how people organize and rediscover their photos."
  },
  {
    id: 2,
    title: "Lindy AI Launches Natural Language Search for Photos",
    date: "February 8, 2023",
    excerpt: "New feature allows users to search their photo libraries using conversational language, making it easier to find exactly what they're looking for."
  },
  {
    id: 3,
    title: "Lindy AI Surpasses 1 Million Users Milestone",
    date: "December 12, 2022",
    excerpt: "Rapid growth demonstrates strong market demand for AI-powered photo organization tools that help users manage their ever-growing photo libraries."
  }
];

const newsArticles: NewsArticleProps[] = [
  {
    id: 1,
    publication: "TechCrunch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1280px-TechCrunch_logo.svg.png",
    title: "Lindy AI's approach to photo organization could change how we interact with our memories",
    date: "May 2, 2023",
    url: "#"
  },
  {
    id: 2,
    publication: "The Verge",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/The_Verge_logo.svg/1280px-The_Verge_logo.svg.png",
    title: "Review: Lindy AI makes finding old photos actually enjoyable",
    date: "April 18, 2023",
    url: "#"
  },
  {
    id: 3,
    publication: "Forbes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/1280px-Forbes_logo.svg.png",
    title: "The AI-Powered App That's Changing How We Organize Photos",
    date: "March 25, 2023",
    url: "#"
  },
  {
    id: 4,
    publication: "Wired",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Wired_logo.svg/1280px-Wired_logo.svg.png",
    title: "Lindy AI's Machine Learning Approach Sets New Standard for Photo Organization",
    date: "February 12, 2023",
    url: "#"
  }
];

export default Press;