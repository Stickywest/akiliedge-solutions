import React, { Suspense, lazy, memo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Spinner from "./components/Spinner";

// Lazy-loaded components
const Navbar = memo(lazy(() => import("./components/Navbar")));
const Footer = memo(lazy(() => import("./components/Footer")));
const Chatbot = memo(lazy(() => import("./components/Chatbot")));
const SocialMediaIcons = memo(lazy(() => import("./components/SocialMediaIcons")));

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));

const About = lazy(() => import("./pages/About"));
const CommunityProjects = lazy(() => import("./pages/CommunityProjects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const TopPerformers = lazy(() => import("./components/dashboard/TopPerformers"));
const BlogPage = lazy(() => import("./pages/blog"));
{/*const ProductsPage = lazy(() => import("./pages/product"));*/}

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <AuthProvider>
          <div className="min-h-screen flex flex-col relative bg-gray-100">
            {/* Fixed Social Media Icons */}
            <Suspense fallback={<div className="fixed bottom-4 left-4">Loading Icons...</div>}>
              <SocialMediaIcons />
            </Suspense>

            {/* SEO Meta Tags */}
            <Helmet>
              <html lang="en" />
              <title>Akiliedge Solutions - Empowering African Communities</title>
              <meta
                name="description"
                content="Akiliedge Solutions focuses on solving problems sustainably by empowering communities through technology."
              />
              <meta
                name="keywords"
                content="Akiliedge, African solutions, technology, sustainable development"
              />
              <meta name="author" content="Akiliedge Solutions" />
              <link rel="canonical" href="https://www.akiliedgesolutions.co.ke" />

              {/* Open Graph Meta Tags */}
              <meta property="og:title" content="Akiliedge Solutions" />
              <meta
                property="og:description"
                content="Building sustainable solutions to empower African communities through technology."
              />
              <meta property="og:image" content="https://www.akiliedgesolutions.co.ke/og-image.jpg" />
              <meta property="og:url" content="https://www.akiliedgesolutions.co.ke" />
              <meta property="og:type" content="website" />

              {/* Twitter Card Meta Tags */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Akiliedge Solutions" />
              <meta
                name="twitter:description"
                content="Empowering African communities through sustainable and innovative technology solutions."
              />
              <meta name="twitter:image" content="https://www.akiliedgesolutions.co.ke/twitter-image.jpg" />

              {/* Structured Data for SEO */}
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  name: "Akiliedge Solutions",
                  url: "https://www.akiliedgesolutions.co.ke",
                  logo: "https://www.akiliedgesolutions.co.ke/logo.png",
                  description:
                    "Empowering African communities through sustainable technology solutions.",
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+254700123456",
                      contactType: "customer service",
                    },
                  ],
                  sameAs: [
                    "https://www.facebook.com/akiliedgesolutions",
                    "https://twitter.com/akiliedge",
                    "https://www.linkedin.com/company/akiliedge-solutions/",
                  ],
                })}
              </script>
            </Helmet>

            {/* Navbar */}
            <Suspense fallback={<Spinner />}>
              <Navbar />
            </Suspense>

            {/* Main Content */}
            <main className="flex-grow">
              <ErrorBoundary>
                <Suspense fallback={<Spinner aria-busy="true" />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/community-projects" element={<CommunityProjects />} />
                    <Route path="/community-projects/:id" element={<ProjectDetail />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />}>
                    <Route index element={<TopPerformers />} />
                    
                    </Route>
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </main>

            {/* Footer */}
            <Suspense fallback={<div className="text-center p-4">Loading Footer...</div>}>
              <Footer />
            </Suspense>

            {/* Chatbot */}
            <Suspense fallback={<div className="fixed bottom-4 right-4">Loading Chatbot...</div>}>
              <Chatbot />
            </Suspense>
          </div>
        </AuthProvider>
      </Router>
    </HelmetProvider>
  );
};

export default App;
