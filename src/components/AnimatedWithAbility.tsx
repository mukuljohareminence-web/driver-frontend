import { AnimatedPage } from './AnimatedPage';
import type { AnimatedWithAbilityPageProps } from './interface';

export default function AnimatedWithAbilityPage({
  component: Component,
  can = true,
}: AnimatedWithAbilityPageProps): React.JSX.Element | null {
  if (!can) return null;

  // TODO: add permission/ability guard when the new project defines it.
  return (
    <AnimatedPage>
      <Component />
    </AnimatedPage>
  );
}
