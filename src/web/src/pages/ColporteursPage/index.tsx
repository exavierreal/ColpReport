import { Icon } from "@iconify-icon/react";
import { HeaderBar } from "../../shared/Components/HeaderBar";
import { Menu } from "../../shared/Components/Menu";
import { ColporteurCategories, ColporteurEmail, ColporteurImage, Image, ColporteurInfo, ColporteurName, ColporteurSection, Container, Content, NextIcon, ColporteurList } from "./styles";
import { Category } from "./Components/Category";
import { NewButtonMob } from "../../shared/Components/Buttons/Mobile/NewButtonMob";
import { useNavigate } from "react-router-dom";
import { Subtitle } from "../../shared/Components/Titles/Subtitle";

export function ColporteursPage() {
    const navigate = useNavigate();
    
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
                    <ColporteurSection>
                        <ColporteurImage>
                            <Image>
                                <Icon icon="fe:user" width="36" className="icon" />
                            </Image>
                        </ColporteurImage>

                        <ColporteurInfo>
                            <ColporteurName>Ricardo Salles</ColporteurName>
                            <ColporteurEmail>ricardo.salles@hotmail.com</ColporteurEmail>
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

                    <ColporteurSection>
                        <ColporteurImage>
                            <Image>
                                <Icon icon="fe:user" width="36" className="icon" />
                            </Image>
                        </ColporteurImage>

                        <ColporteurInfo>
                            <ColporteurName>Talita V. Drummond</ColporteurName>
                            <ColporteurEmail>talita.vava@gmail.com</ColporteurEmail>
                            <ColporteurCategories>
                                <Category type="AG">AG</Category>
                            </ColporteurCategories>
                        </ColporteurInfo>

                        <NextIcon>
                            <Icon icon="akar-icons:arrow-right" width="40" className="next-icon" />
                        </NextIcon>
                    </ColporteurSection>

                    <ColporteurSection>
                        <ColporteurImage>
                            <Image>
                                <Icon icon="fe:user" width="36" className="icon" />
                            </Image>
                        </ColporteurImage>

                        <ColporteurInfo>
                            <ColporteurName>Debora dos Santos</ColporteurName>
                            <ColporteurEmail>dede.gameplay107@yahoo.com</ColporteurEmail>
                            <ColporteurCategories>
                                <Category type="PP">PP</Category>
                            </ColporteurCategories>
                        </ColporteurInfo>

                        <NextIcon>
                            <Icon icon="akar-icons:arrow-right" width="40" className="next-icon" />
                        </NextIcon>
                    </ColporteurSection>

                    <ColporteurSection>
                        <ColporteurImage>
                            <Image>
                                <Icon icon="fe:user" width="36" className="icon" />
                            </Image>
                        </ColporteurImage>

                        <ColporteurInfo>
                            <ColporteurName>Audrey Xavier</ColporteurName>
                            <ColporteurEmail>audrey.msc@gmail.com</ColporteurEmail>
                            <ColporteurCategories>
                                <Category type="LD">LD</Category>
                                <Category type="PL">PL</Category>
                            </ColporteurCategories>
                        </ColporteurInfo>

                        <NextIcon>
                            <Icon icon="akar-icons:arrow-right" width="40" className="next-icon" />
                        </NextIcon>
                    </ColporteurSection>

                    <ColporteurSection>
                        <ColporteurImage>
                            <Image>
                                <Icon icon="fe:user" width="36" className="icon" />
                            </Image>
                        </ColporteurImage>

                        <ColporteurInfo>
                            <ColporteurName>Julio Cezar Ribeiro</ColporteurName>
                            <ColporteurEmail>juh.ribeiro@hotmail.com</ColporteurEmail>
                            <ColporteurCategories>
                                <Category type="CM">CM</Category>
                                <Category type="AG">AG</Category>
                            </ColporteurCategories>
                        </ColporteurInfo>

                        <NextIcon>
                            <Icon icon="akar-icons:arrow-right" width="40" className="next-icon" />
                        </NextIcon>
                    </ColporteurSection>

                    <ColporteurSection>
                        <ColporteurImage>
                            <Image>
                                <Icon icon="fe:user" width="36" className="icon" />
                            </Image>
                        </ColporteurImage>

                        <ColporteurInfo>
                            <ColporteurName>Daniel Andrade</ColporteurName>
                            <ColporteurEmail>daniel.daniel@hotmail.com</ColporteurEmail>
                            <ColporteurCategories>
                                <Category type="IN">IN</Category>
                                <Category type="IG">IG</Category>
                            </ColporteurCategories>
                        </ColporteurInfo>

                        <NextIcon>
                            <Icon icon="akar-icons:arrow-right" width="40" className="next-icon" />
                        </NextIcon>
                    </ColporteurSection>
                </ColporteurList>

                <NewButtonMob onClick={handleClickNewButton} />
            </Content>

            <Menu />
        </Container>
    )
}