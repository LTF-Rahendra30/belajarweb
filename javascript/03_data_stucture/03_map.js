// Map is similar to Object data structure, the main principle is (key-value) but Map can use any data type for its key, unlike Object where only String data type can be its Key.

// ========== CREATE MAP ===========

const productMap = new Map([
    ['shoes','Adidas'],
    ['price',1000],
    ['size',43]
]);

console.log(productMap)
// Output: Map(3) { 'shoes' => 'Adidas', 'price' => 1000, 'size' => 43 }

// ======== Stores Value in the Map =========

// With set, first as the key, and second as the value

const map = new Map();
map.set('name','bob');
console.log(map);
// Output: Map(1) { 'name' => 'bob' }

// With Number as the key
map.set(1,'chloe');
console.log(map);
// Output: Map(2) { 'name' => 'bob', 1 => 'chloe' }