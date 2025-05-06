import { useState } from 'react';
import Button from '../../components/Button';

const CookiePolicy = () => {
  const [activeSection, setActiveSection] = useState('what-are-cookies');

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Cookie Policy</h1>
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
                {cookieSections.map((section) => (
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
              {cookieSections.map((section) => (
                <section key={section.id} id={section.id} className="mb-12">
                  <h2 className="text-2xl font-bold text-secondary mb-4">{section.title}</h2>
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4">
                      {paragraph}
                    </p>
                  ))}
                  {section.id === 'cookie-types' && (
                    <div className="mt-6 overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Cookie Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Description
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Examples
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              Essential Cookies
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              These cookies are necessary for the website to function and cannot be switched off in our systems.
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              Session cookies, authentication cookies
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              Preference Cookies
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              These cookies enable the website to provide enhanced functionality and personalization.
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              Language preference, theme selection
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              Analytics Cookies
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              These cookies help us understand how visitors interact with our website.
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              Google Analytics, Hotjar
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              Marketing Cookies
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              These cookies are used to track visitors across websites to display relevant advertisements.
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700">
                              Facebook Pixel, Google Ads
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}

              <section className="mt-12">
                <h2 className="text-2xl font-bold text-secondary mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our Cookie Policy, please contact us at:
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

const cookieSections = [
  {
    id: 'what-are-cookies',
    title: 'What Are Cookies',
    content: [
      "Cookies are small text files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work efficiently and provide analytical information.",
      "These cookies help us enhance your browsing experience, personalize content and ads, provide social media features, and analyze our traffic. We may also share information about your use of our site with our social media, advertising, and analytics partners."
    ]
  },
  {
    id: 'cookie-types',
    title: 'Types of Cookies We Use',
    content: [
      "We use different types of cookies to run our website and services. The cookies that we use are categorized as follows:"
    ]
  },
  {
    id: 'how-we-use',
    title: 'How We Use Cookies',
    content: [
      "At Lindy AI, we use cookies for various purposes, including:",
      "Authentication: We use cookies to identify you when you visit our website and as you navigate our site, and to help us determine if you are logged into our website.",
      "Preferences: We use cookies to store information about your preferences and to personalize the website for you.",
      "Security: We use cookies as an element of the security measures used to protect user accounts, including preventing fraudulent use of login credentials.",
      "Analytics: We use cookies to help us analyze the use and performance of our website and services.",
      "Advertising: We use cookies to help us display advertisements that will be relevant to you."
    ]
  },
  {
    id: 'third-party',
    title: 'Third-Party Cookies',
    content: [
      "In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service and deliver advertisements on and through the Service.",
      "Examples of third-party cookies we may use include:",
      "Google Analytics: We use Google Analytics to track and report website traffic. Google uses the data collected to track and monitor the use of our website. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.",
      "Facebook Pixel: We use Facebook Pixel to measure the effectiveness of our advertising campaigns and to understand the actions people take on our website.",
      "HubSpot: We use HubSpot to help us manage our relationships with our users and to provide marketing services.",
      "Please note that each of these third parties has its own privacy and cookie policies, which we encourage you to review."
    ]
  },
  {
    id: 'control-cookies',
    title: 'How to Control Cookies',
    content: [
      "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.",
      "Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org.",
      "To opt out of being tracked by Google Analytics across all websites, visit http://tools.google.com/dlpage/gaoptout.",
      "Our website also includes a cookie consent management tool that allows you to customize your cookie preferences. You can access this tool by clicking on the 'Cookie Preferences' link in the footer of our website."
    ]
  },
  {
    id: 'policy-changes',
    title: 'Changes to Our Cookie Policy',
    content: [
      "We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the 'Last updated' date at the top.",
      "You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page."
    ]
  }
];

export default CookiePolicy;