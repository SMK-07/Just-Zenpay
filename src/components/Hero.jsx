import React from 'react';
import Layout from './Layout';

const Hero = () => {
  const handleAboutUs = () => {
    document.getElementById('about-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <Layout>
      <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="px-6 py-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-black">Zenpay</h1>
        </div>
      </nav>

      <div className="px-6 py-12 lg:px-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Smart Billing for the{' '}
                  <span className="block">Zen Generation.</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                  Send invoices, get paid, and manage billing — all in one calm and modern interface.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAboutUs}
                  className="px-8 py-4 bg-[#5217e8] text-white font-semibold rounded-lg hover:bg-[#4513c7] transition-all duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Dashboard Mockup */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 max-w-md mx-auto lg:max-w-none">
                
                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Recent</h3>
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
                  <button className="flex-1 py-2 px-4 bg-white text-gray-900 font-medium rounded-md shadow-sm text-sm">
                    Invoices
                  </button>
                  <button className="flex-1 py-2 px-4 text-gray-600 font-medium rounded-md text-sm hover:bg-white hover:text-gray-900 transition-all">
                    Payments
                  </button>
                  <button className="flex-1 py-2 px-4 text-gray-600 font-medium rounded-md text-sm hover:bg-white hover:text-gray-900 transition-all">
                    Clients
                  </button>
                </div>

                {/* Content Rows */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="w-32 h-3 bg-gray-200 rounded"></div>
                    <div className="w-16 h-3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="w-40 h-3 bg-gray-200 rounded"></div>
                    <div className="w-12 h-3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="w-28 h-3 bg-gray-200 rounded"></div>
                    <div className="w-20 h-3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="w-36 h-3 bg-gray-200 rounded"></div>
                    <div className="w-14 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>

                {/* Payment Status Section */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Payment Status</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="w-24 h-2 bg-gray-200 rounded"></div>
                      <div className="w-16 h-2 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="w-20 h-2 bg-gray-200 rounded"></div>
                      <div className="w-12 h-2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      </div>

      {/* About Us Section */}
      <div id="about-section" className="min-h-screen bg-white">
        <div className="px-6 py-8 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
              About Us
            </h1>

            {/* What is Zenpay Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What is Zenpay?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Zenpay is a modern digital invoicing solution crafted to simplify and transform how businesses handle billing. With a focus on ease, efficiency, and eco-consciousness, Zenpay brings clarity and control to your transactions — all in one sleek, seamless platform.
              </p>
            </section>

            {/* Our Mission Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We aim to minimize the reliance on traditional hardcopy billing systems by introducing efficient digital solutions — creating not only a better workflow, but also contributing to a greener, eco-friendly future.
              </p>
            </section>

            {/* Why Zenpay was Started Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Zenpay was Started
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                After facing daily frustration in collecting, managing, and tracking paper bills, we realized the need for a better solution. Zenpay was created to bridge this gap — helping individuals and businesses go fully digital and take control of their financial organization.
              </p>
            </section>

            {/* Our Values Section */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Our Values
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Simplicity Card */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 aspect-square flex flex-col justify-center items-start hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Simplicity
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We remove complexity
                  </p>
                </div>

                {/* Trust Card */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 aspect-square flex flex-col justify-center items-start hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Trust
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Your data stays yours
                  </p>
                </div>

                {/* Innovation Card */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 aspect-square flex flex-col justify-center items-start hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Innovation
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We move fast and improve
                  </p>
                </div>

                {/* Empathy Card */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 aspect-square flex flex-col justify-center items-start hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Empathy
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We listen, adapt, and care
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Hero;