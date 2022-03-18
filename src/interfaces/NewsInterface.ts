export interface NewsCardInterface {
  date: string,
  title: string,
  description: string,
  more: string,
  image: string,
}

export interface NewsInterface {
  news: NewsCardInterface,
}
