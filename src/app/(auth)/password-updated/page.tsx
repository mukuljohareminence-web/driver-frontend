import { AuthCard } from '@/components/AuthCard';

export default function Page(): React.JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <AuthCard
        title="Password Updated"
        description="Your password has been reset"
      >
        <div className="text-sm text-muted-foreground">
          // TODO: add next steps content here
        </div>
      </AuthCard>
    </div>
  );
}
