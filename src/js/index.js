require.config({
    paths: {
        'scroll': './bscroll'
    }
})
require(['scroll'], function(scroll) {
    var con = document.getElementById('con');


    var xhr = new XMLHttpRequest();
    xhr.open('get', '/api/get/list?page=1&page_size=5&type=1', true)
    xhr.onload = function(res) {
        if (res.target.status == 200) {
            //console.log(res.target.response)
            var data = JSON.parse(res.target.response)
            if (data.code == 1) {
                var html = '';
                data.data.forEach((i) => {
                    html += `<dl>
                                <dt>
                                        <img src="${i.img}" >
                                    </dt>
                                <dd>
                                    ${i.title}
                                </dd>
                            </dl>`
                })
                con.innerHTML = html
            }
        }
    }
    xhr.send()
})