import React from 'react';

interface PricingPlan {
  plan: string;
  price: string;
  features: string[];
}

const Pricing: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      plan: "Basic",
      price: "$9.99/month",
      features: ["Access to 10 courses", "Certificate of Completion", "Limited Support"],
    },
    {
      plan: "Pro",
      price: "$19.99/month",
      features: ["Access to 50 courses", "Certificate of Completion", "Priority Support"],
    },
    {
      plan: "Enterprise",
      price: "$49.99/month",
      features: ["Access to all courses", "Certificate of Completion", "24/7 Support"],
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Pricing
        </h2>
        <div className="flex flex-wrap">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-gray-100 rounded-lg py-6 px-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.plan}</h3>
                <p className="text-gray-600 mb-4">{plan.price}</p>
                <ul className="text-gray-600 mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className="bg-green-500 text-white font-bold rounded-full py-2 px-8 shadow-lg uppercase tracking-wider hover:bg-green-600 transition duration-300">
                  Sign Up
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;