(function() {
 var header = '
 <header id="header" class="clearfix" role="banner">
<div class="header-wrapper">

<a href="#main" class="visually-hidden">Skip to content</a>
<a id="menu-toggle" href="#" class="mobile-only"></a>
<div class="logo-wrapper">

<a class="primary-logo" href="https://www.dim.fr/accueil">
<img width="130px" height="46px" src="https://www.dim.fr/on/demandware.static/Sites-FR-Site/-/default/dw6181f959/images/logo-dim.png" alt="DIM">
<span class="visually-hidden">DIM</span>
</a>

</div>
<div class="header-search">
<a id="search-toggle" href="#" class="mobile-only"></a>
<form role="search" action="/resultats-recherche" method="get" name="simpleSearch">
    <legend class="visually-hidden">Search Catalog</legend>
    <label class="visually-hidden" for="q">Search</label>
    <input type="text" id="q" name="q" placeholder="Recherchez (référence, couleur, taille, ...)" data-mobile-placeholder="simplesearch.searchtext.mobile">
    <input type="submit" value="go">
    <span id="clear-search-filter">X</span>
</form>

</div>
<div class="header-shipping-slot desktop-only">

	 


	

<div class="html-slot-container">
	
		
			<div class="minicartslot"><p><em>Livraison offerte</em> à partir de 39€ d'achats</p></div>
<style>.minicartslot p {font-size: 12px;line-height: 15px;margin: 0;}.minicartslot p em {font-style: normal;font-weight: bold;color:red;text-transform: uppercase;display:block;}.minicartslot {padding : 0 20px 0 48px;background: url("https://www.dim.fr/on/demandware.static/-/Sites/default/dw7fca38a0/permanent/icones/reassurance-delivery.png") no-repeat left top;background-size: 40px;min-height:36px;}</style>	
		
	
</div> 
	
</div>
<div id="countrySwitcherDesktop">




	<div class="m-countrySwitcher">
		<div class="c-countrySwitcher--isSelected">
			<img class="c-countrySwitcher__img" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/default/dw9d0561e1/Flags/fr.jpg" alt="FR">
			<span class="arrow">&nbsp;</span>
		</div>
		<form id="country-switcher-form" action="/on/demandware.store/Sites-FR-Site/fr/Home-CountryRedirect">
			<ul class="c-countrySwitcher__list">
				<li class="c-countrySwitcher__item">
					<p class="c-countrySwitcher__text">
						Choisissez votre pays de livraison
				 	</p>
				 	<select class="c-countrySwitcher__select" data-customselect="false" name="country-switcher" id="country-switcher">
				 		
				 			
							<option value="AL" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Albania
							</option>
						
				 			
							<option value="DZ" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Algérie
							</option>
						
				 			
							<option value="AD" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Andorra
							</option>
						
				 			
							<option value="AI" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Anguilla
							</option>
						
				 			
							<option value="AG" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Antigua &amp; Barbuda
							</option>
						
				 			
							<option value="AR" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Argentina
							</option>
						
				 			
							<option value="AM" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Armenia
							</option>
						
				 			
							<option value="AU" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Australia
							</option>
						
				 			
							<option value="AT" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Austria
							</option>
						
				 			
							<option value="AZ" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Azerbaijan
							</option>
						
				 			
							<option value="BS" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Bahamas
							</option>
						
				 			
							<option value="BH" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Bahrain
							</option>
						
				 			
							<option value="BD" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Bangladesh
							</option>
						
				 			
							<option value="BB" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Barbados
							</option>
						
				 			
							<option value="BY" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Belarus
							</option>
						
				 			
							<option value="BE" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;},{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Belgium (Belgique)
							</option>
						
				 			
							<option value="BZ" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Belize
							</option>
						
				 			
							<option value="BJ" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Bénin
							</option>
						
				 			
							<option value="BM" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Bermuda
							</option>
						
				 			
							<option value="BT" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Bhutan
							</option>
						
				 			
							<option value="BO" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Bolivia
							</option>
						
				 			
							<option value="BA" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Bosnia &amp; Herzegovina
							</option>
						
				 			
							<option value="BW" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Botswana
							</option>
						
				 			
							<option value="BR" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Brazil
							</option>
						
				 			
							<option value="BN" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Brunei Darussalam
							</option>
						
				 			
							<option value="BG" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Bulgaria
							</option>
						
				 			
							<option value="KH" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Cambodia
							</option>
						
				 			
							<option value="CA" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;},{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Canada
							</option>
						
				 			
							<option value="CV" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Cape Verde
							</option>
						
				 			
							<option value="KY" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Cayman Islands
							</option>
						
				 			
							<option value="CL" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Chile
							</option>
						
				 			
							<option value="CN" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								China
							</option>
						
				 			
							<option value="CO" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Colombia
							</option>
						
				 			
							<option value="KM" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Comores
							</option>
						
				 			
							<option value="CR" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Costa Rica
							</option>
						
				 			
							<option value="HR" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Croatia
							</option>
						
				 			
							<option value="CY" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Cyprus
							</option>
						
				 			
							<option value="CZ" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Czech Republic
							</option>
						
				 			
							<option value="DK" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Denmark
							</option>
						
				 			
							<option value="DJ" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Djibouti
							</option>
						
				 			
							<option value="DM" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Dominica
							</option>
						
				 			
							<option value="DO" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Dominican Republic
							</option>
						
				 			
							<option value="EC" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Ecuador
							</option>
						
				 			
							<option value="EG" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Egypt
							</option>
						
				 			
							<option value="ER" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Eritrea
							</option>
						
				 			
							<option value="ES" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;},{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								España
							</option>
						
				 			
							<option value="EE" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Estonia
							</option>
						
				 			
							<option value="ET" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Ethiopia
							</option>
						
				 			
							<option value="FJ" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Fiji
							</option>
						
				 			
							<option value="FI" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Finland
							</option>
						
				 			
							<option value="FR" selected="" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								France
							</option>
						
				 			
							<option value="GE" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Georgia
							</option>
						
				 			
							<option value="DE" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Germany
							</option>
						
				 			
							<option value="GR" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Greece
							</option>
						
				 			
							<option value="GD" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Grenada
							</option>
						
				 			
							<option value="GP" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Guadeloupe
							</option>
						
				 			
							<option value="GT" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Guatemala
							</option>
						
				 			
							<option value="GN" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Guinée
							</option>
						
				 			
							<option value="GW" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Guinea-Bissau
							</option>
						
				 			
							<option value="GF" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Guinée Française
							</option>
						
				 			
							<option value="GY" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Guyane
							</option>
						
				 			
							<option value="HT" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Haiti
							</option>
						
				 			
							<option value="HN" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Honduras
							</option>
						
				 			
							<option value="HU" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Hungary
							</option>
						
				 			
							<option value="IS" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Iceland
							</option>
						
				 			
							<option value="IN" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								India
							</option>
						
				 			
							<option value="ID" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Indonesia
							</option>
						
				 			
							<option value="IQ" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Iraq
							</option>
						
				 			
							<option value="IE" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Ireland
							</option>
						
				 			
							<option value="IL" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Israel
							</option>
						
				 			
							<option value="IT" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Italy
							</option>
						
				 			
							<option value="JM" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Jamaica
							</option>
						
				 			
							<option value="JP" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Japan
							</option>
						
				 			
							<option value="JO" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Jordan
							</option>
						
				 			
							<option value="KE" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Kenya
							</option>
						
				 			
							<option value="KR" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Korea, Republic of (South Korea)
							</option>
						
				 			
							<option value="KW" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Kuwait
							</option>
						
				 			
							<option value="KG" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Kyrgyz Republic (Kyrgyzstan)
							</option>
						
				 			
							<option value="LA" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Laos
							</option>
						
				 			
							<option value="LV" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Latvia
							</option>
						
				 			
							<option value="LB" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Lebanon
							</option>
						
				 			
							<option value="LS" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Lesotho
							</option>
						
				 			
							<option value="LY" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Libya
							</option>
						
				 			
							<option value="LI" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Liechtenstein
							</option>
						
				 			
							<option value="LT" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Lithuania
							</option>
						
				 			
							<option value="LU" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;},{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Luxembourg
							</option>
						
				 			
							<option value="MG" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Madagascar
							</option>
						
				 			
							<option value="MW" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Malawi
							</option>
						
				 			
							<option value="MY" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Malaysia
							</option>
						
				 			
							<option value="MV" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Maldives
							</option>
						
				 			
							<option value="MT" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Malta
							</option>
						
				 			
							<option value="MA" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Maroc
							</option>
						
				 			
							<option value="MQ" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Martinique
							</option>
						
				 			
							<option value="MR" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Mauritania
							</option>
						
				 			
							<option value="MU" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Maurice
							</option>
						
				 			
							<option value="MX" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Mexico
							</option>
						
				 			
							<option value="MD" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Moldova, Republic of
							</option>
						
				 			
							<option value="MC" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Monaco
							</option>
						
				 			
							<option value="MN" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Mongolia
							</option>
						
				 			
							<option value="ME" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Montenegro
							</option>
						
				 			
							<option value="MS" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Montserrat
							</option>
						
				 			
							<option value="MZ" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Mozambique
							</option>
						
				 			
							<option value="NA" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Namibia
							</option>
						
				 			
							<option value="NP" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Nepal
							</option>
						
				 			
							<option value="NL" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Netherlands
							</option>
						
				 			
							<option value="NZ" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								New Zealand
							</option>
						
				 			
							<option value="NI" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Nicaragua
							</option>
						
				 			
							<option value="NG" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Nigeria
							</option>
						
				 			
							<option value="NO" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Norway
							</option>
						
				 			
							<option value="OM" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Oman
							</option>
						
				 			
							<option value="PK" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Pakistan
							</option>
						
				 			
							<option value="PA" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Panama
							</option>
						
				 			
							<option value="PG" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Papua New Guinea
							</option>
						
				 			
							<option value="PY" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Paraguay
							</option>
						
				 			
							<option value="PE" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Peru
							</option>
						
				 			
							<option value="PH" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Philippines
							</option>
						
				 			
							<option value="PL" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Poland
							</option>
						
				 			
							<option value="PT" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;},{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Portugal
							</option>
						
				 			
							<option value="PR" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Puerto Rico
							</option>
						
				 			
							<option value="QA" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Qatar
							</option>
						
				 			
							<option value="MK" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Republic of Macedonia
							</option>
						
				 			
							<option value="RE" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								La Réunion
							</option>
						
				 			
							<option value="RO" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Romania
							</option>
						
				 			
							<option value="RU" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;},{&quot;code&quot;:&quot;ru&quot;,&quot;displayName&quot;:&quot;Russie&quot;}]">
								Russia
							</option>
						
				 			
							<option value="KN" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Saint Kitts and Nevis
							</option>
						
				 			
							<option value="LC" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Saint Lucia
							</option>
						
				 			
							<option value="SV" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								El Salvador
							</option>
						
				 			
							<option value="WS" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Samoa
							</option>
						
				 			
							<option value="ST" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Sao Tome and Principe
							</option>
						
				 			
							<option value="SA" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Saudi Arabia
							</option>
						
				 			
							<option value="SN" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Sénégal
							</option>
						
				 			
							<option value="RS" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Serbia
							</option>
						
				 			
							<option value="SC" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Seychelles
							</option>
						
				 			
							<option value="SG" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Singapore
							</option>
						
				 			
							<option value="SK" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Slovak Republic (Slovakia)
							</option>
						
				 			
							<option value="SI" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Slovenia
							</option>
						
				 			
							<option value="SB" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Solomon Islands
							</option>
						
				 			
							<option value="ZA" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								South Africa
							</option>
						
				 			
							<option value="LK" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Sri Lanka
							</option>
						
				 			
							<option value="SR" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Suriname
							</option>
						
				 			
							<option value="SZ" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Swaziland
							</option>
						
				 			
							<option value="SE" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Sweden
							</option>
						
				 			
							<option value="CH" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;},{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Switzerland (Suisse)
							</option>
						
				 			
							<option value="TJ" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Tajikistan
							</option>
						
				 			
							<option value="TZ" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Tanzania
							</option>
						
				 			
							<option value="TH" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Thailand
							</option>
						
				 			
							<option value="TT" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Trinidad &amp; Tobago
							</option>
						
				 			
							<option value="TN" data-languages="[{&quot;code&quot;:&quot;fr&quot;,&quot;displayName&quot;:&quot;Français&quot;}]">
								Tunisie
							</option>
						
				 			
							<option value="TR" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Turkey
							</option>
						
				 			
							<option value="TM" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Turkmenistan
							</option>
						
				 			
							<option value="TC" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Turks &amp; Caicos Islands
							</option>
						
				 			
							<option value="AE" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								United Arab Emirates
							</option>
						
				 			
							<option value="GB" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								United Kingdom
							</option>
						
				 			
							<option value="US" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;},{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								United States
							</option>
						
				 			
							<option value="UY" data-languages="[{&quot;code&quot;:&quot;es&quot;,&quot;displayName&quot;:&quot;Espagnol&quot;}]">
								Uruguay
							</option>
						
				 			
							<option value="UZ" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Uzbekistan
							</option>
						
				 			
							<option value="VN" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Vietnam
							</option>
						
				 			
							<option value="VG" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Virgin Islands (UK)
							</option>
						
				 			
							<option value="ZM" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Zambia
							</option>
						
				 			
							<option value="ZW" data-languages="[{&quot;code&quot;:&quot;en&quot;,&quot;displayName&quot;:&quot;Anglais&quot;}]">
								Zimbabwe
							</option>
						
					</select>
				</li>
				<li class="c-countrySwitcher__item">
					<p class="c-countrySwitcher__text">
						Choisissez votre langue
					</p>
					<select class="c-countrySwitcher__select" data-customselect="false" name="language-switcher" id="language-switcher">
						
							<option value="fr" selected="">
								Français
							</option>
						
					</select>
				</li>
				<button class="button c-countrySwitcher__btn" id="country-switcher-confirm">
					Je valide
				</button>
			</ul>
		</form>
	</div>


</div>


    
        <div class="menu-account">
            <a href="https://www.dim.fr/on/demandware.store/Sites-FR-Site/fr/Login-AutoRedirect">
                Mon Compte
            </a>
        </div>
    





<div class="menu-wishlist desktop-only">
    <a href="https://www.dim.fr/mes-coups-de-coeur" title="Mes coups de cœur">
        Mes coups de cœur
        
    </a>
</div>







































































































































<!-- Report any requested source code -->


<!-- Report the active source code -->






    <div id="mini-cart" class="mini-cart-empty">
        <div class="mini-cart-total">
             <span class="mini-cart-link">
                <span class="mini-cart-label">MON PANIER</span>
            </span>
        </div>
        <div class="mini-cart-content-empty">
			










		</div>
    </div>


</div>
</header>
<nav id="navigation" class="stuck">
<div class="mobile-only navigation-top">
<a class="navigation-home" href="https://www.dim.fr/accueil">
Accueil</a>


    
        <div class="menu-account">
            <a href="https://www.dim.fr/on/demandware.store/Sites-FR-Site/fr/Login-AutoRedirect">
                Mon Compte
            </a>
        </div>
    
</div>
<div class="navigation-wrapper">





































































































































    <ul class="menu-category level-1 clearfix">

        
            
            

            
            <li class="menulink_0 " data-name="0" data-clickable="false">
                
                    <a id="cat-65001" class="" style="color:null; font-size:null;" href="https://www.dim.fr/c/ventes-privees-65001/" data-template="categoryproducthits">
                        Ventes Privées
                    </a>
                
                
                







            </li>
        
            
            

            
            <li class="menulink_1  has-subcat " data-name="1" data-clickable="false">
                
                    <a id="cat-10000" class="" style="color:null; font-size:null;" href="https://www.dim.fr/c/femme-10000/" data-template="categoryproducthits">
                        Femme
                    </a>
                
                
                    <a class="mobile-only toggle-category" href="#"></a>
                
                






    <ul class="level-2">
        <li class="sublevel-1">
            
            
                
                    
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first  ">
                                <a href="https://www.dim.fr/c/masque-tissu-10001/" class="level2__link" style="color: #3765b0">
                                    Masques Barrières 😷
                                </a>
                                
                                    
                                    
                                
                            </li>
                        
                            
                            
                            <li data-level-category="1" class="itemsublevel itemsublevel-1   has-subcat">
                                <a href="https://www.dim.fr/c/soutien-gorge-11100/" class="level2__link" style="color: #EF0053">
                                    Soutiens-gorge
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="/c/soutien-gorge-11100/">
                                                            <span>Tous les soutiens-gorge</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/avec-armatures-11150/">
                                                            <span>Avec armatures</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/soutiens-gorge-sans-armatures-11102/">
                                                            <span>Sans armatures</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/soutiens-gorge-emboitants-11103/">
                                                            <span>Emboîtants</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/soutiens-gorge-push-up-11104/">
                                                            <span>Push-up</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/soutiens-gorge-bandeau-11105/">
                                                            <span>Bandeau</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/soutiens-gorge-corbeille-11106/">
                                                            <span>Corbeille</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/soutiens-gorge-sport-11107/">
                                                            <span>Sport</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/soutiens-gorge-bonnets-d-et-plus-11108/">
                                                            <span>Bonnets D et +</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/brassiere-femme-11189/">
                                                            <span>Brassières</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/soutien-gorge-allaitement-11191/">
                                                            <span>Allaitement</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/soutien-gorge-post-operatoire-11190/">
                                                            <span>Post-Opératoire 🎗️</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-2   has-subcat">
                                <a href="https://www.dim.fr/c/lingerie-active-15500/" class="level2__link" style="color: #EF0053">
                                    Lingerie Active &amp; Solution
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/action-minceur-15510/">
                                                            <span>Action Minceur</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/action-fermete-15520/">
                                                            <span>Action Fermeté</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/lingerie-invisible-15530/">
                                                            <span>Action Invisibilité</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-3   has-subcat">
                                <a href="https://www.dim.fr/c/tous-nos-lots-22300/" class="level2__link" style="color: #EF0053">
                                    Tous nos Lots
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="/c/lot-lingerie-femme/100116/">
                                                            <span>Lots de Culottes  &amp; Boxers</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="/c/lots-chaussettes-femme-16004/">
                                                            <span>Lots de chaussettes</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-4  last ">
                                <a href="https://www.dim.fr/c/sous-vetement-recycle-18000/" class="level2__link" style="color: #015627">
                                    Sélection Green ♻
                                </a>
                                
                                    
                                    
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first  has-subcat">
                                <a href="https://www.dim.fr/c/culottes-et-bas-femme-18500/" class="level2__link" style="color: #EF0053">
                                    Culottes &amp; bas
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="/c/culottes-et-bas-femme-18500/">
                                                            <span>Tous les bas &amp; culottes</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/boxers-shorties-11500/">
                                                            <span>Boxers, shortys &amp; hipsters</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/slips-culottes-11200/">
                                                            <span>Culottes &amp; slips</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/strings-tangas-11600/">
                                                            <span>Strings &amp; tangas</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/lot-lingerie-femme/100116/">
                                                            <span>Lots de culottes &amp; boxers</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/culottes-boxers-sculptants-18502/">
                                                            <span>Culottes &amp; boxers sculptants</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/culotte-menstruelle-18506/">
                                                            <span>Culotte Menstruelle ❤</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-1   ">
                                <a href="https://www.dim.fr/c/body-femme-18601/" class="level2__link" style="color: #EF0053">
                                    Body
                                </a>
                                
                                    
                                    
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-2  last has-subcat">
                                <a href="https://www.dim.fr/c/sport-femme-70000/" class="level2__link" style="color: #EF0053">
                                    SPORT
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/brassieres-de-sport-77777/">
                                                            <span>Soutiens-gorge &amp; Brassières de sport</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/leggings-de-sport-77767/">
                                                            <span>Tee-shirts &amp; Leggings de sport</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="/c/chaussettes-femme-sport-16005/">
                                                            <span>Chaussettes de sport</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="1" class="itemsublevel itemsublevel-0 first  has-subcat">
                                <a href="/c/tous-les-collants-12100/" class="level2__link" style="color: #EF0053">
                                    Bas &amp; Collants
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/tous-les-collants-12100/">
                                                            <span>Tous les collants</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/perfect-contention-17501/">
                                                            <span>Perfect Contention</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/collants-opaques-100303/">
                                                            <span>Opaques</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/transparents-100315/">
                                                            <span>Transparents</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/collants-fantaisie-100302/">
                                                            <span>Mode &amp; Fantaisie</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/collants-resille-100301/">
                                                            <span>Résille</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/collants-scupltants-18200/">
                                                            <span>Sculptants</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/collant-peau-noire-metisse-100314/">
                                                            <span>Peaux noires et métisses</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/tous-les-bas-12900/">
                                                            <span>Tous les bas</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/dim-up-12300/">
                                                            <span>DIM Up</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/mi-bas-et-soquettes-12400/">
                                                            <span>Mi-bas</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-1   has-subcat">
                                <a href="https://www.dim.fr/c/soutiens-gorge-et-aussi-18600/" class="level2__link" style="color: #EF0053">
                                    Et aussi
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/accessoires-lingerie-18602/">
                                                            <span>Accessoires lingerie</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/tops-femme-11300/">
                                                            <span>Caracos</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-2  last has-subcat">
                                <a href="/c/leggings-12200/" class="level2__link" style="color: #EF0053">
                                    Leggings &amp; Treggings
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/leggings-12200/">
                                                            <span>Leggings</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="/c/leggings-12200/">
                                                            <span>Treggings</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="1" class="itemsublevel itemsublevel-0 first  has-subcat">
                                <a href="/c/toutes-les-chaussettes-femme-16001/" class="level2__link" style="color: #EF0053">
                                    Chaussettes
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/toutes-les-chaussettes-femme-16001/">
                                                            <span>Toutes les chaussettes</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/chaussettes-femme-unies-16002/">
                                                            <span>Unies</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/chaussettes-femme-fantaisie-16003/">
                                                            <span>Mode &amp; Fantaisie</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/chaussettes-en-coton-16006/">
                                                            <span>Chaussettes en coton</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/socquettes-16007/">
                                                            <span>Socquettes</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/chaussettes-femme-sport-16005/">
                                                            <span>Sport</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/lots-chaussettes-femme-16004/">
                                                            <span>Lots de chaussettes</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-1   has-subcat">
                                <a href="https://www.dim.fr/c/meilleures-ventes-lingerie-femme-51001/" class="level2__link" style="color: #ffb900">
                                    🏆 Meilleures Ventes
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/top-ventes-femme-51000/">
                                                            <span>Soutiens-gorge</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/meilleures-ventes-culottes-femme-51002/">
                                                            <span>Culottes &amp; bas</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/meilleures-ventes-collants-femme-51003/">
                                                            <span>Bas &amp; collants</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/meilleures-ventes-chaussettes-femme-51004/">
                                                            <span>Chaussettes</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="3" class="itemsublevel itemsublevel-2   has-subcat">
                                <a href="https://www.dim.fr/c/nuit-femme-13000/" class="level2__link" style="color: #EF0053">
                                    Lingerie de nuit
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="2" class="itemsublevel itemsublevel-3   ">
                                <a href="https://www.dim.fr/c/chaussons-femme-15000/" class="level2__link" style="color: #EF0053">
                                    Chaussons
                                </a>
                                
                                    
                                    
                                
                            </li>
                        
                            
                            
                            <li data-level-category="2" class="itemsublevel itemsublevel-4  last has-subcat">
                                <a href="https://www.dim.fr/c/maillots-de-bain-femme-14000/" class="level2__link" style="color: #EF0053">
                                    Maillots de bain
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first  has-subcat">
                                <a href="/c/femme-10000/" class="level2__link" style="color: #EF0053">
                                    Les collections lingerie
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/ensemble-lingerie-11000/">
                                                            <span>Toute la lingerie</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/beauty-lift-100107/">
                                                            <span>Beauty Lift</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/body-touch-lingerie-100103/">
                                                            <span>Body Touch</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/coton-plus-100123/">
                                                            <span>Coton Plus</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/diam-s-100108/">
                                                            <span>Diam's</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/diam-s-action-fermete-100104/">
                                                            <span>Diam's Action Fermeté</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/dim-sport-100228/">
                                                            <span>DIM Sport</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/ecodim-100124/">
                                                            <span>EcoDIM</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/generous-lingerie-collants-100106/">
                                                            <span>Generous</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/lingerie-invisi-fit-100109/">
                                                            <span>Invisi Fit</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/invisifree-100156/">
                                                            <span>Invisifree</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/les-pockets-100112/">
                                                            <span>Les Pockets</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/pur-coton-100125/">
                                                            <span>Pur Coton</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/sublim-lingerie-100101/">
                                                            <span>Sublim</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-1  last has-subcat">
                                <a href="https://www.dim.fr/c/collection-capsule-lingerie-64300/" class="level2__link" style="color: #EF0053">
                                    Nos Capsules
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/chic-line-100159/">
                                                            <span>Chic Line</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/cotton-lace-100158/">
                                                            <span>Cotton Lace</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/sous-vetement-femme-dim-originals-100130/">
                                                            <span>DIM Originals</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/resille-chic-100172/">
                                                            <span>Resille Chic</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/satin-line-100160/">
                                                            <span>Satin Line</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/shaping-dots-100165/">
                                                            <span>Shaping Dots</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/trendy-micro-100161/">
                                                            <span>Trendy Micro</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first  has-subcat">
                                <a href="https://www.dim.fr/c/les-collections-collants-100300/" class="level2__link" style="color: #EF0053">
                                    Les collections collants
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/tous-les-collants-100317/">
                                                            <span>Tous les collants</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/perfect-contention-17502/">
                                                            <span>Perfect Contention</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/collant-absoluflex-100309/">
                                                            <span>Absolu'Flex</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/collant-beauty-resist-100308/">
                                                            <span>Beauty Resist</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/body-touch-collants-100318/">
                                                            <span>Body Touch</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/collant-circulation-activ-100313/">
                                                            <span>Circulation Activ'</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/diams-collants-100319/">
                                                            <span>Diam's</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/collant-dim-so-sexy-100312/">
                                                            <span>DIM So Sexy</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/collants-fantaisie-style-17000/">
                                                            <span>Style</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/collant-signature-femme-12500/">
                                                            <span>Signature</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/collants-sublim-100322/">
                                                            <span>Sublim</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/collants-teint-de-soleil-100307/">
                                                            <span>Teint de Soleil</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-1   ">
                                <a href="https://www.dim.fr/c/dim-x-agnes-b-100166/" class="level2__link" style="color: #EF0053">
                                    DIM x Agnès B
                                </a>
                                
                                    
                                    
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-2   has-subcat">
                                <a href="https://www.dim.fr/c/champion-collection-femme-64112/" class="level2__link" style="color: #EF0053">
                                    Champion
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-3  last has-subcat">
                                <a href="https://www.dim.fr/profitez-de-nos-offres-du-moment-%21/nos-offres.html" class="level2__link" style="color: #fb5200">
                                    ⏰ Nos offres
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/bar-a-culottes-11401/">
                                                            <span>Bar à culottes : 2+1 gratuit</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/armoire-a-lingerie-11400/">
                                                            <span>Lingerie : le 2ème bas à -50%</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/collant-chaussette-promotion-97000/">
                                                            <span>Chaussettes &amp; Collants : 2+1 gratuit</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
        </li>
        <li class="nav-banner">
            
	 

	
        </li>
        
    </ul>



            </li>
        
            
            

            
            <li class="menulink_2  has-subcat " data-name="2" data-clickable="false">
                
                    <a id="cat-20000" class="" style="color:null; font-size:null;" href="https://www.dim.fr/c/homme-20000/" data-template="categoryproducthits">
                        Homme
                    </a>
                
                
                    <a class="mobile-only toggle-category" href="#"></a>
                
                






    <ul class="level-2">
        <li class="sublevel-1">
            
            
                
                    
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first  ">
                                <a href="https://www.dim.fr/c/masque-lavable-20001/" class="level2__link" style="color: #3765b0">
                                    Masques Barrières 😷
                                </a>
                                
                                    
                                    
                                
                            </li>
                        
                            
                            
                            <li data-level-category="1" class="itemsublevel itemsublevel-1   has-subcat">
                                <a href="https://www.dim.fr/c/sous-vetements-homme-21000/" class="level2__link" style="color: #EF0053">
                                    Sous-Vêtements
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="/c/sous-vetements-homme-21000/">
                                                            <span>Tous les sous-vêtements</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/boxers-et-shorties-homme-21100/">
                                                            <span>Boxers</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/slips-strings-homme-21200/">
                                                            <span>Slips</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/calecons-homme-21500/">
                                                            <span>Caleçons</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/lot-sous-vetements-homme-100210/">
                                                            <span>Lot de sous-vêtements</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-2   has-subcat">
                                <a href="https://www.dim.fr/c/et-aussi-homme-26000/" class="level2__link" style="color: #EF0053">
                                    Et aussi
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/t-shirts-homme-21300/">
                                                            <span>T-shirts &amp; débardeurs</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-3   has-subcat">
                                <a href="/c/lot-sous-vetements-homme-100210/" class="level2__link" style="color: #EF0053">
                                    Tous nos Lots
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="/c/lot-sous-vetements-homme-100210/">
                                                            <span>Lot de sous-vêtements</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="/c/lots-chaussettes-homme-22004/">
                                                            <span>Lots de chaussettes</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-4   ">
                                <a href="https://www.dim.fr/c/dim-x-agnes-b-100167/" class="level2__link" style="color: #EF0053">
                                    DIM x Agnès B
                                </a>
                                
                                    
                                    
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-5   has-subcat">
                                <a href="https://www.dim.fr/c/champion-collection-homme-64113/" class="level2__link" style="color: #EF0053">
                                    Champion
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="2" class="itemsublevel itemsublevel-6   ">
                                <a href="https://www.dim.fr/c/chaussons-homme-25000/" class="level2__link" style="color: #EF0053">
                                    Chaussons
                                </a>
                                
                                    
                                    
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-7  last ">
                                <a href="https://www.dim.fr/c/sous-vetement-recycle-100280/" class="level2__link" style="color: #06592B">
                                    Sélection Green ♻
                                </a>
                                
                                    
                                    
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="1" class="itemsublevel itemsublevel-0 first  has-subcat">
                                <a href="https://www.dim.fr/c/chaussettes-homme-22000/" class="level2__link" style="color: #EF0053">
                                    Chaussettes
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="/c/chaussettes-homme-22000/">
                                                            <span>Toutes les chaussettes</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/chaussettes-homme-unies-22002/">
                                                            <span>Unies</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/chaussettes-homme-fantaisie-22003/">
                                                            <span>Fantaisie</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/chaussettes-homme-sport-22005/">
                                                            <span>Sport</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/socquettes-22006/">
                                                            <span>Socquettes</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/chaussettes-en-coton-22007/">
                                                            <span>Chaussettes en coton</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/chaussettes-en-fil-d-ecosse-22008/">
                                                            <span>Chaussettes en fil d’Ecosse</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/lots-chaussettes-homme-22004/">
                                                            <span>Lots de chaussettes</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-1   has-subcat">
                                <a href="https://www.dim.fr/c/sport-homme-70001/" class="level2__link" style="color: #EF0053">
                                    SPORT
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/tee-shirts-leggings-de-sport-homme-70002/">
                                                            <span>Tee-shirts de sport</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/boxers-slips-sport-homme-70003/">
                                                            <span>Boxers &amp; Slips sport</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="/c/chaussettes-homme-sport-22005/">
                                                            <span>Chaussettes de sport</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="3" class="itemsublevel itemsublevel-2   has-subcat">
                                <a href="https://www.dim.fr/c/nuit-homme-24000/" class="level2__link" style="color: #EF0053">
                                    Pyjamas
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-3  last has-subcat">
                                <a href="https://www.dim.fr/profitez-de-nos-offres-du-moment-%21/nos-offres.html" class="level2__link" style="color: #fb5200">
                                    ⏰ Nos offres
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/bar-a-calecons-21600/">
                                                            <span>Boxers : 2+1 gratuit</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/offre-homme-chaussettes-28110/">
                                                            <span>Chaussettes : 2+1 gratuit</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first  has-subcat">
                                <a href="/c/sous-vetements-homme-21000/" class="level2__link" style="color: #EF0053">
                                    Nos Collections
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/tous-les-sous-vetements-homme-100214/">
                                                            <span>Tous les sous-vêtements Homme</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/100-pour-cent-coton-100208/">
                                                            <span>100% Coton</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/3d-flex-100202/">
                                                            <span>3D Flex</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/sous-vetement-homme-dim-originals-100131/">
                                                            <span>DIM Originals</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/dim-sport-calecons-chaussettes-100207/">
                                                            <span>DIM Sport</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/coton-stretch-100203/">
                                                            <span>Coton Stretch</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/ecodim-100226/">
                                                            <span>ECODIM</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/mix-and-colors-100219/">
                                                            <span>Mix &amp; Colors</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/soft-touch-100205/">
                                                            <span>Soft Touch</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/stay-fit-100229/">
                                                            <span>Stay &amp; Fit</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/x-temp-100225/">
                                                            <span>X-Temp</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/ultra-resist-100235/">
                                                            <span>Ultra Resist</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-1   ">
                                <a href="https://www.dim.fr/c/maillots-de-bain-23000/" class="level2__link" style="color: #EF0053">
                                    Maillots de bain
                                </a>
                                
                                    
                                    
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-2  last has-subcat">
                                <a href="https://www.dim.fr/c/%F0%9F%8F%86-meilleures-ventes-52001/" class="level2__link" style="color: #ffb900">
                                    🏆 Meilleures Ventes
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/meilleures-ventes-sous-vetements-homme-52002/">
                                                            <span>Sous-vêtements</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/meilleures-ventes-chaussettes-homme-52003/">
                                                            <span>Chaussettes</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
        </li>
        <li class="nav-banner">
            
	 

	
        </li>
        
    </ul>



            </li>
        
            
            

            
            <li class="menulink_3  has-subcat " data-name="3" data-clickable="false">
                
                    <a id="cat-30000" class="" style="color:null; font-size:null;" href="https://www.dim.fr/c/enfants-30000/" data-template="categoryproducthits">
                        Enfant &amp; Bébé
                    </a>
                
                
                    <a class="mobile-only toggle-category" href="#"></a>
                
                






    <ul class="level-2">
        <li class="sublevel-1">
            
            
                
                    
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first last has-subcat">
                                <a href="https://www.dim.fr/c/filles-31000/" class="level2__link" style="color: #EF0053">
                                    DIM Girl
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="/c/filles-31000/">
                                                            <span>Toute la lingerie Fille</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/soutiens-gorge-fille-31100/">
                                                            <span>Soutiens-gorge</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/brassieres-dim-girl-31400/">
                                                            <span>Brassières</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/slips-fille-31200/">
                                                            <span>Culottes &amp; shortys</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/caracos-dim-girl-31500/">
                                                            <span>Caracos</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first last has-subcat">
                                <a href="/c/sous-vetements-garcons-32100/" class="level2__link" style="color: #EF0053">
                                    DIM Boy
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/sous-vetements-garcons-32100/">
                                                            <span>Tous les sous-vêtements Garçon</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/boxers-slips-garcon-32400/">
                                                            <span>Boxers &amp; slips</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/t-shirts-garcon-32500/">
                                                            <span>T-shirts</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first last has-subcat">
                                <a href="https://www.dim.fr/c/vetement-bebe-dim-baby-35000/" class="level2__link" style="color: #EF0053">
                                    DIM Baby
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/pyjamas-bebe-35100/">
                                                            <span>Pyjamas Bébé</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/barboteuses-bebe-35200/">
                                                            <span>Barboteuses Bébé</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="2" class="itemsublevel itemsublevel-0 first last has-subcat">
                                <a href="https://www.dim.fr/c/chaussettes-enfant-36000/" class="level2__link" style="color: #EF0053">
                                    Chaussettes Enfant
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/chaussettes-fille-36100/">
                                                            <span>Chaussettes Fille</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/chaussettes-garcon-36200/">
                                                            <span>Chaussettes Garçon</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first  has-subcat">
                                <a href="https://www.dim.fr/c/pyjamas-enfant-34000/" class="level2__link" style="color: #EF0053">
                                    Pyjamas Enfant
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/pyjamas-fille-31700/">
                                                            <span>Pyjamas Fille</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/pyjamas-garcon-32600/">
                                                            <span>Pyjamas Garçon</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-1  last ">
                                <a href="https://www.dim.fr/c/chaussons-enfant-34100/" class="level2__link" style="color: #EF0053">
                                    Chaussons
                                </a>
                                
                                    
                                    
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first last has-subcat">
                                <a href="https://www.dim.fr/c/top-ventes-enfants-53000/" class="level2__link" style="color: #ffb900">
                                    🏆 Meilleures Ventes
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/top-ventes-dim-girl-53100/">
                                                            <span>DIM Girl</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/c/top-ventes-dim-boy-53200/">
                                                            <span>DIM Boy</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
        </li>
        <li class="nav-banner">
            
	 

	
        </li>
        
    </ul>



            </li>
        
            
            

            
            <li class="menulink_4  has-subcat " data-name="4" data-clickable="false">
                
                    <a id="cat-dim_blog" class="" style="color:null; font-size:null;" href="https://www.dim.fr/blog" data-template="categorylanding">
                        DIM'MAG
                    </a>
                
                
                    <a class="mobile-only toggle-category" href="#"></a>
                
                






    <ul class="level-2">
        <li class="sublevel-1">
            
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first last has-subcat">
                                <a href="https://www.dim.fr/blog_news" class="level2__link" style="color: #EF0053">
                                    L'Actu
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/la-boutique-de-noel/post-noel-2020.html">
                                                            <span>La boutique de Noël 🎄</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/guide-du-collant/guideducollant-AH20.html">
                                                            <span>Le guide du collant</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/dim-protect/post-dim-protect.html">
                                                            <span>DIM Protect</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/dim-perfect-contention/post_dim-perfect-contention.html">
                                                            <span>Perfect Contention</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/notre-geste-eco-responsable/post-terracycle.html">
                                                            <span>DIM x Terracycle</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/dim-s-engage/post-journee-de-la-femme.html">
                                                            <span>DIM s'engage</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/champion/post_Champion.html">
                                                            <span>DIM invite Champion</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/invisifree/post_InvisiFree.html">
                                                            <span>Invisifree</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/sublim-fashion/post_Sublim-Fashion.html">
                                                            <span>Sublim Fashion</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/alternative-apparel/post_alternative-apparel.html">
                                                            <span>Alternative Apparel</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/je-suis-libre-%21/post_je_suis_libre.html">
                                                            <span>Je suis libre!</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/l-homme-dim/post_homme_dim.html">
                                                            <span>L'Homme DIM</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/sublim-cosmetic-activ/sublim-cosmetic-activ.html">
                                                            <span>Sublim Cosmetic Activ</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first last has-subcat">
                                <a href="https://www.dim.fr/blog_marque" class="level2__link" style="color: #EF0053">
                                    La Marque
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/la-rse-au-coeur-de-dim/post-green.html">
                                                            <span>La RSE au cœur de DIM</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/les-masques-de-dim/post-masques-de-dim.html">
                                                            <span>Nos masques barrières</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/dim-baby/post-collection-dim-baby.html">
                                                            <span>DIM Baby</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/collection-automne-hiver-2020/post-collection-ah20.html">
                                                            <span>Collection Automne-Hiver 2020</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/dim-x-agnes-b./post-collection-agnes-b.html">
                                                            <span>DIM x Agnès B</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/l-histoire-de-la-marque/post_histoire_marque.html">
                                                            <span>L'Histoire de la marque</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/dim-x-ba-sh/post_dim-ba-sh-collants.html">
                                                            <span>DIM X ba&amp;sh</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/25-ans-de-pockets/post_25_pocket.html">
                                                            <span>25 ans de Pockets</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/la-box-resille/post_box_resille.html">
                                                            <span>La box résille</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/l-histoire-du-collant-dim/post_histoire_collant.html">
                                                            <span>L'histoire du collant Dim</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/l-univers-des-pockets/post_univers_pockets.html">
                                                            <span>L'univers des Pockets</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/beauty-lift-recolorise/post_beauty-lift-recolorise.html">
                                                            <span>Beauty Lift Colorama</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/on/demandware.store/Sites-FR-Site/fr/Page-Show?cid=%20post_dim-X-aigle">
                                                            <span>Dim X Aigle</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first last has-subcat">
                                <a href="https://www.dim.fr/blog_conseils" class="level2__link" style="color: #EF0053">
                                    Les Conseils
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/nos-formes-de-soutiens-gorge/post_formes_soutiengorge.html">
                                                            <span>Nos formes de soutien-gorge</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/quel-soutien-gorge-pour-une-petite-poitrine-%7C-dim/blog-conseils-post-quel-soutien-gorge-petite-poitrine.html">
                                                            <span>Les soutiens-gorge pour sublimer les petites poitrines</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/comment-choisir-un-soutien-gorge-de-grossesse-%7C-dim/blog-conseils-post-choisir-soutien-gorge-grossesse.html">
                                                            <span>Choisir un soutien-gorge de grossesse</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/comment-choisir-son-soutien-gorge-%7C-dim/blog-conseils-post-comment-choisir-un-soutien-gorge.html">
                                                            <span>Comment choisir un soutien-gorge</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/on/demandware.store/Sites-FR-Site/fr/Page-Show?cid=%09blog-conseils-post-connaitre-taille-soutien-gorge">
                                                            <span>Connaitre sa taille de soutien-gorge</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/que-veut-dire-soutien-gorge-emboitant-%7C-dim/blog-conseils-post-definition-soutien-gorge-emboitant.html">
                                                            <span>Qu'est-ce qu'un soutien-gorge emboîtant ?</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/qu-est-ce-qu-un-soutien-gorge-minimiseur-%7C-dim/blog-conseils-post-definition-soutien-gorge-minimiseur-minimizer.html">
                                                            <span>Qu'est-ce qu'un soutien-gorge minimiseur ?</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/peut-on-dormir-avec-un-soutien-gorge-%7C-dim/blog-conseils-post-peut-on-dormir-avec-soutien-gorge.html">
                                                            <span>Peut-on dormir avec un soutien-gorge</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/bien-laver-sa-lingerie/post_bienlaverlingerie.html">
                                                            <span>Laver sa lingerie</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/quel-bas-pour-quelle-morphologie--/post_quelbas_morpho.html">
                                                            <span>Quel bas pour quelle morphologie?</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/comment-bien-choisir-sa-teinte-de-collant/post_teinte_de_collant.html">
                                                            <span>Comment bien choisir sa teinte de collant</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/quel-maillot-pour-quelle-morphologie/post_Conseils_quelmaillot-quellemorpho.html">
                                                            <span>Quel maillot pour quelle morpho</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/comment-porter-un-dos-nu-avec-un-soutien-gorge--/post_femme_porter-un-dos-nu.html">
                                                            <span>Associer un dos nu avec un soutien-gorge</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first last has-subcat">
                                <a href="https://www.dim.fr/blog_femme" class="level2__link" style="color: #EF0053">
                                    La Femme
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/soutien-gorge-post-operatoire/post-soutien-gorge-post-operatoire.html">
                                                            <span>Soutien-gorge post-opératoire 🎗️</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/generous/post_lingerie_generous.html">
                                                            <span>Lingerie Generous</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/teint-de-soleil/post_teint_de_soleil.html">
                                                            <span>Teint de soleil</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/shock-absorber/post_shock_absorber.html">
                                                            <span>Shock Absorber</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/lingerie-sublim/post_lingerie_sublim.html">
                                                            <span>Lingerie Sublim</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/beauty-lift-anti-gravity/post_anti-gravity.html">
                                                            <span>Beauty Lift Anti Gravity</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/color-box/post_color_box.html">
                                                            <span>Color Box</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/le-collant-sneakers/post_collant_sneakers.html">
                                                            <span>Le collant sneakers</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/absolu-flex/post_absolu_flex.html">
                                                            <span>Absolu Flex</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/lingerie-body-touch/post_lingerie_bodytouch.html">
                                                            <span>Lingerie Body Touch</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/nude-support/post_nude_support.html">
                                                            <span>Nude Support</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/quels-vetements-porter-pour-faire-du-sport--/post_femme_vetements-sport.html">
                                                            <span>Les sous-vêtements de sport</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first last has-subcat">
                                <a href="https://www.dim.fr/blog_homme" class="level2__link" style="color: #EF0053">
                                    L'Homme
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/les-dessous-de-la-seduction-masculine/post_homme_s%C3%A9duction-masculine.html">
                                                            <span>Les dessous de la séduction masculine</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/x-temp/post_xtemp.html">
                                                            <span>X-Temp</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/boxers-coton-stretch/post_boxers_CotonStretch.html">
                                                            <span>Boxers Coton Stretch</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/5-idees-cadeaux-pour-sa-copine/post_id%C3%A9escadeauxcopine.html">
                                                            <span>5 idées cadeaux pour sa copine</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/stay-fit/post_stay_fit.html">
                                                            <span>Stay &amp; Fit</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/quels-vetements-pour-faire-du-sport/post_Homme_VetementsSport.html">
                                                            <span>Les sous-vêtements de sport</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
                
                <div class="menu-column">
                    <ul>
                        
                            
                            
                            <li data-level-category="null" class="itemsublevel itemsublevel-0 first last has-subcat">
                                <a href="https://www.dim.fr/blog_enfant" class="level2__link" style="color: #EF0053">
                                    L'Enfant
                                </a>
                                
                                    <a href="#" class="level2__icon toggle-category mobile-only"></a>
                                    <ul class="level-3">
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/son-premier-soutien-gorge/post_premiersoutiengorgeenfant.html">
                                                            <span>Son premier soutien-gorge</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/bien-preparer-les-vacances-pour-ses-enfants-avec-dim/post_pr%C3%A9parer_vacances_enfants.html">
                                                            <span>La valise de vacances</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                            
                                            
                                                <li>
                                                    

                                                    
                                                        <a href="https://www.dim.fr/les-boxers-pour-faire-comme-papa-%21/post_enfant_Boxers-comme-papa.html">
                                                            <span>Les boxers comme Papa</span>
                                                        </a>
                                                    

                                                </li>
                                            
                                        
                                    </ul>
                                
                            </li>
                        
                    </ul>
                </div>
            
        </li>
        <li class="nav-banner">
            
	 

	
        </li>
        
    </ul>



            </li>
        
            
            

            
            <li class="menulink_5  has-subcat " data-name="5" data-clickable="false">
                
                    <a id="cat-19000" class="" style="color:null; font-size:null;" href="https://www.dim.fr/c/petitsprix-19000/" data-template="categoryproducthits">
                        Petits Prix
                    </a>
                
                
                    <a class="mobile-only toggle-category" href="#"></a>
                
                







            </li>
        
    </ul>

    
	 


	






	
		
		



	
	
	<input type="hidden" id="widgetcatID" value="65001" bgcolor="#c21441" txtcolor="#fff">
	
	<script type="text/javascript">
		var cat = $('#widgetcatID').val();
		var bgcolor = $('#widgetcatID').attr('bgcolor');
		var txtcolor = $('#widgetcatID').attr('txtcolor');
		
		$('#cat-'+cat).css({
			'background': bgcolor,
			'color': txtcolor
		})
		.parent('li').addClass('custombgcolor')
		.prev().addClass('custombgcolor');
	</script>






 
	


</div>
<ul class="mobile-only navigation-bottom">
<li class="bottom-menu__item bottom-menu__itemStorelocator">








	
		
		
		
			
		
		
		<div class="content-asset"><!-- dwMarker="content" dwContentID="4ed311bb4966513cec1054290a" -->
			<a href="http://boutique.dim.fr/">
<i class="bottom-menu__icon">&nbsp;</i>
<p>magasins</p>
</a>
		</div> <!-- End content-asset -->
	




</li>
<li class="bottom-menu__item bottom-menu__itemCountrySwitcher">

<div id="countrySwitcherMobile"></div>
</li>
<li class="bottom-menu__item bottom-menu__itemNewsletter">








	
		
		
		
			
		
		
		<div class="content-asset"><!-- dwMarker="content" dwContentID="78457444f4ceeabcad9ef5599f" -->
			<a href="/inscription-newsletter" title="Inscription newsletter">
    <i class="bottom-menu__icon">&nbsp;</i>
    <p>Newsletter</p>
    </a>
		</div> <!-- End content-asset -->
	




</li>
<li class="bottom-menu__item bottom-menu__itemFaq">








	
		
		
		
			
		
		
		<div class="content-asset"><!-- dwMarker="content" dwContentID="3bab7241db4892b8e8fe013e3c" -->
			<a href="https://www.dim.fr/faq">
    <i class="bottom-menu__icon">&nbsp;</i>
    <p>Aide</p></a>
		</div> <!-- End content-asset -->
	




</li>
</ul>
</nav>
 ';
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 var footer = '
 <footer id="footer" role="contentinfo">
<section class="keeper footer-reassurance">








	
		
		
		
			
		
		
		<div class="content-asset"><!-- dwMarker="content" dwContentID="bgck2iaagPPEdaaaeoXUhZYbDi" -->
			<article class="f-changer"><img alt="" class="f-icon" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/fr/dwd7f4d3b4/reassurance/Retours_60j-noel.jpg" title="">
<h4><a href="https://www.dim.fr/nos-promesses/Footer_Reassurance_Description.html">60 JOURS POUR CHANGER D’AVIS</a></h4>
</article>

<article class="f-preparation"><img alt="" class="f-icon" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/fr/dwc2b3eb3e/Footer/reassurance-24-noel.png" title="">
<h4><a href="https://www.dim.fr/nos-promesses/Footer_Reassurance_Description.html">expédition jour J</a></h4>

<p>si je commande avant 12h</p>

<p>(hors période de Soldes)</p>
</article>

<article class="f-livraison-gratuite"><img alt="" class="f-icon" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/fr/dw5298278f/Footer/reassurance-delivery-noel.png" title="">
<h4><a href="https://www.dim.fr/nos-promesses/Footer_Reassurance_Description.html">LIVRAISON GRATUITE</a></h4>

<p>à partir de 39€</p>
<p>garantie sous le sapin</p>
</article>

<article class="f-paiement"><img alt="" class="f-icon" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/fr/dw8d512ee2/Footer/reassurance-secure-noel.png" title="">
<h4><a href="https://www.dim.fr/nos-promesses/Footer_Reassurance_Description.html">PAIEMENT SÉCURISÉ</a></h4>
</article>

<article class="f-service-client"><img alt="" class="f-icon" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/fr/dw2f5f27e8/Footer/reassurance-service-noel.png" title="">
<h4><a href="https://www.dim.fr/nos-promesses/Footer_Reassurance_Description.html">UN SERVICE CLIENT À VOTRE ÉCOUTE</a></h4>
</article>

<article class="f-plus-large-choix"><img alt="" class="f-icon" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/fr/dw671b188f/Footer/reassurance-boutique-noel.png" title="">
<h4><a href="https://www.dim.fr/nos-promesses/Footer_Reassurance_Description.html">Le plus large choix de produits dim</a></h4>
</article>
		</div> <!-- End content-asset -->
	




</section>
<section class="footer-contact">
<div class="keeper">



<div class="footer-payment">
<h3>Modes de Paiement</h3>

<ul class="footer-icons">
	<li><img alt="" height="44" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/default/dw7dfcc681/images/pic-visa.png" width="67"></li>
	<li><img alt="" height="44" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/default/dw8e9cb6f0/images/pic-master.png" width="67"></li>
	<li><img alt="" height="44" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/default/dwf5933aff/images/pic-bleue.png" width="67"></li>
	<li><img alt="" height="44" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/default/dwed218902/images/pic-paypal.png" width="67"></li>
	<li><img alt="" height="44" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/default/dwde42f05b/images/pic-visaverified.png" width="67"></li>
	<li><img alt="" height="44" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/default/dwd533db95/images/pic-mastersecure.png" width="67"></li>
	<li><img alt="" height="44" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/default/dw8008fec2/images/pic-verisign.png" width="67"></li>
	<li><img alt="" height="44" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/default/dw96c13a64/images/pic-3dsecure.png" width="67"></li>
</ul>
</div>
<div class="footer-delivery">
<h3>Livraison Avec</h3>

<ul class="footer-icons">
	<li><img alt="Chronopost" height="30" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/fr/dwabba20b2/images/Chronopost-logo-2019.png" title="Chronopost"></li>
	<li><img alt="Colissimo" height="30" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/fr/dwc7e1520f/images/Colissimo-logo-2019.png" title="Colissimo"></li>
	<li><img alt="Colis privé" height="30" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/fr/dw32cb0419/images/Colis-prive-logo-2019.png" title="Colis privé"></li>
</ul>
</div>

<style>
.footer-delivery .footer-icons li {
    width: 67px;
    height: 44px;
    line-height: 44px;
    background: white;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
	vertical-align: middle;
	text-align: center;
}
.footer-delivery .footer-icons li img {
	vertical-align:middle;
}
#footer .footer-delivery .footer-icons li+li {
    margin-left: 10px;
    margin-bottom: 10px;
}
</style>
<div class="footer-newsletter">
<h3 class="desktop-only">Newsletter</h3>
<p>Restez informé et recevez des offres spéciales et plus encore !</p>
<form action="/inscription-newsletter" method="post">
<input type="e-mail" name="email" class="email" placeholder="Votre adresse e-mail">
<input type="hidden" name="newsletterFooter" value="footer" class="valid" placeholder="Votre adresse e-mail">
<button class="newsletter-button">Envoyer</button>
</form>
</div>
<a href="#" class="footer-boutique mobile-only">
<h3>Boutiques dim</h3>
</a>

