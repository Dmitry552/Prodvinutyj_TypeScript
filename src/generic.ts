// const cars: string[] = ['Ford', 'Audi'];
// const cars2: Array<string> = ['Ford', 'Audi'];

const promis = new Promise<string | number>(resolve => {
  setTimeout(() => {
    resolve('Promis resolve')
  }, 2000)
})
//или так 
const promis2: Promise<number | string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('Promis resolve')
  }, 2000)
})

promis.then(data => {
  console.log(data);
})

function mergeObjects<T>(a: T, b: T): T  {
  return Object.assign({}, a, b);
}
function mergeObjects2<T extends object, R extends object>(a: T, b?: R): T & R  {
  return Object.assign({}, a, b);
}

const merge = mergeObjects({name: 'Vladilen'}, {age: 26});
console.log(merge.age)
console.log(merge.name)
const merge2 = mergeObjects2({model: "Ford"}, {year: 2010});
console.log(merge2.model)
console.log(merge2.year)
const merge3 = mergeObjects2({a:'aaa'});
console.log(merge3)

//===========
interface ILength {
  length: number
}
function withCount<T extends ILength>(value: T): {value: T, count: string} {
  return {
    value,
    count: `В этом объекте ${value.length} символов`
  } 
}
console.log(withCount('Hello TypeScript'))
console.log(withCount({length: 25}))

//==============
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}
const person = {
  name: 'Vladilen',
  age: 26,
}
console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'age'))
//console.log(getObjectValue(person, 'job'))

//==========
class Collection<T extends number | string | boolean> {
  constructor(private _items: T[] = []) {}
  add(item: T) {
    this._items.push(item)
  }
  remove(item: T) {
    this._items = this._items.filter(i => i !== item)
  }
  get items(): T[] {
    return this._items
  }
}
const strings = new Collection<string>(['I', 'Am', 'Strings'])
strings.add('!')
strings.remove('Am')
console.log(strings.items)
// const objs = new Collection([{a: 1}, {b: 2}])
// objs.remove({b: 2})
// console.log(objs.items)

//=========
interface Car {
  model: string
  year: number
}
function createValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {}
  if(model.length > 3) car.model = model
  if(year > 2000) car.year = year

  return car as Car
}

//=======
const cars: Readonly<Array<string>> = ['Ford', 'Audi']
//cars.shift()
cars[1]

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020
}
//ford.model = 'Ferrari';
