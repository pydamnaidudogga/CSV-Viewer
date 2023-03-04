  
 $(document).ready(function () {
    // Setup - add a text input to each footer cell
    $('#employee tfoot th').each(function () {
        var title = $(this).text();
        $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    });
    // DataTable
    
    const table =$('#employee').DataTable({
        columnDefs: [
            {
                targets: [0],
                orderData: [0, 1],
            },
            {
                targets: [1],
                orderData: [1, 0],
            },
            {
                targets: [4],
                orderData: [4, 0],
            },
        ],
        initComplete: function () {
            // Apply the search
            this.api()
                .columns()
                .every(function () {
                    var that = this;
                    
 
                    $('input', this.footer()).on('keyup change clear', function () {
                        if (that.search() !== this.value) {
                            that.search(this.value).draw();
                        }
                    });
                });
        },
    });
    

    
});


   



