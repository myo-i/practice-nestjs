import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Item } from "./items.model";

@Injectable()
export class ItemRepository extends Repository<Item> {

}