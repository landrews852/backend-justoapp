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
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const item_entity_1 = require("./entities/item.entity");
let ItemsService = class ItemsService {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }
    async create(item) {
        return await this.itemModel.create(item);
    }
    async update(item) {
        return await this.itemModel.findByIdAndUpdate(item._id, {
            $set: {
                name: item.name,
                model: item.model,
                serialNumber: item.serialNumber,
                createdBy: item.createdBy,
            },
        }, { new: true });
    }
    async findAll() {
        return await this.itemModel.find().lean();
    }
    async findBySerialNumber(input) {
        const item = await this.itemModel
            .findOne({ serialNumber: input }, function (err, docs) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Result: ', docs);
                return docs;
            }
        })
            .lean()
            .clone();
        if (item)
            return item;
        else
            return Error("There's a problem with your search");
    }
    async findById(input) {
        const item = this.itemModel.findById(input);
        if (item)
            return item;
        else
            return Error("There's a problem with your search");
    }
    async findUserById(userId) {
        return await this.itemModel.find({ createdBy: userId });
    }
    async delete(_id) {
        return await this.itemModel.findByIdAndDelete(_id);
    }
};
ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(item_entity_1.Item.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=items.service.js.map