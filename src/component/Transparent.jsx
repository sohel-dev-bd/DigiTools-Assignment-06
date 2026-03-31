const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for getting started",
    price: "$0",
    period: "/Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    description: "Best for professionals",
    price: "$29",
    period: "/Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    highlight: true,
    tag: "Most Popular",
  },
  {
    name: "Enterprise",
    description: "For teams and businesses",
    price: "$99",
    period: "/Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
    highlight: false,
  },
];


export default function Pricing() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="mb-10 text-center">
            <h2 className="text-5xl font-extrabold">Simple, Transparent Pricing </h2>
            <p className="text-sm m-5 text-gray-400">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>



      <div className="grid md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 shadow-md border ${
              plan.highlight
                ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white scale-105"
                : "bg-white"
            }`}
          >
            {/* Tag */}
            {plan.tag && (
              <div className="absolute -mt-10 ml-20 bg-yellow-400 text-xs px-3 py-1 rounded-full text-black">
                {plan.tag}
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
            <p className="text-sm mb-4 opacity-80">{plan.description}</p>

            {/* Price */}
            <div className="text-3xl font-bold mb-4">
              {plan.price}
              <span className="text-base font-normal">{plan.period}</span>
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✔ <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`w-full py-2 rounded-full font-medium ${
                plan.highlight
                  ? "bg-white text-purple-600"
                  : "bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
