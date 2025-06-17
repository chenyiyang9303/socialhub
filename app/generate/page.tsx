import { Container } from "@/components/container";
import { Button } from "@/components/button";
import Image from "next/image";

export default function GeneratePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                  Generate Content
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    with AI
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Content suggestions that you can use for your social media posts. Let AI generate new copy along but also often content that works well your audience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" href="/login">
                    Start for free
                  </Button>
                  <Button variant="secondary">
                    General writing • Free for 7 days
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">AI Generator Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AI Content Generator Demo */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Content Demo Image</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Generate unlimited content ideas
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Let AI help you create engaging content that resonates with your audience. 
                  From social media posts to blog ideas, generate content that drives engagement.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Smart hashtag suggestions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Platform-optimized content
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Brand voice consistency
                  </li>
                </ul>
                <Button variant="primary">
                  Generate Content
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Write X posts faster with AI */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Write X posts faster
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    with AI
                  </span>
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Boost your content creation speed with the help of AI and write X posts in no time.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    LinkedIn Post
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Twitter
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    Instagram
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                    Short Post
                  </li>
                </ul>
                <Button variant="primary">
                  Write X Posts
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">X Posts Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Write LinkedIn posts faster with AI */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">LinkedIn Posts Image</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Write LinkedIn posts
                  <br />
                  faster with AI
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Elevate your LinkedIn presence by harnessing AI for quicker, more efficient post creation.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Post
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    Caption
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                    Short Post
                  </li>
                </ul>
                <Button variant="primary">
                  Create LinkedIn Posts
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AI write Instagram captions faster */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  AI write Instagram
                  <br />
                  captions faster
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Let AI write your Instagram captions, making them faster and more captivating than ever!
                </p>
                <Button variant="primary">
                  Generate Captions
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Instagram Captions Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Write Short posts faster with AI */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Short Posts Image</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Write Short posts
                  <br />
                  faster with AI
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Accelerate your short post writing with AI for quick and impactful content creation.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    LinkedIn Post
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Post
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    Caption
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                    Short Post
                  </li>
                </ul>
                <Button variant="primary">
                  Create Short Posts
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join over 18000+ users
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join a thriving community of over 18,000 users and supercharge your social media journey with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  Start for free
                </Button>
                <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Cancel anytime • Free for 7 days
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 