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

type ObjTodo = {
  text: string
  status: string
} // шаблон объекта

const objTodo: ObjTodo[] = [] // массив с объектами задач  - текст и статус.

type TaskStatus = 'в процессе' | 'сделать' | 'сделано' //  только такие статусы могут быть

function addTask(task: string): void {
  objTodo.push({ text: task, status: 'сделать' }) // статус 'сделать' будет по умолчанию пока не поменяется
}

function deleteTask(task: string): void {
  const foundIndex = objTodo.findIndex((item) => item.text === task) // findIndex ищет индекс задачи
  if (foundIndex === -1) {
    console.log('Задача не найдена')
    return
  }
  objTodo.splice(foundIndex, 1) // удаляет задачу по найденному индексу
}

function setLocalStorage(kay: string, value: string): void {
  localStorage.setItem(kay, value)
}

function removeLocalStorage(kay: string): void {
  localStorage.removeItem(kay)
}

function changeStatus(task: string, newStatus: TaskStatus): void {
  const todoTask = objTodo.find((item) => item.text === task) // find ищет саму задачу по тексту, а не ее индекс
  if (todoTask) {
    todoTask.status = newStatus
    console.log(
      `Статус задачи "${todoTask.text}" изменен на "${todoTask.status}".`
    )
  } else {
    console.log('такой задачи нет')
  }
}

function showTasks(): void {
  if (objTodo.length === 0) {
    console.log('список задач пуст')
    return
  }
  console.log(objTodo)
}

addTask('почитать')
addTask('покушать')
addTask('написать код')
addTask('отдохнуть')
deleteTask('почитать')
deleteTask('погулять')

changeStatus('покушать', 'в процессе')
changeStatus('написать код', 'сделано')

showTasks()
