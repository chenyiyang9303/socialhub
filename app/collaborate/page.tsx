import { Container } from "@/components/container";
import { Button } from "@/components/button";
import Image from "next/image";

export default function CollaboratePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                  Collaborate &
                  <br />
                  manage teams
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Aethermetrics makes it easy to collaborate and work as a team on your social media.
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
                  src="/product/collaborate/imgi_3_manage-teams.webp"
                  alt="Collaborate & manage teams"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Collaboration made easy */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/product/collaborate/imgi_4_collaboration.webp"
                  alt="Collaboration made easy"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Collaboration made
                  <br />
                  easy
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Collaborate with your team members to publish content efficiently. You don&apos;t need to share passwords with your team members anymore.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Invite team members
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Assign roles and permissions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Real-time collaboration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Secure workspace
                  </li>
                </ul>
                <Button variant="primary">
                  Invite Team Members
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Manage multiple brands */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Manage multiple
                  <br />
                  brands
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Manage as many accounts and as many brands as you want from one place.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Multiple social accounts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Brand-specific content
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Centralized dashboard
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Cross-brand analytics
                  </li>
                </ul>
                <Button variant="primary">
                  Add Brand
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/product/collaborate/imgi_5_manage-brands.webp"
                  alt="Manage multiple brands"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Review before they get published */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/product/collaborate/imgi_6_post-review.webp"
                  alt="Review before they get published"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Review before they get
                  <br />
                  published
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Post approvals make it easy to review content before it hits the feed.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Content approval workflow
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Review and feedback system
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Multi-level approvals
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Version control
                  </li>
                </ul>
                <Button variant="primary">
                  Setup Approvals
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Private notes for your team */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  Private notes for your
                  <br />
                  team
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  When you want to leave notes for your team members or discuss something, just add a private note.
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    Internal team notes
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    Comment and discuss
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    Private communication
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    Task assignments
                  </li>
                </ul>
                <Button variant="primary">
                  Add Note
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/product/collaborate/imgi_7_private-team.webp"
                  alt="Private notes for your team"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
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
