"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const employees_service_1 = require("./employees.service");
const employee_entity_1 = require("./entities/employee.entity");
const create_employee_input_1 = require("./dto/create-employee.input");
const update_employee_input_1 = require("./dto/update-employee.input");
const find_employee_input_1 = require("./dto/find-employee.input");
const history_service_1 = require("../histories/history.service");
let EmployeesResolver = class EmployeesResolver {
    constructor(employeesService, historyService) {
        this.employeesService = employeesService;
        this.historyService = historyService;
    }
    async createEmployee(employee) {
        return this.employeesService.create(employee);
    }
    async updateEmployee(employee) {
        console.log(employee);
        return this.employeesService.update(employee);
    }
    async findAll() {
        return this.employeesService.findAll();
    }
    async employee(input) {
        if (input._id) {
            return this.employeesService.findById(input._id);
        }
        if (input.email) {
            return this.employeesService.findOne(input.email);
        }
        else
            return Error('Es necesario el "Correo" o el "ID" para realizar la búsqueda');
    }
    async deleteEmployee(_id) {
        return await this.employeesService.delete(_id);
    }
    async employeeHistory(parent) {
        return this.historyService.findByRelationId(parent._id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => employee_entity_1.Employee),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_input_1.CreateEmployeeInput]),
    __metadata("design:returntype", Promise)
], EmployeesResolver.prototype, "createEmployee", null);
__decorate([
    (0, graphql_1.Mutation)(() => employee_entity_1.Employee),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_employee_input_1.UpdateEmployeeInput]),
    __metadata("design:returntype", Promise)
], EmployeesResolver.prototype, "updateEmployee", null);
__decorate([
    (0, graphql_1.Query)(() => [employee_entity_1.Employee], { name: 'employees' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => employee_entity_1.Employee, { name: 'employee' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_employee_input_1.FindEmployeeInput]),
    __metadata("design:returntype", Promise)
], EmployeesResolver.prototype, "employee", null);
__decorate([
    (0, graphql_1.Mutation)(() => employee_entity_1.Employee),
    __param(0, (0, graphql_1.Args)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeesResolver.prototype, "deleteEmployee", null);
__decorate([
    (0, graphql_1.ResolveField)(() => History),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employee_entity_1.Employee]),
    __metadata("design:returntype", Promise)
], EmployeesResolver.prototype, "employeeHistory", null);
EmployeesResolver = __decorate([
    (0, graphql_1.Resolver)(() => employee_entity_1.Employee),
    __metadata("design:paramtypes", [employees_service_1.EmployeesService,
        history_service_1.HistoryService])
], EmployeesResolver);
exports.EmployeesResolver = EmployeesResolver;
//# sourceMappingURL=employees.resolver.js.map