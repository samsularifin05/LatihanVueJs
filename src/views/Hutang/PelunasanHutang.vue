<template>
    <duv>
    	<!-- Content Header (Page header) -->
    	<div class="content-header">
    		<div class="container-fluid">
    			<div class="row mb-2">
    				<div class="col-sm-6">
    					<h1 class="m-0 text-dark">Hutang</h1>
    				</div><!-- /.col -->
    				<div class="col-sm-6">
    					<ol class="breadcrumb float-sm-right">
    						<li class="breadcrumb-item"><a href="#">Home</a></li>
    						<li class="breadcrumb-item"><a href="#">Hutang</a></li>
    						<li class="breadcrumb-item active">Pelunasan Hutang</li>
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
  								<h5 class="m-0">Pelunasan Hutang</h5>
  							</div>
    						<div class="card-body">
    							<section class="filter">
										<form class="form-inline">
											<label class="sr-only" for="filter-kriteria">No. Hutang</label>
											<input type="text" class="form-control mb-2 mr-sm-2" id="filter-kriteria" placeholder="Nomor Hutang">
											<label class="sr-only" for="filter-tanggal">Tanggal</label>
    									<div class="input-group mb-2 mr-sm-2">
				  							<div class="input-group-prepend">
				                  <span class="input-group-text"><i class="fa fa-calendar"></i></span>
				                </div>
				                <input type="text" class="form-control daterange" id="filter-tanggal" name="filter-tanggal" placeholder="Tanggal">
				              </div>
				              <label class="sr-only" for="filter-tanggal">Sales</label>
				              <div class="input-group mb-2 mr-sm-2">
					              <select class="form-control select2" name="sales">
													<option value="">Pilih sales</option>
													<option value="Nur">Nur</option>
													<option value="Joko">Joko</option>
													<option value="James">James</option>
													<option value="Nurul">Nurul</option>
												</select>
				              </div>
											<button type="submit" class="btn btn-primary mb-2"><i class="fa fa-search"></i></button>
										</form>
									</section>
									<table class="table table-bordered">
										<thead>
											<tr>
												<th scope="col">#</th>
												<th scope="col">No. Hutang</th>
												<th scope="col">Tanggal</th>
												<th scope="col">Customer</th>
												<th scope="col"></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row" class="text-center" style="width: 50px;">1</th>
												<td class="text-center">PE19-0001</td>
												<td class="text-center">21/12/2019</td>
												<td class="text-center">ABDUL</td>
												<td class="text-center" style="width: 120px;">
													<button type="button" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#modalForm"><i class="fa fa-edit"></i></button>
													<button type="button" class="btn btn-sm btn-danger btn-delete"><i class="fa fa-trash"></i></button>
												</td>
											</tr>
											<tr>
												<th scope="row" class="text-center" style="width: 50px;">2</th>
												<td class="text-center">PE19-0002</td>
												<td class="text-center">21/12/2019</td>
												<td class="text-center">ABDUL</td>
												<td class="text-center" style="width: 120px;">
													<button type="button" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#modalForm"><i class="fa fa-edit"></i></button>
													<button type="button" class="btn btn-sm btn-danger btn-delete"><i class="fa fa-trash"></i></button>
												</td>
											</tr>
											<tr>
												<th scope="row" class="text-center" style="width: 50px;">3</th>
												<td class="text-center">PE19-0003</td>
												<td class="text-center">21/12/2019</td>
												<td class="text-center">ABDUL</td>
												<td class="text-center" style="width: 120px;">
													<button type="button" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#modalForm"><i class="fa fa-edit"></i></button>
													<button type="button" class="btn btn-sm btn-danger btn-delete"><i class="fa fa-trash"></i></button>
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
  	<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
  		<div class="modal-content">
  			<div class="modal-header">
  				<h5 class="modal-title" id="modalForm">Form</h5>
  				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
  					<span aria-hidden="true">&times;</span>
  				</button>
  			</div>
  			<div class="modal-body">
  				<form>
  					<div class="row justify-content-between">
							<div class="col-12 col-md-6">
								<div class="form-group">
									<div class="row">
										<div class="col-4 d-flex align-items-center">
											<label class="mb-0">No. Hutang</label>
										</div>
										<div class="col-8">
											<div class="input-group">
												<input type="text" class="form-control" id="nomor" name="nomor" placeholder="Nomor hutang" readonly="">
											</div>
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-4 d-flex align-items-center">
											<label class="mb-0">Tanggal</label>
										</div>
										<div class="col-8">
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text"><i class="fa fa-calendar"></i></span>
												</div>
												<input type="text" class="form-control date" id="tanggal" name="tanggal" placeholder="Tanggal" readonly="">
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-12 col-md-6">
								<div class="form-group">
									<div class="row">
										<div class="col-4 d-flex align-items-center">
											<label class="mb-0">Nama</label>
										</div>
										<div class="col-8">
											<div class="input-group">
												<input type="text" class="form-control" id="nama" name="nama" placeholder="Nama lengkap" readonly="">
											</div>
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-4 d-flex align-items-center">
											<label class="mb-0">Alamat</label>
										</div>
										<div class="col-8">
											<div class="input-group">
												<input type="text" class="form-control" id="alamat" name="alamat" placeholder="Alamat pelanggan" readonly="">
											</div>
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-4 d-flex align-items-center">
											<label class="mb-0">Nomor Telepon</label>
										</div>
										<div class="col-8">
											<div class="input-group">
												<input type="text" class="form-control" id="no_telp" name="no_telp" placeholder="08xxxxxxxxxx" maxlength="15" readonly="">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<hr>

						<div class="row">
							<div class="col-12 col-md-6">
								<h4>Detail Transaksi Pelunasan Hutang</h4>
								<table class="table table-bordered table-sm table-centered table-nojs">
									<thead>
										<tr>
											<th>Nama Barang</th>
											<th>Berat</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Barang 1</td>
											<td class="text-center" style="width: 164px">2 gram</td>
										</tr>
										<tr>
											<td>Barang 2</td>
											<td class="text-center" style="width: 164px">4 gram</td>
										</tr>
										<tr>
											<td>Barang 3</td>
											<td class="text-center" style="width: 164px">3 gram</td>
										</tr>
									</tbody>
								</table>

								<div class="form-group">
									<div class="row">
										<div class="col-4 d-flex align-items-center">
											<label class="mb-0" for="berat">Total Jumlah Item</label>
										</div>
										<div class="col-8">
											<div class="input-group">
												<input type="text" class="form-control" id="berat" name="berat" placeholder="0" readonly>
											</div>
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-4 d-flex align-items-center">
											<label class="mb-0" for="berat">Total Berat Emas</label>
										</div>
										<div class="col-8">
											<div class="input-group">
												<input type="text" class="form-control" id="berat" name="berat" placeholder="0" readonly>
												<div class="input-group-append">
													<span class="input-group-text">gram</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-4 d-flex align-items-center">
											<label class="mb-0" for="berat_plastik">Total Emas + Plastik</label>
										</div>
										<div class="col-8">
											<div class="input-group">
												<input type="text" class="form-control" id="berat_plastik" name="berat_plastik" placeholder="0" readonly="">
												<div class="input-group-append">
													<span class="input-group-text">gram</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-12 col-md-6">
								<h4>&nbsp;</h4>
								<div class="form-group">
									<div class="row">
										<div class="col-4 d-flex align-items-center">
											<label class="mb-0" for="hutang">Hutang Pokok</label>
										</div>
										<div class="col-8">
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text">Rp</span>
												</div>
												<input type="number" class="form-control" id="hutang" name="hutang" placeholder="0" readonly="">
											</div>
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-4 d-flex align-items-center">
											<label class="mb-0" for="bunga">Bunga</label>
										</div>
										<div class="col-8">
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text">Rp</span>
												</div>
												<input type="number" class="form-control" id="hutang" name="bunga" placeholder="0" readonly="">
											</div>
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-4 d-flex align-items-center">
											<label class="mb-0" for="total_bayar">Total Saldo Bayar</label>
										</div>
										<div class="col-8">
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text">Rp</span>
												</div>
												<input type="number" class="form-control" id="hutang" name="total_bayar" placeholder="0" readonly="">
											</div>
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-4 d-flex align-items-center">
											<label class="mb-0">Sisa Hutang</label>
										</div>
										<div class="col-8">
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text">Rp</span>
												</div>
												<input type="number" class="form-control" id="hutang" name="sisa_hutang" placeholder="0" readonly="">
											</div>
										</div>
									</div>
		  					</div>
		  					<div class="form-group">
									<div class="row">
										<div class="col-4 d-flex align-items-center">
											<label class="mb-0" for="dilunasi">Dilunasi</label>
										</div>
										<div class="col-8">
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text">Rp</span>
												</div>
												<input type="number" class="form-control form-control-lg" id="dilunasi" name="dilunasi" placeholder="0">
											</div>
										</div>
									</div>
								</div>

							</div>
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
    </duv>
</template>