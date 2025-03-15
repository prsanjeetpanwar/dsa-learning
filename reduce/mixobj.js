const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 }
  ];

  const result =people.reduce((acc,obj)=>{
    acc[obj.age]=acc[obj.age]||[];
    acc[obj.age].push(obj)
    return acc

  },{})

  console.log(result)