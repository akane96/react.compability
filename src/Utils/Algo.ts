import {Person} from "../Types/models";
import {compatibilityObject} from "../Types/models";

export function mainAlgo(personA:Person, personB:Person) {
    //@ts-ignore
    return compatibilityObject[personA.sign][personB.sign]

}
