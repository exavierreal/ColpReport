import { CardTitle } from "./styles";

interface SubtitleBoxProps {
    title: string;
}

export function SubtitleBox(props: SubtitleBoxProps) {
    return (
        <CardTitle>
            { props.title }
        </CardTitle>
    );
}