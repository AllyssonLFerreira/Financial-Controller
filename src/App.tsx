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
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);


  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;
    for(let i in filteredList) {
      if(Categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  },[filteredList]);

  const handleMonthChange = (newMonth: string) =>{
    setCurrentMonth(newMonth)
  };

  return (
    <Container>

      <Header>
        <h1>Controle Financeiro</h1>
      </Header>

      <Body>
        <InfoArea 
          currentMonth={currentMonth} 
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}  
        />
        <TableArea list={filteredList}/>

      </Body>
    </Container>
  )
}

export default App;
