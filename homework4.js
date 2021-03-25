//4․ Ստեղծել myMap մեթոդ Array-ի համարար , որը կաշխատի ինչպես map մեթոդը. [].map(fn) -ը կարողանանք գրել [].myMap(fn) -ի միջոցով ։

Object.defineProperty(Array.prototype,'myMap', {
    value:function(fn){
        const newArr = [];
        for(let i in this){
            newArr.push(fn(this[i],i));
        }
        return newArr;
    },
    enumerable:false
});

console.log([1,2,3,4].myMap(()=>{
    return "Hello";
}));
console.log([1,2,3,4].myMap((value)=>{
    return value + 1;
}));
console.log([1,2,3,4].myMap((value, index)=>{
    return value * index;
}));