import { AbstractControl, ValidationErrors} from "@angular/forms";
import { ValidatorFn } from "@angular/forms";

export function prohibitedWordValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const prohibited = nameRe.test(control.value);
        return prohibited ? { prohibitedWord: {value: control.value}} : null;
    };
}