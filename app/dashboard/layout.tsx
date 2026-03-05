import Link from 'next/link';
import { Users, LayoutDashboard, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Users className="h-6 w-6" />
              <span className="font-semibold text-xl">TeamChart</span>
            </Link>

            <div className="flex items-center gap-1">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <Link href="/dashboard/chart">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Network className="h-4 w-4" />
                  Org Chart
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-neutral-200 flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>
    </div>
  );
}
