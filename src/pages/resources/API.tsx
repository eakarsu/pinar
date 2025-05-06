import { Code, Copy, Check, Play, FileText, BookOpen, Search } from 'lucide-react';
import { useState } from 'react';
import Button from '../../components/Button';

const API = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">API Documentation</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8">
            Integrate Lindy AI's powerful photo organization and search capabilities directly into your applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="primary" icon={<BookOpen className="h-5 w-5" />}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" icon={<FileText className="h-5 w-5" />}>
              Reference
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <nav className="space-y-1">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Getting Started
                </h3>
                <ApiNavLink active>Introduction</ApiNavLink>
                <ApiNavLink>Authentication</ApiNavLink>
                <ApiNavLink>Pagination</ApiNavLink>
                <ApiNavLink>Error Handling</ApiNavLink>
                <ApiNavLink>Rate Limits</ApiNavLink>

                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 mt-8">
                  Core Endpoints
                </h3>
                <ApiNavLink>Photos</ApiNavLink>
                <ApiNavLink>Collections</ApiNavLink>
                <ApiNavLink>Search</ApiNavLink>
                <ApiNavLink>Tags</ApiNavLink>
                <ApiNavLink>Users</ApiNavLink>

                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 mt-8">
                  Advanced Features
                </h3>
                <ApiNavLink>AI Analysis</ApiNavLink>
                <ApiNavLink>Face Recognition</ApiNavLink>
                <ApiNavLink>Similar Photos</ApiNavLink>
                <ApiNavLink>Webhooks</ApiNavLink>
              </nav>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-secondary mb-6">Introduction</h2>
                <p className="text-gray-600 mb-6">
                  The Lindy AI API provides a comprehensive set of endpoints to interact with our photo organization platform. 
                  This guide will help you get started with integrating Lindy AI into your applications.
                </p>
                <p className="text-gray-600 mb-6">
                  Our RESTful API allows you to upload photos, organize them into collections, search using natural language,
                  and access AI-powered analysis features.
                </p>

                <h3 className="text-xl font-semibold text-secondary mt-8 mb-4">Base URL</h3>
                <CodeBlock code="https://api.lindy.ai/v1" language="bash" />

                <h3 className="text-xl font-semibold text-secondary mt-8 mb-4">Authentication</h3>
                <p className="text-gray-600 mb-6">
                  All API requests require authentication using API keys. You can generate API keys in your Lindy AI dashboard.
                </p>
                <CodeBlock 
                  code={`curl -X GET \\
  https://api.lindy.ai/v1/photos \\
  -H "Authorization: Bearer YOUR_API_KEY"`} 
                  language="bash" 
                />
              </section>

              <section>
                <h2 className="text-3xl font-bold text-secondary mb-6">Quick Start Guide</h2>
                <p className="text-gray-600 mb-6">
                  This guide will walk you through the basics of using the Lindy AI API to upload and organize photos.
                </p>

                <h3 className="text-xl font-semibold text-secondary mt-8 mb-4">1. Create an API key</h3>
                <p className="text-gray-600 mb-6">
                  Log in to your Lindy AI dashboard and navigate to the API section to create a new API key.
                </p>

                <h3 className="text-xl font-semibold text-secondary mt-8 mb-4">2. Upload a photo</h3>
                <CodeBlock 
                  code={`curl -X POST \\
  https://api.lindy.ai/v1/photos \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@photo.jpg"`} 
                  language="bash" 
                />

                <h3 className="text-xl font-semibold text-secondary mt-8 mb-4">3. Search for photos</h3>
                <CodeBlock 
                  code={`curl -X GET \\
  "https://api.lindy.ai/v1/search?query=sunset+beach" \\
  -H "Authorization: Bearer YOUR_API_KEY"`} 
                  language="bash" 
                />

                <h3 className="text-xl font-semibold text-secondary mt-8 mb-4">4. Create a collection</h3>
                <CodeBlock 
                  code={`curl -X POST \\
  https://api.lindy.ai/v1/collections \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Summer Vacation 2023",
    "description": "Photos from our trip to Hawaii"
  }'`} 
                  language="bash" 
                />
              </section>

              <section>
                <h2 className="text-3xl font-bold text-secondary mb-6">Example Code</h2>
                
                <div className="bg-gray-100 rounded-xl p-4 mb-6">
                  <div className="flex space-x-2 mb-4">
                    <button className="px-3 py-1 bg-primary text-white rounded-md">JavaScript</button>
                    <button className="px-3 py-1 text-gray-700 hover:bg-gray-200 rounded-md">Python</button>
                    <button className="px-3 py-1 text-gray-700 hover:bg-gray-200 rounded-md">Ruby</button>
                    <button className="px-3 py-1 text-gray-700 hover:bg-gray-200 rounded-md">PHP</button>
                  </div>
                  
                  <CodeBlock 
                    code={`// Initialize the Lindy AI client
const LindyAI = require('lindy-ai');
const client = new LindyAI.Client('YOUR_API_KEY');

// Upload a photo
async function uploadPhoto(filePath) {
  try {
    const photo = await client.photos.upload(filePath);
    console.log('Uploaded photo:', photo.id);
    return photo;
  } catch (error) {
    console.error('Error uploading photo:', error);
  }
}

// Search for photos
async function searchPhotos(query) {
  try {
    const results = await client.search.photos({
      query: query,
      limit: 10
    });
    console.log('Found', results.total, 'photos');
    return results.data;
  } catch (error) {
    console.error('Error searching photos:', error);
  }
}

// Create a collection
async function createCollection(name, description) {
  try {
    const collection = await client.collections.create({
      name,
      description
    });
    console.log('Created collection:', collection.id);
    return collection;
  } catch (error) {
    console.error('Error creating collection:', error);
  }
}`} 
                    language="javascript" 
                  />
                </div>
                
                <div className="text-center">
                  <Button icon={<Play className="h-5 w-5" />}>
                    Try it in the playground
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ApiNavLink = ({ children, active }: { children: React.ReactNode; active?: boolean }) => {
  return (
    <a
      href="#"
      className={`block px-3 py-2 rounded-md text-sm font-medium ${
        active
          ? 'bg-primary/10 text-primary'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      {children}
    </a>
  );
};

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-secondary rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-secondary-light">
        <div className="flex items-center">
          <Code className="h-4 w-4 text-gray-400 mr-2" />
          <span className="text-xs font-mono text-gray-400">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors p-1"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-gray-300">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default API;