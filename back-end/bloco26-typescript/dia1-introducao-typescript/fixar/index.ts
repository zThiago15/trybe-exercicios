let age = 20;

// console.log(age); // saída 20

enum StudentStatus {
  Active = 1,
  Inactive,
  Paused
} 

let newStudent: StudentStatus = StudentStatus.Paused;
// console.log(newStudent); // saída: 3

// enum de statusCodes
enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unaunthorized,
  PaymentRequired,
  Forbidden,
  NotFound
}

// const ok = StatusCodes.OK;
const ok = StatusCodes['OK']; 
const stringBadRequest = StatusCodes[400];
const valueUnaunthorized = StatusCodes['Unaunthorized'];

console.log(ok); // saída 200
console.log(stringBadRequest); // Saída 'BadRequest'
console.log(valueUnaunthorized); // saída 401 (incremento do valor BadRequest(400))