</div>
<div class="btn-back-top">
<a href="#" title="Top">
global.backtotop
</a>
</div>
</section>
<section class="footer-services">
<div class="keeper">
<div class="services-menu">








	
		
		
		
			
		
		
		<div class="content-asset"><!-- dwMarker="content" dwContentID="bdsW2iaagPuZYaaado1UhZYbDi" -->
			<article class="clearfix">
<ul>
	<li>MA COMMANDE</li>
	<li><a href="https://www.dim.fr/mes-commandes">Suivi de commande</a></li>
	<li><a href="https://www.dim.fr/paiement-et-livraison/paymentandshipping.html">Paiement et livraison</a></li>
	<li><a href="https://www.dim.fr/retour-et-remboursement/returnsandrefunds.html">Rétractation</a></li>
	<li><a href="https://www.dim.fr/retourner-un-article/returns.html">Échanges et retours</a></li>
</ul>

<ul>
	<li>Besoin d’aide</li>
	<li><a href="https://www.dim.fr/service-client/service-client.html">Contactez le service client</a></li>
	<li><a href="https://www.dim.fr/faq">Questions / Réponses</a></li>
	<li><a href="https://www.dim.fr/guide-des-tailles-sur-dim.fr/sizeguidepage.html">Guide des tailles</a></li>
