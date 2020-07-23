import { IInventory } from './../IRepository/IInventory';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.css']
})

export class InventoryDetailsComponent implements OnInit {
  itemDetails : IInventory;

  constructor(private route: ActivatedRoute, private _service : InventoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
       this._service.inventoryDetails(id).subscribe(c =>{
          console.log(c);
          this.itemDetails = c as IInventory;
       });  
      });  
  }

  navigateToHome(){
    window.location.href = '/';
  }
}
