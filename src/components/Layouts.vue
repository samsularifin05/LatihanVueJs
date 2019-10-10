
<template>
  <div id="Layouts">
    <div class="wrapper">
      <!-- Navbar -->
      <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#">
              <i class="fas fa-bars"></i>
            </a>
          </li>
        </ul>

        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
              <i class="far fa-user"></i>
              <span>John Doe</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" class="dropdown-item">
                <div class="media">
                  <img
                    src="/static/dist/img/user1-128x128.jpg"
                    alt="User Avatar"
                    class="img-size-50 mr-3 img-circle"
                  />
                  <div class="media-body">
                    <h3 class="dropdown-item-title">John Doe</h3>
                    <p class="text-sm">Cek Profil</p>
                    <p class="text-sm text-muted">
                      <i class="far fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item dropdown-footer">Log out</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
              <i class="fas fa-th-large"></i>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.navbar -->

      <!-- Main Sidebar Container -->
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->

        <router-link to="/Dashboard" class="brand-link">
          <img
            src="/static/dist/img/logo.png"
            alt="AdminLTE Logo"
            class="brand-image img-circle elevation-3"
            style="opacity: .8"
          />
          <span class="brand-text font-weight-light">Nama Toko</span>
        </router-link>
        <!-- Sidebar -->
        <div class="sidebar">
          <!-- Sidebar Menu -->
          <nav class="mt-0">
            <ul
              class="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <!-- Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library-->
              <li class="nav-item">
                <router-link to="/Dashboard" class="nav-link">
                  <i class="nav-icon fas fa-home"></i>
                  <p>Dashboard</p>
                </router-link>
              </li>
              <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Data Master
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Klasifikasi Barang</p>
                    </a>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <router-link to="/KategoriBarang" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Kategori Barang</p>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/JenisBarang" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Jenis Barang</p>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/DataGudang">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Data Gudang</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/DataBaki">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Data Baki</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/DataSeles">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Data Sales</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/DataBank">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Data Bank</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/KategoriTransaksi">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Kategori Transaksi</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/KondisiBarang">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Kondisi Barang</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/KondisiPembelianUmum">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Kondisi Pembelian Umum</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/PotonganPembelian">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Potongan Pembelian</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-shopping-cart"></i>
                  <p>
                    Barang
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link class="nav-link" to="/DataBarang">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Input</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/HancurDataBarang">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Hancur</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/PindahBarang">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Pindah</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-file-invoice"></i>
                  <p>
                    Hutang
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                   <router-link class="nav-link" to="/DataHutang">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Input</p>
                   </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/PelunasanHutang">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Pelunasan</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-money-bill-wave"></i>
                  <p>
                    Pembelian
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="/static/pages/pembelian/input.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Input</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-share"></i>
                  <p>
                    Penjualan
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="/static/pages/penjualan/input.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Input</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/static/pages/penjualan/validasi.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Validasi</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
      </aside>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
      <!-- /.content-wrapper -->

      <!-- Main Footer -->
      <footer class="main-footer">
        <div class="float-right d-none d-sm-block">
          <b>Version</b> 1.0
        </div>Sample
      </footer>

      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
      </aside>
      <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->
  </div>
</template>
