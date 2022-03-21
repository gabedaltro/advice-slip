import { createContext, useContext } from "react";

export type AppContextValue = {
  isMobile: boolean;
  windowWidth: number;
  windowHeight: number;
};

const AppContext = createContext<AppContextValue>({} as AppContextValue);
export const AppProvider = AppContext.Provider;

export function useApp(): AppContextValue {
  const context = useContext(AppContext);
  return context;
}
