// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'o1-mini',
    label: 'O1 Mini',
    apiIdentifier: 'o1-mini-2024-09-12',  // Using the version from the pricing table
    description: 'Fast and efficient for most tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'o1-mini';
