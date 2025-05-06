import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Our Team</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            Meet the passionate individuals behind Lindy AI who are working to make photo organization smarter and more intuitive.
          </p>
        </div>
      </div>

      {/* Leadership */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-12">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <TeamMember key={member.name} {...member} large />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-12">Engineering</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {engineeringTeam.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Product & Design */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-12">Product & Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productTeam.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Marketing & Operations */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-secondary mb-12">Marketing & Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {marketingTeam.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented individuals to join our team. Check out our open positions and apply today.
            </p>
            <a 
              href="/careers" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              View open positions
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

const TeamMember = ({ 
  name, 
  title, 
  image, 
  linkedIn, 
  twitter, 
  github,
  large = false 
}: TeamMemberProps & { large?: boolean }) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-card ${large ? 'flex flex-col' : ''}`}>
      <img 
        src={image} 
        alt={name} 
        className={`w-full ${large ? 'h-80' : 'h-64'} object-cover object-center`}
      />
      <div className="p-6">
        <h3 className={`${large ? 'text-xl' : 'text-lg'} font-semibold text-secondary mb-1`}>
          {name}
        </h3>
        <p className="text-gray-600 mb-4">{title}</p>
        <div className="flex space-x-3">
          {linkedIn && (
            <SocialLink href={linkedIn} Icon={Linkedin} />
          )}
          {twitter && (
            <SocialLink href={twitter} Icon={Twitter} />
          )}
          {github && (
            <SocialLink href={github} Icon={Github} />
          )}
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, Icon }: { href: string; Icon: React.ComponentType<any> }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-primary transition-colors"
  >
    <Icon className="h-5 w-5" />
  </a>
);

type TeamMemberProps = {
  name: string;
  title: string;
  image: string;
  linkedIn?: string;
  twitter?: string;
  github?: string;
};

const leadershipTeam: TeamMemberProps[] = [
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
    github: 'https://github.com',
  },
  {
    name: 'Emily Johnson',
    title: 'Chief Product Officer',
    image: 'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedIn: 'https://linkedin.com',
  },
];

const engineeringTeam: TeamMemberProps[] = [
  {
    name: 'Alex Kim',
    title: 'Lead AI Engineer',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedIn: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Maya Patel',
    title: 'Senior Backend Engineer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedIn: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Jason Lee',
    title: 'Frontend Engineer',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedIn: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    name: 'Sophie Wilson',
    title: 'Data Scientist',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedIn: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
];

const productTeam: TeamMemberProps[] = [
  {
    name: 'Michael Torres',
    title: 'Product Manager',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedIn: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Lisa Wang',
    title: 'Lead Product Designer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedIn: 'https://linkedin.com',
  },
  {
    name: 'Carlos Mendez',
    title: 'UX Researcher',
    image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedIn: 'https://linkedin.com',
  },
];

const marketingTeam: TeamMemberProps[] = [
  {
    name: 'Jessica Davis',
    title: 'Marketing Director',
    image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedIn: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Ryan Thompson',
    title: 'Content Strategist',
    image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedIn: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Aisha Jackson',
    title: 'Customer Success Manager',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    linkedIn: 'https://linkedin.com',
  },
];

export default Team;