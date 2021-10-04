var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
__markAsModule(exports);
__export(exports, {
  AlgoliaCoreModule: () => AlgoliaCoreModule
});
var import_common = __toModule(require("@nestjs/common"));
var import_algoliasearch = __toModule(require("algoliasearch"));
var import_algolia = __toModule(require("./algolia.constants"));
let AlgoliaCoreModule = class {
  static forRoot(options) {
    const algoliaOptions = {
      provide: import_algolia.ALGOLIA_MODULE_OPTIONS,
      useValue: options
    };
    const connectionProvider = {
      provide: import_algolia.ALGOLIA_CLIENT,
      useFactory: async () => await this.createConnectionFactory(options)
    };
    return {
      module: AlgoliaCoreModule,
      providers: [algoliaOptions, connectionProvider],
      exports: [connectionProvider]
    };
  }
  static forRootAsync(options) {
    const connectionProvider = {
      provide: import_algolia.ALGOLIA_CLIENT,
      useFactory: async (algoliaOptions) => await this.createConnectionFactory(algoliaOptions),
      inject: [import_algolia.ALGOLIA_MODULE_OPTIONS]
    };
    const asyncProviders = this.createAsyncProviders(options);
    return {
      module: AlgoliaCoreModule,
      imports: options.imports,
      providers: [...asyncProviders, connectionProvider],
      exports: [connectionProvider]
    };
  }
  static createAsyncProviders(options) {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    const useClass = options.useClass;
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: useClass,
        useClass
      }
    ];
  }
  static createAsyncOptionsProvider(options) {
    if (options.useFactory) {
      return {
        provide: import_algolia.ALGOLIA_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || []
      };
    }
    return {
      provide: import_algolia.ALGOLIA_MODULE_OPTIONS,
      useFactory: async (optionsFactory) => await optionsFactory.createAlgoliaOptions(),
      inject: [
        options.useClass || options.useExisting
      ]
    };
  }
  static async createConnectionFactory(options) {
    return (0, import_algoliasearch.default)(options.applicationId, options.apiKey);
  }
};
AlgoliaCoreModule = __decorateClass([
  (0, import_common.Global)(),
  (0, import_common.Module)({})
], AlgoliaCoreModule);
