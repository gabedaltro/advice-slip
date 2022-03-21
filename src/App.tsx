import React from "react";
import { AppProvider } from "./hooks/app";
import { useWindowSize } from "./hooks/windowSize";
import { AdviceSlip } from "./pages/advice/AdviceSlip";

const App: React.FC = () => {
  const windowSize = useWindowSize();

  return (
    <AppProvider
      value={{
        windowHeight: windowSize.height,
        windowWidth: windowSize.width,
        isMobile: windowSize.isMobile,
      }}
    >
      <AdviceSlip />
    </AppProvider>
  );
};

export default App;
