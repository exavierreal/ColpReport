import { useState, KeyboardEvent, FocusEvent } from "react";
import { getUnionSuggestions } from "../Api/useTeamApi";

export function useDataList() {
    const [isUnionInputFocused, setIsUnionInputFocused] = useState(false);
    const [isAssociationInputFocused, setIsAssociationInputFocused] = useState(false);
    
    const [selectedUnion, setSelectedUnion] = useState<string>('');
    const [selectedAssociation, setSelectedAssociation] = useState<string>('');
    
    const [unionOptions, setUnionOptions] = useState<string[]>(['']);
    const [associationOptions, setAssociationOptions] = useState<string[]>(['APV - Associação Paulista do Vale', 'ACP - Associação Central Paranaense']);
    
    const [selectedUnionIndex, setSelectedUnionIndex] = useState(-1);
    const [selectedAssociationIndex, setSelectedAssociationIndex] = useState(-1);
    
    const [keyboardFocusIndex, setKeyboardFocusIndex] = useState(-1);   
    

    function handleInputChange(isUnion: boolean, event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        isUnion ? setSelectedUnion(value) : setSelectedAssociation(value);

        debugger;
    }

    function handleKeyOnInput(isUnion: boolean, event: KeyboardEvent<HTMLInputElement>) {
        switch(event.key) {
            case 'ArrowUp':
                event.preventDefault();
                isUnion
                    ? setSelectedUnionIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : unionOptions.length - 1)
                    : setSelectedAssociationIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : associationOptions.length - 1);
            break;
            case 'ArrowDown':
                event.preventDefault();
                isUnion
                    ? setSelectedUnionIndex((prevIndex) => prevIndex < unionOptions.length - 1 ? prevIndex + 1 : 0)
                    : setSelectedAssociationIndex((prevIndex) => prevIndex < associationOptions.length - 1 ? prevIndex + 1 : 0);
            break;
            case 'Enter':
                event.preventDefault();

                if (isUnion) {
                    if (selectedUnionIndex !== -1) {
                        const selectedOption = unionOptions[selectedUnionIndex]
                        setSelectedUnion(selectedOption);
                    }
                    setIsUnionInputFocused(false);
                    setSelectedUnionIndex(-1);
                }
                else {
                    if (selectedAssociationIndex !== -1) {
                        const selectedOption = associationOptions[selectedAssociationIndex]
                        setSelectedAssociation(selectedOption);
                    }
                    setIsAssociationInputFocused(false);
                    setSelectedAssociationIndex(-1);
                }
            break;
        }
    }

    function handleMouseEnter(optionIndex: number) {
        setSelectedUnionIndex(optionIndex);
    }

    async function handleInputFocus(isUnion: boolean) {
        if (isUnion) {
            setIsUnionInputFocused(true);
            const data = await getUnionSuggestions("");

            const formattedOptions = data.map((item) => `${item.acronym} - ${item.name}`);
            setUnionOptions(formattedOptions);
        }
    }

    function handleInputBlur(isUnion: boolean) {
        if (isUnion) {
            setIsUnionInputFocused(false);
            setSelectedUnionIndex(-1);
        }
        else {
            setIsAssociationInputFocused(false);
            setSelectedAssociationIndex(-1);
        }
    }

    function handleOptionClick(isUnion: boolean, option: string, optionIndex: number, event: React.MouseEvent<HTMLLIElement>) {
        event.stopPropagation();

        debugger;

        if (option)  
            isUnion ? setSelectedUnion(option) : setSelectedAssociation(option);

        if(isUnion) {
            setIsUnionInputFocused(false);
            setSelectedUnionIndex(optionIndex);
        }
        else {
            setIsAssociationInputFocused(false);
            setSelectedAssociationIndex(optionIndex);
        }
        
        setKeyboardFocusIndex(-1);
    }

    return {
        isUnionInputFocused,
        isAssociationInputFocused,
        setIsUnionInputFocused,
        setIsAssociationInputFocused,
        keyboardFocusIndex,
        selectedUnion,
        selectedAssociation,
        selectedUnionIndex,
        selectedAssociationIndex,
        handleInputFocus,
        handleInputBlur,
        handleInputChange,
        handleKeyOnInput,
        handleMouseEnter,
        handleOptionClick,
        unionOptions,
        associationOptions
    }
}