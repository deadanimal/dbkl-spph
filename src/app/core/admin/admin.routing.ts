import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { DataTaksiranComponent } from './data-taksiran/data-taksiran.component';
import { LakaranComponent } from './lakaran/lakaran.component';
import { PengurusanBantahanComponent } from './pengurusan-bantahan/pengurusan-bantahan.component';
import { PengurusanDokumenComponent } from './pengurusan-dokumen/pengurusan-dokumen.component';
import { PengurusanGisComponent } from './pengurusan-gis/pengurusan-gis.component';
import { PenilaianSemasaComponent } from './penilaian-semasa/penilaian-semasa.component';
import { PenukaranAlamatComponent } from './penukaran-alamat/penukaran-alamat.component';
import { PenukaranNamaComponent } from './penukaran-nama/penukaran-nama.component';
import { PercetakanDinamikComponent } from './percetakan-dinamik/percetakan-dinamik.component';
import { SistemFailComponent } from './sistem-fail/sistem-fail.component';
import { StatistikComponent } from './statistik/statistik.component';
import { SuratDigitalComponent } from './surat-digital/surat-digital.component';
import { CukaiComponent } from './cukai/cukai.component';
import { HartaComponent } from './harta/harta.component';
import { PenilaianComponent } from './penilaian/penilaian.component';
import { EmvComponent } from './emv/emv.component';
import { PsisComponent } from './psis/psis.component';
import { CajPembangunanComponent } from './caj-pembangunan/caj-pembangunan.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'data-taksiran',
                component: DataTaksiranComponent
            },
            {
                path: 'lakaran',
                component: LakaranComponent
            },
            {
                path: 'pengurusan-bantahan',
                component: PengurusanBantahanComponent
            },
            {
                path: 'pengurusan-dokumen',
                component: PengurusanDokumenComponent
            },
            {
                path: 'pengurusan-gis',
                component: PengurusanGisComponent
            },
            {
                path: 'penilaian-semasa',
                component: PenilaianSemasaComponent
            },
            {
                path: 'penukaran-alamat',
                component: PenukaranAlamatComponent
            },
            {
                path: 'penukaran-nama',
                component: PenukaranNamaComponent
            },
            {
                path: 'percetakan-dinamik',
                component: PercetakanDinamikComponent
            },
            {
                path: 'sistem-fail',
                component: SistemFailComponent
            },
            {
                path: 'statistik',
                component: StatistikComponent
            },
            {
                path: 'surat-digital',
                component: SuratDigitalComponent
            },
            {
                path: 'cukai',
                component: CukaiComponent
            },
            {
                path: 'harta',
                component: HartaComponent
            },
            {
                path: 'penilaian',
                component: PenilaianComponent
            },
            {
                path: 'emv',
                component: EmvComponent
            },
            {
                path: 'psis',
                component: PsisComponent
            },
            {
                path: 'caj-pembangunan',
                component: CajPembangunanComponent
            }
        ]
    }
]