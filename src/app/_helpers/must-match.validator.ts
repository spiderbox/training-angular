import { FormGroup } from '@angular/forms'

export function MustMatch(name_field_one: string, name_field_two: string) {
    return (formGroup: FormGroup) => {
        const field_one = formGroup.controls[name_field_one]
        const field_two = formGroup.controls[name_field_two]

        if (field_two.errors && !field_two.errors.mustMatch) {
            return;
        }

        // set error on matchingControl if validation fails
        if (field_one.value !== field_two.value) {
            field_two.setErrors({ mustMatch: true });
        } else {
            field_two.setErrors(null);
        }
    }
}