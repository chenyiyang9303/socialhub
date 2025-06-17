import { Container } from "@/components/container";
import Image from "next/image";
import { Button } from "@/components/button";
import Link from "next/link";

export default function MastodonPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                  <div className="w-3 h-3 rounded-full bg-purple-700"></div>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                A simple way to manage your <span className="text-purple-600">Mastodon</span> presence
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Manage your Mastodon account and get the best out of it with Aethermetrics, a 
                complete solution for managing your social presence.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="primary" href="/login">
                  Start for free
                </Button>
                <Button variant="secondary">
                  Compare Plans
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Schedule Posts to Multiple Mastodon Accounts */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Multi-Account</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Schedule posts to multiple Mastodon accounts
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Forget the hassle of posting manually, with 
                  Aethermetrics you can seamlessly schedule posts to all of your 
                  Mastodon accounts from one place.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Manage multiple instances and accounts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Cross-instance posting capabilities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Federated timeline management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Privacy-focused scheduling
                  </li>
                </ul>
                <Button variant="primary">
                  Schedule Posts
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Publish Threads on Mastodon */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Publish Threads on Mastodon
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Aethermetrics allow you to publish threaded posts on 
                  Mastodon. Easily create and manage toot threads 
                  to build complex conversations and detailed 
                  content.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Create threaded toot conversations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Automatic thread numbering
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Reply chain management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Content warning integration
                  </li>
                </ul>
                <Button variant="primary">
                  Create Threads
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Thread Publisher</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Image, Video, Text - Post Anything */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-violet-500 to-pink-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Media Upload</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Image, video, text – post anything
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Image, video, or text? - Schedule and publish types of 
                  content.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    Support for images, videos, and GIFs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    Alt text for accessibility
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    Custom emoji support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    Content warnings and sensitive media
                  </li>
                </ul>
                <Button variant="primary">
                  Upload Media
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Plan Using Simple Social Calendar */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Plan using simple social calendar
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Plan, design, and align your Mastodon strategy with Social 
                  Calendar. Get an overview of all the posts that have been 
                  published or scheduled.
                </p>
                <Button variant="primary">
                  View Calendar
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Social Calendar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Review Posts Before They Are Published */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Post Review</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Review posts before they are published
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  No need to have a communication gap between your 
                  team again. Make your entire team collaborate and 
                  maximize their efficiency.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Community-focused content review
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Instance rule compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Moderation team workflows
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Content warning suggestions
                  </li>
                </ul>
                <Button variant="primary">
                  Setup Reviews
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bulk Schedule Your Mastodon Posts */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Bulk schedule your Mastodon posts
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Schedule a bunch of bulk and save post and get on top of the 
                  game for a long time. Simply schedule your toots in batches, 
                  ready to go.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    CSV file import for bulk scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Batch processing across instances
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Optimal timing suggestions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Queue management system
                  </li>
                </ul>
                <Button variant="primary">
                  Bulk Schedule
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Bulk Scheduler</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Automate Posting from RSS Feeds */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">RSS Automation</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Automate posting from RSS feeds
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Connect content with RSS for seamless posting. 
                  Get blog new ones. Aethermetrics RSS automate can 
                  help you share others to your website.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    RSS feed integration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Automatic hashtag generation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Content filtering options
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Federated sharing capabilities
                  </li>
                </ul>
                <Button variant="primary">
                  Setup RSS
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-600">
        <Container>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join over 18000+ users
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join a thriving community of over 18,000+ users and 
              supercharge your social media journey with us.
            </p>
            <Button variant="secondary" className="bg-white text-purple-600 hover:bg-white/90">
              Start for free
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
