import { Container } from "@/components/container";
import Image from "next/image";

export function WhoCantBenefit() {
  const beneficiaries = [
    {
      title: "Social Media Managers",
      image: "manager.webp ",
      alt: "Social Media Manager"
    },
    {
      title: "Creators & Influencers", 
      image: "influencer.webp",
      alt: "Creators and Influencers"
    },
    {
      title: "Startups",
      image: "business-man.webp", 
      alt: "Startups"
    },
    {
      title: "Agencies & Freelancers",
      image: "freelancer.webp",
      alt: "Agencies and Freelancers"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Who can benefit
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
              Aethermetrics is purposefully designed to cater to the specific needs of Social Media Managers, Startups, SMEs, Freelancers, and Agencies.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficiaries.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
} 