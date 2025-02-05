// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'o1-2024-12-17',
    label: 'O1',
    apiIdentifier: 'o1-2024-12-17',
    description: 'Powerful model for complex tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'o1-2024-12-17';
