export interface Language {
  name: string;
  language: string;
  languageCode: string;
  url: string ;
  target: string | null;
  icon: string | null;
  image: string | null;
}

export interface Navigation {
  language: Language;
  sortOrder: string;
  children: Navigation[];
}

export interface NavType {
  slug: string;
  language: Language;
}

export interface Item {
  navType: NavType;
  navigations: Navigation[];
}

export interface Data {
  totalCount: number;
  items: Item[];
}
