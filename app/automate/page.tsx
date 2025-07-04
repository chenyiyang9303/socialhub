import { Container } from "@/components/container";
import Image from "next/image";
import { Button } from "@/components/button";
import Link from "next/link";

export default function AutomatePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                  Automate Your Social Media
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Create fully dynamic automation rules to support your social media and eliminate repetitive tasks.
                </p>
                <Button variant="primary" href="/login">
                  Start For Free
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/product/automate/imgi_3_automate-post.webp"
                  alt="Automate Your Social Media"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Auto Post from RSS Feeds */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/product/automate/imgi_4_rss-feed.webp"
                  alt="Auto post from RSS feeds"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Auto post from RSS feeds
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Automatically post social media posts from RSS feeds. Automate and publish content to your social media accounts with customizable post formats and schedule automation.
                </p>
                <Button variant="primary">
                  Setup RSS Automation
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Auto Replies */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Auto replies without any delay
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Never let your customers wait on simple questions. Automate replies to common messages or comments, and keep your audience engaged.
                </p>
                <Button variant="primary">
                  Configure Auto Replies
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/product/automate/imgi_5_auto-reply.webp"
                  alt="Auto replies without any delay"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Handle Reviews Automatically */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/product/automate/imgi_6_automatic-reviews.webp"
                  alt="Handle reviews automatically"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Handle reviews automatically
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Respond to reviews from your social media pages and perform instant actions based on the review sentiment and rating.
                </p>
                <Button variant="primary">
                  Setup Review Automation
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Automate Using Webhooks */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Automate Using Webhooks
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Integrate with your favorite tools and automate your workflows. Build custom automations using webhooks and trigger events to streamline your social media management.
                </p>
                <Button variant="primary">
                  Configure Webhooks
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/product/automate/imgi_7_webhook.webp"
                  alt="Automate Using Webhooks"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Smart Automation Features */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                Intelligent Automation Features
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                Our AI-powered automation engine learns from your patterns and optimizes your social media strategy automatically.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">AI</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                  Smart Content Filtering
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Automatically filter and curate the best content based on engagement patterns and audience preferences.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">⏰</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                  Optimal Timing
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  AI determines the best times to post based on your audience&apos;s activity patterns and engagement history.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">📊</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                  Performance Analytics
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Get detailed insights on automation performance and recommendations for improving your strategy.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Integration Showcase */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                Connect With Your Favorite Tools
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                Seamlessly integrate with popular platforms and tools to create a comprehensive automation workflow.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Zapier", "RSS Feeds", "WordPress", "Shopify"].map((integration, index) => (
                <div key={index} className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xs font-medium">{integration}</span>
                  </div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {integration}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    Connect and automate
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <Container>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join over 18000+ users
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join a thriving community of over 18,000+ users and supercharge your social media journey with us.
            </p>
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
              Start Free Trial
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
} 