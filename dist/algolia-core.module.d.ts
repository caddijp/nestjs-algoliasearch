import { DynamicModule } from '@nestjs/common';
import { AlgoliaModuleOptions, AlgoliaModuleAsyncOptions } from './interfaces';
export declare class AlgoliaCoreModule {
  static forRoot(options: AlgoliaModuleOptions): DynamicModule;
  static forRootAsync(options: AlgoliaModuleAsyncOptions): DynamicModule;
  private static createAsyncProviders;
  private static createAsyncOptionsProvider;
  private static createConnectionFactory;
}
