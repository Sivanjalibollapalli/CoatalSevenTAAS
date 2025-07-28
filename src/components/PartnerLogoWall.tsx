import React from 'react';

interface PartnerLogo {
  name: string;
  url: string;
  scale?: number; // optional scaling factor for visual alignment
}

// Using Clearbit logo service for quick, license-friendly remote logo placeholders.
const partnerLogos: PartnerLogo[] = [
  { name: 'Capgemini', url: 'https://logo.clearbit.com/capgemini.com' },
  { name: 'IBM', url: 'https://logo.clearbit.com/ibm.com' },
  { name: 'HSBC', url: 'https://logo.clearbit.com/hsbc.com', scale: 1.3 },
  { name: 'Infosys', url: 'https://logo.clearbit.com/infosys.com', scale: 1.3 },
  { name: 'Accenture', url: 'https://logo.clearbit.com/accenture.com' },
];

const PartnerLogoWall: React.FC = () => {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 px-4">
        {partnerLogos.map((logo) => (
          <div key={logo.name} className="flex flex-col items-center group">
            <div className="h-20 w-36 flex items-center justify-center">
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                loading="lazy"
                className={`max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105 ${logo.scale ? '' : ''}`}
                style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
              />
            </div>
            <span className="mt-2 text-sm font-medium text-gray-700">{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerLogoWall; 