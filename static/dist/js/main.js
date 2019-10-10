const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-lg btn-success',
    cancelButton: 'btn btn-lg btn-danger'
  },
  buttonsStyling: false
})

$(document).on('click', '.btn-simpan', function(event) {
	event.preventDefault();
	/* Act on the event */

	// Jika berhasil hapus
	swalWithBootstrapButtons.fire(
    'Tersimpan!',
    'Data berhasil disimpan.',
    'success'
  )

	// Jika Gagal hapus
  // swalWithBootstrapButtons.fire(
  //   'Gagal',
  //   'Data gagal tersimpan',
  //   'error'
  // )
});

$(document).on('click', '.btn-delete', function(event) {
	event.preventDefault();
	/* Act on the event */

	swalWithBootstrapButtons.fire({
	  title: 'Konfirmasi Hapus Data',
	  text: "Yakin untuk menghapus data ini?",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonText: 'Hapus',
	  cancelButtonText: 'Batal',
	  reverseButtons: true
	}).then((result) => {
	  if (result.value) {
	    swalWithBootstrapButtons.fire(
	      'Terhapus!',
	      'Data berhasil dihapus.',
	      'success'
	    )
	  } else if (
	    /* Read more about handling dismissals below */
	    result.dismiss === Swal.DismissReason.cancel
	  ) {
	    // swalWithBootstrapButtons.fire(
	    //   'Cancelled',
	    //   'Your imaginary file is safe :)',
	    //   'error'
	    // )
	  }
	})
});

$(document).on('click', '.btn-save', function(event) {
	event.preventDefault();
	/* Act on the event */

	swalWithBootstrapButtons.fire({
	  title: 'Konfirmasi Simpan Data',
	  text: "Yakin untuk menyimpan data ini?",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonText: 'Simpan',
	  cancelButtonText: 'Batal',
	  reverseButtons: true
	}).then((result) => {
	  if (result.value) {
	    swalWithBootstrapButtons.fire(
	      'Tersimpan!',
	      'Data berhasil disimpan.',
	      'success'
	    ).then((result) => {
	    	$('.modal').modal('hide')
	    })
	  } else if (
	    /* Read more about handling dismissals below */
	    result.dismiss === Swal.DismissReason.cancel
	  ) {
	    // swalWithBootstrapButtons.fire(
	    //   'Cancelled',
	    //   'Your imaginary file is safe :)',
	    //   'error'
	    // )
	  }
	})
});

$(function () {
  $('.table:not(.table-nojs)').DataTable({
    "paging": true,
    "lengthChange": false,
    "searching": false,
    "ordering": true,
    responsive: true,
    "info": true,
    "autoWidth": false,
  });

  $('.select2').select2()
  $('.daterange').daterangepicker()
  $('.date').daterangepicker({ singleDatePicker: true })
  $('.datetime').daterangepicker({ singleDatePicker: true, timePicker: true })
});

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
});