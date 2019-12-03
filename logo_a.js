document.getElementById('logo_a').appendChild(document.createTextNode(new Date().getFullYear()))
jQuery(document).ready(function() {
     jQuery("#logo_a:eq( 2 )").children().first().html('<img src="https://raw.githubusercontent.com/dorlibrary/hosting/master/KP-logo-white1.png"     style="padding-bottom: 5px; background:#003c71">');
});

