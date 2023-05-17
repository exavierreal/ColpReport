import { ActionButtons } from "../../../../shared/Components/Buttons/ActionButtons";
import { HeaderBar } from "../../../../shared/Components/HeaderBar";
import { ProgressBar } from "../../../../shared/Components/ProgressBar";
import { Subtitle } from "../../../../shared/Components/Subtitle";
import { WizardProps } from "../../Interfaces/WizardProps";
import { Block, Container, Content, Form, Input } from "./styles";

export function NewLeaderInfos(props: WizardProps) {
    return (
        <Container>
            <HeaderBar title="Novo Líder" leftIcon="back" rightIcon="next" />

            <Content>
                <Subtitle title="Informações Pessoais" />

                <Form>
                    <Input>
                        <label>Nome:</label>
                        <input type="text" />
                    </Input>

                    <Input>
                        <label>Sobrenome:</label>
                        <input type="text" />
                    </Input>
                    <Input>
                        <label>E-mail:</label>
                        <input type="email" />
                    </Input>
                    <Input>
                        <label>Telefone:</label>
                        <input type="text" />
                    </Input>
                    <Block id="block-1">
                        <Input>
                            <label>CEP:</label>
                            <input type="text" />
                        </Input>
                        <Input>
                            <label>UF:</label>
                            <input type="text" />
                        </Input>
                    </Block>
                    <Input>
                        <label>Cidade:</label>
                        <input type="text" />
                    </Input>
                    <Input>
                        <label>Bairro:</label>
                        <input type="text" />
                    </Input>
                    <Input>
                        <label>Endereço:</label>
                        <input type="text" />
                    </Input>
                    <Block id="block-2">
                        <Input>
                            <label>Número:</label>
                            <input type="text" />
                        </Input>
                        <Input>
                            <label>Complemento:</label>
                            <input type="text" />
                        </Input>
                    </Block>
                    <Input>
                        <label>CPF:</label>
                        <input type="text" />
                    </Input>
                    <Input>
                        <label>RG:</label>
                        <input type="text" />
                    </Input>
                    <Input>
                        <label>Tam. Camiseta:</label>
                        <input type="text" />
                    </Input>
                </Form>

                <ProgressBar index={props.index} />

                <ActionButtons />
            </Content>
        </Container>
    );
}