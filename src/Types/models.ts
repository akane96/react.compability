export type ModalState = 'First' | 'Second' | 'Third'

export interface IPerson{
    name:string,
    sign:string
}

export class Person implements IPerson{
    name: string;
    sign: string;
    constructor(name:string,sign:string) {
        this.name = name
        this.sign = sign
    }
}
