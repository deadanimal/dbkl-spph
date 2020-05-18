export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/admin/penilaian-semasa',
    title: 'Penilaian Semasa & Cukai Taksiran',
    type: 'link',
    icontype: 'fas fa-calculator text-purple'
  },
  {
    path: '/admin/pengurusan-bantahan',
    title: 'Pengurusan Bantahan',
    type: 'link',
    icontype: 'fas fa-bookmark text-purple'
  },
  {
    path: '/admin/lakaran',
    title: 'Foto & Lakaran',
    type: 'link',
    icontype: 'fas fa-image text-purple'
  },
  {
    path: '/admin/pengurusan-dokumen',
    title: 'Dokumen Digital',
    type: 'link',
    icontype: 'fas fa-file-alt text-purple'
  },
  {
    path: '/admin/pengurusan-gis',
    title: 'Pengurusan GIS',
    type: 'link',
    icontype: 'fas fa-map-marked text-purple'
  },
  {
    path: '/admin/percetakan-dinamik',
    title: 'Percetakan Dinamik',
    type: 'link',
    icontype: 'fas fa-print text-purple'
  },
  {
    path: '/admin/penukaran-nama',
    title: 'Penukaran Nama',
    type: 'link',
    icontype: 'fas fa-exchange-alt text-purple'
  },
  {
    path: '/admin/penukaran-alamat',
    title: 'Penukaran Alamat',
    type: 'link',
    icontype: 'fas fa-exchange-alt text-purple'
  },
  {
    path: '/admin/sistem-fail',
    title: 'Sistem Fail',
    type: 'link',
    icontype: 'fas fa-file-archive text-purple'
  },
  {
    path: '/admin/statistik',
    title: 'Statistik',
    type: 'link',
    icontype: 'fas fa-chart-bar text-purple'
  },
  {
    path: '/admin/caj-pembangunan',
    title: 'Caj Pembangunan',
    type: 'link',
    icontype: 'fas fa-funnel-dollar text-purple'
  },
  {
    path: '/admin/psis',
    title: 'Sistem Maklumat Ukur & Periksa',
    type: 'link',
    icontype: 'fas fa-newspaper text-purple'
  },
  {
    path: '/admin/emv',
    title: 'Nilaian Pasaran (eMV)',
    type: 'link',
    icontype: 'fas fa-sticky-note text-purple'
  },
  {
    path: '/admin/penilaian',
    title: 'ePenilaian Semula',
    type: 'link',
    icontype: 'fas fa-sync-alt text-purple'
  },
  {
    path: '/admin/harta',
    title: 'eHartaDB',
    type: 'link',
    icontype: 'fas fa-tags text-purple'
  },
  {
    path: '/admin/cukai',
    title: 'ePengecualian Cukai',
    type: 'link',
    icontype: 'fas fa-exclamation-circle text-purple'
  },
  {
    path: '/admin/management',
    title: 'Pengurusan',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-purple',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
      { path: 'user', title: 'Pengguna', type: 'link' }
    ]
  },
  {
    path: '/admin/report',
    title: 'Laporan',
    type: 'link',
    icontype: 'fas fa-chart-bar text-purple'
  }
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/user/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-purple'
  },
  {
    path: '/user/data-taksiran',
    title: 'Data Taksiran',
    type: 'link',
    icontype: 'fas fa-server text-purple'
  },
  {
    path: '/user/pertanyaan-gis',
    title: 'Pertanyaan GIS',
    type: 'link',
    icontype: 'fas fa-map-marked-alt text-purple'
  },
  {
    path: '/user/percetakan-dinamik',
    title: 'Percetakan Dinamik',
    type: 'link',
    icontype: 'fas fa-print text-purple'
  },
  {
    path: '/user/penukaran-nama',
    title: 'Penukaran Nama',
    type: 'link',
    icontype: 'fas fa-exchange-alt text-purple'
  },
  {
    path: '/user/penukaran-alamat',
    title: 'Penukaran Alamat',
    type: 'link',
    icontype: 'fas fa-exchange-alt text-purple'
  },
  {
    path: '/user/pulangan-balik-hasil',
    title: 'Pulangan Balik Hasil',
    type: 'link',
    icontype: 'fas fa-filter text-purple'
  },
  {
    path: '/user/statistik',
    title: 'Statistik',
    type: 'link',
    icontype: 'far fa-chart-bar text-purple'
  },
  {
    path: '/user/caj-pembangunan',
    title: 'Caj Pembangunan',
    type: 'link',
    icontype: 'fas fa-building text-purple'
  },
  {
    path: '/user/nilai-pasaran',
    title: 'Nilai Pasaran',
    type: 'link',
    icontype: 'fas fa-dollar-sign text-purple'
  },
  {
    path: '/user/cukai',
    title: 'ePengecualian Cukai',
    type: 'link',
    icontype: 'fas fa-exclamation-circle text-purple'
  }
];