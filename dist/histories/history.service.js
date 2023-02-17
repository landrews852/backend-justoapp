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
exports.HistoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const history_entity_1 = require("./entities/history.entity");
let HistoryService = class HistoryService {
    constructor(historyModel) {
        this.historyModel = historyModel;
    }
    async create(history) {
        return await this.historyModel.create(history);
    }
    async update(history) {
        return await this.historyModel.findByIdAndUpdate(history._id, {
            $set: {
                item: history.item,
                relationId: history.relationId,
                relationName: history.relationName,
                ownerType: history.ownerType,
                date: history.date,
            },
        }, { new: true });
    }
    async findAll() {
        return await this.historyModel.find().lean();
    }
    async findByRelationId(input) {
        const history = await this.historyModel
            .find({ relationId: input }, function (err, docs) {
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
        if (history)
            return history;
        else
            return Error("There's a problem with your search");
    }
    async findById(input) {
        const history = await this.historyModel.findById(input);
        if (history)
            return history;
        else
            return Error("There's a problem with your search");
    }
    async delete(_id) {
        return await this.historyModel.findByIdAndDelete(_id);
    }
    async findByItemId(itemId) {
        return await this.historyModel.find({ item: itemId });
    }
};
HistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(history_entity_1.History.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HistoryService);
exports.HistoryService = HistoryService;
//# sourceMappingURL=history.service.js.map