</ul>

<ul>
	<li>À PROPOS</li>
	<li><a href="https://www.dim.fr/reglement-des-offres/offersterms.html">* Règlement des offres</a></li>
<li><a href="https://www.dim.fr/reglement-des-jeux-concours/reglement_jeux_concours.html">* Règlement des jeux concours</a></li>
	<li><a href="https://www.dim.fr/mentions-legales/legalnotice.html">Mentions légales</a></li>
	<li><a href="https://www.dim.fr/plan-du-site">Plan du site</a></li>
	<li><a href="https://www.dim.fr/conditions-generales-de-vente/termsandconditions.html">Conditions générales de vente</a></li>
	<li><a href="https://www.dim.fr/politique-de-confidentialite/cookiespolicy.html">Politique de confidentialité</a></li>
</ul>

<ul>
	<li>EN SAVOIR PLUS SUR DIM</li>
	<li><a href="https://www.dim.fr/la-rse-au-coeur-de-dim/post-green.html">Qualité et Développement durable</a></li>
	<li><a href="http://hanes.humansourcing.com/" target="_dimrecrute">DIM recrute</a></li>
	<li><a href="http://boutique.dim.fr">Nos magasins</a></li>
	<li><a href="https://www.dim.fr/service-client/service-client.html">Nous contacter</a></li>
