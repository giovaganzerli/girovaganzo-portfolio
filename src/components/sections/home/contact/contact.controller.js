import React  from "react";
import { controller } from 'controllerim';

class _SectionContactController {

    constructor() {
        this.state = {
            form: {
                fields: {
                    name: "",
                    email: "",
                    message: ""
                },
                error: false,
                message: ""
            }
        };
    }

    setError(value) {
        this.state.form.error = value;
    }

    setMessage(value) {
        this.state.form.message = value;
    }

    setFormData(field, value) {
        this.state.form.fields[field] = value;
    }

    handleFormSubmit(e) {
        e.preventDefault();
        if (!this.state.form.fields.name) {
            this.setError(true);
            this.setMessage("Name is required");
        } else if (!this.state.form.fields.email) {
            this.setError(true);
            this.setMessage("Email is required");
        } else if (!this.state.form.fields.message) {
            this.setError(true);
            this.setMessage("Message is required");
        } else {
            this.setError(false);
            this.setMessage("You message has been sent!!!");
        }
    };

    handleFormFieldChange(e) {
        this.setFormData(e.currentTarget.name, e.currentTarget.value);
    };
}

export const SectionContactController = controller(_SectionContactController);