import React, { useState } from 'react';
import styled from "styled-components";
import { PageLayout, MainLayout } from './styles/Layouts';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Incomes';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';



function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    return active === 1 || active === 2 ? <Dashboard />
         : active === 3 ? <Income />
         : active === 4 ? <Expenses />
         : <Dashboard />;
  };
  

  return (
    <AppStyled className="App">
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>
            {displayData()}
          </main>
        </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  position: relative;
  main {
    flex: 1;
  }
`;

export default App;
