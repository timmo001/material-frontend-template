export interface AboutType {
  id: string;
  content?: string;
  header_media?: MediaType;
  profile_media?: MediaType;
  profile_name?: string;
  profile_subtitle?: string;
  showcase_media?: MediaType[];
  showcase_slides?: number;
  updated_at: string;
}

export interface ArticleType {
  id: string;
  category: CategoryType;
  content?: string;
  header_media?: MediaType;
  showcase_media?: MediaType[];
  showcase_slides?: number;
  tags?: TagType[];
  thumbnail_media?: MediaType;
  title: string;
  published_at: string;
  updated_at: string;
}

export interface CategoryType {
  id: string;
  articles?: ArticleType[];
  header_media?: MediaType;
  name: string;
  updated_at: string;
}

export interface GeneralType {
  footer_content?: string;
  header_media: MediaType;
}

export interface HomepageType {
  articles_heading?: string;
  header_media: MediaType;
  showcase_heading?: string;
  showcase_media?: MediaType[];
  showcase_slides?: number;
  welcome_message?: string;
  updated_at: string;
}

export interface MediaType {
  alternativeText?: string;
  caption?: string;
  name: string;
  url: string;
}

export interface QueryType {
  id?: string;
  page?: string;
}

export interface TagType {
  name: string;
  color?: string;
}
