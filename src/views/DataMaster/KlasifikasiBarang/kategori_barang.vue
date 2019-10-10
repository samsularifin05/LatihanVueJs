<template>
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Klasifikasi Barang</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Data Master</a>
              </li>
              <li class="breadcrumb-item active">Klasifikasi Barang</li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h5 class="m-0">Kategori Barang</h5>
              </div>
              <div class="card-body">
                <section class="filter">
                  <form class="form-inline">
                    <label class="sr-only" for="filter-kriteria">Name</label>
                    <input
                      type="text"
                      class="form-control mb-2 mr-sm-2"
                      id="filter-kriteria"
                      placeholder="Kode / Nama Barang"
                    />
                    <button type="submit" class="btn btn-primary mb-2">
                      <i class="fa fa-search"></i>
                    </button>
                  </form>
                  <button
                    class="btn btn-primary btn-add"
                    data-toggle="modal"
                    data-target="#modalForm"
                  >
                    <i class="fa fa-plus"></i> Tambah Data
                  </button>
                </section>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Kode</th>
                      <th scope="col">Nama Kategori</th>
                      <th scope="col">Harga / Gram</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="text-center" style="width: 50px;">1</th>
                      <td class="text-center">000001</td>
                      <td class="text-center">Sample Kategori 1</td>
                      <td class="text-center">120.000</td>
                      <td class="text-center" style="width: 120px;">
                        <button
                          type="button"
                          class="btn btn-sm btn-warning"
                          data-toggle="modal"
                          data-target="#modalForm"
                        >
                          <i class="fa fa-edit"></i>
                        </button>
                        <button type="button" class="btn btn-sm btn-danger btn-delete">
                          <i class="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="text-center" style="width: 50px;">2</th>
                      <td class="text-center">000002</td>
                      <td class="text-center">Sample Kategori 2</td>
                      <td class="text-center">120.000</td>
                      <td class="text-center" style="width: 120px;">
                        <button
                          type="button"
                          class="btn btn-sm btn-warning"
                          data-toggle="modal"
                          data-target="#modalForm"
                        >
                          <i class="fa fa-edit"></i>
                        </button>
                        <button type="button" class="btn btn-sm btn-danger btn-delete">
                          <i class="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="text-center" style="width: 50px;">3</th>
                      <td class="text-center">000003</td>
                      <td class="text-center">Sample Kategori 3</td>
                      <td class="text-center">120.000</td>
                      <td class="text-center" style="width: 120px;">
                        <button
                          type="button"
                          class="btn btn-sm btn-warning"
                          data-toggle="modal"
                          data-target="#modalForm"
                        >
                          <i class="fa fa-edit"></i>
                        </button>
                        <button type="button" class="btn btn-sm btn-danger btn-delete">
                          <i class="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="text-center" style="width: 50px;">4</th>
                      <td class="text-center">000004</td>
                      <td class="text-center">Sample Kategori 4</td>
                      <td class="text-center">120.000</td>
                      <td class="text-center" style="width: 120px;">
                        <button
                          type="button"
                          class="btn btn-sm btn-warning"
                          data-toggle="modal"
                          data-target="#modalForm"
                        >
                          <i class="fa fa-edit"></i>
                        </button>
                        <button type="button" class="btn btn-sm btn-danger btn-delete">
                          <i class="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" class="text-center" style="width: 50px;">5</th>
                      <td class="text-center">000005</td>
                      <td class="text-center">Sample Kategori 5</td>
                      <td class="text-center">120.000</td>
                      <td class="text-center" style="width: 120px;">
                        <button
                          type="button"
                          class="btn btn-sm btn-warning"
                          data-toggle="modal"
                          data-target="#modalForm"
                        >
                          <i class="fa fa-edit"></i>
                        </button>
                        <button type="button" class="btn btn-sm btn-danger btn-delete">
                          <i class="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modalForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalForm"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalForm">Form Tambah Kataegori Barang</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="kode_kategori">Kode Ketegori</label>
                <input
                  type="text"
                  class="form-control"
                  id="kode_kategori"
                  aria-describedby="kode_kategori"
                  placeholder="misal: 230"
                  maxlength="10"
                />
                <!-- 
                <small id="kode_kategori" class="form-text text-muted">Kode kategori barang</small>-->
              </div>
              <div class="form-group">
                <label for="kode_kategori">Nama Kategori</label>
                <input
                  type="text"
                  class="form-control"
                  id="kode_kategori"
                  aria-describedby="kode_kategori"
                  placeholder="misal: Emas Muda 230"
                  maxlength="10"
                />
                <!-- <small id="kode_kategori" class="form-text text-muted">Kode jenis barang</small> -->
              </div>
              <div class="row">
                <div class="col-sm-8">
                  <div class="form-group">
                    <label for="nama_kategori">Harga/Gram</label>
                    <money v-model="price" v-bind="money" class="form-control"></money>
                    <small id="kode_kategori" class="form-text text-muted">Kadar 100%</small>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <label for="nama_kategori">Kategori Emas</label>
                    <select class="form-control">
                      <option>Muda</option>
                      <option>Tua</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
            <button type="button" class="btn btn-primary">Simpan</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {Money} from 'v-money'
 
  export default {
    components: {Money},
 
    data () {
      return {
        price: 0.00,
        money: {
          decimal: ',',
          thousands: '.',
          prefix: ' ',
          suffix: ' ',
          precision: 3,
          masked: false
        }
      }
    }
  }
</script> 