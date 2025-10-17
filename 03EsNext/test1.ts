const data = [42, { key: 'value' }, [1, 2, 3], "string", { anotherKey: 123 }]

const result = [];

for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'object' && !Array.isArray(data[i])) {
        result.push(true)
    } else {
        result.push(false);
    }
}
console.log(result);