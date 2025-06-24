window.addEventListener("load", function(){

	// Add a script for ipro-apps-list-menu.js
	let appsMenuJs = document.createElement("script");
	appsMenuJs.type = "module";
	appsMenuJs.textContent = `
		import IproAppsMenuComponent from "https://mybeta.ipro.com/components/corporate/js/components/ipro-apps-menu-component.js";
		
		require.config({
			paths: {
				"vue": "https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.min",
				"vuetify": "https://cdn.jsdelivr.net/npm/vuetify@1.x/dist/vuetify.min"
			}
		});

		// Start the main app logic.
		require(["vue"], function (Vue) {
			require(["vuetify"], function (Vuetify) {
				Vue.use(Vuetify);
				new Vue({
					el: "ipro-apps-list-menu",
					components: {
						"ipro-apps-list-menu": IproAppsMenuComponent
					}
				});
			});
		});
	`;
	document.head.appendChild(appsMenuJs);

	// Add an ipro-apps-list-menu element to the document
	let logoElement = document.getElementsByClassName("title-bar-layout outer-row")[0];
	let appsMenuElement = document.createElement("ipro-apps-list-menu");
	appsMenuElement.setAttribute("theme", "dark");
	appsMenuElement.setAttribute("environment", "production");
	appsMenuElement.setAttribute("data-app", true);
	let spacer = document.createElement("div");
	logoElement.insertBefore(appsMenuElement, logoElement.firstElementChild.nextSibling);
	logoElement.insertBefore(spacer, logoElement.firstElementChild.nextSibling);
	
    let bodyContainer = document.getElementsByClassName("body-container")[0].firstElementChild;
    let footerElement = document.createElement("ipro-footer");
    bodyContainer.appendChild(footerElement);

    function includeJs(jsType,jsFilePath) {
        let js = document.createElement("script");
    
        js.type = jsType;
        js.src = jsFilePath;
    
        document.body.appendChild(js);
    }
    
    includeJs("text/javascript","https://myipro.iprotech.com/cdn/footer/footer.js");

});