</ul>
</article>
		</div> <!-- End content-asset -->
	




</div>
<div class="footer-social">








	
		
		
		
			
		
		
		<div class="content-asset"><!-- dwMarker="content" dwContentID="bdMz6iaagPsBcaaadoQEhZYbDi" -->
			<article class="f-social">
	<p>Retrouvez nous sur :</p>
	<nav>
		<a target="_facebook" class="f-facebook" href="https://www.facebook.com/DimParisFr/">Facebook</a>
		<a target="_twitter" class="f-twitter" href="https://twitter.com/DIMparis">Twitter</a>
		<a target="_instagram" class="f-instagram" href="https://www.instagram.com/dim/ ">Instagram</a>
		<a target="_youtube" class="f-youtube" href="https://www.youtube.com/dimofficiel">YouTube</a>
	</nav>
</article>
<article class="f-social">
	<p>Devenez fan</p>
	<div class="fbIcon js-facebook overflow">
		<div class="fb-like" data-href="https://www.facebook.com/pages/DIM/427598003924915?ref=ts&amp;fref=ts" data-width="450" data-layout="button_count" data-show-faces="false" data-send="false"></div>
	</div>
</article>
		</div> <!-- End content-asset -->
	




</div>
</div>
</section>
<section class="footer-sitemap">








	
		
		
		
			
		
		
		<div class="content-asset"><!-- dwMarker="content" dwContentID="bd3rAiaagPVnYaaado5UhZYbDi" -->
			<div class="keeper">
