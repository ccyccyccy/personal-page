export type Team = {
  id: number;
  name: string;
  image: string;
  description: string;
  campaigns_count: number;
  leads_count: number;
  is_favorited: boolean;
  is_archived: boolean;
  created_at?: string;
};

export type Activity = {
  id: number;
  person: User;
  action: string;
  target: string;
  created_at?: string;
};

export type User = {
  id: number;
  name: string;
  avatar: string;
};

export type CurrentUser = User & {
  notificationCount: number;
};

export enum TabType {
  All = "All",
  Favorites = "Favorites",
  Archived = "Archived"
}
