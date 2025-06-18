import { Container } from "@/components/container";
import Image from "next/image";
import { Button } from "@/components/button";
import Link from "next/link";

export default function AnalyzePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                  Analyze your content Strategy
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Get comprehensive reports in the form of easy and understandable charts and graphs to make better decisions.
                </p>
                <Button variant="primary" href="/login">
                  Start for free
                </Button>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Cancel anytime • Free for 7 days
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/product/analyze/imgi_3_analyze-post.webp"
                  alt="Analyze your content Strategy"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Social Media Analytics Preview */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">in</span>
                    </div>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">LinkedIn Analytics</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600 dark:text-neutral-400">Followers</span>
                      <span className="font-bold text-neutral-900 dark:text-neutral-100">62K +14%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600 dark:text-neutral-400">Engagement</span>
                      <span className="font-bold text-neutral-900 dark:text-neutral-100">28K +3.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600 dark:text-neutral-400">Reach</span>
                      <span className="font-bold text-neutral-900 dark:text-neutral-100">1.5K +3.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600 dark:text-neutral-400">Clicks</span>
                      <span className="font-bold text-neutral-900 dark:text-neutral-100">900 +4.8%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Identify top performing posts
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Create new social media strategies and analyze existing ones based on real-life analytics. Promote posts that are performing best.
                </p>
                <Button variant="primary">
                  View Analytics
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Individual Post Insights */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Get Individual post insights
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Analyze if your posts are hitting the mark by knowing the number of likes, and other engagement metrics on each post.
                </p>
                <Button variant="primary">
                  Explore Post Analytics
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/product/analyze/imgi_5_post-insights.webp"
                  alt="Get Individual post insights"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Social Media Platform Analytics */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Multi-Platform Analytics
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Track performance across all your social media channels
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">in</span>
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">LinkedIn</h3>
                <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">62K</p>
                <p className="text-sm text-green-500">+14%</p>
              </div>
              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center shadow-lg">
                <div className="w-12 h-12 bg-black rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">X</span>
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Twitter</h3>
                <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">43K</p>
                <p className="text-sm text-green-500">+8.2%</p>
              </div>
              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">IG</span>
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Instagram</h3>
                <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">28K</p>
                <p className="text-sm text-green-500">+12.1%</p>
              </div>
              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center shadow-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">f</span>
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Facebook</h3>
                <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">15K</p>
                <p className="text-sm text-green-500">+5.7%</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Track Growth Trends */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/product/analyze/imgi_6_trends.webp"
                  alt="Track your growth trends"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Track your growth trends
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Get all the charts at one place for effective comparison, to see which accounts & posts are performing best.
                </p>
                <Button variant="primary">
                  View Growth Reports
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Analytics Features Grid */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                Comprehensive Analytics Features
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                Get detailed insights into your social media performance with our advanced analytics suite.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">📊</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                  Real-time Metrics
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Monitor your social media performance with live data updates and instant insights.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">📈</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                  Growth Analysis
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Track follower growth, engagement trends, and identify what content resonates most.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                  Competitor Analysis
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Compare your performance against competitors and industry benchmarks.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Reporting Tools */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Professional Reporting Tools
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Generate beautiful reports for clients and stakeholders
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                  Automated Reports
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  Set up automatic report generation and delivery to keep stakeholders informed.
                </p>
                <Button variant="primary">
                  Setup Reports
                </Button>
              </div>
              <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                  Custom Dashboards
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  Create personalized dashboards with the metrics that matter most to your business.
                </p>
                <Button variant="primary">
                  Build Dashboard
                </Button>
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