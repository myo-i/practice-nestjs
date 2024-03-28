import { ItemStatus } from "./item-status.enum";

export interface Item {
    id: string;
    name: number;
    price: number;
    desription: string;
    status: ItemStatus;
}