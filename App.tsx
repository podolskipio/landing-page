import React, { useState } from 'react';
import { AlertCircle, Shield, Users, PhoneCall, ChevronRight, Brain, Target, Zap, Mail, Clock, X } from 'lucide-react';

const Header = ({ setActivePage }) => (
  <header className="bg-indigo-900 text-white p-4 shadow-lg">
    <nav className="container mx-auto flex justify-between items-center">
      <button onClick={() => setActivePage('home')} className="text-2xl font-bold">iCompliance</button>
      <div className="space-x-4">
        <button onClick={() => setActivePage('product')} className="hover:text-indigo-200 transition duration-300">Product</button>
        <button onClick={() => setActivePage('solutions')} className="hover:text-indigo-200 transition duration-300">Solutions</button>
        <button onClick={() => setActivePage('about')} className="hover:text-indigo-200 transition duration-300">About Us</button>
        <button onClick={() => setActivePage('contact')} className="hover:text-indigo-200 transition duration-300">Contact Us</button>
      </div>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="bg-indigo-900 text-white p-6">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 iCompliance. All rights reserved.</p>
    </div>
  </footer>
);

const PageContainer = ({ children }) => (
  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 min-h-screen text-white">
    <div className="container mx-auto py-16 px-4">
      {children}
    </div>
  </div>
);


const HomePage = ({ setActivePage }) => (
  <PageContainer>
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-8">Revolutionize Your Compliance Process</h1>
      <p className="text-xl mb-12">iCompliance: AI-Powered Regulatory Compliance Made Simple</p>
      <button onClick={() => setActivePage('contact')} className="bg-white text-indigo-700 py-3 px-6 rounded-full font-bold hover:bg-indigo-100 transition duration-300 shadow-lg">
        Schedule a Demo
      </button>
    </div>
    <div>
      <h2 className="text-3xl font-bold mb-12 text-center">Our Features</h2>
      <div className="space-y-8">
        <FeatureCard 
          icon={<AlertCircle size={48} />} 
          title="Horizon Scanning" 
          description="Stay ahead of the curve with our AI-powered regulatory updates. Our system continuously monitors global regulatory changes, ensuring you're always up-to-date with the latest compliance requirements. This proactive approach allows you to anticipate changes and adapt your strategies accordingly, minimizing risks and maximizing opportunities in an ever-evolving regulatory landscape."
        />
        <FeatureCard 
          icon={<Shield size={48} />} 
          title="Document Understanding" 
          description="Leverage advanced natural language processing to parse and comprehend complex regulatory documents. Our AI technology can quickly analyze vast amounts of text, extracting key information and identifying relevant compliance requirements. This feature dramatically reduces the time and effort required for document review, ensuring nothing important slips through the cracks."
        />
        <FeatureCard 
          icon={<Users size={48} />} 
          title="Risk Management" 
          description="Identify and mitigate compliance risks efficiently with our intelligent risk assessment system. By analyzing your business processes and regulatory requirements, we help you pinpoint potential compliance gaps and vulnerabilities. Our platform provides actionable insights and recommendations, enabling you to proactively address risks before they become issues, thus protecting your organization from penalties and reputational damage."
        />
        <FeatureCard 
          icon={<PhoneCall size={48} />} 
          title="AI Assistant" 
          description="Get instant answers to your compliance questions with our 24/7 AI assistant. This intelligent agent can access your entire compliance database, providing quick and accurate responses to queries about regulations, policies, and procedures. It's like having a compliance expert on call at all times, helping your team navigate complex compliance issues with ease and confidence."
        />
      </div>
    </div>
  </PageContainer>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white text-indigo-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
    <div className="flex items-center mb-4">
      <div className="text-4xl mr-6 text-indigo-500">{icon}</div>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-700 text-lg">{description}</p>
  </div>
);

const ProductPage = () => (
  <PageContainer>
    <h1 className="text-4xl font-bold mb-12 text-center">iCompliance: Solving Compliance Challenges</h1>
    <div className="bg-white text-indigo-900 p-8 rounded-lg shadow-lg mb-12">
      <p className="text-xl mb-8">
        In today's rapidly evolving regulatory landscape, staying compliant is more challenging than ever. 
        iCompliance leverages cutting-edge AI technology to streamline your compliance processes, 
        reduce risks, and save valuable time and resources.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center"><Target className="mr-2" /> The Problem</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Constantly changing regulations</li>
            <li>Time-consuming manual document review</li>
            <li>Difficulty in assessing compliance risks</li>
            <li>Slow response times to compliance queries</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center"><Zap className="mr-2" /> Our Solution</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI-powered horizon scanning for real-time updates</li>
            <li>Automated document parsing and understanding</li>
            <li>Intelligent risk management system</li>
            <li>24/7 AI assistant for instant compliance support</li>
          </ul>
        </div>
      </div>
    </div>
  </PageContainer>
);

