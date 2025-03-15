const a = [[1, 2], [3, 4], [5, 6]]; 
const b = []; 


for (let i = 0; i < a.length; i++) {
  
    for (let j = 0; j < a[i].length; j++) {
        b[b.length] = a[i][j]; // Manually push values
    }
}

console.log(b); // Output: [1, 2, 3, 4, 5, 6]

















// without using the push 
const c=[[1,2],[3,4],[5,6]]
const d=[]


for (let k=0; k<c.length;k++){
    for (let m=0; m<c[k].length;m++){
        d[d.length]=c[k][m]

    }
}
console.log("this is d",d)
