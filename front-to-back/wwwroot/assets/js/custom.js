$(function () {

    var skipRow = 1;
    $(document).on('click', '#loadmore', function () {
        console.log("here")
        $.ajax({
            method: "GET",
            url: "/home/loadmore",
            data: {
                skipRow: skipRow
            },
            success: function (result) {
                $('#recentWorkComponents').append(result);
                skipRow++;
            }
        })

    })

})