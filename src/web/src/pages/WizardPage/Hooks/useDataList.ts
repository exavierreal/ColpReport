import { useState, KeyboardEvent, FocusEvent } from "react";
import { getAssociationSuggestion, getUnionSuggestions } from "../../../api/useTeamApi";
import { UnionSuggestion } from "../Interfaces/UnionSuggestions";
import { AssociationSuggestion } from "../Interfaces/AssociationSuggestion";

export function useDataList() {
    const [isUnionInputFocused, setIsUnionInputFocused] = useState(false);
    const [isAssociationInputFocused, setIsAssociationInputFocused] = useState(false);
    
    const [selectedUnion, setSelectedUnion] = useState<UnionSuggestion | null>();
    const [selectedAssociation, setSelectedAssociation] = useState<AssociationSuggestion | null>();
    
    const [unionOptions, setUnionOptions] = useState<UnionSuggestion[]>([]);
    const [associationOptions, setAssociationOptions] = useState<AssociationSuggestion[]>([]);

    const [displayUnionSelected, setDisplayUnionSelected] = useState<string>('');
    const [displayAssociationSelected, setDisplayAssociationSelected] = useState<string>('');
    
    const [selectedUnionIndex, setSelectedUnionIndex] = useState(-1);
    const [selectedAssociationIndex, setSelectedAssociationIndex] = useState(-1);
    
    const [keyboardFocusIndex, setKeyboardFocusIndex] = useState(-1);

    async function handleInputChange(isUnion: boolean, event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        
        if (isUnion) {
            setSelectedUnion(null);
            setDisplayUnionSelected(value);
            setIsUnionInputFocused(true);
            const data = await getUnionSuggestions(value);
            const options = data.map(item => item);
            setUnionOptions(options);
        }
        else {
            setSelectedAssociation(null);
            setDisplayAssociationSelected(value);

            if (selectedUnion) {
                setIsAssociationInputFocused(true);
                const data = await getAssociationSuggestion(value, selectedUnion.id);
                const options = data.map(item => item);
                setAssociationOptions(options)
            }
        }
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
                        setDisplayUnionSelected(`${selectedOption.acronym} - ${selectedOption.name}`)

                        setSelectedAssociation(null);
                        setDisplayAssociationSelected('');
                    }
                    setIsUnionInputFocused(false);
                    setSelectedUnionIndex(-1);
                }
                else {
                    if (selectedAssociationIndex !== -1) {
                        const selectedOption = associationOptions[selectedAssociationIndex]
                        setSelectedAssociation(selectedOption);
                        setDisplayAssociationSelected(`${selectedOption.acronym} - ${selectedOption.name}`);
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
            const options = data.map(item => item);
            setUnionOptions(options);
        }
        else {
            if (selectedUnion) {
                setIsAssociationInputFocused(true);
                const data = await getAssociationSuggestion("", selectedUnion.id);
                const options = data.map(item => item);
                setAssociationOptions(options);
            }
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

    function handleOptionClick(isUnion: boolean, option: UnionSuggestion, optionIndex: number, event: React.MouseEvent<HTMLLIElement>) {
        event.stopPropagation();

        const selectedOption = isUnion ? unionOptions[optionIndex] : associationOptions[optionIndex];
        isUnion ? setSelectedUnion(selectedOption) : setSelectedAssociation(selectedOption);
        isUnion ? setDisplayUnionSelected(`${option.acronym} - ${option.name}`) : setDisplayAssociationSelected(`${option.acronym} - ${option.name}`);
        isUnion ? setIsUnionInputFocused(false) : setIsAssociationInputFocused(false);
        isUnion ? setSelectedUnionIndex(optionIndex) : setSelectedAssociationIndex(optionIndex);

        if (isUnion) {
            setSelectedAssociation(null);
            setDisplayAssociationSelected('');
        }
            
        setKeyboardFocusIndex(-1);
    }

    return {
        isUnionInputFocused,
        isAssociationInputFocused,
        setDisplayUnionSelected,
        setDisplayAssociationSelected,
        setSelectedAssociation,
        setSelectedUnion,
        keyboardFocusIndex,
        selectedUnion,
        selectedAssociation,
        selectedUnionIndex,
        selectedAssociationIndex,
        displayUnionSelected,
        displayAssociationSelected,
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