import { Ban, Braces, KeyRound, ServerOff } from 'lucide-react';

const API = () => (
  <>
    <div className="page-header">
      <div className="container">
        <p className="mb-4 inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-950">
          Archived reference boundary
        </p>
        <h1 className="mb-6 text-4xl font-bold text-secondary md:text-5xl">No API is implemented</h1>
        <p className="max-w-3xl text-lg text-gray-600 md:text-xl">
          Earlier illustrative endpoint and credential examples were not backed by this repository and have been retired.
          Do not create, paste, or test an API key here.
        </p>
      </div>
    </div>

    <section className="py-16">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2">
          <BoundaryCard icon={ServerOff} title="No service" detail="There is no HTTP API handler, queue, provider client, database, or retry state." />
          <BoundaryCard icon={KeyRound} title="No credentials" detail="The archive has no secret configuration and never accepts bearer tokens or account credentials." />
          <BoundaryCard icon={Ban} title="No product claim" detail="Archived visual material is not evidence that an endpoint, SDK, or integration exists." />
          <BoundaryCard icon={Braces} title="Machine-readable evidence" detail="The exact governed scope is emitted with every build at /boundary.json." />
        </div>
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

export default API;
