"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemSchema = exports.Item = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = __importStar(require("mongoose"));
const history_entity_1 = require("../../histories/entities/history.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let Item = class Item {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Item.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Item.prototype, "model", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true, required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Item.prototype, "serialNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: (Array),
        ref: history_entity_1.History.name,
        default: [],
    }),
    (0, graphql_1.Field)(() => [history_entity_1.History], { nullable: true }),
    __metadata("design:type", Array)
], Item.prototype, "itemHistory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: "User" }),
    (0, graphql_1.Field)(() => user_entity_1.User, { nullable: true }),
    __metadata("design:type", String)
], Item.prototype, "createdBy", void 0);
Item = __decorate([
    (0, mongoose_1.Schema)(),
    (0, graphql_1.ObjectType)()
], Item);
exports.Item = Item;
exports.ItemSchema = mongoose_1.SchemaFactory.createForClass(Item);
exports.ItemSchema.index({ createdBy: 1 });
//# sourceMappingURL=item.entity.js.map