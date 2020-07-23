import { IInventory } from './IRepository/IInventory';
import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private readonly getInventoriesUrl : string = 'http://localhost:55034/Inventory/GetInventories';
  private readonly createInventoryUrl : string = 'http://localhost:55034/Inventory/CreateInventory';
  private readonly deleteInventoryUrl : string = 'http://localhost:55034/Inventory/DeleteInventory/';
  private readonly inventoryDetailsUrl : string = 'http://localhost:55034/Inventory/InventoryDetails/';
  inventoryId : number;

  constructor(private _http: HttpClient) { }

  getInventories()
  {
    return this._http.get<IInventory[]>(this.getInventoriesUrl); //.pipe(map(data => data.json()));
  }

  createInventory(item : IInventory)
  {
     return this._http.post(this.createInventoryUrl, item);
  }

  deleteInventory()
  {
    return this._http.post(this.deleteInventoryUrl + this.inventoryId, null);
  }

  inventoryDetails(id: number)
  {
    return this._http.post(this.inventoryDetailsUrl + id, null);
  }
}
