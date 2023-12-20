//-------> navebar 
function appendHtml() {
    let j = document.getElementById("myNavbar");
    j.innerHTML += ` 
    <div class="navbar" id="myNavbar">
        <a href="/static/index.html" class="active">Aarogyamm</a>
        <a href="/static/Partial/Product.html" >Products</a>
        <a href="/static/Partial/Sales.html" onclick="openTab('sales')">Sales</a>
        <a href="/static/Partial/Customer.html" onclick="openTab('customer')">Customer</a>
        <a href="/static/Partial/Profile.html" onclick="openTab('Profile')">Profile</a>

        <a href="javascript:void(0);" class="icon" onclick="toggleNavbar()">
            &#9776;
        </a>
    </div>
    `;

    
}
window.onload = function () {
    appendHtml();
}