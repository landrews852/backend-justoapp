import * as mongoose from 'mongoose';
export declare type HistoryDocument = History & mongoose.Document;
export declare class History {
    _id: string;
    item: string;
    relationId: string;
    relationName: string;
    ownerType: 'Bodega' | 'Empleado';
    date: string;
}
export declare const HistorySchema: mongoose.Schema<History, mongoose.Model<History, any, any, any, any>, {}, {}, {}, {}, "type", History>;
