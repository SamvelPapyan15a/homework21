//4․ Ստեղծել myMap մեթոդ Array-ի համարար , որը կաշխատի ինչպես map մեթոդը. [].map(fn) -ը կարողանանք գրել [].myMap(fn) -ի միջոցով ։

Array.prototype.myMap = function(fn){
    const newArr = [];
    for(let item of this){
        newArr.push(fn(item));
    }
    return newArr;
}

console.log([1,2,3,4].myMap(function(value){
    return (value % 2 == 0) ? value*value : (value+1)*2;
}));