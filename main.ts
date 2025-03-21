export default {}

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

// type ErrorCalc = 'Делить на 0 нельзя' | 'Выберите операцию'

// function calc(operation: Operation, a: number, b: number): number | ErrorCalc {
//   if (operation === 'add') {
//     return a + b
//   }
//   if (operation === 'subtract') {
//     return a - b
//   }
//   if (operation === 'multi') {
//     return a * b
//   }
//   if (operation === 'divide') {
//     if (!b) {
//       return 'Делить на 0 нельзя'
//     }
//     return a / b
//   }

//   return 'Выберите операцию'
// }

// console.log(calc('add', 5, 2))
// console.log(calc('multi', 5, 2))
// console.log(calc('divide', 5, 0))
// console.log(calc('divide', 10, 2))

const arr: string[] = []

function addTask(task: string) {
  arr.push(task)
}

addTask('почитать')
addTask('покушать')
addTask('убрать')

// console.log('после добавления:', arr)

function deleteTask(task: string): void {
  const foundIndex = arr.findIndex((item) => item === task)
  if (foundIndex === -1) {
    console.log('Задача не найдена')
    return
  }
  arr.splice(foundIndex, 1)
}

deleteTask('убрать')
deleteTask('умыться')
deleteTask('запустить салют')

// console.log('после удаления:', arr)

function setLocalStorage(kay: string, value: string): void {
  localStorage.setItem(kay, value)
}

function removeLocalStorage(kay: string): void {
  localStorage.removeItem(kay)
}

function showTasks(): void {
  console.log(arr)
}

showTasks()
