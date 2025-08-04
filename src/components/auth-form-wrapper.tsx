import type { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';

type AuthFormWrapperProps = {
  title: string;
  description: string;
  children: ReactNode;
  footer: ReactNode;
};

export function AuthFormWrapper({ title, description, children, footer }: AuthFormWrapperProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <main className="flex w-full items-center justify-center">
        <Card className="w-full max-w-md shadow-2xl shadow-primary/10">
          <CardHeader className="items-center text-center">
            <Logo />
            <CardTitle className="pt-6 text-2xl font-bold">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>
          <CardFooter>
            <div className="w-full text-center text-sm text-muted-foreground">{footer}</div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
