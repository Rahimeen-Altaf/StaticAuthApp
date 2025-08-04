import { Feather } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Feather className="h-8 w-8 text-primary" />
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">AuthFlow</h1>
    </div>
  );
}
