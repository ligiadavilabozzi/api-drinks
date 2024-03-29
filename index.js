window.onload = () => {
    const init = () => {
        debug = true
        const isEmpty = item => {
            let result = true
            if (
                item !== undefined &&
                item !== '' &&
                item !== null &&
                ((Number.isInteger(item) && item >= 0) || item.length > 0)
            ) {
                return false
            } else {
                let itemStr = JSON.stringify(item)
                result = itemStr !== undefined && itemStr.replace(/{|}|\[|\]|"|'|`|null/g, '').length > 0 ? false : true
            }
            return result
        }
        const sanitizeStr = (str, type = 'default') => {
            let newStr = str,
                originalStr = str,
                validators = []
            const spacesConsecutive = [/\s{2,}/g, ' '],
                accentuationVowelA = [/à|ã|â|ä|á/g, 'a'],
                accentuationVowelAUpper = [/À|Ã|Â|Ä|Á/g, 'A'],
                accentuationVowelE = [/è|ê|ë|é/g, 'e'],
                accentuationVowelEUpper = [/È|Ê|Ë|É/g, 'E'],
                accentuationVowelI = [/ì|î|ï|í/g, 'i'],
                accentuationVowelIUpper = [/Ì|Î|Ï|Í/g, 'I'],
                accentuationVowelO = [/ò|õ|ô|ö|ó/g, 'o'],
                accentuationVowelOUpper = [/Ò|Õ|Ô|Ö|Ó/g, 'O'],
                accentuationVowelU = [/ù|û|ü|ú/g, 'u'],
                accentuationVowelUUpper = [/Ù|Û|Ü|Ú/g, 'U'],
                accentuationC = [/ç/g, 'c'],
                accentuationCUpper = [/Ç/g, 'C'],
                accentuationN = [/ñ/g, 'n'],
                accentuationNUpper = [/Ñ/g, 'N'],
                notAlfaNum = [/[^\d|\w|\s|-]/gi, ''],
                spaceAny = [/\s/g],
                duplicatedHyphens = [/-{2,}/g, '-'],
                duplicatedUnderlines = [/_{2,}/g, '_'],
                hyphenToUnderline = [/-/g, '_'],
                underlineToHyphen = [/_/g, '-']
            defaultValidation = () => validators.push(spacesConsecutive, accentuationVowelA, accentuationVowelAUpper, accentuationVowelE, accentuationVowelEUpper, accentuationVowelI, accentuationVowelIUpper, accentuationVowelO, accentuationVowelOUpper, accentuationVowelU, accentuationVowelUUpper, accentuationC, accentuationCUpper, accentuationN, accentuationNUpper, notAlfaNum, spaceAny, spacesConsecutive, duplicatedHyphens, duplicatedUnderlines)
            switch (type) {
                case 'text':
                    validators.push(spacesConsecutive)
                    break
                case 'class':
                    str = str.toLowerCase()
                    spaceAny.push('-')
                    validators.unshift(underlineToHyphen)
                    defaultValidation()
                    break
                case 'id':
                    spaceAny.push('_')
                    validators.unshift(hyphenToUnderline)
                    defaultValidation()
                    break
                default:
                    spaceAny.push(' ')
                    defaultValidation()
            }
            for (validator of validators) {
                if (type === 'class') {
                    newStr = newStr.toLowerCase()
                }
                newStr = newStr.replace(validator[0], validator[1])
                if (type === 'class') {
                    newStr = newStr.toLowerCase()
                }
            }
            return newStr
        }
        const queryParamsData = {
            alcoholic: '',
            alcoholicList: false,
            category: '',
            categoryList: false,
            glass: '',
            glassList: false,
            ingredient: '',
            ingredientId: '',
            ingredientDetail: false,
            drinkId: '',
            firstLetter: '',
            nameSearch: '',
        }
        const drinkData = {
            id: '',
            drink: '',
            category: '',
            IBA: '',
            alcoholic: '',
            glass: '',
            instructions: '',
            thumb: '',
            ingredients: [],
        }
        const ingredientData = {
            id: '',
            ingredient: '',
            description: '',
            type: '',
            alcohol: '',
            ABV: '',
        }
        const dataModels = {
            queryParams: queryParamsData,
            drink: drinkData,
            drinks: [],
            ingredient: ingredientData,
            ingredients: [],
            lists: {
                categories: [],
                alcoholic: [],
                glasses: [],
            }

        }
        let dataStored = dataModels,
            dataTempo = undefined,

    }
    init()
}