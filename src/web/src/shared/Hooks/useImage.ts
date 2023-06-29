import { FormEvent, useRef, useState } from "react";

export function useImage() {
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [filename, setFilename] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    function isSupportedFileType (file: File) {
        const allowedExtensions = ['.jpeg', '.jpg', '.png'];
        const fileExtension = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
    
        return allowedExtensions.includes(fileExtension);
    }

    function handleImageUpload (event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();

        const file = event.target.files?.[0];
    
        if (file && isSupportedFileType(file)) {
            const reader = new FileReader();
            setFilename(file.name);
    
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            }
    
            reader.readAsDataURL(file);
        }
    }

    function handleButtonClick(event: FormEvent) {
        event.preventDefault();

        if (inputRef.current)
            inputRef.current.click();
    }

    return {
        previewImage,
        filename,
        inputRef,
        handleImageUpload,
        handleButtonClick
    };
}