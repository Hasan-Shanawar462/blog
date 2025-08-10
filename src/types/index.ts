export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;   
  categoryId: string;  
  image: string;
  tags?: string[]; 
  

}
export interface Category {
  id: string;
  name: string;
}
export interface Author {
  id: string;
  name: string;
}


