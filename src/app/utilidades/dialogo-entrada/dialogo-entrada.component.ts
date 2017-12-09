import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-dialogo-entrada',
  templateUrl: './dialogo-entrada.component.html',
  styleUrls: ['./dialogo-entrada.component.css']
})
export class DialogoEntradaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogoEntradaComponent>,
    @Inject(MAT_DIALOG_DATA) public datosEntrada: {id:string, nombre: string}
    ) { }

  ngOnInit() {
  }

}
