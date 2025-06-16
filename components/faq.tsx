"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const FAQs = [
  {
    question: "What is Aethermetrics?",
    answer:
      "Aethermetrics is an all-in-one social media management and automation platform that helps you schedule, publish, analyze, and automate your social media activities across multiple platforms.",
  },
  {
    question: "Which social media platforms does Aethermetrics support?",
    answer:
      "Aethermetrics supports LinkedIn, Twitter, Instagram, Threads, TikTok, Facebook, YouTube, Reddit, Bluesky, Pinterest, Mastodon, and Google Business Profile.",
  },
  {
    question: "Can I use Aethermetrics for free?",
    answer:
      "Yes, Aethermetrics offers a 7-day free trial so you can explore all features before committing to a paid plan.",
  },
  {
    question: "How do I schedule posts with Aethermetrics?",
    answer:
      "You can easily schedule posts by connecting your social media accounts, creating your content, and selecting the date and time for publishing. Aethermetrics will automatically post on your behalf.",
  },
  {
    question: "Does Aethermetrics offer analytics and reporting?",
    answer:
      "Yes, Aethermetrics provides in-depth analytics and reporting tools to help you track your content performance, hashtag success, and audience engagement.",
  },
  {
    question: "Can I collaborate with my team on Aethermetrics?",
    answer:
      "Absolutely! Aethermetrics allows you to invite team members, assign roles, and collaborate on content creation, approval, and publishing.",
  },
  {
    question: "Is there an AI assistant in Aethermetrics?",
    answer:
      "Yes, Aethermetrics features an AI assistant that helps you generate content, captions, and similar posts, making your social media management more efficient.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach Aethermetrics's customer support through the help center on the website or by emailing their support team directly.",
  },
  {
    question: "Can I automate social media tasks with Aethermetrics?",
    answer:
      "Yes, you can automate tasks such as posting from RSS feeds, setting up auto-replies, and triggering webhooks to streamline your workflow.",
  },
  {
    question: "Is my data secure with Aethermetrics?",
    answer:
      "Aethermetrics takes data security seriously and implements industry-standard measures to protect your information and privacy.",
  },
];
export function SimpleFaqsWithBackground() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-20 md:px-8 md:py-40">
      <h2 className="text-center text-4xl font-medium tracking-tight text-neutral-600 dark:text-neutral-50 md:text-5xl">
        Frequently asked questions
      </h2>
      <p className="mx-auto max-w-lg text-center text-base text-neutral-600 dark:text-neutral-50">
        We are here to help you with any questions you may have. If you
        don&apos;t find what you need, please contact us at{" "}
        <a
          href="mailto:support@Aethermetrics.com"
          className="text-blue-500 underline"
        >
          support@Aethermetrics.com
        </a>
      </p>
      <div className="mx-auto mt-10 w-full max-w-3xl">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="mb-8 w-full cursor-pointer rounded-lg bg-white p-4 shadow-input dark:bg-neutral-900"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <IconChevronUp
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-black transition-all duration-200 dark:text-white",
              isOpen && "rotate-90 scale-0"
            )}
          />
          <IconChevronDown
            className={cn(
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-black transition-all duration-200 dark:text-white",
              isOpen && "rotate-0 scale-100"
            )}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400"
              >
                {answer.split("").map((line, index) => (
                  <motion.span
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                      delay: index * 0.005,
                    }}
                    key={index}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// Export alias for easier importing
export { SimpleFaqsWithBackground as Faq };
