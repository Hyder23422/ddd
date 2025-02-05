// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gpt-4o',
    label: 'GPT 4o',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
  },
  {
    id: 'deepseek/deepseek-r1',
    label: 'Deepseek r1',
    apiIdentifier: 'deepseek/deepseek-r1',
    description: 'Optimized for performance via OpenRouter',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'deepseek/deepseek-r1';
