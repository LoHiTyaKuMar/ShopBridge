import { IInventory } from './../IRepository/IInventory';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { InventoryService } from '../inventory.service';
import {MatDialog} from '@angular/material/dialog';
import { JsonPipe } from '@angular/common';
import { RequestOptions } from '@angular/http';

@Component({
  selector: 'app-create-inventory',
  templateUrl: './create-inventory.component.html',
  styleUrls: ['./create-inventory.component.css']
})
export class CreateInventoryComponent implements OnInit { 
  isFormSubmitted : boolean = false;
  erros : string = '';
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  constructor(private _formBuilder: FormBuilder, private _service : InventoryService, public dialog: MatDialog) { }
  
  newInventoryFormGroup : FormGroup;
    
  ngOnInit(): void { 
    this.newInventoryFormGroup = new FormGroup({
      name : new FormControl('', [Validators.required]),
      description : new FormControl(''),
      price: new FormControl('')
    });
  } 

  createInventory()
  {
    this.isFormSubmitted = true;
    if(!this.newInventoryFormGroup.controls.name.valid)
    {
        return false;
    }

    let model : IInventory = {  
      name : this.newInventoryFormGroup.controls.name.value,
      description : this.newInventoryFormGroup.controls.description.value,  
      price : this.newInventoryFormGroup.controls.price.value != '' ? this.newInventoryFormGroup.controls.price.value : 0
    };

    this._service.createInventory(model).subscribe(
      data =>  {  
        this.isFormSubmitted = false;
        this.dialog.getDialogById('createInventory').close();
        window.location.reload(); 
      },
      error => { 
          this.erros = error.error.message;
       }
    ); 
    } 
  }
