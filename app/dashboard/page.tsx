import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Network, Users, Plus } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your organizational charts and team structure
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
            <p className="text-sm text-muted-foreground mt-1">
              Across 5 teams
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Departments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <p className="text-sm text-muted-foreground mt-1">
              Engineering, Design, Sales, Marketing, Operations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Org Charts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1</div>
            <p className="text-sm text-muted-foreground mt-1">
              Active organizational chart
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Your Charts</h2>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Chart
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/dashboard/chart">
            <Card className="hover:border-neutral-400 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                    <Network className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Updated 2h ago
                  </span>
                </div>
                <CardTitle>Company Org Chart</CardTitle>
                <CardDescription>
                  Complete organizational structure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>24 members</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Card className="border-dashed hover:border-neutral-400 transition-colors cursor-pointer">
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-2">
                <Plus className="h-5 w-5" />
              </div>
              <CardTitle>Create new chart</CardTitle>
              <CardDescription>
                Start building a new org chart from scratch
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