const SolutionsPage = () => (
  <PageContainer>
    <h1 className="text-4xl font-bold mb-12 text-center">Innovative iCompliance Solutions</h1>
    <div className="space-y-8">
      <FeatureSection 
        icon={<AlertCircle />}
        title="Advanced Horizon Scanning" 
        description="Our AI continuously monitors global regulatory changes, ensuring you're always up-to-date with the latest compliance requirements. Stay ahead of the curve and expand into new markets with confidence."
      />
      <FeatureSection 
        icon={<Shield />}
        title="Intelligent Document Analysis" 
        description="Simply upload your internal documents, policies, or contracts. Our advanced AI will automatically check them across regulations, verifying compliance and providing actionable insights."
      />
      <FeatureSection 
        icon={<Users />}
        title="Proactive Risk Management" 
        description="Identify and mitigate potential compliance risks before they become issues. Our AI-powered system helps you avoid costly fines and maintain a sterling reputation in your industry."
      />
      <FeatureSection 
        icon={<Brain />}
        title="AI Compliance Assistant" 
        description="Our intelligent agent allows you to ask specific questions about your documents, finding and summarizing answers instantly. Experience a new level of efficiency in compliance management."
      />
    </div>
  </PageContainer>
);

const FeatureSection = ({ icon, title, description }) => (
  <div className="bg-white text-indigo-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
    <div className="flex items-center mb-4">
      <div className="text-4xl text-indigo-500 mr-4">{icon}</div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <p className="text-lg">{description}</p>
  </div>
);

const AboutUsPage = () => (
  <PageContainer>
    <h1 className="text-4xl font-bold mb-12 text-center">About iCompliance</h1>
    <div className="bg-white text-indigo-900 p-8 rounded-lg shadow-lg mb-12">
      <p className="text-xl mb-8">
        iCompliance is a pioneering AI-driven company dedicated to revolutionizing regulatory compliance. 
        Founded by a team of compliance experts and AI researchers, we're on a mission to make compliance 
        simpler, faster, and more effective for businesses of all sizes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center"><Target className="mr-2" /> Our Mission</h2>
          <p>
            To empower organizations with cutting-edge AI technology that transforms regulatory 
            compliance from a burden into a competitive advantage.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center"><Brain className="mr-2" /> Our Vision</h2>
          <p>
            A world where every business can easily navigate the complex landscape of regulatory 
            compliance, fostering innovation and growth while maintaining the highest standards of integrity.
          </p>
        </div>
      </div>
    </div>
  </PageContainer>
);

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending email to info@icompliance.com with data:', formData);
    alert('Thank you for your interest. We will contact you soon!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative shadow-2xl transform transition-all duration-300 ease-in-out">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
        >
          <X size={24} />
        </button>
        <h2 className="text-3xl font-bold mb-6 text-indigo-900">Book Your Demo</h2>
        <p className="text-gray-600 mb-6">Fill out the form below and our team will get in touch with you shortly to schedule your personalized demo.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              required
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              required
              placeholder="Acme Inc."
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              required
              placeholder="john.doe@company.com"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md font-bold hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            Request Demo
          </button>
        </form>
        <p className="mt-4 text-xs text-gray-500 text-center">By submitting this form, you agree to our privacy policy and terms of service.</p>
      </div>
    </div>
  );
};

const ContactUsPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <PageContainer>
      <h1 className="text-4xl font-bold mb-12 text-center">Contact iCompliance</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white text-indigo-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center"><Mail className="mr-2" /> Get in Touch</h2>
          <p className="mb-4">
            Have questions about how iCompliance can transform your regulatory compliance processes? 
            Our team is here to help.
          </p>
          <p className="mb-4">
            Email: info@icompliance.com<br />
            Phone: +1 (555) 123-4567
          </p>
        </div>
        <div className="bg-white text-indigo-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center"><Clock className="mr-2" /> Schedule a Demo</h2>
          <p className="mb-4">
            See iCompliance in action and experience how our disruptive AI-powered solution can revolutionize 
            your compliance processes and drive your business growth.
          </p>
          <button 
            onClick={() => setIsFormOpen(true)} 
            className="bg-indigo-600 text-white py-3 px-6 rounded-full font-bold hover:bg-indigo-700 transition duration-300 shadow-lg"
          >
            Book Your Demo <ChevronRight className="inline" />
          </button>
        </div>
      </div>
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </PageContainer>
  );
};

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} />;
      case 'product':
        return <ProductPage />;
      case 'solutions':
        return <SolutionsPage />;
      case 'about':
        return <AboutUsPage />;
      case 'contact':
        return <ContactUsPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header setActivePage={setActivePage} />
      <main className="flex-grow">
        {renderActivePage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
