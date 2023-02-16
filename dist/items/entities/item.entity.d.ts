import * as mongoose from 'mongoose';
import { History } from 'src/histories/entities/history.entity';
export declare type ItemDocument = Item & mongoose.Document;
export declare class Item {
    _id: string;
    name: string;
    model: string;
    serialNumber: string;
    itemHistory?: History[];
    createdBy: string;
}
export declare const ItemSchema: mongoose.Schema<Item, mongoose.Model<Item, any, any, any, any>, {}, {}, {}, {}, "type", Item>;
