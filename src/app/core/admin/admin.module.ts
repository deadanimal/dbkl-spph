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
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { PenilaianSemasaComponent } from './penilaian-semasa/penilaian-semasa.component';
import { PengurusanBantahanComponent } from './pengurusan-bantahan/pengurusan-bantahan.component';
import { LakaranComponent } from './lakaran/lakaran.component';
import { PengurusanDokumenComponent } from './pengurusan-dokumen/pengurusan-dokumen.component';
import { SuratDigitalComponent } from './surat-digital/surat-digital.component';
import { DataTaksiranComponent } from './data-taksiran/data-taksiran.component';
import { PengurusanGisComponent } from './pengurusan-gis/pengurusan-gis.component';
import { PercetakanDinamikComponent } from './percetakan-dinamik/percetakan-dinamik.component';
import { PenukaranNamaComponent } from './penukaran-nama/penukaran-nama.component';
import { PenukaranAlamatComponent } from './penukaran-alamat/penukaran-alamat.component';
import { SistemFailComponent } from './sistem-fail/sistem-fail.component';
import { StatistikComponent } from './statistik/statistik.component';
import { CukaiComponent } from './cukai/cukai.component';
import { HartaComponent } from './harta/harta.component';
import { PenilaianComponent } from './penilaian/penilaian.component';
import { EmvComponent } from './emv/emv.component';
import { PsisComponent } from './psis/psis.component';
import { CajPembangunanComponent } from './caj-pembangunan/caj-pembangunan.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    PenilaianSemasaComponent,
    PengurusanBantahanComponent,
    LakaranComponent,
    PengurusanDokumenComponent,
    SuratDigitalComponent,
    DataTaksiranComponent,
    PengurusanGisComponent,
    PercetakanDinamikComponent,
    PenukaranNamaComponent,
    PenukaranAlamatComponent,
    SistemFailComponent,
    StatistikComponent,
    CukaiComponent,
    HartaComponent,
    PenilaianComponent,
    EmvComponent,
    PsisComponent,
    CajPembangunanComponent
  ],
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
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
