import { Table, THeadColumn } from "./styles";
import { Item } from "../../types/Item";
import { TableItem } from "../TableItem"

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
    return (
        <Table>
            <thead>
                <tr>
                    <THeadColumn width={100}> Data </THeadColumn>
                    <THeadColumn width={130}> Categoria </THeadColumn>
                    <THeadColumn> Título </THeadColumn>
                    <THeadColumn width={150}> Valor </THeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                   <TableItem key={index} item={item} /> 
                ))}
            </tbody>
        </Table>
    )
}