<article class="clearfix">
<p>&nbsp;</p>

<ul>
	<li><a href="https://www.dim.fr/c/dessous-feminins-18300/">MES EVENTS DIM </a></li>
	<li><a href="https://www.dim.fr/c/soldes-80000/">Soldes Dim</a></li>
	<li><a href="https://www.dim.fr/c/soldes-femme-81000/">Soldes Sous-vêtements Femme</a></li>
	<li><a href="https://www.dim.fr/c/soldes-soutiens-gorge-81100/">Soldes Soutiens-gorge</a></li>
	<li><a href="https://www.dim.fr/c/soldes-bas-et-collants-81200/">Soldes Collants</a></li>
	<li><a href="https://www.dim.fr/c/soldes-homme-82000/">Soldes Sous-vêtements Homme</a></li>
	<li><a href="https://www.dim.fr/c/soldes-boxer-homme-87700/">Soldes Boxer Homme</a></li>
	<li><a href="https://www.dim.fr/c/soldes-sous-vetement-enfant-83000/">Soldes Sous-vêtements Enfant</a></li>
</ul>

<ul>
	<li><a href="https://www.dim.fr/c/dessous-feminins-18300/">NOS ENVIES LINGERIE</a></li>
	<li><a href="https://www.dim.fr/c/lingerie-invisible-15530/">Lingerie Invisible</a></li>
	<li><a href="https://www.dim.fr/c/lingerie-maintien-11402/">Lingerie Maintien</a></li>
	<li><a href="https://www.dim.fr/c/lingerie-sculptante-18100/">Lingerie Sculptante</a></li>
	<li><a href="https://www.dim.fr/c/lingerie-en-coton-100117/">Lingerie en Coton</a></li>
	<li><a href="https://www.dim.fr/c/lingerie-blanche-100118/">Lingerie Blanche</a></li>
	<li><a href="https://www.dim.fr/c/lingerie-sexy-100120/">Lingerie Sexy</a></li>
	<li><a href="https://www.dim.fr/c/lingerie-dentelle-11403/">Lingerie Dentelle</a></li>
