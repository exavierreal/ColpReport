export interface WizardProps {
    index: number;
    handlePageWizard: (userHasBack: boolean, userHasClose?: boolean) => void;
}