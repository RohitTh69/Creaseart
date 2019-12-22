

function contentPanel(evt, contentId) {
    
  let i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tab-content");
  
  for (i = 0; i < tabcontent.length; i++) {
      
    tabcontent[i].style.display = "none";

  }
  
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {

    tablinks[i].className = tablinks[i].className.replace(" active", "");

  }

  document.getElementById(contentId).style.display = "block";

  evt.currentTarget.className += " active";

  let itemPrice = document.getElementsByClassName('item_price')[0];
  let itemPriceTotal = document.getElementsByClassName('item_price_total')[0];
  let priceTotal = document.getElementsByClassName('priceTotal')[0];

  const calculate = () => {
    priceTotal[0].innerHTML = parseInt(itemPrice.value) * parseInt(itemPriceTotal.value);
  }

}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}