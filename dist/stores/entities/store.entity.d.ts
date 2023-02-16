import * as mongoose from 'mongoose';
import { History } from 'src/histories/entities/history.entity';
export declare type StoreDocument = Store & mongoose.Document;
export declare class Store {
    _id: string;
    name: string;
    location: string;
    storeHistory?: History[];
}
export declare const StoreSchema: mongoose.Schema<Store, mongoose.Model<Store, any, any, any, any>, {}, {}, {}, {}, "type", Store>;
