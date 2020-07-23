import { Component, OnInit, Input } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-delete-dialogue',
  templateUrl: './delete-dialogue.component.html',
  styleUrls: ['./delete-dialogue.component.css']
})
export class DeleteDialogueComponent implements OnInit { 

  constructor(private _service : InventoryService) { }

  ngOnInit(): void {  }

  dialogueAction(userAction : boolean)
  {
      if(userAction)
      {
          this._service.deleteInventory().subscribe(items => {
            if(items)
            {
                window.location.reload();
            } 
          });
      }
  }
}
