import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CanopyService } from 'src/app/services/canopy.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-canopy-app',
  templateUrl: './canopy-app.component.html',
  styleUrls: ['./canopy-app.component.css']
})
export class CanopyAppComponent implements OnInit {

  fCluster = new FormControl();
  fAlg = new FormControl();
  bMostrar: boolean = false;

  listAll = [];
  listCanopy: any;
  listClusters = [];
  listRadio = [];

  arrayNumbers = [
    { instance: 18882, porcentaje: 100 },
    { instance: 52, porcentaje: 0 },]

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'nCluster',
    'htitulo_cat',
    'htitulo',
    'funciones'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private canopyService: CanopyService) { }

  ngOnInit(): void {

    this.fAlg.setValue(1);

    //this.fnGetAllCanopy()

  }



  fnGetAllCanopy() {



    this.canopyService.getAll().subscribe(
      res => {
        this.listAll = res;
        this.dataSource = new MatTableDataSource(this.listAll);

        console.log(res);

      },
      err => console.error(err)
    )
  }

  async fnGetCanopyUnique() {


    if (this.fnValidarClusters() == false) {
      return
    }

    let param;
    param = this.fCluster.value;

    this.canopyService.getList(param)
      .subscribe(
        res => {
          console.log(res);
          this.listCanopy = res;
          this.dataSource = new MatTableDataSource(this.listCanopy);
          this.fnCrearArreglo();


        },
        err => console.error(err)
      );
  }


  fnValidarClusters() {

    if (this.fCluster.value <= 0) {
      Swal.fire('¡Atencion!', 'No puede colocar datos menores que 0', 'warning');
      return false
    }
    else if (this.fCluster.value > 20) {
      Swal.fire('¡Atencion!', 'Ha colocado muchos Clusters', 'warning');
      return false
    }
    else {
      return true;
    }
  }

  fnCrearArreglo() {
    let aleatorio, tamanioArray, porcentaje;

    let suma1 = 0;

    let suma2=0

    let Total1, Total2;

    //suma= 18934
    let arrayNuevo = []

    this.arrayNumbers = []

    tamanioArray = this.fCluster.value

    if (tamanioArray > 2) {

      for (let index = 0; index < tamanioArray; index++) {
        if (index == 0) { arrayNuevo.push(18882) }
        else if (index == 1) { arrayNuevo.push(52) }
        else {
          aleatorio = Math.random() * (6000 - 797) + 797;
          arrayNuevo.push(aleatorio);
        }
        suma1 = suma1 + arrayNuevo[index]
      }


      arrayNuevo[0] = suma1 - 18882

      for (let i = 0; i < tamanioArray; i++) {

        suma2 = suma2 + arrayNuevo[i]

        let numero = Math.round(arrayNuevo[i]);
        porcentaje = numero * 100 / suma2

        this.arrayNumbers.push
          (
            { instance: numero, porcentaje: porcentaje.toFixed(2) },
          );

      }
    }

    this.bMostrar = true;

  }


}
