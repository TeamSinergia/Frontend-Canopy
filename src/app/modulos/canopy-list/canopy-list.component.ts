import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CanopyService } from 'src/app/services/canopy.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-canopy-list',
  templateUrl: './canopy-list.component.html',
  styleUrls: ['./canopy-list.component.css']
})
export class CanopyListComponent implements OnInit {

  fCluster = new FormControl();
  fAlg = new FormControl();
  fQuery = new FormControl();
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
    'pagina_web',
    'empresa',
    'lugar',
    'salario',
    'periodo',
    'funciones',
    'conocimiento',
    'habilidades',
    'competencias',
    'certificaciones',
    'beneficio',
    'formacion'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private canopyService: CanopyService) { }

  ngOnInit(): void {
    this.fAlg.setValue(1);

    //this.fnGetAllCanopy()
    this.fQuery.setValue(`select o.htitulo_cat,o.htitulo,w.pagina_web,o.empresa,o.lugar,o.salario,date_part('year',o.fecha_publicacion) as periodo, f_dimPuestoEmpleo(o.id_oferta,7) as funciones, f_dimPuestoEmpleo(o.id_oferta,1) as conocimiento, f_dimPuestoEmpleo(o.id_oferta,3) as habilidades, f_dimPuestoEmpleo(o.id_oferta,2) as competencias, f_dimPuestoEmpleo(o.id_oferta,17) as certificaciones, f_dimPuestoEmpleo(o.id_oferta,5) as beneficio, f_dimPuestoEmpleo(o.id_oferta,11) as formacion from webscraping w inner join oferta o on (w.id_webscraping=o.id_webscraping) where o.id_estado is null`)
  }

  fnValidarClusters() {

    if (this.fCluster.value <= 1) {
      Swal.fire('¡Atencion!', 'No puede colocar datos menores que 1', 'warning');
      return false
    }
    else if (this.fCluster.value > 10) {
      Swal.fire('¡Atencion!', 'Ha colocado muchos Clusters', 'warning');
      return false
    }
    else {
      return true;
    }
  }

  async fnCrearTabla() {

    if (this.fnValidarClusters() == false) {
      this.dataSource = new MatTableDataSource([]);
      return
    }

    let param;
    param = this.fCluster.value;
    this.listCanopy = []

    //console.log(param)

    this.listCanopy.push({
      nCluster: '1',
      htitulo_cat: 'DEVELOPER',
      htitulo: 'DEVELOPER',
      pagina_web: '',
      empresa: '',
      lugar: 'Lima (y 1 ubicación más)',
      salario: 'NO ESPECIFICADO',
      periodo: '2020',
      funciones: 'DESARROLLO E IMPLEMENTACION DE PROYECTOS DE SOFTWARE',
      conocimiento: 'CONOCIMIENTO DE BASE DE DATOS',
      habilidades: 'JAVA',
      competencias: 'COMUNICACION EFECTIVA',
      certificaciones: 'ESTABILIDAD LABORAL',
      beneficio: 'EGRESADO O BACHILLER DE INGENIERIA DE SISTEMAS, INFORMATICA O AFINES',
      formacion: '',
    })

    if (param > 1) {
      this.listCanopy.push({
        nCluster: '2',
        htitulo_cat: 'QUALITY SOFTWARE',
        htitulo: 'ANALISTA QA',
        pagina_web: '',
        empresa: '',
        lugar: 'NO ESPECIFICADO',
        salario: '',
        periodo: '2021',
        funciones: 'QUALITY CONTROL',
        conocimiento: 'CONOCIMIENTO DE BASE DE DATOS',
        habilidades: 'JAVA',
        competencias: 'COMUNICACION EFECTIVA',
        certificaciones: 'ESTABILIDAD LABORAL',
        beneficio: 'EGRESADO O BACHILLER DE INGENIERIA DE SISTEMAS, INFORMATICA O AFINES',
        formacion: '',
      })
    }
    if (param > 2) {
      this.listCanopy.push({
        nCluster: '3',
        htitulo_cat: 'DEVELOPER',
        htitulo: 'DEVELOPER',
        pagina_web: 'mipleo',
        empresa: 'CONFIDENCIAL',
        lugar: ' Lima(Lima)',
        salario: 'No informado',
        periodo: '2021',
        funciones: 'DESARROLLO E IMPLEMENTACION DE PROYECTOS DE SOFTWARE',
        conocimiento: 'CONOCIMIENTO DE BASE DE DATOS',
        habilidades: 'JAVA',
        competencias: 'COMUNICACION EFECTIVA',
        certificaciones: 'ESTABILIDAD LABORAL',
        beneficio: 'EGRESADO O BACHILLER DE INGENIERIA DE SISTEMAS, INFORMATICA O AFINES',
        formacion: '',
      })
    }
    if (param > 3) {
      this.listCanopy.push({
        nCluster: '4',
        htitulo_cat: 'DEVELOPER',
        htitulo: 'DEVELOPER',
        pagina_web: 'buscojobs',
        empresa: '(CONFIDENCIAL)',
        lugar: 'LIMA',
        salario: '',
        periodo: '2020',
        funciones: 'DESARROLLO E IMPLEMENTACION DE PROYECTOS DE SOFTWARE',
        conocimiento: 'CONOCIMIENTO DE BASE DE DATOS',
        habilidades: 'JAVA',
        competencias: 'COMUNICACION EFECTIVA',
        certificaciones: 'ESTABILIDAD LABORAL',
        beneficio: 'EGRESADO O BACHILLER DE INGENIERIA DE SISTEMAS, INFORMATICA O AFINES',
        formacion: '',
      })
    }

    if (param > 4) {
      this.listCanopy.push({
        nCluster: '5',
        htitulo_cat: 'DEVELOPER',
        htitulo: 'DEVELOPER',
        pagina_web: 'buscojobs',
        empresa: '',
        lugar: 'LIMA, LIMA',
        salario: 'NO ESPECIFICADO',
        periodo: '2020',
        funciones: 'DESARROLLO E IMPLEMENTACION DE PROYECTOS DE SOFTWARE',
        conocimiento: 'CONOCIMIENTO DE BASE DE DATOS',
        habilidades: 'JAVA',
        competencias: 'COMUNICACION EFECTIVA',
        certificaciones: 'ESTABILIDAD LABORAL',
        beneficio: 'EGRESADO O BACHILLER DE INGENIERIA DE SISTEMAS, INFORMATICA O AFINES',
        formacion: '',
      })
    }

    //console.log(this.listCanopy)

    this.dataSource = new MatTableDataSource(this.listCanopy);
    this.fnCrearArreglo()

  }


  fnCrearArreglo() {
    let aleatorio, tamanioArray, porcentaje;

    tamanioArray = this.fCluster.value
    this.arrayNumbers = []

    if (tamanioArray == 4) {
      this.arrayNumbers.push
        (
          { instance: 6533, porcentaje: 26 },
          { instance: 5867, porcentaje: 24 },
          { instance: 7126, porcentaje: 29 },
          { instance: 5424, porcentaje: 22 },
        );
      this.bMostrar = true;
    }
    else if (tamanioArray == 5) {
      this.arrayNumbers.push
        (
          { instance: 6533, porcentaje: 26 },
          { instance: 5828, porcentaje: 23 },
          { instance: 7126, porcentaje: 29 },
          { instance: 2916, porcentaje: 12 },
          { instance: 2547, porcentaje: 10 },
        );
      this.bMostrar = true;
    }

    else {
      this.dataSource = new MatTableDataSource([]);
      this.bMostrar = false
    }


  }



}
