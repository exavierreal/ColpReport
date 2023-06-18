export interface ActionButtonProps {
    onCancel: () => void;
    onSave?: () => void;
    saveDisabled?: boolean;
}