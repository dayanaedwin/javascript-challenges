
function flattenObject(obj, prefix = '', result = {}) {
    for (let key in obj) {
        const keyName = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            flattenObject(obj[key], keyName, result);
        } else {
            result[keyName] = obj[key];
        }
    }
    return result;
}


console.log(flattenObject({
    a: 1,
    b: {
        b1: 2,
        b2: {
            b21: 3,
            b22: {
                b221: 4
            }
        }
    },
    c: {
        c1: 5
    }
}));
