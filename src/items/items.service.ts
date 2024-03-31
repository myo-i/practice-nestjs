import { Injectable } from '@nestjs/common';
import { Item } from './items.model';

@Injectable()
export class ItemsService {

    private items: Item[] = []
    findAll() {
        return "Service class"
    }

    create(item: Item): Item {
        this.items.push(item);
        return item;
    }
}
