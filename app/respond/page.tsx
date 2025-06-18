import { Container } from "@/components/container";
import { Button } from "@/components/button";
import Image from "next/image";

export default function RespondPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                  One Inbox For All
                  <br />
                  Your Social Media
                  <br />
                  Conversations
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Respond to all your messages, comments, and reviews from one place. No need to switch between multiple apps.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" href="/login">
                    Start for free
                  </Button>
                  <Button variant="secondary">
                    Cancel anytime • Free for 7 days
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/product/respond/imgi_3_inbox.webp"
                  alt="One Inbox For All Your Social Media Conversations"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* All your messages at one place */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/product/respond/imgi_4_all-messages.webp"
                  alt="All your messages at one place"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  All your messages at
                  <br />
                  one place
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  You don&apos;t need to switch between multiple social media accounts to keep up with the messages. Get them all in a shared inbox. If you are managing multiple brands, you can create separate inbox for each brand.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Unified social media inbox
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Brand-specific inboxes
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Cross-platform messaging
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Message prioritization
                  </li>
                </ul>
                <Button variant="primary">
                  View Messages
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Reply to comments and posts */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Reply to comments
                  <br />
                  and posts
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Respond to all your post comments, replies, and mentions from one place. You will not miss them any more.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Comment management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Reply to mentions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Thread conversations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Auto-responses
                  </li>
                </ul>
                <Button variant="primary">
                  Manage Comments
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/product/respond/imgi_5_post-reply.webp"
                  alt="Reply to comments and posts"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Manage & respond to reviews */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/product/respond/imgi_6_respond.webp"
                  alt="Manage & respond to reviews"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Manage & respond to
                  <br />
                  reviews
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Listen to what your customers say about you. Satisfy them with a timely response to increase your brand loyalty.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Review monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Response templates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Sentiment analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Review analytics
                  </li>
                </ul>
                <Button variant="primary">
                  Manage Reviews
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
