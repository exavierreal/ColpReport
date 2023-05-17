import { Icon } from "@iconify-icon/react";
import { ActionButtons } from "../../../../shared/Components/Buttons/ActionButtons";
import { HeaderBar } from "../../../../shared/Components/HeaderBar";
import { ProgressBar } from "../../../../shared/Components/ProgressBar";
import { Subtitle } from "../../../../shared/Components/Subtitle";
import { SubtitleBox } from "../../../../shared/Components/SubtitleBox";
import { Button, CameraIcon, CardBox, Categories, CategoriesBoxes, CategoryBox, Container, ContentBox, MainImage, Picture, Subheading } from "./styles";
import { WizardProps } from "../../Interfaces/WizardProps";

export function NewLeader(props: WizardProps) {
    return (
        <Container>
            <HeaderBar handleClick={props.handlePageWizard} title="Novo Líder" leftIcon="back" rightIcon="next" />

            <CardBox className="mt-first">
                <SubtitleBox title="Definição de Metas" />

                <ContentBox>

                    <Picture>
                        <MainImage>
                            <Icon icon="fe:user" className="user-icon" width="100" />
                        </MainImage>

                        <CameraIcon>
                            <Icon icon="akar-icons:camera" width="24" />
                        </CameraIcon>
                    </Picture>

                    <Subheading className="price">R$ 1.000,00</Subheading>

                    <Button>Definir Meta</Button>
                </ContentBox>
            </CardBox>

            <CardBox>
                <SubtitleBox title="Colporta desde" />

                <ContentBox>
                    <Subheading className="since-date">Dez/2021</Subheading>
                    <Button>DefinirData</Button>
                </ContentBox>
            </CardBox>

            <Categories>
                <Subtitle title="Categoria(s)" />

                <CategoriesBoxes>
                    <CategoryBox type="button" value="Porta em Porta" />
                    <CategoryBox type="button" value="Agendamento" />
                    <CategoryBox type="button" value="Indicação" />
                    <CategoryBox type="button" value="Outros" />
                </CategoriesBoxes>
            </Categories>

            <ProgressBar index={props.index} />

            <ActionButtons />
        </Container>
    );
}