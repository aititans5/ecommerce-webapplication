import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/core/models/item';
import { ItemService } from 'src/app/core/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items : item[] = [];

  constructor(private itemservice : ItemService){

  }
  ngOnInit(): void {
      this.itemservice.getItemList().subscribe((response)=>{
        this.items = response
      })
  }

  getItemType(categoryId : Number){
    var ret = categoryId == 1 ? 'Fruit' : 'Vegetable';
    return ret;
  }

  getImage(it : item){
    var src =  '/assets/images/' + it.itemname + ".jpg";
    return src;
  }

}
