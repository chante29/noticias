export interface RespuestaTopHeadlines {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author?: any;
  title: string;
  description?: any;
  url: string;
  urlToImage?: any;
  publishedAt: string;
  content?: any;
}

export interface Source {
  id?: string;
  name: string;
}