</ul>

<ul>
	<li><a href="https://www.dim.fr/c/bas-et-collants-12000/">NOS ENVIES COLLANTS</a></li>
	<li><a href="https://www.dim.fr/c/collants-plumetis-12103/">Collant Plumetis</a></li>
	<li><a href="https://www.dim.fr/c/collant-noir-12107/">Collant Noir</a></li>
	<li><a href="https://www.dim.fr/c/collants-couture-12700/">Collant Couture</a></li>
	<li><a href="https://www.dim.fr/c/collants-sexy-12800/">Collant Sexy</a></li>
	<li><a href="https://www.dim.fr/c/collants-chauds-100310/">Collant Chauds</a></li>
	<li><a href="https://www.dim.fr/c/collants-ventre-plat-100305/">Collant Ventre Plat</a></li>
	<li><a href="https://www.dim.fr/c/collant-de-contention-12112/">Collant de Contention</a></li>
</ul>

<ul>
	<li><a href="https://www.dim.fr/c/homme-envie-de-27000/">NOS ENVIES HOMME</a></li>
	<li><a href="https://www.dim.fr/c/sous-vetements-de-sport-27001/">Sous-vêtements de Sport</a></li>
	<li><a href="https://www.dim.fr/c/sous-vetements-mode-27003/">Sous-vêtements Mode</a></li>
        <li><a href="https://www.dim.fr/c/coton-stretch-100203/">Sous-vêtement Coton</a></li>
	<li><a href="https://www.dim.fr/c/boxer-homme-microfibre-100211/">Boxer Microfibre</a></li>
	<li><a href="https://www.dim.fr/c/boxers-noirs-27002/">Boxer Noir</a></li>
