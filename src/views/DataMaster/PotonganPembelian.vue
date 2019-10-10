<template>
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Data Master</h1>
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
              <li class="breadcrumb-item active">Potongan Pembelian</li>
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
                <h5 class="m-0">Potongan Pembelian</h5>
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
                      <th scope="col">Kategori</th>
                      <th scope="col">Total Potongan</th>
                      <th scope="col">Per gram?</th>
                      <th scope="col">% dari nota?</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="text-center" style="width: 50px;">1</th>
                      <td class="text-center">Kategori 1</td>
                      <td class="text-center">Rp 15,000</td>
                      <td class="text-center" style="width: 120px">
                        <span class="badge badge-success">
                          <i class="fa fa-check"></i>
                        </span>
                      </td>
                      <td class="text-center" style="width: 120px">
                        <span class="badge badge-success">
                          <i class="fa fa-check"></i>
                        </span>
                      </td>
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
    <!-- /.content -->

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
            <h5 class="modal-title" id="modalForm">Form Tambah Potongan Pembelian</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <div class="form-group">
                <label for="kode_kategori">Kategori</label>
                <select name="kode_kategori" class="form-control">
                  <option value></option>
                  <option value="1">Kategori 1</option>
                  <option value="2">Kategori 2</option>
                  <option value="3">Kategori 3</option>
                </select>
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="form-group">
                    <label for="total_potongan">Total Potongan</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">Rp</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="total_potongan"
                        name="total_potongan"
                        placeholder="Nominal"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label for="persen_total_potongan">&nbsp;</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        id="persen_total_potongan"
                        name="persen_total_potongan"
                        placeholder="Persentase potongan"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="pergram_check" />
                  <label class="custom-control-label" for="pergram_check">Per gram (Rp)</label>
                </div>
              </div>
              <div class="form-group">
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="persen_check" />
                  <label class="custom-control-label" for="persen_check">% dari nota</label>
                </div>
              </div>
            </b-form>
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
import { Money } from "v-money";

export default {
  components: { Money },

  data() {
    return {
      price: 0.0,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: " ",
        suffix: " ",
        precision: 3,
        masked: false
      }
    };
  },
  data2() {
    return {
      bandrol: 0.0,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: " ",
        suffix: " ",
        precision: 3,
        masked: false
      }
    };
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script> 