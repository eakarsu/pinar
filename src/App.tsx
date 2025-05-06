import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Home page
import Home from './pages/Home';

// Resource pages
import Blog from './pages/resources/Blog';
import Documentation from './pages/resources/Documentation';
import HelpCenter from './pages/resources/HelpCenter';
import API from './pages/resources/API';

// Company pages
import About from './pages/company/About';
import Careers from './pages/company/Careers';
import Team from './pages/company/Team';
import Press from './pages/company/Press';
import Contact from './pages/company/Contact';

// Legal pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home page */}
        <Route index element={<Home />} />
        
        {/* Resource pages */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/api" element={<API />} />
        
        {/* Company pages */}
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/team" element={<Team />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Legal pages */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Route>
    </Routes>
  );
}

export default App;