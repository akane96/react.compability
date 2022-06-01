import {Person} from "../Types/models";
import {compatibilityObject} from "../Types/models";

export function mainAlgo(personA:Person, personB:Person) {
    //@ts-ignore
    const compatibilitySign = Number(compatibilityObject[personA.sign][personB.sign]) / 100
    const nameA = personA.name
    const nameB = personB.name
    const startNumberA = translateToNumber(nameA,nameB)
    const startNumberB = translateToNumber(nameB,nameA)
    const sumNumbers = sumStartValues(startNumberA,startNumberB)
    const resultNames = sumNumberRanks(sumNumbers) / 100
    return Math.round((resultNames+compatibilitySign)*50)
}

function translateToNumber(nameA:string,nameB:string){
    nameA = nameA.replaceAll(`ё`,'e').toLocaleLowerCase()
    nameB = nameB.replaceAll(`ё`,'e').toLocaleLowerCase()
    let nameToNumber = []
    for (let i of nameA){
        if (nameB.includes(i) ){
            nameToNumber.push(2)
        }
        else
            nameToNumber.push(1)
    }
    return Number(nameToNumber.join(''))
}

function sumStartValues(numA:number, numB:number){
    let minValue = numA.toString().length > numB.toString().length ? numB.toString() : numA.toString()
    let maxValue = numA.toString().length > numB.toString().length ? numA.toString() : numB.toString()
    const minLength = minValue.length

    for(let i = 0; i < (maxValue.length - minLength) ; i++){
        minValue += '0'
    }
    return Number(minValue) + Number(maxValue)
}

function sumNumberRanks(num:number):number{
    const arrayNumber = num.toString().split('')
    const arrayLength = arrayNumber.length
    const resultArr = []
    for (let i = 0; i < arrayLength; i+=2){
        if (i+1 >= arrayLength) {
            resultArr.push(Number(arrayNumber[i]))
            break;
        }
        let pairResult = Number(arrayNumber[i])+Number(arrayNumber[i+1])
        resultArr.push(pairResult)
    }

    if (num.toString().length == 2){
        return Number(num)
    }

    else{
       return sumNumberRanks(Number(resultArr.join('')))
    }

}

