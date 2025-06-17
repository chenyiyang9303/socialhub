import { Container } from "@/components/container";
import Image from "next/image";
import { Button } from "@/components/button";
import Link from "next/link";

export default function CuratePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                  Curate Content for Your Social Media
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Effortlessly discover and organize the best content for your social media presence with our powerful content curation tool.
                </p>
                <Button variant="primary" href="/login">
                  Start For Free
                </Button>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Cancel anytime • Free for 7 days
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Content Curation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Find Content with Advanced Filtering */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Find Content with Advanced Filtering
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Our advanced filtering system allows you to find the most relevant content in seconds, based on your specific interests and needs.
                </p>
                <Button variant="primary">
                  Explore Content Library
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Content Filters</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Discovery Grid */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Discover Trending Content
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Find the latest trending topics and viral content across multiple sources
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg">
                <div className="w-full h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xs font-medium">Content Preview 1</span>
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  How to improve workplace wellbeing
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  Last 30 Days • Last 3 Months
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  How to improve workplace and wellbeing: Explore ways to...
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg">
                <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xs font-medium">Content Preview 2</span>
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  Five social strategies
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  Last 30 Days • Last 3 Months
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Five social strategies and tactics your client...
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg">
                <div className="w-full h-32 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-xs font-medium">Content Preview 3</span>
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  Digital marketing trends
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  Last 30 Days • Last 3 Months
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Latest digital marketing trends to watch...
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Share to Social Media - First Instance */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Social Share UI</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Share to social media with one click
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Find and share the desired content effortlessly to all your social media accounts with just a click.
                </p>
                <Button variant="primary">
                  Try One-Click Sharing
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Share to Social Media - Second Instance */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Share to social media with one click
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Find and share the desired content effortlessly to all your social media accounts with just a click.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">f</span>
                  </div>
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">X</span>
                  </div>
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">P</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">in</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">T</span>
                  </div>
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">Y</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">IG</span>
                  </div>
                </div>
                <Button variant="primary">
                  Connect Platforms
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Multi-Platform Share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Generate Posts Using AI */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Generate Posts Using AI
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Let AI create posts using curated content. You can always stay ahead of the competition by posting content that is based on the latest ideas with the help of our powerful AI content generator.
                </p>
                <Button variant="primary">
                  Try AI Generator
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">AI Content Generator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AI Features Grid */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                AI-Powered Content Tools
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                Leverage the power of artificial intelligence to enhance your content curation and creation process.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                  Smart Content Discovery
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  AI algorithms find the most relevant and trending content based on your niche and audience preferences.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">✍️</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                  Auto Caption Generation
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Generate engaging captions and posts automatically based on curated content and your brand voice.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">📈</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                  Performance Prediction
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  AI predicts how well your curated content will perform before you publish it to your social channels.
                </p>
              </div>
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
              Start for free
            </Button>
            <p className="text-sm text-white/70 mt-4">
              Cancel anytime • Free for 7 days
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}