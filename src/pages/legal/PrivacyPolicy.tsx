import { useState } from 'react';
import Button from '../../components/Button';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            Last updated: May 15, 2023
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Contents</h3>
              <nav className="space-y-1">
                {policySections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`block px-3 py-2 rounded-md text-sm ${
                      activeSection === section.id
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button variant="outline" size="sm" className="w-full">
                  Download PDF
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="prose max-w-none">
              {policySections.map((section) => (
                <section key={section.id} id={section.id} className="mb-12">
                  <h2 className="text-2xl font-bold text-secondary mb-4">{section.title}</h2>
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              <section className="mt-12">
                <h2 className="text-2xl font-bold text-secondary mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Email: privacy@lindy.ai</li>
                  <li>Address: 123 Innovation Way, San Francisco, CA 94103, United States</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const policySections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: [
      "At Lindy AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.",
      "Please read this Privacy Policy carefully. By accessing or using our service, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this policy."
    ]
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: [
      "We collect several types of information from and about users of our services, including:",
      "Personal Information: We may collect personally identifiable information such as your name, email address, telephone number, and any other information you provide when creating an account, using our services, or contacting our support team.",
      "Photo Data: When you upload photos to our platform, we collect and process the images themselves, as well as metadata associated with those images (such as date, time, location data if available, and camera information).",
      "Usage Data: We automatically collect information about how you interact with our services, including the features you use, the time spent on various pages, and your actions within the application.",
      "Device Information: We may collect information about the device you use to access our services, including the hardware model, operating system and version, unique device identifiers, and mobile network information."
    ]
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    content: [
      "We use the information we collect for various purposes, including to:",
      "Provide, maintain, and improve our services, including to process photo organization and enable search functionality.",
      "Create and manage your account, including to verify your identity and send service notifications.",
      "Respond to your comments, questions, and requests, and provide customer service.",
      "Train and improve our AI models for better photo organization and search capabilities.",
      "Analyze how users use our services to improve user experience and develop new features.",
      "Monitor and analyze usage patterns and trends to ensure the technical functionality of our services.",
      "Detect, prevent, and address technical issues, security breaches, or fraudulent activity."
    ]
  },
  {
    id: 'data-sharing',
    title: 'Information Sharing and Disclosure',
    content: [
      "We do not sell, rent, or share your personal information with third parties except in the following circumstances:",
      "With your consent or at your direction.",
      "With service providers, consultants, and other third-party vendors who need access to such information to carry out work on our behalf.",
      "To comply with legal obligations, such as in response to a subpoena, court order, or other legal process.",
      "To protect the rights, property, and safety of Lindy AI, our users, or others.",
      "In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company."
    ]
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: [
      "We implement appropriate technical, organizational, and physical safeguards designed to protect the security, confidentiality, and integrity of data, including personal information.",
      "All data is encrypted both in transit and at rest using industry-standard encryption protocols.",
      "We regularly review our information collection, storage, and processing practices, including physical security measures, to guard against unauthorized access to systems.",
      "Despite our efforts, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that information you supply won't be intercepted while being transmitted to us over the Internet."
    ]
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    content: [
      "We retain your personal information and photo data for as long as your account is active or as needed to provide you services.",
      "If you delete your account, we will delete your personal information and photos within 30 days, although some information may remain in backup copies for a limited period of time.",
      "We may retain certain information as required by law or for legitimate business purposes, such as to resolve disputes or enforce our agreements."
    ]
  },
  {
    id: 'children-privacy',
    title: "Children's Privacy",
    content: [
      "Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13.",
      "If we learn that we have collected personal information from a child under 13, we will promptly delete that information. If you believe we might have any information from or about a child under 13, please contact us at privacy@lindy.ai."
    ]
  },
  {
    id: 'international-transfers',
    title: 'International Data Transfers',
    content: [
      "Lindy AI is based in the United States and the information we collect is governed by U.S. law.",
      "If you are accessing our services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States and other countries where our servers are located.",
      "By using our services, you consent to your information being transferred to and processed in the United States and other countries where legal protections for personal information may differ from those in your country."
    ]
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    content: [
      "Depending on your location, you may have certain rights regarding your personal information, including:",
      "The right to access, correct, or delete the personal information we have about you.",
      "The right to object to our processing of your personal information.",
      "The right to restrict our processing of your personal information.",
      "The right to data portability (receiving a copy of your personal information in a structured, commonly used format).",
      "To exercise these rights, please contact us at privacy@lindy.ai. We will respond to your request within a reasonable timeframe."
    ]
  },
  {
    id: 'policy-changes',
    title: 'Changes to this Privacy Policy',
    content: [
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last updated\" date at the top.",
      "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
    ]
  }
];

export default PrivacyPolicy;