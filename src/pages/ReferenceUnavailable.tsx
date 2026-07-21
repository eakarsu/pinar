import { ArchiveX } from 'lucide-react';

const ReferenceUnavailable = ({ topic }: { topic: string }) => (
  <section className="page-header min-h-[70vh]">
    <div className="container max-w-3xl text-center">
      <ArchiveX className="mx-auto mb-6 h-12 w-12 text-primary" aria-hidden="true" />
      <h1 className="mb-6 text-4xl font-bold text-secondary md:text-5xl">{topic} is not part of this archive</h1>
      <p className="text-lg text-gray-600 md:text-xl">
        No operational capability exists at this route. This repository supports local visual review only and does not
        accept accounts, payments, credentials, or personal data.
      </p>
    </div>
  </section>
);

export default ReferenceUnavailable;
