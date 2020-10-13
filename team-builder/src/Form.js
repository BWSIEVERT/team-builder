import React from 'react';
import { useState } from 'react';

function Form() {
    const [ formData, setFormData ] = useState({
        nameInput: '',
        emailInput: '',
        roleSelect: ''
    });

    const [ formController, setFormController] = useState({
        nameInput: '',
    })

    const Controller = event => {
        if (/^[a-zA-Z]+$/.test(event.target.value)) {
            setFormController ({
                ...formController,
                [event.target.name]: event.target.value,
            });
        }
    };

    const onInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    

    return (
        <form onSubmit={event => {
            event.preventDefault();
        }}>
            <h1>
                Team Members
            </h1>
            <p>
            </p>

            <label>
                Name:
                <input
                value={formController.nameInput}
                name='nameInput'
                onChange={onInputChange, Controller}
                />
            </label>
            <br />

            <label>
                Email:
                <input
                name='emailInput'
                onChange={onInputChange}
                />
            </label>
            <br />

            <label>
                Role:
            </label>
            <select
            name='roleSelect'
            onChange={onInputChange}>
                <option value='Select a role...'>
                    Select a role...
                </option>
                <option value='Backend Engineer'>
                    Backend Engineer
                </option>
                <option value='Frontend Engineer'>
                    Frontend Engineer
                </option>
                <option value='Designer'>
                    Designer
                </option>
                <option value='Other'>
                    Other
                </option>
            </select>
            <br />

            <label>
                <button>Submit</button>
            </label>
        
        </form>
    )
}
export default Form;