exports.add = function(i, j) {
    return i + j;
};

exports.mul = function(i, j) {
    return i * j;
};

exports.div = function(i, j) {
    return i / j;
};

exports.sub = function(i, j) {
    return i - j;
};

// Test function
function test(description, actual, expected) {
    if (actual === expected) {
        console.log(`${description} PASS`);
    } else {
        console.log(`${description} FAIL`);
    }
}

// Test Cases
test('add(5, 2)', exports.add(5, 2), 7);
test('add(5, 2)', exports.add(5, 2), 8);

test('sub(5, 2)', exports.sub(5, 2), 3);
test('sub(5, 2)', exports.sub(5, 2), 5);

test('mul(5, 2)', exports.mul(5, 2), 10);
test('mul(5, 2)', exports.mul(5, 2), 12);

test('div(10, 2)', exports.div(10, 2), 5);
test('div(10, 2)', exports.div(10, 2), 2);

