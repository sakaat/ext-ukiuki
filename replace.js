$(function() {
    $("head").append('<script type="text/javascript">localStorage.setItem("shops", JSON.stringify(shops));</script>');
    $("head").append('<script type="text/javascript">localStorage.setItem("products", JSON.stringify(products));</script>');

    var shops = JSON.parse(localStorage.getItem("shops"));
    var products = JSON.parse(localStorage.getItem("products"));

    $("input[id=shop]").attr("autocomplete", "on");
    $("input[id=shop]").attr("list", "shopList");
    $("head").append('<datalist id="shopList">');
    var shopOptions = [];
    for (var i = 0; i < shops.length; i++) { shopOptions.push('<option value="'+ shops[i] +'" />'); }
    $("datalist[id=shopList]").append(shopOptions);
    
    $("input[id=product]").attr("autocomplete", "on");
    $("input[id=product]").attr("list", "productList");
    $("head").append('<datalist id="productList">');
    var productOptions = [];
    for (var i = 0; i < products.length; i++) { productOptions.push('<option value="'+ products[i] +'" />'); }
    $("datalist[id=productList]").append(productOptions);
});
