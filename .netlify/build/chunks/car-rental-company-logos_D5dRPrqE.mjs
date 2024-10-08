const RentalCar = new Proxy({"src":"/_astro/car-rental-company-logos.BpOJXdvO.webp","width":1500,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/car-rental-company-logos.webp";
							}
							
							return target[name];
						}
					});

export { RentalCar as R };
