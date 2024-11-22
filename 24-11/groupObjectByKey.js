/**
 * Group Objects by Key
 * You are provided with an array of objects, where each object has two properties: key and date. The goal is to group the objects in the array by their key property into a single output object.
 */

const input = [
    { key: 'Sample 1', date: 'data1' },
    { key: 'Sample 1', date: 'data1' },
    { key: 'Sample 2', date: 'data2' },
    { key: 'Sample 1', date: 'data1' },
    { key: 'Sample 3', date: 'data3' },
    { key: 'Sample 2', date: 'data2' },
    { key: 'Sample 4', date: 'data4' },
];

const output1 = {};
input.forEach(item => {
    if (output[item.key]) {
        output[item.key].push(item);
    } else {
        output[item.key] = [item];
    }
});

const output2 = input.reduce((acc, item) => {
    if (acc[item.key]) {
        acc[item.key].push(item);
    } else {
        acc[item.key] = [item];
    }
    return acc;
}, {});
