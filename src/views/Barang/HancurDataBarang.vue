<template>
<div>
		<!-- Content Header (Page header) -->
		<div class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1 class="m-0 text-dark">Barang</h1>
					</div><!-- /.col -->
					<div class="col-sm-6">
						<ol class="breadcrumb float-sm-right">
							<li class="breadcrumb-item"><a href="#">Home</a></li>
							<li class="breadcrumb-item"><a href="#">Barang</a></li>
							<li class="breadcrumb-item active">Hancur Barang</li>
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
								<h5 class="m-0">Hancur Barang</h5>
							</div>
							<div class="card-body">
								<section class="filter">
									<form class="form-inline">
										<label class="sr-only" for="filter-kriteria">Jenis</label>
										<input type="text" class="form-control mb-2 mr-sm-2" id="filter-kriteria" placeholder="Jenis Barang">
										<label class="sr-only" for="filter-tanggal">Tanggal</label>
										<div class="input-group mb-2 mr-sm-2">
											<div class="input-group-prepend">
												<span class="input-group-text"><i class="fa fa-calendar"></i></span>
											</div>
											<input type="text" class="form-control daterange" id="filter-tanggal" name="filter-tanggal" placeholder="Tanggal">
										</div>
										<button type="submit" class="btn btn-primary mb-2"><i class="fa fa-search"></i></button>
									</form>
									<button class="btn btn-primary btn-add" data-toggle="modal" data-target="#modalForm"><i class="fa fa-plus"></i> Tambah Data</button>
								</section>
								<table class="table table-bordered">
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">Kode Barang</th>
											<th scope="col">Nama Barang</th>
											<th scope="col">Berat (gram)</th>
											<th scope="col">Kondisi</th>
											<th scope="col">Tanggal Hancur</th>
											<th scope="col">Lokasi</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row" class="text-center" style="width: 50px;">1</th>
											<td class="text-center">E-0001</td>
											<td class="text-center">Barang 1</td>
											<td class="text-center">20</td>
											<td class="text-center"><span class="btn btn-sm btn-warning">Rusak</span></td>
											<td class="text-center">20/02/2019</td>
											<td class="text-center">Toko A</td>
											<td class="text-center" style="width: 120px;">
												<button type="button" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#modalForm" ><i class="fa fa-edit"></i></button>
												<button type="button" class="btn btn-sm btn-danger btn-delete" ><i class="fa fa-trash"></i></button>
											</td>
										</tr>
										<tr>
											<th scope="row" class="text-center" style="width: 50px;">2</th>
											<td class="text-center">E-0002</td>
											<td class="text-center">Barang 2</td>
											<td class="text-center">20</td>
											<td class="text-center"><span class="btn btn-sm btn-warning">Rusak</span></td>
											<td class="text-center">20/02/2019</td>
											<td class="text-center">Toko B</td>
											<td class="text-center" style="width: 120px;">
												<button type="button" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#modalForm" ><i class="fa fa-edit"></i></button>
												<button type="button" class="btn btn-sm btn-danger btn-delete" ><i class="fa fa-trash"></i></button>
											</td>
										</tr>
										<tr>
											<th scope="row" class="text-center" style="width: 50px;">3</th>
											<td class="text-center">E-0001</td>
											<td class="text-center">Barang 3</td>
											<td class="text-center">20</td>
											<td class="text-center"><span class="btn btn-sm btn-danger">Hilang</span></td>
											<td class="text-center">23/02/2019</td>
											<td class="text-center">Toko A</td>
											<td class="text-center" style="width: 120px;">
												<button type="button" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#modalForm" ><i class="fa fa-edit"></i></button>
												<button type="button" class="btn btn-sm btn-danger btn-delete" ><i class="fa fa-trash"></i></button>
											</td>
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
<div class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="modalForm" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="modalForm">Form</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<form>
					<div class="form-group">
						<label>Lokasi Gudang</label>
						<select class="form-control select2" name="gudang" style="width: 100%;">
							<option value="">Pilih</option>
							<option selected="selected" value="Gudang 1">Gudang 1</option>
							<option value="Gudang 2">Gudang 2</option>
							<option value="Gudang 3">Gudang 3</option>
							<option value="Gudang 4">Gudang 4</option>
							<option value="Gudang 5">Gudang 5</option>
						</select>
					</div>
					<div class="row">
						<div class="col-4">
							<div class="form-group">
								<label for="kode_barang">Kode</label>
								<input type="email" class="form-control" id="kode_barang" aria-describedby="kode_barang" placeholder="00000" maxlength="10">
								<!-- <small id="kode_kategori" class="form-text text-muted">Kode barang</small> -->
							</div>
						</div>
						<div class="col-8">
							<div class="form-group">
								<label>Nama Barang</label>
								<input type="text" class="form-control" name="nama_barang" placeholder="Barang 1" readonly>
							</div>
						</div>
					</div>

					<div class="form-group">
						<label>Alasan / Kondisi Barang</label>
						<select class="form-control select2" name="gudang" style="width: 100%;">
							<option value="">Pilih</option>
							<option value="Normal">Normal</option>
							<option value="Rusak">Rusak</option>
							<option value="Hilang">Hilang</option>
							<option value="Pecah">Pecah</option>
						</select>
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
				<button type="button" class="btn btn-primary btn-save">Simpan</button>
			</div>
		</div>
	</div>
</div>
</div>
</template>