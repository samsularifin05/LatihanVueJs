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
    						<li class="breadcrumb-item active">Pindah Barang</li>
    					</ol>
    				</div><!-- /.col -->
    			</div><!-- /.row -->
    		</div><!-- /.container-fluid -->
    	</div>
    	<!-- /.content-header -->

    	<!-- Main content -->
    	<div class="content">
    		<div class="container">
    			<div class="row justify-content-md-center">
    				<div class="col-12 col-md-6">
    					<div class="card card-primary card-outline">
    						<div class="card-header">
    							<h5 class="m-0">Pindah Barang</h5>
    						</div>
    						<div class="card-body">
    							<form action="#">
    								<div class="form-group">
    									<div class="row">
    										<!-- <div class="col-7">
    											<label for="tanggal">Tanggal</label>
			  									<div class="input-group">
						  							<div class="input-group-prepend">
									                  <span class="input-group-text"><i class="fa fa-calendar"></i></span>
									                </div>
									                <input type="text" class="form-control date" id="tanggal" name="tanggal" placeholder="Tanggal">
									           	</div>
    										</div>
    										<div class="col-5">
    											<label for="jam">&nbsp;</label>
			  									<div class="input-group">
						  							<div class="input-group-prepend">
									                  <span class="input-group-text"><i class="fa fa-clock"></i></span>
									                </div>
									                <input type="time" class="form-control" id="jam" name="jam" placeholder="Tanggal">
								                </div>
    										</div> -->
    									</div>
					              </div>
					              <div class="row">
					              	<div class="col-6">
					              			<div class="form-group">
								              <label>Gudang Asal</label>
								              <select class="form-control select2" name="gudang_asal" style="width: 100%;">
								                <option value="">Pilih</option>
								                <option selected="selected" value="Gudang 1">Gudang 1</option>
								                <option value="Gudang 2">Gudang 2</option>
								                <option value="Gudang 3">Gudang 3</option>
								                <option value="Gudang 4">Gudang 4</option>
								                <option value="Gudang 5">Gudang 5</option>
								              </select>
								            </div>
								            <div class="form-group">
								              <label>Baki Asal</label>
								              <select class="form-control select2" name="baki_asal" style="width: 100%;">
								                <option value="">Pilih</option>
								                <option selected="selected" value="E-0001">E-0001</option>
								                <option value="E-0002">E-0002</option>
								                <option value="E-0003">E-0003</option>
								                <option value="E-0004">E-0004</option>
								                <option value="E-0005">E-0005</option>
								              </select>
								            </div>
					              	</div>
					              	<div class="col-6">
					              		<div class="form-group">
								              <label>Gudang Tujuan</label>
								              <select class="form-control select2" name="gudang_tujuan" style="width: 100%;">
								                <option value="">Pilih</option>
								                <option selected="selected" value="Gudang 1">Gudang 1</option>
								                <option value="Gudang 2">Gudang 2</option>
								                <option value="Gudang 3">Gudang 3</option>
								                <option value="Gudang 4">Gudang 4</option>
								                <option value="Gudang 5">Gudang 5</option>
								              </select>
							            </div>
								        <div class="form-group">
								              <label>Baki Tujuan</label>
								              <select class="form-control select2" name="baki_tujuan" style="width: 100%;">
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
    							</form>
								<div class="modal-footer">
					  				<button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
					  				<button type="button" class="btn btn-primary btn-save">Simpan</button>
					  			</div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<!-- /.row -->
    		</div><!-- /.container-fluid -->
    	</div>
    	<!-- /.content -->
    </div>
</template>