export interface ICategory {
  id: string;
  name: string;
  properties: IProperty[];
}

export interface IProperty {
  id: string;
  names: string[];
  description: string;
  type: string;
  defaultValue: string;
  fixed: boolean;
}

export interface IVersion {
  id: string;
  name: string;
  filename: string;
}
