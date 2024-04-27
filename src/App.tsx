import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import AppContextProvider from "./context/AppContext";
import FullPageSpinner from "./ui/FullPageSpinner";

const AppTable = lazy(() => import("./ui/AppTable"));

const StyledApp = styled.div`
  height: 100vh;
`;

const Main = styled.main`
  background-color: #f9fafb;
  padding: 4rem 4.8rem 6.4rem;
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
