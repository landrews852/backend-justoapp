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
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const employee_entity_1 = require("./entities/employee.entity");
let EmployeesService = class EmployeesService {
    constructor(employeeModel) {
        this.employeeModel = employeeModel;
    }
    async create(employee) {
        return await this.employeeModel.create(employee);
    }
    async update(employee) {
        return await this.employeeModel.findByIdAndUpdate(employee._id, {
            $set: {
                name: employee.name,
                email: employee.email,
                position: employee.position,
            },
        }, { new: true });
    }
    async findAll() {
        return await this.employeeModel.find().lean();
    }
    async findOne(input) {
        const employee = await this.employeeModel
            .findOne({ email: { input } }, function (err, docs) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Result: ", docs);
                return docs;
            }
        })
            .lean()
            .clone();
        if (employee)
            return employee;
        else
            return Error("There's a problem with your search");
    }
    async findById(input) {
        const employee = await this.employeeModel.findById(input);
        if (employee)
            return employee;
        else
            return Error("There's a problem with your search");
    }
    async delete(_id) {
        return await this.employeeModel.findByIdAndDelete(_id);
    }
};
EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(employee_entity_1.Employee.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EmployeesService);
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employees.service.js.map