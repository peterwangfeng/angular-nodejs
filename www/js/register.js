/**
 * Created by 臧兆清 on 2017/2/5.
 */
$('form').submit(function (ev) {
    ev.preventDefault();
    var data = $(this).serialize();
    $.post('/api/register', data, function (res) {
        $('.modal-body').text(res.msg);
        $('.modal').modal('show').on('hidden.bs.modal', function (e) {
            if (res.code === 'success') {
                // location.href =
            }
        })
    })
});