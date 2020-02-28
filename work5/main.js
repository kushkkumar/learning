var array=[65,56,515,69];
let mySet=new Set(array);
mySet.add('96');
mySet.add({a:1,b:2})
mySet.delete('96')
mySet.clear();
console.log(mySet)


let myMap=new Map([['a1','hello'],['a2','bye']])
myMap.set('a3','help')
console.log(myMap)




let nameWeakSet=new WeakSet();
let car1={
    make:'honda',
    model:'civic'
}
nameWeakSet.add(car1)
console.log(nameWeakSet)
