export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  source: string;
  code: string;
  codeBack?: string;
}
