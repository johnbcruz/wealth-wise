import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import {MainLayout} from './styles/Layouts'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Incomes'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';

function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

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
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: #EDFEFD;  // Right box color
    // border: 3px solid #000000;
    backdrop-filter: blur(4.5px);
    border-radius: 20px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;