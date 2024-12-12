import React from 'react';
import { Diamond } from 'lucide-react';

interface CareOption {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  isPremium?: boolean;
}

const CareOptionCard: React.FC<CareOption> = ({ title, description, features, buttonText, isPremium }) => (
  <div className={`p-6 rounded-lg ${isPremium ? 'bg-sky-50' : 'bg-white'} border border-gray-200`}>
    <div className="flex items-center mb-4">
      {isPremium && <Diamond className="w-6 h-6 text-sky-600 mr-2" />}
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-sm text-gray-600 mb-4"><span className="text-lg font-bold">{description}</span> </p>
    <ul className="mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start mb-2">
          <svg className="w-5 h-5 text-sky-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-2 px-4 rounded ${isPremium ? 'bg-sky-600 text-white' : 'bg-white text-sky-600 border border-sky-600'}`}>
      {buttonText}
    </button>
  </div>
);

const OptionsHero: React.FC = () => {
  const careOptions: CareOption[] = [
    {
      title: "Nurses",
      description: "Your health and well-being are in expert hands. Our certified nurses offers:",
      features: [
        "Personalized care plans",
        "Expert assistance for complex medical needs",
        "Dedicated support teams available around the clock",
      ],
      buttonText: "Search",
      isPremium: true
    },
    {
      title: "Social Workers",
      description: "Receive professional guidance and social well-being. Our licensed social workers provide:",
      features: [
        "Both virtual and in-person consultations",
        "Assistance with social services and welfare matters",
        "Ongoing emotional and mental health support"
      ],
      buttonText: "Search"
    },
    {
      title: "Care Workers",
      description: "Ensure the best care for your loved ones with our compassionate care workers, who offer:",
      features: [
        "Assistance with daily living activities",
        "In-home or facility-based care options",
        "Long-term care planning and support"
      ],
      buttonText: "Search"
    }
  ];
  

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-2">Choose what is right for you</h2>
      <h1 className="text-3xl font-bold text-center mb-8">Categories</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {careOptions.map((option, index) => (
          <CareOptionCard key={index} {...option} />
        ))}
      </div>
    </div>
  );
};

export default OptionsHero;