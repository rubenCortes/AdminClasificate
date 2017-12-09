import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-dialogo-confirmacion',
  templateUrl: './dialogo-confirmacion.component.html',
  styleUrls: ['./dialogo-confirmacion.component.css']
})
export class DialogoConfirmacionComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<DialogoConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

  ngOnInit() {
  }

}
