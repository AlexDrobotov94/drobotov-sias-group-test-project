declare global {
  /**
   * ⚠️ FSD
   *
   * Its hack way to export redux inferring types from @/app
   * and use it in @/shared/model/hooks.ts
   */
  declare type RootState = import("./store").RootState;
  declare type AppDispatch = import("./store").AppDispatch;
}
export {};
