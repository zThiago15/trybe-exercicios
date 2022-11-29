var age = 20;
// console.log(age); // saída 20
var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Active"] = 1] = "Active";
    StudentStatus[StudentStatus["Inactive"] = 2] = "Inactive";
    StudentStatus[StudentStatus["Paused"] = 3] = "Paused";
})(StudentStatus || (StudentStatus = {}));
var newStudent = StudentStatus.Paused;
// console.log(newStudent); // saída: 3
// enum de statusCodes
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unaunthorized"] = 401] = "Unaunthorized";
    StatusCodes[StatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
// const ok = StatusCodes.OK;
var ok = StatusCodes['OK'];
var stringBadRequest = StatusCodes[400];
var valueUnaunthorized = StatusCodes['Unaunthorized'];
console.log(ok); // saída 200
console.log(stringBadRequest); // Saída 'BadRequest'
console.log(valueUnaunthorized);
