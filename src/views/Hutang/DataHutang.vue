<template>
    <div>
        <div class="content">
    		<div class="container-fluid">
    			<div class="row">
    				<div class="col-12">
    					<div class="card card-primary card-outline">
    						<form>
    							<div class="card-header">
    								<h5 class="m-0">Input Hutang</h5>
    							</div>
    							<div class="card-body">
    								<div class="row justify-content-between">
    									<div class="col-12 col-md-5">
    										<div class="form-group">
    											<div class="row">
    												<div class="col-4 d-flex align-items-center">
    													<label class="mb-0">No.</label>
    												</div>
    												<div class="col-8">
    													<div class="input-group">
    														<input type="text" class="form-control" id="nomor" name="nomor" placeholder="Tanggal">
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
    														<input type="text" class="form-control date" id="tanggal" name="tanggal" placeholder="Tanggal">
    													</div>
    												</div>
    											</div>
    										</div>
    										<div class="form-group">
    											<div class="row">
    												<div class="col-4 d-flex align-items-center">
    													<label class="mb-0">Sales</label>
    												</div>
    												<div class="col-8">
    													<select class="form-control select2" name="sales" style="width: 100%;">
    														<option value="">Pilih</option>
    														<option selected="selected" value="Nur">Nur</option>
    														<option value="Joko">Joko</option>
    														<option value="James">James</option>
    														<option value="Nurul">Nurul</option>
    													</select>
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
    														<input type="text" class="form-control" id="nama" name="nama" placeholder="Nama lengkap">
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
    														<input type="text" class="form-control" id="alamat" name="alamat" placeholder="Alamat pelanggan">
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
    														<input type="text" class="form-control" id="no_telp" name="no_telp" placeholder="08xxxxxxxxxx" maxlength="15">
    													</div>
    												</div>
    											</div>
    										</div>
    									</div>
    								</div>

    								<hr>

    								<div class="row">
    									<div class="col-12 col-md-7">
    										<div class="form-group">
    											<div class="row">
    												<div class="col-12 col-md-8">
    													<div class="input-group">
    														<input type="text" class="form-control" id="deskripsi" name="deskripsi" placeholder="Deskripsi">
    													</div>
    												</div>
    												<div class="col-12 col-md-3">
    													<div class="input-group">
    														<input type="text" class="form-control" id="berat" name="berat" placeholder="Berat">
    													</div>
    												</div>
    												<div class="col-12 col-md-1">
    													<button class="btn btn-primary"><i class="fa fa-plus"></i></button>
    												</div>
    											</div>
    										</div>

    										<table class="table table-bordered table-sm table-centered table-nojs">
    											<thead>
    												<tr>
    													<th>Nama Barang</th>
    													<th>Berat</th>
    													<th></th>
    												</tr>
    											</thead>
    											<tbody>
    												<tr>
    													<td>Barang 1</td>
    													<td class="text-center" style="width: 164px">2 gram</td>
    													<td class="text-center" style="width: 52px"><button type="button" class="btn btn-sm btn-danger"><i class="fa fa-minus"></i></button></td>
    												</tr>
    												<tr>
    													<td>Barang 2</td>
    													<td class="text-center" style="width: 164px">4 gram</td>
    													<td class="text-center" style="width: 52px"><button type="button" class="btn btn-sm btn-danger"><i class="fa fa-minus"></i></button></td>
    												</tr>
    												<tr>
    													<td>Barang 3</td>
    													<td class="text-center" style="width: 164px">3 gram</td>
    													<td class="text-center" style="width: 52px"><button type="button" class="btn btn-sm btn-danger"><i class="fa fa-minus"></i></button></td>
    												</tr>
    											</tbody>
    										</table>
    									</div>

    									<div class="col-12 col-md-5">
    										<div class="form-group">
    											<div class="row">
    												<div class="col-4 d-flex align-items-center">
    													<label class="mb-0" for="berat">Berat Emas</label>
    												</div>
    												<div class="col-8">
    													<div class="input-group">
    														<input type="text" class="form-control" id="berat" name="berat" placeholder="Berat barang" readonly>
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
    													<label class="mb-0" for="berat_plastik">Emas + Plastik</label>
    												</div>
    												<div class="col-8">
    													<div class="input-group">
    														<input type="text" class="form-control" id="berat_plastik" name="berat_plastik" placeholder="Berat barang + plastik">
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
    													<label class="mb-0" for="hutang">Besar Pinjaman</label>
    												</div>
    												<div class="col-8">
    													<div class="input-group">
    														<div class="input-group-prepend">
    															<span class="input-group-text">Rp</span>
    														</div>
    														<input type="text" class="form-control" id="hutang" name="hutang" placeholder="Total pinjaman">
    													</div>
    												</div>
    											</div>
    										</div>
    										<div class="form-group">
    											<div class="row">
    												<div class="col-4 d-flex align-items-center">
    													<label class="mb-0" for="bunga">Bunga Pinjaman</label>
    												</div>
    												<div class="col-4">
    													<div class="input-group">
    														<input type="text" class="form-control" id="bunga" name="bunga" placeholder="Besar bunga">
    														<div class="input-group-append">
    															<span class="input-group-text">%</span>
    														</div>
    													</div>
    												</div>
    											</div>
    										</div>
    										<div class="form-group">
    											<div class="row">
    												<div class="col-4 d-flex align-items-center">
    													<label class="mb-0" for="lama_pinjaman">Lama Pinjaman</label>
    												</div>
    												<div class="col-4">
    													<div class="input-group">
    														<input type="text" class="form-control" id="lama_pinjaman" name="lama_pinjaman" placeholder="0">
    														<div class="input-group-append">
    															<span class="input-group-text">hari</span>
    														</div>
    													</div>
    												</div>
    											</div>
    										</div>
    										<div class="form-group">
    											<div class="row">
    												<div class="col-4 d-flex align-items-center">
    													<label class="mb-0">Jatuh Tempo</label>
    												</div>
    												<div class="col-8">
    													<div class="input-group">
								  							<div class="input-group-prepend">
								                  <span class="input-group-text"><i class="fa fa-calendar"></i></span>
								                </div>
								                <input type="text" class="form-control date" id="jatuh_tempo" name="jatuh_tempo" placeholder="Tanggal">
								              </div>
    												</div>
    											</div>
						  					</div>
						  					<div class="form-group">
    											<div class="row">
    												<div class="col-4 d-flex align-items-center">
    													<label class="mb-0" for="kembali">Besar Kembali</label>
    												</div>
    												<div class="col-8">
    													<div class="input-group">
    														<div class="input-group-prepend">
    															<span class="input-group-text">Rp</span>
    														</div>
    														<input type="text" class="form-control form-control-lg" id="kembali" name="kembali" placeholder="Total pinjaman" readonly="">
    													</div>
    												</div>
    											</div>
    										</div>
    										<div class="form-group">
    											<div class="row">
    												<div class="col-4 d-flex align-items-center">
    													<label class="mb-0" for="besar_bunga">Besar Bunga</label>
    												</div>
    												<div class="col-8">
    													<div class="input-group">
    														<div class="input-group-prepend">
    															<span class="input-group-text">Rp</span>
    														</div>
    														<input type="text" class="form-control form-control-lg" id="besar_bunga" name="besar_bunga" placeholder="Total bunga" readonly="">
    													</div>
    												</div>
    											</div>
    										</div>
    									</div>
    								</div>
    							</div>
    							<div class="card-footer d-flex justify-content-end">
    								<div>
    									<button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
    									<button type="button" class="btn btn-primary btn-save">Simpan</button>
    								</div>
    							</div>
    						</form>
    					</div>
    				</div>
    			</div>
    			<!-- /.row -->
    		</div><!-- /.container-fluid -->
    	</div>
    </div>
</template>