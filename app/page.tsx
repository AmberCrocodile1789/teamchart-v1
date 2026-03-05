import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Users, TrendingUp, Share2, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <nav className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6" />
              <span className="font-semibold text-xl">TeamChart</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost">Sign in</Button>
              </Link>
              <Link href="/signup">
                <Button>Get started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tight mb-6">
              Visualize your team structure with clarity
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Create interactive organizational charts that help everyone understand team structure, reporting lines, and responsibilities.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="gap-2">
                  Start building free
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dashboard/chart">
                <Button size="lg" variant="outline">
                  View demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-white">
              <div className="h-12 w-12 rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Interactive charts</h3>
              <p className="text-muted-foreground">
                Build dynamic org charts with drag-and-drop simplicity. Add team members, define roles, and visualize hierarchy.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-white">
              <div className="h-12 w-12 rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Team insights</h3>
              <p className="text-muted-foreground">
                Understand team structure at a glance. See reporting lines, team distribution, and organizational depth.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-white">
              <div className="h-12 w-12 rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                <Share2 className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy sharing</h3>
              <p className="text-muted-foreground">
                Share your org charts with stakeholders. Export, embed, or collaborate in real-time with your team.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-neutral-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to organize your team?
            </h2>
            <p className="text-neutral-300 mb-8 text-lg">
              Join teams using TeamChart to visualize and manage their organization.
            </p>
            <Link href="/signup">
              <Button size="lg" variant="secondary">
                Get started now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="font-semibold">TeamChart</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 TeamChart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
