import { Item } from 'src/items/entities/item.entity';
import * as mongoose from 'mongoose';
export declare type UserDocument = User & mongoose.Document;
export declare class User {
    _id: any;
    username: string;
    email: string;
    password: string;
    itemsCreated?: Item[];
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, "type", User>;
