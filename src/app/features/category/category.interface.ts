export interface CategoryItem {
  name: string;
  isVisible: boolean;
}

export interface CategoryItemResponse extends CategoryItem {
  id: number;
}
