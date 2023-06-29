import { Container } from "./styles";

interface SubtitleProps {
    title: string;
}

export function Subtitle(props: SubtitleProps) {
    return (
        <Container>
            { props.title }
        </Container>
    )
}