import { Subtitle } from "../../../../shared/Components/Titles/Subtitle";
import { ColpParamsProps } from "../../Interfaces/ColpParamsProps";
import { Container, InfoForm, Input, Inputs, Label, Textbox } from "./styles";

export function PersonalInfoForm({ colporteur, setColporteur }: ColpParamsProps) {
    return (
        <Container>
            <Subtitle title="Informações Pessoais" />

            <InfoForm>
                <Input>
                    <Label htmlFor="name">Nome:</Label>
                    <Textbox name="name" />
                </Input>

                <Input>
                    <Label htmlFor="lastname">Sobrenome:</Label>
                    <Textbox name="lastname" />
                </Input>

                <Input>
                    <Label htmlFor="email">E-mail:</Label>
                    <Textbox name="email" />
                </Input>

                <Input>
                    <Label htmlFor="phonenumer">Telefone:</Label>
                    <Textbox name="phonenumer" />
                </Input>

                <Inputs className="two-by-one">
                    <Input>
                        <Label htmlFor="cep">CEP:</Label>
                        <Textbox name="cep" />
                    </Input>

                    <Input>
                        <Label htmlFor="uf">UF:</Label>
                        <Textbox name="uf" />
                    </Input>
                </Inputs>

                <Input>
                    <Label htmlFor="city">Cidade:</Label>
                    <Textbox name="city" />
                </Input>

                <Input>
                    <Label htmlFor="district">Bairro:</Label>
                    <Textbox name="district" />
                </Input>

                <Input>
                    <Label htmlFor="address">Endereço:</Label>
                    <Textbox name="address" />
                </Input>

                <Inputs className="one-by-two">
                    <Input>
                        <Label htmlFor="adressnumber">Número:</Label>
                        <Textbox name="adressnumber" />
                    </Input>

                    <Input>
                        <Label htmlFor="complement">Complemento</Label>
                        <Textbox name="complement" />
                    </Input>
                </Inputs>

                <Input>
                    <Label htmlFor="cpf">CPF:</Label>
                    <Textbox name="cpf" />
                </Input>

                <Input>
                    <Label htmlFor="rg">RG:</Label>
                    <Textbox name="rg" />
                </Input>

                <Input>
                    <Label htmlFor="shirtsize">Tam. Camiseta:</Label>
                    <Textbox name="shirtsize" />
                </Input>
            </InfoForm>
        </Container>
    );
}