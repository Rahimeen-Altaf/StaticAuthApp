import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { KeyRound, ShieldCheck, User, LineChart } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="grid gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Welcome to Your Dashboard</h1>
        <p className="text-lg text-muted-foreground mt-2">Here's a quick overview of your account.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Profile</CardTitle>
            <User className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">75% Complete</div>
            <p className="text-xs text-muted-foreground mt-1">
              Complete your profile for a better experience.
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-green-500/20 hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Account Security</CardTitle>
            <ShieldCheck className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">Strong</div>
            <p className="text-xs text-muted-foreground mt-1">
              Your account is well-protected.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Manage Password</CardTitle>
            <KeyRound className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Need to update your password? You can do it here.
            </p>
            <Button asChild className="w-full">
              <Link href="/dashboard/change-password">Change Password</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

       <Card>
         <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChart className="h-6 w-6" />
            Your Activity
          </CardTitle>
          <CardDescription>A placeholder for user activity feed or chart.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-80 bg-muted rounded-md flex items-center justify-center">
            <p className="text-muted-foreground">Activity chart will be displayed here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
