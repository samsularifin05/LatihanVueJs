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
							<li class="breadcrumb-item active">Input Barang</li>
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
								<h5 class="m-0">Input Barang</h5>
							</div>
							<div class="card-body">
								<section class="filter">
									<form class="form-inline">
										<label class="sr-only" for="filter-kriteria">Jenis</label>
										<input type="text" class="form-control mb-2 mr-sm-2" id="filter-kriteria" placeholder="Jenis Barang">
										<button type="submit" class="btn btn-primary mb-2"><i class="fa fa-search"></i></button>
									</form>
									<button class="btn btn-primary btn-add" data-toggle="modal" data-target="#modalForm"><i class="fa fa-plus"></i> Tambah Data</button>
								</section>
								<table class="table table-bordered">
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">Kode Barang</th>
											<th scope="col">Barcode</th>
											<th scope="col">Nama Barang</th>
											<th scope="col">Atribut</th>
											<th scope="col">Kategori</th>
											<th scope="col">Berat (gram)</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row" class="text-center" style="width: 50px;">1</th>
											<td class="text-center">E-0001</td>
											<td class="text-center">0012010</td>
											<td class="text-center">Barang 1</td>
											<td class="text-center">-</td>
											<td class="text-center">Perhiasan</td>
											<td class="text-center">20</td>
											<td class="text-center" style="width: 120px;">
												<button type="button" class="btn btn-sm btn-info"><i class="fa fa-print"></i></button>
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
	<div class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="modalForm" aria-hidden="true">
	<div class="modal-dialog modal-lg  modal-dialog-centered" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="modalForm">Form</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<form>
					<div class="row">
						<div class="col-4">
							<div class="form-group">
								<label>Kategori Barang</label>
								<select class="form-control select2" name="kode_barang" style="width: 100%;">
									<option value="">Pilih</option>
									<option selected="selected" value="E-0001">E-0001</option>
									<option value="E-0002">E-0002</option>
									<option value="E-0003">E-0003</option>
									<option value="E-0004">E-0004</option>
									<option value="E-0005">E-0005</option>
								</select>
							</div>
						</div>
						<div class="col-4">
							<div class="form-group">
								<label>Jenis Barang</label>
								<select class="form-control select2" name="jenis_barang" style="width: 100%;">
									<option value="">Pilih</option>
									<option selected="selected" value="E-0001">E-0001</option>
									<option value="E-0002">E-0002</option>
									<option value="E-0003">E-0003</option>
									<option value="E-0004">E-0004</option>
									<option value="E-0005">E-0005</option>
								</select>
							</div>
						</div>
						<div class="col-4">
							<div class="form-group">
								<label>Baki</label>
								<select class="form-control select2" name="baki" style="width: 100%;">
									<option value="">Pilih</option>
									<option selected="selected" value="E-0001">E-0001</option>
									<option value="E-0002">E-0002</option>
									<option value="E-0003">E-0003</option>
									<option value="E-0004">E-0004</option>
									<option value="E-0005">E-0005</option>
								</select>
							</div>
						</div>
					</div>

					<hr>



					<div class="row">
						<div class="col-8">
							<div class="form-group">
								<label for="nama_barang">Nama Barang</label>
								<div class="input-group">
									<input type="text" class="form-control" id="nama_barang" name="nama_barang" placeholder="Nama barang">
								</div>
							</div>
							<div class="row">
								<div class="col-8">
									<div class="form-group">
										<label for="atribut">Atribut</label>
										<div class="input-group">
											<input type="text" class="form-control" id="atribut" name="atribut" placeholder="Atribut barang">
										</div>
									</div>
								</div>
								<div class="col-4">
									<div class="form-group">
										<label for="harga_atribut">Harga Atribut</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text">Rp</span>
											</div>
											<input type="text" class="form-control" id="harga_atribut" name="harga_atribut" placeholder="Nominal">
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-8">
									<div class="form-group">
										<label for="kadar">Kadar (Cetak)</label>
										<div class="input-group">
											<input type="text" class="form-control" id="kadar" name="kadar" placeholder="Kadar barang">
										</div>
									</div>
								</div>
								<div class="col-4">
									<div class="form-group">
										<label for="kadar_jual">Kadar Jual</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text">Rp</span>
											</div>
											<input type="text" class="form-control" id="kadar_jual" name="kadar_jual" placeholder="Nominal">
										</div>
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="berat">Berat</label>
								<div class="input-group">
									<input type="text" class="form-control" id="berat" name="berat" placeholder="Berat barang">
									<div class="input-group-append">
										<span class="input-group-text">gram</span>
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="berat_asli">Berat Asli</label>
								<div class="input-group">
									<input type="text" class="form-control" id="berat_asli" name="berat_asli" placeholder="Berat asli barang">
									<div class="input-group-append">
										<span class="input-group-text">gram</span>
									</div>
								</div>
							</div>
						</div>

						<div class="col-4">
							<div class="card image-upload">
								<img class="card-img-top" src="/static/dist/img/prod-6.jpg" alt="Card image cap" height="240px">
								<div class="card-footer">
									<div class="input-group">
										<div class="custom-file">
											<input type="file" class="custom-file-input" id="exampleInputFile">
											<label class="custom-file-label" for="exampleInputFile">Pilih gambar</label>
										</div>
										<div class="input-group-append">
											<button type="button" class="btn btn-primary">Upload</button>
										</div>
									</div>
								</div>
							</div>

							<button type="button" class="btn btn-primary btn-block"><i class="fa fa-camera"></i> Ambil Foto dari Webcam</button>
						</div>

						<div class="col-4">
							<div class="form-group">
								<label for="kode_intern">Kode Intern</label>
								<div class="input-group">
									<input type="text" class="form-control" id="kode_intern" name="kode_intern" placeholder="Kode">
								</div>
							</div>
						</div>
						<div class="col-4">
							<div class="form-group">
								<label for="kode_barang">Kode Barang</label>
								<div class="input-group">
									<input type="text" class="form-control" id="kode_barang" name="kode_barang" placeholder="Kode">
								</div>
							</div>
						</div>
					<!-- </div> -->
<!-- 					<div class="row">
						
					</div> -->

				</div>
			</form>
		</div>
		<div class="modal-footer space-between">
			<button type="button" class="btn btn-info">Cetak Barcode</button>
			<div>
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
				<button type="button" class="btn btn-primary btn-save">Simpan</button>
			</div>
		</div>
	</div>
</div>
</div>
	
    </div>
</template>