const Hangar = new Proxy({"src":"/_astro/pitcairn-aviation-hangar-space.eTWY2CKd.jpg","width":2000,"height":1126,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/pitcairn-aviation-hangar-space.jpg";
							}
							
							return target[name];
						}
					});

export { Hangar as H };
