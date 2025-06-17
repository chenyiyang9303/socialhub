import { Container } from "@/components/container";
import Image from "next/image";
import { Button } from "@/components/button";
import Link from "next/link";

export default function ThreadsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-black dark:bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-800 dark:bg-gray-200"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-600 dark:bg-gray-400"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-700 dark:bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-900 dark:bg-gray-100"></div>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                Simplify Your <span className="text-blue-600">Threads</span> Management with Aethermetrics
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Streamline your Threads presence with Aethermetrics's management and scheduling 
                tools. Connect with your audience on Meta's new conversational platform effortlessly.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="primary" href="/login">
                  Connect Threads
                </Button>
                <Button variant="secondary">
                  Compare Plans
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Schedule Threads Posts */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Schedule Posts</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Schedule Threads Posts
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Plan and schedule your Threads posts in advance. Maintain consistent 
                  engagement with your audience by scheduling content at optimal times 
                  when your followers are most active.
                </p>
                <Button variant="primary">
                  Schedule Posts
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Image, Video, or Album - Post Anything */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Image, video, or album - post anything
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Share diverse content on Threads including photos, videos, and text posts. 
                  Create engaging conversations with multimedia content that resonates with 
                  your audience on Meta's text-based platform.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    High-quality images and videos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Text-based conversations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Link sharing and previews
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Multi-media album posts
                  </li>
                </ul>
                <Button variant="primary">
                  Create Thread
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-green-400 to-teal-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Media Content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Effortless Thread Posting */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Thread Posting</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Effortless Thread Posting
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Create and manage threaded conversations with ease. Our intuitive interface 
                  makes it simple to craft engaging content, respond to comments, and build 
                  meaningful connections with your Threads community.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Easy thread creation and management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Character count optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Hashtag and mention suggestions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Draft saving and editing
                  </li>
                </ul>
                <Button variant="primary" href="/login">
                  Start Posting
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Plan Using the Simple Social Calendar */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Plan using the simple social calendar
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Get a bird's eye view of your Threads content strategy with our visual calendar. 
                  Plan posts in advance, maintain consistency, and ensure your audience stays 
                  engaged with timely, relevant content.
                </p>
                <Button variant="primary">
                  View Calendar
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center">
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
                <div className="w-full h-96 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Post Preview</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Review posts before they are published
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Preview exactly how your Threads posts will appear before publishing. 
                  Check formatting, character limits, media placement, and ensure your 
                  content looks perfect before it reaches your audience.
                </p>
                <Button variant="primary">
                  Preview Posts
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bulk Schedule Your Threads Posts */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Bulk schedule your Threads posts
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Save time and maintain consistency by scheduling multiple Threads posts 
                  at once. Upload content in bulk, set posting times, and let Aethermetrics 
                  handle the rest while you focus on creating great content.
                </p>
                <Button variant="primary">
                  Bulk Schedule
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Bulk Schedule</span>
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
                <div className="w-full h-96 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-2xl flex items-center justify-center">
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
                  Connect your blog, news site, or any RSS feed to automatically share 
                  new content on Threads. Keep your audience updated with fresh content 
                  while saving time on manual posting.
                </p>
                <Button variant="primary">
                  Setup RSS Feeds
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Manage All Your Messages and Comments */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Manage all your messages and comments in one place
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Streamline your Threads engagement with a unified inbox. Respond to 
                  comments, manage conversations, and build stronger relationships with 
                  your community all from one central dashboard.
                </p>
                <Button variant="primary">
                  Manage Inbox
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Messages & Comments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Analyze Your Performance */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Analytics</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Analyze your performance
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Get deep insights into your Threads performance with comprehensive analytics. 
                  Track engagement rates, follower growth, and identify your best-performing 
                  content to optimize your Threads strategy.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Engagement and interaction metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Follower growth tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Best posting times analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Content performance insights
                  </li>
                </ul>
                <Button variant="primary">
                  View Analytics
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-blue-600">
        <Container>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join over 18000+ users
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start building your presence on Threads today. Schedule posts, engage with your community, and grow your audience effortlessly.
            </p>
            <Button variant="secondary" className="bg-white text-gray-800 hover:bg-white/90">
              Start Free Trial
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
} 