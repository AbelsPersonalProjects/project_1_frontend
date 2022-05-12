export interface Reimbursement{
    id: number;
    amount: number;
    submittedTime: string;
    resolvedTime: string;
    description: string;
    imageLink: string;
    author: string;
    resolver: string;
    statusId: number;
    typeId: number;
}