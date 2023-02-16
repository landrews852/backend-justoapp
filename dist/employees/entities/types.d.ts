declare enum action {
    In = "in",
    Out = "out"
}
export declare class EmployeeHistory {
    _id: string;
    itemName: string;
    serialNumber: string;
    action: action;
    date: Date;
}
export {};
