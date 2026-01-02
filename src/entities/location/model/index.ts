// Stub ILocation interface for build compatibility
export interface ILocation {
  id: number;
  name: string;
  description?: string;
  siteName?: string;
  parentName?: string;
  parentId?: number;
  createdAt: string;
  updatedAt: string;
}
