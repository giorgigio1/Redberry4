export interface CategoryProps {
    id: number;
    title: string;
    background_color: string;
    text_color: string;
  }
  
  export interface BlogProps {
    id: number;
    author: string;
    title: string;
    description: string;
    image: string;
    publish_date: string;
    email?: string;
    categories: CategoryProps[];
  }