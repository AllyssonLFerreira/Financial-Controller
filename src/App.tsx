import { useState, useEffect } from "react";

import { Container, Header, Body } from "./App.styles";

import { TableArea } from "./Components/TableArea";
import { InfoArea } from "./Components/InfoArea";

import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { Categories } from "./Data/categories";
import { items } from "./Data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]> ([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) =>{
    setCurrentMonth(newMonth)
  };

  return (
    <Container>

      <Header>
        <h1>Controle Financeiro</h1>
      </Header>

      <Body>
        {/* Area de informações */}
        <InfoArea 
          currentMonth={currentMonth} 
          onMonthChange={handleMonthChange}  
        />
        <TableArea list={filteredList}/>

      </Body>
    </Container>
  )
}

export default App;
