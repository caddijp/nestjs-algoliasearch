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
  AlgoliaModule: () => AlgoliaModule
});
var import_common = __toModule(require("@nestjs/common"));
var import_algolia = __toModule(require("./algolia.providers"));
var import_algolia_core = __toModule(require("./algolia-core.module"));
let AlgoliaModule = class {
  static forRoot(options) {
    return {
      module: AlgoliaModule,
      imports: [import_algolia_core.AlgoliaCoreModule.forRoot(options)]
    };
  }
  static forRootAsync(options) {
    return {
      module: AlgoliaModule,
      imports: [import_algolia_core.AlgoliaCoreModule.forRootAsync(options)]
    };
  }
  static forFeature(indexData) {
    const providers = (0, import_algolia.createAlgoliaIndexProviders)(indexData);
    return {
      module: AlgoliaModule,
      exports: providers,
      providers
    };
  }
};
AlgoliaModule = __decorateClass([
  (0, import_common.Module)({})
], AlgoliaModule);
