import { Provider } from '@nestjs/common';
import { AlgoliaIndexDefinition } from './interfaces';
export declare const createAlgoliaIndexProviders: (
  indexData: AlgoliaIndexDefinition[],
) => Provider[];
