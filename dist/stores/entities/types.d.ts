declare enum action {
    In = "in",
    Out = "out"
}
export declare class StoreHistory {
    _id: string;
    itemName: string;
    serialNumber: string;
    action: action;
    date: Date;
}
export {};
