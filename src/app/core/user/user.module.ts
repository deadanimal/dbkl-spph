import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PengurusanBantahanComponent } from './pengurusan-bantahan/pengurusan-bantahan.component';
import { DataTaksiranComponent } from './data-taksiran/data-taksiran.component';
import { PercetakanDinamikComponent } from './percetakan-dinamik/percetakan-dinamik.component';
import { PenukaranNamaComponent } from './penukaran-nama/penukaran-nama.component';
import { PertanyaanGisComponent } from './pertanyaan-gis/pertanyaan-gis.component';
import { PenukaranAlamatComponent } from './penukaran-alamat/penukaran-alamat.component';
import { CarianMaklumatComponent } from './carian-maklumat/carian-maklumat.component';
import { PulanganBalikHasilComponent } from './pulangan-balik-hasil/pulangan-balik-hasil.component';
import { StatistikComponent } from './statistik/statistik.component';
import { CajPembangunanComponent } from './caj-pembangunan/caj-pembangunan.component';
import { NilaiPasaranComponent } from './nilai-pasaran/nilai-pasaran.component';
import { CukaiComponent } from './cukai/cukai.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [DashboardComponent, PengurusanBantahanComponent, DataTaksiranComponent, PercetakanDinamikComponent, PenukaranNamaComponent, PertanyaanGisComponent, PenukaranAlamatComponent, CarianMaklumatComponent, PulanganBalikHasilComponent, StatistikComponent, CajPembangunanComponent, NilaiPasaranComponent, CukaiComponent],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(UserRoutes),
    LeafletModule
  ]
})
export class UserModule { }
