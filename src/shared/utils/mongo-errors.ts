export const isDuplicateKeyError = (err: unknown) =>
  !!(err && typeof err === 'object' && (err as any).code === 11000);