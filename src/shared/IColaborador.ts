export interface INewColaborador {
  name: string;
  image: string;
  role: string;
  isFavorite?: boolean;
  team: string;
}

export interface IColaborador extends INewColaborador {
  id?: string;
}
