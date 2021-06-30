export interface IChallengeInfo {
  id: number;
  title: string;
  start_date: string;
  cycle: string;
  duration: string;
  is_official: number;
  RegisterCounts: number;
}

export interface IBannerInfo {
  id: number;
  title: Array<string>;
  subTitle: string;
  start_date: string;
  cycle: string;
  duration: string;
  RegisterCounts: number;
  image: string;
  status?: string;
}
