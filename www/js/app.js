// 一覧ページが開いたときの処理
document.addEventListener("init", function(event) {
    if (event.target.id == "list-page") {
        loadData();
    }
});

// 一覧ページにデータを読み込む
function loadData() {
// 道路標識データを取得
    $.getJSON("roadsign.json", function(result) {
    var count = result.length;
    var html = "";
    for(var i=0; i<count; i++) {
    // 道路標識の件数分、<ons-list-item>を連結したＨＴＭＬ文字列を作成
    html += "<ons-list-item onclick='onItemClick(" + JSON.stringify(result[i]) + ")'>" + result[i].name + "</ons-list-item>";
    }
    // 作成したＨＴＭＬ文字列を<ons-list>タグ内に挿入
    document.getElementById("signlist").innerHTML = html;
    });
}

// 詳細ページへ移動
function onItemClick(item) {
    document.getElementById("navi").pushPage("detail.html").then(function() {
    // 道路標識の名称と画像ファイルを画面に埋め込む
    document.getElementById("sign_name").innerHTML = item.name;
    document.getElementById("sign_image").src = 'images/' + item.image;
    });    
}
