import { MapPin, TrendingUp, Heart, Users, Book, Clock } from 'lucide-react';
import Button from '../../components/Button';

const Careers = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Join Our Team</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            Help us build the future of AI-powered photo organization and make memories more accessible to everyone.
          </p>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Why Join Lindy AI?</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're a team of passionate AI researchers, engineers, designers, and product thinkers working together to solve meaningful problems around photo organization and memory preservation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                At Lindy AI, you'll work on cutting-edge technology that helps people rediscover and cherish their most precious memories. Our culture values innovation, collaboration, and work-life balance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" variant="primary">See open positions</Button>
                <Button size="lg" variant="outline">Meet the team</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="rounded-lg shadow-sm h-64 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Office environment" 
                className="rounded-lg shadow-sm h-64 w-full object-cover transform translate-y-8"
              />
              <img 
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team meeting" 
                className="rounded-lg shadow-sm h-64 w-full object-cover transform translate-y-4"
              />
              <img 
                src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Design thinking" 
                className="rounded-lg shadow-sm h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Our Benefits</h2>
            <p className="text-lg text-gray-600">
              We believe in taking care of our team members with comprehensive benefits that support your health, wealth, and work-life balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Heart className="h-6 w-6 text-primary" />}
              title="Comprehensive health care"
              description="Medical, dental, and vision coverage for you and your dependents, with 100% of premiums covered."
            />
            <BenefitCard 
              icon={<TrendingUp className="h-6 w-6 text-primary" />}
              title="Competitive compensation"
              description="Competitive salary and equity packages to ensure you share in the company's success."
            />
            <BenefitCard 
              icon={<Clock className="h-6 w-6 text-primary" />}
              title="Flexible work"
              description="Flexible working hours and the ability to work remotely, with quarterly in-person team gatherings."
            />
            <BenefitCard 
              icon={<Book className="h-6 w-6 text-primary" />}
              title="Learning & development"
              description="$5,000 annual learning stipend for conferences, courses, books, and other professional development."
            />
            <BenefitCard 
              icon={<Users className="h-6 w-6 text-primary" />}
              title="Parental leave"
              description="16 weeks of paid parental leave for all new parents, regardless of gender."
            />
            <BenefitCard 
              icon={<MapPin className="h-6 w-6 text-primary" />}
              title="Equipment & workspace"
              description="$5,000 to set up your home office, plus a monthly stipend for coworking spaces if desired."
            />
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Open Positions</h2>
            <p className="text-lg text-gray-600">
              Join our growing team and help build the future of AI-powered photo organization.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {departments.map((department) => (
              <div key={department.name} className="mb-12">
                <h3 className="text-xl font-semibold text-secondary mb-6">{department.name}</h3>
                <div className="space-y-4">
                  {department.positions.map((position) => (
                    <JobListing key={position.title} {...position} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold text-secondary mb-4">Don't see a position that fits?</h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals to join our team. Send us your resume and tell us why you'd be a great fit.
            </p>
            <Button variant="outline" size="lg">
              Send an open application
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-card">
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-secondary">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

type JobListingProps = {
  title: string;
  location: string;
  type: string;
};

const JobListing = ({ title, location, type }: JobListingProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:border-primary/30 hover:shadow-sm transition-all">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="text-lg font-medium text-secondary mb-2">{title}</h4>
          <div className="flex items-center text-gray-500 text-sm">
            <span className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </span>
            <span className="mx-2">•</span>
            <span>{type}</span>
          </div>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0">
          Apply
        </Button>
      </div>
    </div>
  );
};

const departments = [
  {
    name: 'Engineering',
    positions: [
      {
        title: 'Senior Machine Learning Engineer',
        location: 'Remote (US)',
        type: 'Full-time',
      },
      {
        title: 'Frontend Engineer (React)',
        location: 'San Francisco or Remote',
        type: 'Full-time',
      },
      {
        title: 'Backend Engineer (Python)',
        location: 'San Francisco or Remote',
        type: 'Full-time',
      },
    ],
  },
  {
    name: 'Product & Design',
    positions: [
      {
        title: 'Product Designer',
        location: 'San Francisco',
        type: 'Full-time',
      },
      {
        title: 'Product Manager',
        location: 'San Francisco',
        type: 'Full-time',
      },
    ],
  },
  {
    name: 'Marketing & Operations',
    positions: [
      {
        title: 'Growth Marketing Manager',
        location: 'Remote (US)',
        type: 'Full-time',
      },
      {
        title: 'Customer Success Specialist',
        location: 'Remote (US)',
        type: 'Full-time',
      },
    ],
  },
];

export default Careers;