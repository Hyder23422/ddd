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
    label: 'o3-mini',
    apiIdentifier: 'o3-mini-2025-01-31',
    description: 'Fast and efficient for most tasks',
  },
  // Add other models if needed
] as const;

export const DEFAULT_MODEL_NAME: string = 'o3-mini';
