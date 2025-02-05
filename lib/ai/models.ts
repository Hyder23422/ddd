// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'o3-mini',
    label: 'O3 Mini',
    apiIdentifier: 'o3-mini',  // Changed this - some providers don't want the date suffix
    description: 'Fast and efficient for most tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'o3-mini';