</ul>

<ul>
	<li><a href="https://www.dim.fr/c/actus-dim-40000/">ACTUS DIM</a></li>
	<li><a href="https://www.dim.fr/resultats-recherche?cgid=17701">Perfect Contention</a></li>
	<li><a href="https://www.dim.fr/c/vetement-bebe-dim-baby-35000/">DIM Baby</a></li>
	<li><a href="https://www.dim.fr/c/dim-x-agnes-b-100166/">DIM x Agnès B. Femme</a></li>
	<li><a href="https://www.dim.fr/c/dim-x-agnes-b-100167/">DIM x Agnès B. Homme</a></li>
</ul>
</article>
</div>
		</div> <!-- End content-asset -->
	




</section>

<section class="footer-about">
<div class="keeper">








	
		
		
		
			
		
		
		<div class="content-asset"><!-- dwMarker="content" dwContentID="73018d5f9ed419e43509b109e6" -->
			<div class="triman"><img alt="" src="https://www.dim.fr/on/demandware.static/-/Sites-FR-Library/default/dw0a548963/permanent/icones/triman.png" style="display: inline-block; vertical-align: middle; margin-right: 10px;" title="">

<p style="display: inline-block; vertical-align: middle;">Nos emballages peuvent faire l'objet d'une consigne de tri, pour en savoir plus <a href="https://www.ademe.fr/particuliers-eco-citoyens/dechets/bien-jeter/faire-dechets">www.quefairedemesdechets.fr</a></p></div>

