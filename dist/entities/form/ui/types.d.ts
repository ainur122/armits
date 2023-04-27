export interface IFormItemBaseProps<T> {
    name: keyof T;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
}
