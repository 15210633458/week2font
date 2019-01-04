require.config({
    paths: {
        'scroll': './bscroll',
        'jquery': './jquery'
    }
})
require(['scroll', 'jquery'], function(scroll, jquery) {
    var con = document.getElementById('con');
    var page = 1,
        page_size = 5,
        type = 1;

    jquery.ajax({
        url: '/api/get/list',
        data: {
            page: page,
            page_size: page_size,
            type: type
        },
        success: function(data) {
            if (data.code == 1) {
                var html = '';
                data.data.forEach((i) => {
                    html += `<dl>
                                <dt>
                                        <img src="http://localhost:3000/images/${i.img}" >
                                    </dt>
                                <dd>
                                    ${i.title}
                                </dd>
                            </dl>`
                })
                con.innerHTML = html
            }
        }
    })
})