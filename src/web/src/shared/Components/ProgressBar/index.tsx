import { Container } from "./styles";

interface ProgressBarProps {
    index: number;
}

export function ProgressBar(props: ProgressBarProps) {
    const numberOfItems = 5;

    const progressBarItems = Array.from({ length: numberOfItems }, (_, index) => (
        <i
            key={index}
            className={index == props.index ? "active" : ""}
        ></i>
    ));
    
    return (
        <Container>
            { progressBarItems }
        </Container>
    )
}