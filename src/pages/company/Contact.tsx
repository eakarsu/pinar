import { Ban, Database, MailWarning } from 'lucide-react';

const Contact = () => (
  <>
    <div className="page-header">
      <div className="container">
        <p className="mb-4 inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-950">
          Archived reference boundary
        </p>
        <h1 className="mb-6 text-4xl font-bold text-secondary md:text-5xl">Contact unavailable</h1>
        <p className="max-w-3xl text-lg text-gray-600 md:text-xl">
          This repository has no operator, support desk, contact endpoint, account system, or upstream affiliation.
          It does not accept messages or personal data.
        </p>
      </div>
    </div>

    <section className="py-16">
      <div className="container grid gap-6 md:grid-cols-3">
        <BoundaryCard icon={Ban} title="No form" detail="The illustrative contact form was removed so this archive cannot imply that a message was submitted." />
        <BoundaryCard icon={Database} title="No storage" detail="No browser or server persistence exists, and no contact record is created." />
        <BoundaryCard icon={MailWarning} title="No contact identity" detail="Archived email addresses, phone numbers, and social links are not presented as usable contacts." />
      </div>
    </section>
  </>
);

type BoundaryCardProps = {
  icon: typeof Ban;
  title: string;
  detail: string;
};

const BoundaryCard = ({ icon: Icon, title, detail }: BoundaryCardProps) => (
  <article className="rounded-xl border border-gray-200 bg-white p-6">
    <Icon className="mb-4 h-7 w-7 text-primary" aria-hidden="true" />
    <h2 className="mb-3 text-xl font-semibold text-secondary">{title}</h2>
    <p className="text-gray-600">{detail}</p>
  </article>
);

export default Contact;
