import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PengurusanBantahanComponent } from './pengurusan-bantahan/pengurusan-bantahan.component';
import { DataTaksiranComponent } from './data-taksiran/data-taksiran.component';
import { PercetakanDinamikComponent } from './percetakan-dinamik/percetakan-dinamik.component';
import { PenukaranNamaComponent } from './penukaran-nama/penukaran-nama.component';
import { PertanyaanGisComponent } from './pertanyaan-gis/pertanyaan-gis.component';
import { PenukaranAlamatComponent } from './penukaran-alamat/penukaran-alamat.component';
import { CarianMaklumatComponent } from './carian-maklumat/carian-maklumat.component';
import { StatistikComponent } from './statistik/statistik.component';
import { CajPembangunanComponent } from './caj-pembangunan/caj-pembangunan.component';
import { PulanganBalikHasilComponent } from './pulangan-balik-hasil/pulangan-balik-hasil.component';
import { NilaiPasaranComponent } from './nilai-pasaran/nilai-pasaran.component';
import { CukaiComponent } from './cukai/cukai.component';

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'pengurusan-bantahan',
                component: PengurusanBantahanComponent
            },
            {
                path: 'data-taksiran',
                component: DataTaksiranComponent
            },
            {
                path: 'percetakan-dinamik',
                component: PercetakanDinamikComponent
            },
            {
                path: 'penukaran-nama',
                component: PenukaranNamaComponent
            },
            {
                path: 'pertanyaan-gis',
                component: PertanyaanGisComponent
            },
            {
                path: 'penukaran-alamat',
                component: PenukaranAlamatComponent
            },
            {
                path: 'carian-maklumat',
                component: CarianMaklumatComponent
            },
            {
                path: 'pulangan-balik-hasil',
                component: PulanganBalikHasilComponent
            },
            {
                path: 'statistik',
                component: StatistikComponent
            },
            {
                path: 'caj-pembangunan',
                component: CajPembangunanComponent
            },
            {
                path: 'nilai-pasaran',
                component: NilaiPasaranComponent
            },
            {
                path: 'cukai',
                component: CukaiComponent
            }
        ]
    }
]