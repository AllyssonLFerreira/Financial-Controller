import {TableLine, TableColumn, Category, Value} from './styles';
import { formatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import { Categories } from '../../Data/categories';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
      <TableLine>
        <TableColumn> {formatDate(item.date)} </TableColumn>
        <TableColumn>
          <Category color={Categories[item.category].color}>
            {Categories[item.category].title}
          </Category>
        </TableColumn>
        <TableColumn> {item.title} </TableColumn>
        <TableColumn>
          <Value color= {Categories[item.category].expense ? 'red' : 'green'} >
            R$ {item.value} 
          </Value>
        </TableColumn>
      </TableLine>  
    );
}