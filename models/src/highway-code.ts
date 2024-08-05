export interface IHighwayCode {
  id: string;
  title: string;
  footNote: string;
  api_url: string;
}
export interface IHighwayCodeSource {
  links: IHighwayCodeSourceLinks;
}
export interface IHighwayCodeSourceLinks {
  sections: IHighwayCodeLinkSection[];
}
export interface IHighwayCodeLinkSection {
  content_id: string;
  title: string;
  locale: string;
  api_path: string;
  base_path: string;
  document_type: string;
  public_updated_at: Date;
  schema_name: string;
  withdrawn: boolean;
  api_url: string;
  web_url: string;
}
export interface IHighwayCodeDetailSource {
  analytics_identifier: string | null;
  base_path: string;
  content_id: string;
  document_type: string;
  first_published_at: Date;
  locale: string;
  phase: string;
  public_updated_at: Date;
  publishing_app: string;
  publishing_scheduled_at?: any;
  rendering_app: string;
  scheduled_publishing_delay_seconds?: any;
  schema_name: string;
  title: string;
  updated_at: Date;
  description: string;
  details: IHighwayCodeDetailSourceDetails;
}
export interface IHighwayCodeDetailSourceDetails {
  body: string;
}
