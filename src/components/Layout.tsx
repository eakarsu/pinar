import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <aside data-reference-boundary="internal-static-only" className="fixed bottom-0 left-0 right-0 z-[60] bg-amber-100 border-t border-amber-300 px-4 py-2 text-center text-xs font-medium text-amber-950">
        Internal static reference — archived content is non-interactive; no accounts, API, payments, data submission, or upstream affiliation.
      </aside>
      <main inert aria-label="Inert archived visual content" className="flex-grow" data-archived-content="inert">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
