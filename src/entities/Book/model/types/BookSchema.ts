interface ImageLinks{
  smallThumbnail: string;
  thumbnail: string;
}
interface Book {
  title: string;
  authors: string[];
  publisher: string;
  description: string;
  pageCount: number;
  categories: string[];
  imageLinks: ImageLinks;
  infoLink: string;
}
interface Price {
  amount: number;
  currencyCode: string;
}
interface SaleInfo{
  retailPrice: Price;
}
export interface Volume {
  id: string;
  volumeInfo: Book;
  saleInfo: SaleInfo;
  buyLink: string;
}

export enum Categories {
  ALL = 'all',
  ART = 'art',
  BIOGRAPHY = 'biography',
  COMPUTERS = 'computers',
  HISTORY = 'history',
  MEDICAL = 'medical',
  POETRY = 'poetry',
}
export enum Sorts {
  RELEVANCE = 'relevance',
  NEWEST = 'newest'
}
