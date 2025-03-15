const studentDatabase= new Set(['jorden', 'erick', 'john', 'michel'])

const findStudent=(totalStudent,studentName)=>{
      if(totalStudent.has(studentName)){
        console.log(`Found ${studentName}`)
      }
      else {
        console.log(`${studentName} not found`)
      }
}

findStudent(studentDatabase,'erick')