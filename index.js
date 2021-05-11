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
    }
    init()
}