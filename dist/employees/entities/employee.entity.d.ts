import * as mongoose from 'mongoose';
import { History } from 'src/histories/entities/history.entity';
export declare type EmployeeDocument = Employee & mongoose.Document;
export declare class Employee {
    _id: string;
    email: string;
    name: string;
    position: string;
    employeeHistory: History[];
}
export declare const EmployeeSchema: mongoose.Schema<Employee, mongoose.Model<Employee, any, any, any, any>, {}, {}, {}, {}, "type", Employee>;
