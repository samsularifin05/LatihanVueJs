import Vue from 'vue'
import Router from 'vue-router'

//Start Barang
import DataBarang from '../views/Barang/DataBarang'
import HancurDataBarang from '../views/Barang/HancurDataBarang'
import PindahBarang from '../views/Barang/PindahBarang'
//End Barang

//Start Hutang
import DataHutang from '../views/Hutang/DataHutang'
import PelunasanHutang from '@/views/Hutang/PelunasanHutang'


import Login from '@/components/Login'
import Layouts from '@/components/Layouts'
//Start Import Dashboard
import Dashboard from '../views/Dashboard'
//End Dashboard

//Start Import Klasifikasi Barang
import KategoriBarang from '../views/DataMaster/KlasifikasiBarang/kategori_barang'
import JenisBarang from '../views/DataMaster/KlasifikasiBarang/jenis_barang'
//End Klasifikasi Barang

//Start Data Master
import DataGudang from '../views/DataMaster/DataGudang'
import DataBaki from '../views/DataMaster/DataBaki'
import DataSeles from '../views/DataMaster/DataSeles'
import DataBank from '../views/DataMaster/DataBank'
import KategoriTransaksi from '../views/DataMaster/KategoriTransaksi'
import KondisiBarang from '../views/DataMaster/KondisiBarang'
import KondisiPembelianUmum from '../views/DataMaster/KondisiPembelianUmum'
import PotonganPembelian from '../views/DataMaster/PotonganPembelian'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Layouts',
      name: 'Layouts',
      component: Layouts
    },

    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/KategoriBarang',
      name: 'KategoriBarang',
      component: KategoriBarang
    },
    {
      path: '/JenisBarang',
      name: 'JenisBarang',
      component: JenisBarang
    },
    {
      path: '/DataGudang',
      name: 'DataGudang',
      component: DataGudang
    },
    {
      path: '/DataBaki',
      name: 'DataBaki',
      component: DataBaki
    },
    {
      path: '/DataSeles',
      name: 'DataSeles',
      component: DataSeles
    },
    {
      path: '/DataBank',
      name: 'DataBank',
      component: DataBank
    },
    {
      path: '/KategoriTransaksi',
      name: 'KategoriTransaksi',
      component: KategoriTransaksi
    },
    {
      path: '/KondisiBarang',
      name: 'KondisiBarang',
      component: KondisiBarang
    },
    {
      path: '/KondisiPembelianUmum',
      name: 'KondisiPembelianUmum',
      component: KondisiPembelianUmum
    },
    {
      path: '/PotonganPembelian',
      name: 'PotonganPembelian',
      component: PotonganPembelian
    },
    {
      path: '/DataBarang',
      name: 'DataBarang',
      component: DataBarang
    },
    {
      path: '/HancurDataBarang',
      name: 'HancurDataBarang',
      component: HancurDataBarang
    },
    {
      path: '/PindahBarang',
      name: 'PindahBarang',
      component: PindahBarang
    },
    {
      path: '/DataHutang',
      name: 'DataHutang',
      component: DataHutang
    },
    {
      path: '/PelunasanHutang',
      name: 'PelunasanHutang',
      component: PelunasanHutang
    }

  ]
})