<style>
.main-wrapper{z-index:0;}
#widget-promo{;z-index:1000;}
#navigation{z-index:2000;}
#header{z-index:3000;}
#widget-promo> div.bandeau_link-to-nav, #widget-promo> div.bandeau_link-to-nav p {height: auto;}
.m-countrySwitcher.active .c-countrySwitcher__list {z-index : 100;}
@media screen and (max-width: 959px) {.nav-active #navigation { z-index: 4000;}.nav-active #nav-overlay{z-index: 3500;}}
<!--Surcouche BV -->

[id*=BVRRInlineRating-] {display: flex !important; justify-content: center;}
.bv-cv2-cleanslate [class*=bv-core-container-] .bv-inline-rating-container .bv-stars-container dd, .bv-cv2-cleanslate [class*=bv-core-container-] .bv-inline-rating-container .bv-stars-container dt {display: inline!important;}
.pdp-main #BVRRSummaryContainer>.bv-cleanslate.bv-cv2-cleanslate>.bv-shared[class*=bv-core-container-]>.bv-compat>.bv-prs-container>.bv-primarySummary-rating-container>.bv-summary-bar>.bv-action-bar, .pdp-main #BVRRSummaryContainer>.bv-cleanslate.bv-cv2-cleanslate>.bv-shared[class*=bv-core-container-]>.bv-compat>.bv-prs-container>.bv-primarySummary-rating-container>.bv-summary-bar>.bv-details-bar, .pdp-main #BVRRSummaryContainer>.bv-cleanslate.bv-cv2-cleanslate>.bv-shared[class*=bv-core-container-]>.bv-compat>.bv-prs-container>.bv-primarySummary-rating-container>.bv-summary-bar>.bv-action-bar, .pdp-main #BVRRSummaryContainer>.bv-cleanslate.bv-cv2-cleanslate>.bv-shared[class*=bv-core-container-]>.bv-compat>.bv-prs-container>.bv-primarySummary-rating-container>.bv-summary-bar>.bv-details-bar {
    display: none!important;
}

@media screen and (min-width: 960px) {.m-countrySwitcher .c-countrySwitcher__list {z-index: 1;}}
<!-- correction widget promo sur mobile -->
@media screen and (max-width: 959px) {body.search-active #wrapper {padding-top: 49px;}
@media screen and (max-width: 959px){#wrapper:not(.pt_checkout) {padding-top: 0px;}}
<!-- correction desktop double libellé mon compte -->
@media screen and (min-width: 960px) {.order-history-list .cell .cell-title{display:none;}}
</style>
		</div> <!-- End content-asset -->
	




<div class="home-audio">
<span>SON</span>
<div id="mute" data-soundfile="/on/demandware.static/Sites-FR-Site/-/fr/v1609110318586/images/audio/dim"></div>
</div>
</div>

</section>
</footer>
 ';

 var headerContainer = document.querySelector('#dynamic-header');
 if (headerContainer && header) {
     headerContainer.innerHTML = header;
 }

 var footerContainer = document.querySelector('#dynamic-footer');
 if (footerContainer && footer) {
     footerContainer.innerHTML = footer;
 }

 // If you need external stylesheets
 var link = document.createElement('link');
 link.rel = 'stylesheet';
 link.href = 'https://www.dim.fr/on/demandware.static/Sites-FR-Site/-/fr/v1609110318586/css/styles.css';
 document.head.appendChild(link);

 // If you need external scripts
 var script = document.createElement('script');
 script.src = 'https://www.dim.fr/on/demandware.static/Sites-FR-Site/-/fr/v1609110318586/js/dim.js';
 document.body.appendChild(script);
})();
