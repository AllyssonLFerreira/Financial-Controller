import { Container, Item, Info } from "./style"

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ( {title, value, color}:Props ) => {

    return (
        <Container>
            <Item> {title} </Item>
            <Info color={color}> R$ {value} </Info>
        </Container>
    )
}