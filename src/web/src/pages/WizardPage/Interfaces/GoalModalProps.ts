export interface GoalModalProps {
    onCloseModal: () => void;
    onSaveGoal: (value: number) => void;
    initialValue: number;
}