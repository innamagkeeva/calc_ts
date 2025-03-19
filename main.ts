export default{}

// type Operation = 'add'| 'multi' | 'subtract' | 'divide'

// function calc(operation: Operation, a: number, b: number): number | string  {
//   switch (operation) {
//     case 'add':
//       return a + b
//     case 'subtract':
//           return a - b
//     case 'multi':
//         return a * b
//     case 'divide':
//       if (b === 0){
//       return 'делить на 0 нельзя'
//       }
//         return a / b 
//     default:
//       return 'выберите операцию'
//   }
  
// }

// console.log(calc('add', 5, 2));
// console.log(calc('multi', 5, 2));
// console.log(calc('divide', 5, 0));
// console.log(calc('divide', 10, 2));




// function calc(operation: Operation, a: number, b: number): number | string {
//   if (operation === 'add'){
//     return a + b
//   } else if (operation === 'subtract'){
//     return a - b
//   } else if (operation === 'multi'){
//     return a * b
//   }else if (operation === 'divide'){
//     if (b === 0){
//       return 'Делить на 0 нельзя'
//     }
//     return a / b
//   } else {
//     return 'Выберите операцию'
//   }
// }

// console.log(calc('add', 5, 2))
// console.log(calc('multi', 5, 2))
// console.log(calc('divide', 5, 0))
// console.log(calc('divide', 10, 2))






const arr: Tasks[] = []

type Tasks = 'купить хлеб' | 'почитать' | 'убрать' | 'покушать' 

function addTask (task: Tasks) {
  arr.push(task)
  
}

addTask('почитать')
addTask('покушать')
addTask('убрать')
 
console.log(arr);

 function deleteTask (task: Tasks) {
  
  
 }
  
 function setLocalStorage(kay: string, value: string): void {
  localStorage.setItem(kay, value)
}

function removeLocalStorage (kay: string) {
  localStorage.removeItem(kay)
}