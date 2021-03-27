"use strict";
// const cars: string[] = ['Ford', 'Audi'];
// const cars2: Array<string> = ['Ford', 'Audi'];
const promis = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promis resolve');
    }, 2000);
});
//или так 
const promis2 = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promis resolve');
    }, 2000);
});
promis.then(data => {
    console.log(data);
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
function mergeObjects2(a, b) {
    return Object.assign({}, a, b);
}
const merge = mergeObjects({ name: 'Vladilen' }, { age: 26 });
console.log(merge.age);
console.log(merge.name);
const merge2 = mergeObjects2({ model: "Ford" }, { year: 2010 });
console.log(merge2.model);
console.log(merge2.year);
const merge3 = mergeObjects2({ a: 'aaa' });
console.log(merge3);
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
}
console.log(withCount('Hello TypeScript'));
console.log(withCount({ length: 25 }));
//==============
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Vladilen',
    age: 26,
};
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
//console.log(getObjectValue(person, 'job'))
//==========
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'Am', 'Strings']);
strings.add('!');
strings.remove('Am');
console.log(strings.items);
function createValidateCar(model, year) {
    const car = {};
    if (model.length > 3)
        car.model = model;
    if (year > 2000)
        car.year = year;
    return car;
}
//=======
const cars = ['Ford', 'Audi'];
//cars.shift()
cars[1];
const ford = {
    model: 'Ford',
    year: 2020
};
//ford.model = 'Ferrari';
