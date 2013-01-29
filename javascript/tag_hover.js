function handleTags(tags) {
	for(var i=0;i<tags.length;i++){
		var tagValue = $.trim(tags[i].innerHTML);
		tags[i].attributes.data.value = tagsJson[tagValue];
		if(tags[i].attributes.data.value === "undefined"){
			tags[i].attributes.data.value = "I need to make a tag blurb for this...I need to make a tag blurb for this...";
		}
	}
};

var tagsJson = {
	"Beer":"The best thing to happen to humanity by accident!",
	//Types
	"Ale":" The world's oldest form of beer!",
	"Lager":"Lager is a beer that is fermented at relatively cold temperatures.",
	"Pale Ale":"Higher proportions of pale malts results in a lighter color of beer.",
	"IPA":"IPAs first brewed in England in the 19th century.",
	"ESB":"A Pale Ale, usually stronger alcohol and flavor.",
	"Pilsner":"It name came from the city of Pilsen (Plzeň in Czech) where it was first produced in 1842.",
	"Stout":"A dark beer made using roasted malt or roasted barley.",
	"Porter":"A dark style of beer originating in London in the 18th century",
	"Saison":"A sturdy farmhouse ale that was traditionally brewed in the winter, to be consumed throughout the summer months.",
	"Chinook":"Chinook hops are popular in american style Pale Ale and India Pale ale craft beers.",

	//Locations
	"German":"For many years German beer was brewed in adherence to the Reinheitsgebot order or law which only permitted water, hops and malt as beer ingredients.",
	"Czech":"The first brewery is known to have existed in 993 in Břevnov Monastery.",
	"Italian":"Italy has the lowest consumption of beer in Europe.",
	"British":"Beer was the first alcoholic drink to be produced in England.",
	"Mexican":"Two companies, Grupo Modelo and FEMSA control 90% of the Mexican beer market.",
	"Canadian":"No good beef comes from Canada..",

	//Descriptors
	"Malty":"A dark flavor that all beers have, but at varying degrees.",
	"Bitter":"Typically a hoppy beer, an acquired love.",
	"Sour":"Umm..  A bad beer. Or an experiment gone wrong.",
	"Creamy":"All nitro beers are creamy.  English pub ales.",
	"Heavy":"Tons of flavor, almost like eating a meal. Or high in alcohol.",
	"Light":"Just a beer, nothing special. Or not a lot of flavor.",
	"Strong":"High in alcohol.",
	
	//Ingredients
	"Chocolate":"Cocoa flavor adds a hearty tast to a beer.",
	"Peanut Butter":"Heavy flavor that adds weight and texture.",
	
	//Delivery
	"Nitro":"Uses nitrous as the carbonation, smooth flavor.",
	"Draught":"Beer from the tap.",
	"Can":"Beer on the go, or being hip.",
	"Tallboy":"Game time goodness",
	"Forty":"Back in the day...",
	
	//Times
	"Winter Beer":"A heavy thick beer to keep you warm.",
	
	//Colors
	"Red":"Primarily a catch all for any beer less than a Dark Ale.",
	
};
