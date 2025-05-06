import { useState } from 'react';
import Button from '../../components/Button';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('acceptance');

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Terms of Service</h1>
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
                {termsSections.map((section) => (
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
              {termsSections.map((section) => (
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
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Email: legal@lindy.ai</li>
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

const termsSections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: [
      "Welcome to Lindy AI. These Terms of Service (\"Terms\") govern your access to and use of Lindy AI's website, products, and services (\"Services\").",
      "By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services."
    ]
  },
  {
    id: 'changes',
    title: 'Changes to Terms',
    content: [
      "We may modify these Terms at any time, at our sole discretion. If we do so, we'll notify you either by email or by posting a notice on our website. It's important that you review the Terms whenever we modify them because if you continue to use the Services after we have posted modified Terms on the website, you are indicating to us that you agree to be bound by the modified Terms.",
      "If you don't agree to be bound by the modified Terms, then you may not use the Services anymore. Because our Services are evolving over time we may change or discontinue all or any part of the Services, at any time and without notice, at our sole discretion."
    ]
  },
  {
    id: 'account',
    title: 'Account Creation and Responsibilities',
    content: [
      "To use certain features of the Services, you must register for an account and provide certain information about yourself as prompted by the account registration form. You represent and warrant that: (a) all required registration information you submit is truthful and accurate; and (b) you will maintain the accuracy of such information.",
      "You are responsible for maintaining the confidentiality of your account login information and are fully responsible for all activities that occur under your account. You agree to immediately notify Lindy AI of any unauthorized use, or suspected unauthorized use of your account or any other breach of security. Lindy AI cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements."
    ]
  },
  {
    id: 'access',
    title: 'Service Access and Restrictions',
    content: [
      "Subject to these Terms, Lindy AI grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Services for your personal, non-commercial use.",
      "You agree not to (and not to attempt to): (a) use the Services for any illegal purpose or in violation of any local, state, national, or international law; (b) violate or encourage others to violate the rights of third parties, including intellectual property rights; (c) hack, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the Services; (d) interfere with or disrupt the integrity or performance of the Services; (e) attempt to gain unauthorized access to the Services or its related systems or networks; (f) use automated scripts to collect information from or otherwise interact with the Services; (g) impersonate any person or entity or otherwise misrepresent your affiliation with a person or entity; or (h) use the Services in a way that could harm Lindy AI or its users."
    ]
  },
  {
    id: 'content',
    title: 'User Content and License',
    content: [
      "Our Services allow you to upload, store, and organize photos and related content (\"User Content\"). You retain all rights in, and are solely responsible for, the User Content you upload, post, or otherwise make available through the Services.",
      "By uploading User Content to the Services, you grant Lindy AI a worldwide, non-exclusive, royalty-free license to use, copy, process, adapt, modify, publish, transmit, display, and distribute such User Content solely for the purpose of providing and improving the Services. This license is solely for the purpose of enabling Lindy AI to operate the Services as currently conceived or as communicated to you from time to time.",
      "You represent and warrant that: (a) you own the User Content or have the right to grant the rights and licenses described in these Terms; (b) the User Content does not violate these Terms, applicable law, or the rights of any third party; and (c) the User Content is not fraudulent, false, misleading, or deceptive."
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy',
    content: [
      "Please refer to our Privacy Policy for information about how we collect, use, and disclose information about you. By using the Services, you consent to our collection, use, and disclosure of information as set forth in our Privacy Policy."
    ]
  },
  {
    id: 'subscription',
    title: 'Subscriptions and Payments',
    content: [
      "Some of our Services require payment of fees. If you choose to use such Services, you agree to the pricing and payment terms for that Service as displayed to you at the time of purchase or as otherwise agreed in writing. Lindy AI may add new services for additional fees and charges, or modify fees and charges for existing services, at any time in its sole discretion.",
      "You are responsible for paying all fees associated with your use of the Services. You authorize Lindy AI to charge your payment method for all fees incurred in connection with your use of the Services. If you dispute any charges you must let Lindy AI know within 60 days after the date that Lindy AI charges you. All amounts paid are non-refundable unless otherwise expressly provided in these Terms or as required by applicable law.",
      "Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date. You can cancel your subscription at any time through your account settings or by contacting customer support."
    ]
  },
  {
    id: 'termination',
    title: 'Termination',
    content: [
      "We may terminate or suspend your access to all or part of the Services, including your account, without notice or liability, for any reason, including if we believe that you have violated these Terms. Upon termination, your right to use the Services will immediately cease.",
      "If you wish to terminate your account, you may simply discontinue using the Services, or you may delete your account through your account settings. All provisions of these Terms that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability."
    ]
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer of Warranties',
    content: [
      "THE SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. LINDY AI DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.",
      "LINDY AI MAKES NO GUARANTEES REGARDING THE ACCURACY, RELIABILITY, COMPLETENESS, OR TIMELINESS OF THE SERVICES OR USER CONTENT, OR THAT THE SERVICES WILL MEET YOUR SPECIFIC REQUIREMENTS. YOU AGREE THAT YOUR USE OF THE SERVICES IS AT YOUR OWN RISK."
    ]
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: [
      "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL LINDY AI, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR LICENSORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM: (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (C) ANY CONTENT OBTAINED FROM THE SERVICES; AND (D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT LINDY AI HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.",
      "IN NO EVENT SHALL LINDY AI'S TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU, IF ANY, TO LINDY AI FOR THE SERVICES DURING THE TWELVE (12) MONTH PERIOD PRIOR TO THE CLAIM GIVING RISE TO SUCH LIABILITY."
    ]
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    content: [
      "You agree to defend, indemnify, and hold harmless Lindy AI, its affiliates, directors, officers, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (a) your use of and access to the Services; (b) your violation of any term of these Terms; (c) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (d) any claim that your User Content caused damage to a third party. This defense and indemnification obligation will survive these Terms and your use of the Services."
    ]
  },
  {
    id: 'governing-law',
    title: 'Governing Law and Dispute Resolution',
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in San Francisco County, California, and the parties hereby consent to the personal jurisdiction and venue therein.",
      "ANY CAUSE OF ACTION BY YOU MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED."
    ]
  },
  {
    id: 'miscellaneous',
    title: 'Miscellaneous',
    content: [
      "These Terms constitute the entire agreement between you and Lindy AI regarding the Services and supersede all prior and contemporaneous written or oral agreements between you and Lindy AI.",
      "Lindy AI's failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision. If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under the law.",
      "Lindy AI may assign or delegate these Terms, in whole or in part, to any person or entity at any time without notice to you. You may not assign or delegate any rights or obligations under these Terms without Lindy AI's prior written consent, and any unauthorized assignment and delegation by you is void."
    ]
  }
];

export default TermsOfService;