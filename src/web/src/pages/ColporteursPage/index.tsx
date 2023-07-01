import { Icon } from "@iconify-icon/react";
import { HeaderBar } from "../../shared/Components/HeaderBar";
import { Menu } from "../../shared/Components/Menu";
import { ColporteurCategories, ColporteurEmail, ColporteurImage, Image, ColporteurInfo, ColporteurName, ColporteurSection, Container, Content, NextIcon, ColporteurList } from "./styles";
import { Category } from "./Components/Category";
import { NewButtonMob } from "../../shared/Components/Buttons/Mobile/NewButtonMob";
import { useNavigate } from "react-router-dom";
import { Subtitle } from "../../shared/Components/Titles/Subtitle";
import { useEffect, useState } from "react";
import { ColporteurModel } from "../../shared/Models/Colporteur.model.ts";
import { getColporteurs } from "../../api/useColporteurApi";
import { getUserToken } from "../../auth/useAuth";
import { useImage } from "../../shared/Hooks/useImage";

export function ColporteursPage() {
    const userToken = getUserToken();
    const userId = userToken ? userToken.id : null;
    
    const navigate = useNavigate();
    const { previewImage } = useImage();

    const [colporteurs, setColporteurs] = useState<ColporteurModel[]>();

    useEffect(() => {
        getColporteurs(userId)
            .then((response) => {
                setColporteurs(response);
                console.log(response);
            })
    }, []);

    
    function handleProfileClick() {
        console.log("profile");
    }

    function handleClickNewButton() {
        navigate('/colporteurs/new')
    }
    
    return (
        <Container>
            <HeaderBar handleClick={handleProfileClick} title="Colportores" leftIcon="profile" rightIcon="search" />

            <Content>
                <Subtitle title="Colportor" />

                <ColporteurList>
                    {colporteurs?.map((colporteur) => (
                        <ColporteurSection key={colporteur.id}>
                            <ColporteurImage>
                                <Image>
                                    <Icon icon="fe:user" width="36" className="icon" />
                                </Image>
                            </ColporteurImage>

                            <ColporteurInfo>
                                <ColporteurName>{colporteur.name} {colporteur.lastname}</ColporteurName>
                                <ColporteurEmail>teste@teste.com</ColporteurEmail>
                                
                                <ColporteurCategories>
                                    <Category type="PP">PP</Category>
                                    <Category type="IN">IN</Category>
                                    <Category type="AG">AG</Category>
                                </ColporteurCategories>
                            </ColporteurInfo>

                            <NextIcon>
                                <Icon icon="akar-icons:arrow-right" width="40" className="next-icon" />
                            </NextIcon>
                        </ColporteurSection>
                    ))}

                </ColporteurList>

                <NewButtonMob onClick={handleClickNewButton} />
            </Content>

            <Menu />
        </Container>
    )
}