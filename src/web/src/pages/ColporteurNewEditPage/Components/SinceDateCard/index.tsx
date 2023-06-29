import { Icon } from "@iconify-icon/react";
import { SubtitleBox } from "../../../../shared/Components/Titles/SubtitleBox";
import { FormatDatePresentation } from "../../../../shared/Utils/FormatDatePresentation";
import { ColpParamsProps } from "../../Interfaces/ColpParamsProps";
import { Container, Content, FullStar, HalfStar, SinceDate, Stars } from "./styles";
import { DefineButtonMob } from "../../../../shared/Components/Buttons/Mobile/DefineButtonMob";
import { CalculateStars } from "../Utils/CalculateStars";
import { FormEvent, useState } from "react";
import { SinceDateModal } from "../../../../shared/Components/Modals/SinceDateModal";

export function SinceDateCard({ colporteur, setColporteur }: ColpParamsProps) {
    const { fullStars, halfStar } = CalculateStars(colporteur.sinceDate);
    const [isSinceDateModalOpen, setIsSinceDateModalOpen ] = useState(false);

    function handleToggleSinceDateModal(event?: FormEvent) {
        if (event)
            event.preventDefault();

        setIsSinceDateModalOpen(!isSinceDateModalOpen);
    }

    function handleSaveSinceDate(date: Date) {
        setColporteur({ ...colporteur, sinceDate: date })
    }

    return (
        <Container>
            <SubtitleBox title="Colporta desde" />

            <Content>
                <SinceDate>{FormatDatePresentation(colporteur.sinceDate)}</SinceDate>

                <Stars>
                    {Array.from({ length: fullStars }, (_, index) => (
                        <FullStar src='/assets/akar-icons_star-full.svg' />
                    ))}

                    { halfStar && <HalfStar src='/assets/akar-icons_star-half.svg' /> }

                    { !halfStar && <Icon icon="akar-icons:star" width="22" className="star-date-icons" /> }
                </Stars>

                <DefineButtonMob text="Definir Data" onClick={handleToggleSinceDateModal} />
            </Content>

            { isSinceDateModalOpen && <SinceDateModal initialValue={colporteur.sinceDate} onClose={handleToggleSinceDateModal} onSave={handleSaveSinceDate} /> }
        </Container>
    )
}