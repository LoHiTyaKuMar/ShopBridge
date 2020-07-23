import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { InventoryService } from './inventory.service';
import { IInventory } from './IRepository/IInventory';  
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DeleteDialogueComponent } from './delete-dialogue/delete-dialogue.component';
import { CreateInventoryComponent } from './create-inventory/create-inventory.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ShopBridge';
  isDataLoaded : boolean = false;
  navUrl : string = '';
  isDetailsVisible : boolean = false;
  inventories = new MatTableDataSource<IInventory>();
  tableColumns  :  string[] = ['id', 'name', 'description', 'price', 'delete'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _service : InventoryService, public dialog: MatDialog,
    private route: Router) { 
      this.navUrl = route.url;
    }

  ngOnInit(): void { 
    this.getInventories();
    console.log(this.route.url);
    if(this.navUrl.includes('details',0))
    {
      this.isDetailsVisible = false;
    }
    else{
      this.isDetailsVisible = true;
    }
  }

  changeVisibility(){
    if(this.isDetailsVisible)
    {
      this.isDetailsVisible = false; 
    }
  }

  getInventories() 
  {
    this._service.getInventories().subscribe(items => {
      this.inventories.data = items;
      this.inventories.paginator = this.paginator;
      this.isDataLoaded = true;
    }); 
  }

  openDialog(id : number)
  {
    this._service.inventoryId = id;
    this.dialog.open(DeleteDialogueComponent); 
  }

  createInventoryModal()
  {
    this.dialog.open(CreateInventoryComponent, {
      width: '60%',
      id : 'createInventory'
    });
  }
}
