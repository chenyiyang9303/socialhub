"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: 'publish',
    title: 'Publish',
    icon: '🕒',
    description: 'Effortlessly plan, organize, and automate your social media posts across multiple platforms with Aethermetrics.'
  },
  {
    id: 'generate',
    title: 'Generate', 
    icon: '✨',
    description: 'Create stunning social media posts with Aethermetrics. Use our AI and integrations to craft eye-catching content within seconds.'
  },
  {
    id: 'respond',
    title: 'Respond',
    icon: '💬', 
    description: 'Never miss a message ever. Respond to all types of messages across all your social accounts. Comes with auto-replies where needed.'
  },
  {
    id: 'analyze',
    title: 'Analyze',
    icon: '📊',
    description: 'Aethermetrics&apos;s powerful analysis tools provide in-depth insights into hashtag performance and content success, empowering users to make informed decisions effortlessly.'
  },
  {
    id: 'automate',
    title: 'Automate',
    icon: '🔄',
    description: 'Automate your social media tasks smoothly with Aethermetrics. Manage RSS Feeds and trigger web-hooks to streamline processes across multiple platforms, all in one place.'
  },
  {
    id: 'collaborate',
    title: 'Collaborate',
    icon: '👥',
    description: 'Create, edit, and finalize content together with your team, all within the app. Boost productivity and streamline your social media management process.'
  },
  {
    id: 'curate',
    title: 'Curate',
    icon: '📑',
    description: 'Discover and share top-quality content for your social media using advanced filters and write with AI.'
  }
];

export function Features() {
  const [activeFeature, setActiveFeature] = useState('publish');

  return (
    <div
      id="features"
      className="w-full mx-auto bg-white dark:bg-neutral-950 py-20 px-4 md:px-8"
    >
      <Header>
        <h2 className="font-sans text-bold text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
          Everything you need to manage social media!
        </h2>
      </Header>
      <p className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">
        From publishing and scheduling to analytics and team collaboration - Aethermetrics provides all the tools you need to succeed on social media.
      </p>
      
      <div className="mt-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left sidebar - Feature menu */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-300 dark:border-neutral-700 p-2">
              <div className="space-y-2">
                {features.map((feature) => (
                  <motion.div
                    key={feature.id}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-200 border",
                      activeFeature === feature.id
                        ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
                        : "bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-750"
                    )}
                    onClick={() => setActiveFeature(feature.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{feature.icon}</span>
                      <span className={cn(
                        "font-medium",
                        activeFeature === feature.id
                          ? "text-blue-700 dark:text-blue-300"
                          : "text-neutral-700 dark:text-neutral-300"
                      )}>
                        {feature.title}
                      </span>
                    </div>
                    <svg
                      className={cn(
                        "w-5 h-5 transition-transform",
                        activeFeature === feature.id
                          ? "text-blue-700 dark:text-blue-300 rotate-90"
                          : "text-neutral-400"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right content area */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FeatureContent activeFeature={activeFeature} />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

const FeatureContent = ({ activeFeature }: { activeFeature: string }) => {
  const feature = features.find(f => f.id === activeFeature);
  
  if (!feature) return null;

  return (
    <div className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl pl-7 pt-7 pb-0 pr-0">
      {/* Text content area - taking 75% width */}
      <div className="w-3/4 mb-6">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          {feature.title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed mb-6">
          {feature.description}
        </p>
      </div>

      {/* Image area */}
      <div className="pt-1">
        {activeFeature === 'publish' && <PublishContent />}
        {activeFeature === 'generate' && <GenerateContent />}
        {activeFeature === 'respond' && <RespondContent />}
        {activeFeature === 'analyze' && <AnalyzeContent />}
        {activeFeature === 'automate' && <AutomateContent />}
        {activeFeature === 'collaborate' && <CollaborateContent />}
        {activeFeature === 'curate' && <CurateContent />}
      </div>
    </div>
  );
};

const PublishContent = () => (
  <div>
    <img 
      className="w-auto h-auto" 
      src="/feature/imgi_3_post-scheduling.webp" 
      alt="schedule post" 
    />
  </div>
);

const GenerateContent = () => (
  <div>
    <img 
      className="w-auto h-auto" 
      src="/feature/imgi_4_content-types.webp" 
      alt="generate content" 
    />
  </div>
);

const RespondContent = () => (
  <div>
    <img 
      className="w-auto h-auto" 
      src="/feature/imgi_5_social-calendar.webp" 
      alt="respond to messages" 
    />
  </div>
);

const AnalyzeContent = () => (
  <div>
    <img 
      className="w-auto h-auto" 
      src="/feature/imgi_6_post-review.webp" 
      alt="analyze performance" 
    />
  </div>
);

const AutomateContent = () => (
  <div>
    <img 
      className="w-auto h-auto" 
      src="/feature/imgi_7_bulk-scheduling.webp" 
      alt="automate tasks" 
    />
  </div>
);

const CollaborateContent = () => (
  <div>
    <img 
      className="w-auto h-auto" 
      src="/feature/imgi_8_rss-feeds.webp" 
      alt="team collaboration" 
    />
  </div>
);

const CurateContent = () => (
  <div>
    <img 
      className="w-auto h-auto" 
      src="/feature/imgi_9_analyze.webp" 
      alt="curate content" 
    />
  </div>
);

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-fit mx-auto p-4 flex items-center justify-center">
      <motion.div
        initial={{
          width: 0,
          height: 0,
          borderRadius: 0,
        }}
        whileInView={{
          width: "100%",
          height: "100%",
        }}
        style={{
          transformOrigin: "top-left",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute inset-0 h-full border border-neutral-200 dark:border-neutral-800 w-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
      </motion.div>
      {children}
    </div>
  );
};
