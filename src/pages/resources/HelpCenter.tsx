import { useState } from 'react';
import { Search, ChevronDown, Mail, MessageSquare, BookOpen, PhoneCall } from 'lucide-react';
import Button from '../../components/Button';

const HelpCenter = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Help Center</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
            Find answers to common questions and get support for your Lindy AI account.
          </p>
          
          <div className="max-w-2xl relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Search help articles..."
            />
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <SupportCard
            icon={<BookOpen className="h-8 w-8 text-primary" />}
            title="Knowledge Base"
            description="Browse our detailed help articles and tutorials."
            action={<Button variant="outline">View articles</Button>}
          />
          <SupportCard
            icon={<MessageSquare className="h-8 w-8 text-primary" />}
            title="Live Chat"
            description="Chat with our support team for immediate assistance."
            action={<Button variant="outline">Start chat</Button>}
          />
          <SupportCard
            icon={<Mail className="h-8 w-8 text-primary" />}
            title="Email Support"
            description="Send us an email and we'll get back to you within 24 hours."
            action={<Button variant="outline">Email us</Button>}
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            Still need help?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our support team is available Monday through Friday, 9am-5pm PT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" icon={<PhoneCall className="h-5 w-5" />}>
              Contact Support
            </Button>
            <Button variant="outline" icon={<Mail className="h-5 w-5" />}>
              support@lindy.ai
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const SupportCard = ({
  icon,
  title,
  description,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: React.ReactNode;
}) => {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-card flex flex-col h-full">
      <div className="bg-primary/5 rounded-full w-14 h-14 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <div>{action}</div>
    </div>
  );
};

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-secondary">{question}</h3>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="p-6 pt-0 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const faqs = [
  {
    id: 1,
    question: 'How does Lindy AI organize my photos?',
    answer:
      'Lindy AI uses advanced computer vision and machine learning to analyze your photos and automatically organize them. Our AI detects people, objects, scenes, and activities in your photos, then categorizes them accordingly. You can easily search for specific photos using natural language queries.',
  },
  {
    id: 2,
    question: 'Is my photo data secure and private?',
    answer:
      'Yes, we take privacy extremely seriously. Your photos and data are fully encrypted both in transit and at rest. We never share your data with third parties, and you always maintain full ownership of your content. You can also control privacy settings for each collection or individual photo.',
  },
  {
    id: 3,
    question: 'Can I use Lindy AI with my existing cloud storage?',
    answer:
      'Absolutely. Lindy AI integrates with popular cloud storage services like Google Drive, Dropbox, and iCloud. You can connect your existing accounts and Lindy will organize your photos while leaving them stored in your preferred cloud service.',
  },
  {
    id: 4,
    question: 'What file formats are supported?',
    answer:
      'Lindy AI supports all common image formats including JPEG, PNG, HEIC, TIFF, and RAW files from major camera manufacturers. We also support video files in MP4, MOV, and AVI formats.',
  },
  {
    id: 5,
    question: 'How much does Lindy AI cost?',
    answer:
      'Lindy AI offers a free plan that includes basic organization features for up to 1,000 photos. Premium plans start at $8.99/month and include advanced features like unlimited storage, priority processing, and API access. Visit our pricing page for more details.',
  },
];

export default HelpCenter;