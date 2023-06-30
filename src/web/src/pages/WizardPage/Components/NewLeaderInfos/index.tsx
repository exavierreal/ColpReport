import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ActionButtons } from "../../../../shared/Components/Buttons/ActionButtons";
import { HeaderBar } from "../../../../shared/Components/HeaderBar";
import { ProgressBar } from "../../../../shared/Components/ProgressBar";
import { Subtitle } from "../../../../shared/Components/Titles/Subtitle";
import { WizardProps } from "../../Interfaces/WizardProps";
import { Block, Container, Content, Form, Input } from "./styles";
import { useNavigate } from "react-router-dom";
import { CancelModal } from "../../../../shared/Components/Modals/CancelModal";
import { getUserToken } from "../../../../auth/useAuth";
import { getSavedLeader, useSaveLeaderApi } from "../../../../api/useLeaderApi";
import { Leader } from "../../Interfaces/Leader";

export function NewLeaderInfos(props: WizardProps) {
    const userToken = getUserToken();
    const userId = userToken ? userToken.id : null;
    
    const navigate = useNavigate();
    const { saveLeader, isLoading, error, isLeaderSaved, setIsLeaderSaved } = useSaveLeaderApi();

    const [leader , setLeader] = useState<Leader>({
        name: '', lastname: '', email: '', phoneNumber: '', postalCode: '', uf: '', city: '',
        district: '', address: '', addressNumber: '', complement: '', cpf: '', rg: '', shirtSize: ''
    });
    
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    
    useEffect(() => {
        getSavedLeader(userId)
            .then(async (response) => {
                if (response) {
                    setLeader((prevLeader) => ({
                        ...prevLeader,
                        ...response,
                        email: userToken?.email
                    }))

                    setIsLeaderSaved(true);
                }
            })
    }, [userId]);
    
    
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        console.log(`[${name}]: ${value}`)

        setLeader((prevLeader) => ({...prevLeader, [name]: value}))

    }

    function handleCancel(choice?: string) {
        setIsCancelModalOpen(!isCancelModalOpen);

        if (choice === "yes")
            navigate("/");
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        debugger;

        saveLeader(leader);
    }
    
    return (
        <Container>
            <HeaderBar handleClick={props.handlePageWizard} title="Novo Líder" leftIcon="back" rightIcon={isLeaderSaved ? "next": ""} />

            <Content>
                <Subtitle title="Informações Pessoais" />

                <Form onSubmit={handleSubmit}>
                    <Input>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name="name" value={leader.name} onChange={handleInputChange} />
                    </Input>

                    <Input>
                        <label htmlFor="lastname">Sobrenome:</label>
                        <input type="text" name="lastname" value={leader.lastname} onChange={handleInputChange} />
                    </Input>
                    <Input>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" name="email" value={leader.email} onChange={handleInputChange} />
                    </Input>
                    <Input>
                        <label htmlFor="phoneNumber">Telefone:</label>
                        <input type="text" name="phoneNumber" value={leader.phoneNumber} onChange={handleInputChange} />
                    </Input>
                    <Block id="block-1">
                        <Input>
                            <label htmlFor="postalCode">CEP:</label>
                            <input type="text" name="postalCode" value={leader.postalCode} onChange={handleInputChange} />
                        </Input>
                        <Input>
                            <label htmlFor="uf">UF:</label>
                            <input type="text" name="uf" value={leader.uf} onChange={handleInputChange} />
                        </Input>
                    </Block>
                    <Input>
                        <label htmlFor="city">Cidade:</label>
                        <input type="text" name="city" value={leader.city} onChange={handleInputChange} />
                    </Input>
                    <Input>
                        <label htmlFor="district">Bairro:</label>
                        <input type="text" name="district" value={leader.district} onChange={handleInputChange} />
                    </Input>
                    <Input>
                        <label htmlFor="address">Endereço:</label>
                        <input type="text" name="address" value={leader.address} onChange={handleInputChange} />
                    </Input>
                    <Block id="block-2">
                        <Input>
                            <label htmlFor="addressNumber">Número:</label>
                            <input type="text" name="addressNumber" value={leader.addressNumber} onChange={handleInputChange} />
                        </Input>
                        <Input>
                            <label htmlFor="complement">Complemento:</label>
                            <input type="text" name="complement" value={leader.complement} onChange={handleInputChange} />
                        </Input>
                    </Block>
                    <Input>
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" name="cpf" value={leader.cpf} onChange={handleInputChange} />
                    </Input>
                    <Input>
                        <label htmlFor="rg">RG:</label>
                        <input type="text" name="rg" value={leader.rg} onChange={handleInputChange} />
                    </Input>
                    <Input className="mb-last">
                        <label htmlFor="shirtSize">Tam. Camiseta:</label>
                        <input type="text" name="shirtSize" value={leader.shirtSize} onChange={handleInputChange} />
                    </Input>

                    <ProgressBar index={props.index} />

                    <ActionButtons onCancel={handleCancel} saveDisabled={isLeaderSaved} />
                </Form>
            </Content>

            { isCancelModalOpen && <CancelModal onCancelConfirm={handleCancel} /> }
        </Container>
    );
}