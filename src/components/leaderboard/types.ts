export interface Driver {
  id: string;
  rank: number;
  initials: string;
  name: string;
  tier: 'Gold' | 'Silver' | 'Bronze';
  orders: number;
  points: number;
  trend: 'up' | 'down' | 'stable';
  isCurrentUser?: boolean;
}

export interface TopDriver {
  id: string;
  rank: number;
  initials: string;
  name: string;
  tier: 'Gold' | 'Silver' | 'Bronze';
  points: number;
}
