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
exports.StoresResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const stores_service_1 = require("./stores.service");
const store_entity_1 = require("./entities/store.entity");
const create_store_input_1 = require("./dto/create-store.input");
const update_store_input_1 = require("./dto/update-store.input");
const find_store_input_1 = require("./dto/find-store.input");
const history_service_1 = require("../histories/history.service");
const history_entity_1 = require("../histories/entities/history.entity");
let StoresResolver = class StoresResolver {
    constructor(storesService, historyService) {
        this.storesService = storesService;
        this.historyService = historyService;
    }
    async createStore(store) {
        console.log(store);
        return this.storesService.create(store);
    }
    async updateStore(store) {
        console.log(store);
        return this.storesService.update(store);
    }
    async findAll() {
        return this.storesService.findAll();
    }
    async store(input) {
        if (input._id) {
            return this.storesService.findById(input._id);
        }
        if (input.name) {
            return this.storesService.findOne(input.name);
        }
        else
            return Error('Es necesario el "Nombre" o el "ID" para realizar la búsqueda');
    }
    async deleteStore(_id) {
        return await this.storesService.delete(_id);
    }
    async storeHistory(parent) {
        return this.historyService.findByRelationId(parent._id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => store_entity_1.Store),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_store_input_1.CreateStoreInput]),
    __metadata("design:returntype", Promise)
], StoresResolver.prototype, "createStore", null);
__decorate([
    (0, graphql_1.Mutation)(() => store_entity_1.Store),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_store_input_1.UpdateStoreInput]),
    __metadata("design:returntype", Promise)
], StoresResolver.prototype, "updateStore", null);
__decorate([
    (0, graphql_1.Query)(() => [store_entity_1.Store], { name: 'stores' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoresResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => store_entity_1.Store),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_store_input_1.FindStoreInput]),
    __metadata("design:returntype", Promise)
], StoresResolver.prototype, "store", null);
__decorate([
    (0, graphql_1.Mutation)(() => store_entity_1.Store),
    __param(0, (0, graphql_1.Args)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoresResolver.prototype, "deleteStore", null);
__decorate([
    (0, graphql_1.ResolveField)(() => history_entity_1.History),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [store_entity_1.Store]),
    __metadata("design:returntype", Promise)
], StoresResolver.prototype, "storeHistory", null);
StoresResolver = __decorate([
    (0, graphql_1.Resolver)(() => store_entity_1.Store),
    __metadata("design:paramtypes", [stores_service_1.StoresService,
        history_service_1.HistoryService])
], StoresResolver);
exports.StoresResolver = StoresResolver;
//# sourceMappingURL=stores.resolver.js.map