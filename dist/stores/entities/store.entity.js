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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreSchema = exports.Store = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const history_entity_1 = require("../../histories/entities/history.entity");
let Store = class Store {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Store.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true, required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Store.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Store.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: (Array),
        ref: history_entity_1.History.name,
        default: [],
    }),
    (0, graphql_1.Field)(() => [history_entity_1.History], { nullable: true }),
    __metadata("design:type", Array)
], Store.prototype, "storeHistory", void 0);
Store = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true }),
    (0, graphql_1.ObjectType)()
], Store);
exports.Store = Store;
exports.StoreSchema = mongoose_1.SchemaFactory.createForClass(Store);
//# sourceMappingURL=store.entity.js.map