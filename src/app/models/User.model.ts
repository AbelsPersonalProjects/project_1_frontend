import { Reimbursement } from "./Reimbursement.model";

export interface User{
    id: number;
    userName: string;
    roleId: number;
    profilePic: string;
    reimbursements: Reimbursement[];
} 