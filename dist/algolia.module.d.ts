import { DynamicModule } from '@nestjs/common';
import {
  AlgoliaModuleAsyncOptions,
  AlgoliaModuleOptions,
  AlgoliaIndexDefinition,
} from './interfaces';
export declare class AlgoliaModule {
  static forRoot(options: AlgoliaModuleOptions): DynamicModule;
  static forRootAsync(options: AlgoliaModuleAsyncOptions): DynamicModule;
  static forFeature(indexData: AlgoliaIndexDefinition[]): DynamicModule;
}
