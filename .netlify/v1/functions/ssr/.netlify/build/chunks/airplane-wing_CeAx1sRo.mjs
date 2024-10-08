const AirplaneWing = new Proxy({"src":"/_astro/airplane-wing.D5jQd7-c.jpg","width":3264,"height":2448,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/airplane-wing.jpg";
							}
							
							return target[name];
						}
					});

export { AirplaneWing as A };
