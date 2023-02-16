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
exports.StoresService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const store_entity_1 = require("./entities/store.entity");
let StoresService = class StoresService {
    constructor(storeModel) {
        this.storeModel = storeModel;
    }
    async create(store) {
        return await this.storeModel.create(store);
    }
    async update(store) {
        return await this.storeModel.findByIdAndUpdate(store._id, {
            $set: {
                name: store.name,
                location: store.location,
            },
        }, { new: true });
    }
    async findAll() {
        return this.storeModel.find().lean();
    }
    async findOne(input) {
        const store = await this.storeModel
            .findOne({ name: input }, function (err, docs) {
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
        if (store)
            return store;
        else
            return Error("There's a problem with your search");
    }
    async findById(_id) {
        const store = this.storeModel.findById(_id);
        if (store)
            return store;
        else
            return Error("There's a problem with your search");
    }
    async delete(_id) {
        return await this.storeModel.findByIdAndDelete(_id);
    }
};
StoresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(store_entity_1.Store.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StoresService);
exports.StoresService = StoresService;
//# sourceMappingURL=stores.service.js.map