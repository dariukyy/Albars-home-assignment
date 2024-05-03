import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import AppContextProvider from "./context/AppContext";
import FullPageSpinner from "./ui/FullPageSpinner";

// Lazy-loaded components
const AppTable = lazy(() => import("./features/table/AppTable"));

const StyledApp = styled.div`
  height: 100vh;
`;

const Main = styled.main`
  background-color: #f9fafb;
  padding: 0 4.8rem;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <GlobalStyles />
        <Suspense fallback={<FullPageSpinner />}>
          <StyledApp>
            <Main>
              <AppTable />
            </Main>
          </StyledApp>
        </Suspense>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
