export declare const InjectClient: () => (
  target: object,
  key: string | symbol,
  index?: number | undefined,
) => void;
export declare const InjectIndex: (
  indexName: string | Function,
) => (target: object, key: string | symbol, index?: number | undefined) => void;
