import { defineStore } from 'pinia';

interface FormDataType {
    firstName: String;
    lastName: String;
    emailAddress: String;
    randomDataObject: object;
}

export const useMyFormData = defineStore('formdata', {
    state: (): FormDataType => ({
        firstName: '',
        lastName: '',
        emailAddress: '',
        randomDataObject: {},
    }),

    actions: {
        setMyFormData(
            firstName: string, 
            lastName: string, 
            emailAddress: string, 
            randomDataObject: object
        ): void {
            this.firstName = firstName;
            this.lastName = lastName;
            this.emailAddress = emailAddress;
            this.randomDataObject = randomDataObject;
        },
        setFirstName(firstName: string): void {
            this.firstName = firstName;
        },
        setLastName(lastName: string): void {
            this.lastName = lastName;
        },
        setEmailAddress(emailAddress: string): void {
            this.emailAddress = emailAddress;
        },
        setRandomDataObject(randomDataObject: object): void {
            this.randomDataObject = randomDataObject;
        },
    },

    getters: {
        getMyFormData(): object {
            return {
                firstName: this.firstName,
                lastName: this.lastName,
                emailAddress: this.emailAddress,
                randomDataObject: this.randomDataObject,
            };
        },
        getRandomDataObject(): object {
            return this.randomDataObject;
        }
    },
});
