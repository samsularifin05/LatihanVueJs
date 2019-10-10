<template>
    <div>
        <!-- Content Header (Page header) -->
    	<div class="content-header">
    		<div class="container-fluid">
    			<div class="row mb-2">
    				<div class="col-sm-6">
    					<h1 class="m-0 text-dark">Data Master</h1>
    				</div><!-- /.col -->
    				<div class="col-sm-6">
    					<ol class="breadcrumb float-sm-right">
    						<li class="breadcrumb-item"><a href="#">Home</a></li>
    						<li class="breadcrumb-item"><a href="#">Data Master</a></li>
    						<li class="breadcrumb-item active">Klasifikasi Barang</li>
    					</ol>
    				</div><!-- /.col -->
    			</div><!-- /.row -->
    		</div><!-- /.container-fluid -->
    	</div>
    	<!-- /.content-header -->

    	<!-- Main content -->
    	<div class="content">
    		<div class="container-fluid">
    			<div class="row">
    				<div class="col-12">
    					<div class="card card-primary card-outline">
								<div class="card-header">
									<h5 class="m-0">Data Gudang</h5>
								</div>
								<div class="card-body">
									<section class="filter">
										<form class="form-inline">
											<label class="sr-only" for="filter-kriteria">Name</label>
											<input type="text" class="form-control mb-2 mr-sm-2" id="filter-kriteria" placeholder="Kode / Nama Barang">
											<button type="submit" class="btn btn-primary mb-2"><i class="fa fa-search"></i></button>
										</form>
										<button class="btn btn-primary btn-add" data-toggle="modal" data-target="#modalForm"><i class="fa fa-plus"></i> Tambah Data</button>
									</section>
									<table class="table table-bordered">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">Kode Gudang</th>
												<th scope="col">Keterangan</th>
												<th scope="col"></th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="todo of todos" :key="todo.kode_gudang">
												<td>1</td>
												<td>{{todo.kode_gudang}}</td>
												<td>{{todo.keterangan}}</td>
												<td align="center"><button
													type="button"
													class="btn btn-sm btn-warning"
													data-toggle="modal"
													data-target="#modalForm"
													>
													<i class="fa fa-edit"></i>
													</button>
													<button type="button" class="btn btn-sm btn-danger btn-delete">
													<i class="fa fa-trash"></i>
													</button></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
    				</div>
    			</div>
    			<!-- /.row -->
    		</div><!-- /.container-fluid -->
    	</div>
    	<!-- /.content -->

  <!-- Modal -->
  <div class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="modalForm" aria-hidden="true">
  	<div class="modal-dialog modal-dialog-centered" role="document">
  		<div class="modal-content">
  			<div class="modal-header">
  				<h5 class="modal-title" id="modalForm">Form Tambah Data Gudang</h5>
  				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
  					<span aria-hidden="true">&times;</span>
  				</button>
  			</div>
  			<div class="modal-body">
  				<form>
  					<div class="form-group">
  						<label for="kode_kategori">Kode Gudang</label>
  						<input type="email" class="form-control" id="kode_kategori" aria-describedby="kode_kategori" placeholder="misal: 00000" maxlength="10"><!-- 
  						<small id="kode_kategori" class="form-text text-muted">Kode kategori barang</small> -->
  					</div>
  					<div class="form-group">
  						<label for="kode_kategori">Keterangan</label>
						<textarea  class="form-control" placeholder="Masukan Keterangan"></textarea>
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
import axios from 'axios';
var no = 0;
export default {
	name: "TampilData",
	data() {
		return {
			todos: []
		};
	},
	async created(){
		try{
			const res = await axios.get('http://localhost:3000/todo');
			this.todos = res.data;
		}catch(e){
			console.error(e);
		}
	}
}
</script>