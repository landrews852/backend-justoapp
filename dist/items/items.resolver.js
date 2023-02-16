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
exports.ItemsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const items_service_1 = require("./items.service");
const item_entity_1 = require("./entities/item.entity");
const create_item_input_1 = require("./dto/create-item.input");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const find_item_input_1 = require("./dto/find-item.input");
const update_item_input_1 = require("./dto/update-item.input");
const history_entity_1 = require("../histories/entities/history.entity");
const history_service_1 = require("../histories/history.service");
let ItemsResolver = class ItemsResolver {
    constructor(itemsService, usersService, historyService) {
        this.itemsService = itemsService;
        this.usersService = usersService;
        this.historyService = historyService;
    }
    async createItem(item) {
        console.log(item);
        return this.itemsService.create(item);
    }
    async updateItem(item) {
        console.log(item);
        return this.itemsService.update(item);
    }
    async findAll() {
        return this.itemsService.findAll();
    }
    async item(input) {
        if (input._id) {
            return this.itemsService.findById(input._id);
        }
        if (input.serialNumber) {
            return this.itemsService.findBySerialNumber(input.serialNumber);
        }
        else
            return Error('Es necesario el "Número de serie" o el "ID" para realizar la búsqueda');
    }
    async deleteItem(_id) {
        return await this.itemsService.delete(_id);
    }
    async createdBy(parent) {
        return this.usersService.findById(parent.createdBy);
    }
    async itemHistory(parent) {
        return this.historyService.findByItemId(parent._id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => item_entity_1.Item),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_item_input_1.CreateItemInput]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "createItem", null);
__decorate([
    (0, graphql_1.Mutation)(() => item_entity_1.Item),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_item_input_1.UpdateItemInput]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "updateItem", null);
__decorate([
    (0, graphql_1.Query)(() => [item_entity_1.Item], { name: 'items' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => item_entity_1.Item),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_item_input_1.FindItemInput]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "item", null);
__decorate([
    (0, graphql_1.Mutation)(() => item_entity_1.Item),
    __param(0, (0, graphql_1.Args)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "deleteItem", null);
__decorate([
    (0, graphql_1.ResolveField)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_entity_1.Item]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "createdBy", null);
__decorate([
    (0, graphql_1.ResolveField)(() => history_entity_1.History),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_entity_1.Item]),
    __metadata("design:returntype", Promise)
], ItemsResolver.prototype, "itemHistory", null);
ItemsResolver = __decorate([
    (0, graphql_1.Resolver)(() => item_entity_1.Item),
    __metadata("design:paramtypes", [items_service_1.ItemsService,
        users_service_1.UsersService,
        history_service_1.HistoryService])
], ItemsResolver);
exports.ItemsResolver = ItemsResolver;
//# sourceMappingURL=items.resolver.js.map