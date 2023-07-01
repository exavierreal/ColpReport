import { ChangeEvent } from "react";
import { Subtitle } from "../../../../shared/Components/Titles/Subtitle";
import { ColpParamsProps } from "../../Interfaces/ColpParamsProps";
import { Container, InfoForm, Input, Inputs, Label, Textbox } from "./styles";

export function PersonalInfoForm({ colporteur, setColporteur, emptyInputs, setEmptyInputs }: ColpParamsProps) {
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setColporteur((prevColporteur) => ({...prevColporteur, [name]: value}));

        if (name === 'name' || name === 'lastname' || name === 'email') {
            
            if (value.trim().length < 2) {
                if(!emptyInputs!.includes(name)){
                    setEmptyInputs!((prevEmptyInputs) => [...prevEmptyInputs, name]);
                }
            }else {
                setEmptyInputs!((prevEmptyInputs) => prevEmptyInputs.filter((input) => input !== name));
            }
        } 

        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
            if (!emailRegex.test(value)) {
                if(!emptyInputs!.includes(name))
                    setEmptyInputs!((prevEmptyInputs) => [...prevEmptyInputs, name]);
            } else {
                if(emptyInputs!.includes(name))
                    setEmptyInputs!((prevEmptyInputs) => prevEmptyInputs.filter((input) => input !== name));
            }
          }
    }
    
    return (
        <Container>
            <Subtitle title="Informações Pessoais" />

            <InfoForm>
                <Input>
                    <Label htmlFor="name">Nome:</Label>
                    <Textbox type="text" name="name" value={colporteur.name} onChange={handleInputChange} className={emptyInputs!.includes("name") ? "error" : ""} />
                </Input>

                <Input className={emptyInputs!.includes("lastname") ? "error" : ""}>
                    <Label htmlFor="lastname">Sobrenome:</Label>
                    <Textbox type="text" name="lastname" value={colporteur.lastname} onChange={handleInputChange} />
                </Input>

                <Input className={emptyInputs!.includes("email") ? "error" : ""}>
                    <Label htmlFor="email">E-mail:</Label>
                    <Textbox type="email" name="email" value={colporteur.email} onChange={handleInputChange} />
                </Input>

                <Input>
                    <Label htmlFor="phoneNumber">Telefone:</Label>
                    <Textbox type="text" name="phoneNumber" value={colporteur.phoneNumber} onChange={handleInputChange} />
                </Input>

                <Inputs className="two-by-one">
                    <Input>
                        <Label htmlFor="postalCode">CEP:</Label>
                        <Textbox  type="text" name="postalCode" value={colporteur.postalCode} onChange={handleInputChange} />
                    </Input>

                    <Input>
                        <Label htmlFor="uf">UF:</Label>
                        <Textbox type="text" name="uf" value={colporteur.uf} onChange={handleInputChange} />
                    </Input>
                </Inputs>

                <Input>
                    <Label htmlFor="city">Cidade:</Label>
                    <Textbox type="text" name="city" value={colporteur.city} onChange={handleInputChange} />
                </Input>

                <Input>
                    <Label htmlFor="district">Bairro:</Label>
                    <Textbox type="text" name="district" value={colporteur.district} onChange={handleInputChange} />
                </Input>

                <Input>
                    <Label htmlFor="address">Endereço:</Label>
                    <Textbox type="text" name="address" value={colporteur.address} onChange={handleInputChange} />
                </Input>

                <Inputs className="one-by-two">
                    <Input>
                        <Label htmlFor="addressNumber">Número:</Label>
                        <Textbox type="text" name="addressNumber" value={colporteur.addressNumber} onChange={handleInputChange} />
                    </Input>

                    <Input>
                        <Label htmlFor="complement">Complemento</Label>
                        <Textbox type="text" name="complement" value={colporteur.complement} onChange={handleInputChange} />
                    </Input>
                </Inputs>

                <Input>
                    <Label htmlFor="cpf">CPF:</Label>
                    <Textbox type="text" name="cpf" value={colporteur.cpf} onChange={handleInputChange} />
                </Input>

                <Input>
                    <Label htmlFor="rg">RG:</Label>
                    <Textbox type="text" name="rg" value={colporteur.rg} onChange={handleInputChange} />
                </Input>

                <Input>
                    <Label htmlFor="shirtSize">Tam. Camiseta:</Label>
                    <Textbox type="text" name="shirtSize" value={colporteur.shirtSize} onChange={handleInputChange} />
                </Input>
            </InfoForm>
        </Container>
    );
}