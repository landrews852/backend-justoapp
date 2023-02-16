"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const items_service_1 = require("./items.service");
const items_resolver_1 = require("./items.resolver");
const item_entity_1 = require("./entities/item.entity");
const users_service_1 = require("../users/users.service");
const user_entity_1 = require("../users/entities/user.entity");
const employees_service_1 = require("../employees/employees.service");
const employee_entity_1 = require("../employees/entities/employee.entity");
const stores_service_1 = require("../stores/stores.service");
const store_entity_1 = require("../stores/entities/store.entity");
const history_service_1 = require("../histories/history.service");
const history_entity_1 = require("../histories/entities/history.entity");
let ItemsModule = class ItemsModule {
};
ItemsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: item_entity_1.Item.name, schema: item_entity_1.ItemSchema },
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
                { name: employee_entity_1.Employee.name, schema: employee_entity_1.EmployeeSchema },
                { name: store_entity_1.Store.name, schema: store_entity_1.StoreSchema },
                { name: history_entity_1.History.name, schema: history_entity_1.HistorySchema },
            ]),
        ],
        providers: [
            items_resolver_1.ItemsResolver,
            items_service_1.ItemsService,
            employees_service_1.EmployeesService,
            users_service_1.UsersService,
            stores_service_1.StoresService,
            history_service_1.HistoryService,
        ],
    })
], ItemsModule);
exports.ItemsModule = ItemsModule;
//# sourceMappingURL=items.module.js.map