var logo = document.getElementById('logoa');
logo.setAttribute("href", "?SS_Page=refiner&meduid=<?pmid?>&doi=<?DOI?>&genre=<?genre?>&atitle=<?atitle?>&title=<?title?>&client=s6295818&issn=<?issn?>&isbn=<?isbn?>&volume=<?volume?>&issue=<?issue?>&date=<?date?>&aulast=<?aulast?>");
logo.setAttribute("text", "MySQL Tutorial");

jQuery(document).ready(function() {
     jQuery("#logoa:eq( 2 )").children().first().html('<img src="https://raw.githubusercontent.com/dorlibrary/hosting/master/KP-logo-white1.png" style="padding-bottom: 5px; background:#003c71">');
});
