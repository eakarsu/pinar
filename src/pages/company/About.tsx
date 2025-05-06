import { Users, Award, Globe, ChevronRight } from 'lucide-react';
import Button from '../../components/Button';

const About = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">About Lindy AI</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            We're on a mission to help people rediscover and organize their memories through AI-powered photo management.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2022, Lindy AI was born from a simple observation: as our photo libraries grow, finding and organizing the memories that matter becomes increasingly difficult. 
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founders, former AI researchers at leading tech companies, realized that advances in computer vision and natural language processing could solve this challenge. They set out to build a tool that would make photo organization effortless and intuitive.
              </p>
              <p className="text-lg text-gray-600">
                Today, Lindy AI has helped hundreds of thousands of users around the world organize over 1 billion photos, making memories more accessible and meaningful.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-tr from-primary/20 to-accent/20 absolute inset-0 rounded-2xl transform -rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Lindy AI team" 
                className="relative z-10 rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Our Mission & Values</h2>
            <p className="text-lg text-gray-600">
              We believe that photos are more than just images—they're memories frozen in time. Our mission is to help people rediscover and cherish these memories through intuitive AI-powered organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Users className="h-10 w-10 text-primary" />}
              title="User-centered design"
              description="We build for people first, ensuring our technology serves human needs rather than the other way around."
            />
            <ValueCard 
              icon={<Award className="h-10 w-10 text-primary" />}
              title="Excellence in AI"
              description="We're committed to developing AI that's both powerful and ethical, pushing the boundaries of what's possible."
            />
            <ValueCard 
              icon={<Globe className="h-10 w-10 text-primary" />}
              title="Privacy & trust"
              description="We believe your memories are yours alone. We're committed to maintaining the highest standards of data privacy and security."
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Meet Our Leadership</h2>
            <p className="text-lg text-gray-600">
              We're a team of AI researchers, engineers, and designers passionate about using technology to solve meaningful problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/team" variant="outline" icon={<ChevronRight />} iconPosition="right">
              Meet the full team
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Join the Lindy AI community
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Be part of our growing community of users who are rediscovering their photo memories with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Get started for free
              </Button>
              <Button size="lg" variant="outline" to="/careers">
                View career opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-card">
      <div className="bg-primary/5 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TeamMember = ({ name, title, image, linkedIn, twitter }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-card">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-secondary mb-1">{name}</h3>
        <p className="text-gray-600 mb-4">{title}</p>
        <div className="flex space-x-3">
          {linkedIn && (
            <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

type TeamMemberProps = {
  name: string;
  title: string;
  image: string;
  linkedIn?: string;
  twitter?: string;
};

const teamMembers: TeamMemberProps[] = [
  {
    name: 'Sarah Chen',
    title: 'Co-founder & CEO',
    image: 'https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedIn: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'David Rodriguez',
    title: 'Co-founder & CTO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedIn: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Emily Johnson',
    title: 'Chief Product Officer',
    image: 'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedIn: 'https://linkedin.com',
  },
];

export default About;