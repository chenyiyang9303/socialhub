import { Container } from "@/components/container";
import Image from "next/image";
import { Button } from "@/components/button";
import Link from "next/link";

export default function FacebookPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-700"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-800"></div>
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                  <div className="w-3 h-3 rounded-full bg-indigo-700"></div>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                Manage Your Facebook Presence
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Schedule posts to multiple Facebook pages, engage with your audience, and grow your presence on the world&apos;s largest social network.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="primary" href="/login">
                  Connect Facebook
                </Button>
                <Button variant="secondary">
                  Compare Plans
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Schedule to Multiple Pages */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/platform/facebook/imgi_14_post-scheduling.webp"
                  alt="Schedule to Multiple Facebook Pages"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Schedule to Multiple Facebook Pages
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Manage all your Facebook pages from one dashboard. Schedule posts, share content, and engage with different audiences effortlessly.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Personal profiles and business pages
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Facebook groups management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Cross-posting to multiple pages
                  </li>
                </ul>
                <Button variant="primary">
                  Add Facebook Pages
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Image, Video, Album Posting */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Image, Video, Album - Post Anything
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Share photos, videos, albums and text posts. Support for all Facebook content types including carousel posts and event promotions.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    High-resolution photos and videos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Photo albums and carousels
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Live video scheduling
                  </li>
                </ul>
                <Button variant="primary">
                  Upload Content
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/platform/facebook/imgi_15_post-anything.webp"
                  alt="Facebook Media Content Posting"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Social Calendar for Facebook */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/platform/facebook/imgi_16_social-calendar.webp"
                  alt="Facebook Social Calendar"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Plan Using the Simple Social Calendar
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Visualize your Facebook content strategy with our intuitive calendar. Plan posts for optimal engagement times and never miss important dates.
                </p>
                <Button variant="primary">
                  View Facebook Calendar
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Review Posts Before Publishing */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Review Posts Before They Are Published
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Preview exactly how your posts will appear on Facebook before they go live. Edit, refine and perfect your content with our real-time preview.
                </p>
                <Button variant="primary">
                  Preview Posts
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/platform/facebook/imgi_17_post-review.webp"
                  alt="Facebook Post Preview and Review"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bulk Schedule Facebook Posts */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/platform/facebook/imgi_18_bulk-scheduling.webp"
                  alt="Bulk Schedule Facebook Posts"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Bulk Schedule Your Facebook Posts
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Upload CSV files or use our bulk editor to schedule hundreds of Facebook posts at once. Perfect for marketing campaigns and content series.
                </p>
                <Button variant="primary">
                  Bulk Schedule
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Automate Posting from RSS Feeds */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Automate Posting from RSS Feeds
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Connect your blog or news site RSS feed to automatically post new content to Facebook. Keep your pages active with fresh, relevant content.
                </p>
                <Button variant="primary">
                  Setup RSS Automation
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/platform/facebook/imgi_19_rss-feeds.webp"
                  alt="Facebook RSS Feed Automation"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Manage Messages and Comments */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/platform/facebook/imgi_20_one-place.webp"
                  alt="Facebook Messages and Comments Management"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  All Your Messages and Comments at One Place
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Manage Facebook page messages, comments, and reviews from a unified inbox. Respond quickly and maintain great customer relationships.
                </p>
                <Button variant="primary">
                  Manage Inbox
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Analyze Facebook Performance */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Analyze Your Facebook Performance
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Track engagement, reach, and follower growth. Get detailed insights on your Facebook content performance and optimize your strategy.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Post engagement analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Audience demographic insights
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Best posting times analysis
                  </li>
                </ul>
                <Button variant="primary">
                  View Analytics
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/platform/facebook/imgi_21_analyze.webp"
                  alt="Facebook Performance Analytics"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <Container>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join over 18000+ users managing Facebook
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start growing your Facebook presence today. Schedule posts, engage with your audience, and analyze performance all in one place.
            </p>
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
              Connect Your Facebook
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
} 