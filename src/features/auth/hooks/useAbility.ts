interface Ability {
  can: (action: string, subject: string) => boolean;
}

export function useAbility(): Ability {
  // Stub implementation - return a basic ability object
  return {
    can: (): boolean => true, // Allow all actions by default
  };
}
