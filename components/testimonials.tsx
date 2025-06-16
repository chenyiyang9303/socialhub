"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export function TestimonialsMasonryGrid() {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 8);

  const grid = [first, second, third];
  return (
    <div className="py-20">
      <h2
        id="reviews-title"
        className={cn(
          "text-3xl font-medium tracking-tight text-neutral-900 dark:text-white sm:text-center"
        )}
      >
        Loved by thousands of people
      </h2>
      <p
        className={cn(
          "mt-2 text-lg text-neutral-600 dark:text-neutral-200 sm:text-center"
        )}
      >
        Here&apos;s what some of our users have to say about Aceternity UI.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto items-start px-4 md:px-8 mt-10">
        {grid.map((testimonialsCol, index) => (
          <div
            key={`testimonials-col-${index}`}
            className="grid gap-4 items-start"
          >
            {testimonialsCol.map((testimonial) => (
              <Card key={`testimonial-${testimonial.src}-${index}`}>
                <Quote>{testimonial.quote}</Quote>
                <div className="flex gap-2 items-center mt-8">
                  <Image
                    src={testimonial.src}
                    alt="Manu Arora"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <QuoteDescription>{testimonial.name}</QuoteDescription>
                    <QuoteDescription className="text-[10px]">
                      {testimonial.designation}
                    </QuoteDescription>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl border border-transparent relative bg-white dark:border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.30)] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      <FaQuoteLeft className="absolute top-2 left-2 text-neutral-300" />
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-base font-normal dark:text-white text-black py-2 relative",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-xs font-normal dark:text-neutral-400 text-neutral-600 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Michael M.",
    quote:
      "I would highly recommend Aethermetrics to anyone that wants to effectively manage all their social feeds in one place. It by far offers the most features for the money.",
    src: "https://i.pravatar.cc/150?img=17",
    designation: "Marketing Manager at CMHWorks",
  },
  {
    name: "Eric G.",
    quote:
      "Great application and customer service. This has really helped me save time for posting, because now I do not have to do it manually. I am really happy with it.",
    src: "https://i.pravatar.cc/150?img=67",
    designation: "Freelance Social Media Manager",
  },
  {
    name: "Mick G.",
    quote:
      "It's been such an easy and smooth journey starting with Aethermetrics. Good pricing, easy tool, great support. A no brainer.",
    src: "https://i.pravatar.cc/150?img=69",
    designation: "Head of Sales and Marketing",
  },
  {
    name: "Ian M.",
    quote:
      "Aethermetrics is beauty. Easy to use and simple set up. I use the automation which works well. And responding is simple. I am happy with the software.",
    src: "https://i.pravatar.cc/150?img=18",
    designation: "Associate at St Andrews South Brisbane",
  },
  {
    name: "Larry Kim",
    quote:
      "Aethermetrics helps me stay on top of the social media game, creating compelling original content for my social media channels with its AI-powered features. I strongly recommend giving it a shot.",
    src: "https://i.pravatar.cc/150?img=68",
    designation: "Founder of Wordstream",
  },
  {
    name: "Eeva L.",
    quote:
      "Very happy to be part of the Aethermetrics family and I highly recommend it. It's not just a tool but a partnership that listens and evolves with you.",
    src: "https://i.pravatar.cc/150?img=48",
    designation: "Marketing Agency Owner",
  },
  {
    name: "Kate Gross",
    quote:
      "Aethermetrics saves me time, letting me easily manage my social networks. Its greatest perk is seamless communication with followers, team members, and content alike. Highly recommended.",
    src: "https://i.pravatar.cc/150?img=21",
    designation: "Manager from FixThePhoto",
  },
  {
    name: "Pasquale M.",
    quote:
      "Amazing experience! The product works very well without hiccups. Customer Service is very responsive and ready to help and answer any questions.",
    src: "https://i.pravatar.cc/150?img=22",
    designation: "Founder at Increasily",
  }
]
export { TestimonialsMasonryGrid as Testimonials };