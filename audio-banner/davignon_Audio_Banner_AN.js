(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"davignon_Audio_Banner_AN_atlas_", frames: [[2479,0,800,480],[0,0,2477,690],[3281,0,220,240],[3798,0,135,150],[3644,0,152,150],[3935,0,96,150],[3503,0,139,240]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.ActionmovieBackground = function() {
	this.spriteSheet = ss["davignon_Audio_Banner_AN_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.actorscopy = function() {
	this.spriteSheet = ss["davignon_Audio_Banner_AN_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ANDYSERKISASHARAMBE = function() {
	this.spriteSheet = ss["davignon_Audio_Banner_AN_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BARACKOBAMA = function() {
	this.spriteSheet = ss["davignon_Audio_Banner_AN_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.DANIELLEBREGOLI = function() {
	this.spriteSheet = ss["davignon_Audio_Banner_AN_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.JOEBIDEN = function() {
	this.spriteSheet = ss["davignon_Audio_Banner_AN_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NEILPATRICKHARRIS = function() {
	this.spriteSheet = ss["davignon_Audio_Banner_AN_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfCAQgLgPAAghIAAigQAAg/AqAAQArAAAAA/IAACgQAAAhgLAPQgKAQgWAAQgVAAgKgQgAgKhuQgDAEAAAIIAADEQAAARANAAQAHAAAEgEQADgEAAgJIAAjEQAAgIgDgEQgEgFgHAAQgGAAgEAFg");
	this.shape.setTransform(97.4,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOCQIgeipIgFgmIAADPIgaAAIAAkfIAjAAIAcCjIAGArIAAjOIAaAAIAAEfg");
	this.shape_1.setTransform(86,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNCQIAAkfIAcAAIAAEfg");
	this.shape_2.setTransform(77.6,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNCQIAAkDIgdAAIAAgcIBVAAIAAAcIgdAAIAAEDg");
	this.shape_3.setTransform(70.5,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOCQIgeipIgFgmIAADPIgaAAIAAkfIAjAAIAcCjIAGArIAAjOIAaAAIAAEfg");
	this.shape_4.setTransform(60.2,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYCQIgGgrIgjAAIgGArIgdAAIAmkfIAdAAIAmEfgAAOBGIgJhQIgFg0IgEAzIgKBRIAcAAg");
	this.shape_5.setTransform(49,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARCQIgSiEIgPAAIAACEIgdAAIAAkfIAsAAQAYAAAMAPQALAQAAAdIAAAgQAAAogWAQIAWCLgAgQgRIAQAAQAIABAEgFQAGgFAAgKIAAg7QAAgTgTgBIgPAAg");
	this.shape_6.setTransform(38.6,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYCQIgGgrIgjAAIgGArIgdAAIAmkfIAdAAIAmEfgAAOBGIgJhQIgFg0IgEAzIgKBRIAcAAg");
	this.shape_7.setTransform(27.6,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNCQIAAkDIgdAAIAAgcIBVAAIAAAcIgdAAIAAEDg");
	this.shape_8.setTransform(17.9,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOCQIgeipIgFgmIAADPIgaAAIAAkfIAjAAIAcCjIAGArIAAjOIAaAAIAAEfg");
	this.shape_9.setTransform(3.1,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOCQIAAkfIAdAAIAAEfg");
	this.shape_10.setTransform(-5.3,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNCQIAAkDIgdAAIAAgcIBVAAIAAAcIgdAAIAAEDg");
	this.shape_11.setTransform(-12.4,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOCQIgeipIgFgmIAADPIgaAAIAAkfIAjAAIAcCjIAGArIAAjOIAaAAIAAEfg");
	this.shape_12.setTransform(-22.7,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjCQIAAkfIBIAAIAAAcIgsAAIAABiIAZAAIAAAdIgZAAIAABnIAsAAIAAAdg");
	this.shape_13.setTransform(-33,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfCAQgLgPAAghIAAjfIAdAAIAADxQAAARANAAQAHAAAEgEQADgEAAgJIAAjxIAdAAIAADfQAAAhgLAPQgKAQgWAAQgVAAgKgQg");
	this.shape_14.setTransform(-43.2,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAFCfQgGgEgEgIQgEgJAAgNQghgHAAg4IAAigQAAg/AqAAQArAAAAA/IAACgQAAA5giAGQgBAIADAFQACAEAGABQANABALgIIAAAVQgNAFgKAAQgJAAgGgDgAgKiAQgDAEAAAIIAADEQAAARANAAQAHAAAEgEQADgEAAgJIAAjEQAAgIgDgEQgEgFgHAAQgGAAgEAFg");
	this.shape_15.setTransform(-54.1,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACUCQIAAg8IgShPIAOAAIAIArIADATIACgTIAIgrIAPAAIgSBPIAAA8gABTCQIAAiLIAVAAQAKAAAFAIQAFAHAAAQIAAAOQAAAJgCAGQgDAGgFACQAKAGAAARIAAARQAAAfgUAAgABgCCIAIAAQAGAAAAgIIAAgiQAAgIgGAAIgIAAgABgBCIAIAAQAGABAAgJIAAgfQAAgIgGAAIgIAAgACFgFIAAiKIAVAAQAKAAAFAIQAFAIAAAPIAABOQAAAOgFAIQgFAHgKAAgACTgSIAHAAQAGAAAAgIIAAhfQAAgIgGAAIgHAAgABZgFIAAiKIAjAAIAAAOIgVAAIAAAvIAMAAIAAAOIgMAAIAAAyIAVAAIAAANgAA3gFIAAh8IgOAAIAAgOIAqAAIAAAOIgOAAIAAB8gAgEgiIAAhOQAAgPAEgIQAFgIALAAQAKAAAFAIQAFAIAAAPIAAAMIgNAAIAAgVQAAgIgHAAQgHAAAAAIIAABfQAAAIAHAAQAHAAAAgIIAAgZIANAAIAAARQAAAdgUAAQgUAAAAgdgAgwgFIAAiKIAjAAIAAAOIgVAAIAAAvIAMAAIAAAOIgMAAIAAAyIAVAAIAAANgAhHgFIgJg/IgHAAIAAA/IgOAAIAAiKIAVAAQAMAAAFAIQAGAGAAAPIAAAQQAAATgKAIIAKBCgAhXhSIAIAAQAJAAAAgKIAAgcQAAgJgKAAIgHAAgAh+gFIAAiKIAOAAIAACKgAizgFIAAiKIAVAAQAKAAAGAIQAFAIAAAPIAABOQAAAdgVAAgAilgSIAHAAQAHAAAAgIIAAhfQAAgIgHAAIgHAAg");
	this.shape_16.setTransform(-84.9,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.5,-21.4,335,43);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfCAQgLgPAAghIAAigQAAg/AqAAQArAAAAA/IAACgQAAAhgLAPQgKAQgWAAQgVAAgKgQgAgKhuQgDAEAAAIIAADEQAAARANAAQAHAAAEgEQADgEAAgJIAAjEQAAgIgDgEQgEgFgHAAQgGAAgEAFg");
	this.shape.setTransform(97.4,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOCQIgeipIgFgmIAADPIgaAAIAAkfIAjAAIAcCjIAGArIAAjOIAaAAIAAEfg");
	this.shape_1.setTransform(86,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNCQIAAkfIAcAAIAAEfg");
	this.shape_2.setTransform(77.6,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNCQIAAkDIgdAAIAAgcIBVAAIAAAcIgdAAIAAEDg");
	this.shape_3.setTransform(70.5,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOCQIgeipIgFgmIAADPIgaAAIAAkfIAjAAIAcCjIAGArIAAjOIAaAAIAAEfg");
	this.shape_4.setTransform(60.2,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYCQIgGgrIgjAAIgGArIgdAAIAmkfIAdAAIAmEfgAAOBGIgJhQIgFg0IgEAzIgKBRIAcAAg");
	this.shape_5.setTransform(49,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARCQIgSiEIgPAAIAACEIgdAAIAAkfIAsAAQAYAAAMAPQALAQAAAdIAAAgQAAAogWAQIAWCLgAgQgRIAQAAQAIABAEgFQAGgFAAgKIAAg7QAAgTgTgBIgPAAg");
	this.shape_6.setTransform(38.6,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYCQIgGgrIgjAAIgGArIgdAAIAmkfIAdAAIAmEfgAAOBGIgJhQIgFg0IgEAzIgKBRIAcAAg");
	this.shape_7.setTransform(27.6,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNCQIAAkDIgdAAIAAgcIBVAAIAAAcIgdAAIAAEDg");
	this.shape_8.setTransform(17.9,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOCQIgeipIgFgmIAADPIgaAAIAAkfIAjAAIAcCjIAGArIAAjOIAaAAIAAEfg");
	this.shape_9.setTransform(3.1,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOCQIAAkfIAdAAIAAEfg");
	this.shape_10.setTransform(-5.3,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNCQIAAkDIgdAAIAAgcIBVAAIAAAcIgdAAIAAEDg");
	this.shape_11.setTransform(-12.4,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOCQIgeipIgFgmIAADPIgaAAIAAkfIAjAAIAcCjIAGArIAAjOIAaAAIAAEfg");
	this.shape_12.setTransform(-22.7,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjCQIAAkfIBIAAIAAAcIgsAAIAABiIAZAAIAAAdIgZAAIAABnIAsAAIAAAdg");
	this.shape_13.setTransform(-33,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfCAQgLgPAAghIAAjfIAdAAIAADxQAAARANAAQAHAAAEgEQADgEAAgJIAAjxIAdAAIAADfQAAAhgLAPQgKAQgWAAQgVAAgKgQg");
	this.shape_14.setTransform(-43.2,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAFCfQgGgEgEgIQgEgJAAgNQghgHAAg4IAAigQAAg/AqAAQArAAAAA/IAACgQAAA5giAGQgBAIADAFQACAEAGABQANABALgIIAAAVQgNAFgKAAQgJAAgGgDgAgKiAQgDAEAAAIIAADEQAAARANAAQAHAAAEgEQADgEAAgJIAAjEQAAgIgDgEQgEgFgHAAQgGAAgEAFg");
	this.shape_15.setTransform(-54.1,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACUCQIAAg8IgShPIAOAAIAIArIADATIACgTIAIgrIAPAAIgSBPIAAA8gABTCQIAAiLIAVAAQAKAAAFAIQAFAHAAAQIAAAOQAAAJgCAGQgDAGgFACQAKAGAAARIAAARQAAAfgUAAgABgCCIAIAAQAGAAAAgIIAAgiQAAgIgGAAIgIAAgABgBCIAIAAQAGABAAgJIAAgfQAAgIgGAAIgIAAgACFgFIAAiKIAVAAQAKAAAFAIQAFAIAAAPIAABOQAAAOgFAIQgFAHgKAAgACTgSIAHAAQAGAAAAgIIAAhfQAAgIgGAAIgHAAgABZgFIAAiKIAjAAIAAAOIgVAAIAAAvIAMAAIAAAOIgMAAIAAAyIAVAAIAAANgAA3gFIAAh8IgOAAIAAgOIAqAAIAAAOIgOAAIAAB8gAgEgiIAAhOQAAgPAEgIQAFgIALAAQAKAAAFAIQAFAIAAAPIAAAMIgNAAIAAgVQAAgIgHAAQgHAAAAAIIAABfQAAAIAHAAQAHAAAAgIIAAgZIANAAIAAARQAAAdgUAAQgUAAAAgdgAgwgFIAAiKIAjAAIAAAOIgVAAIAAAvIAMAAIAAAOIgMAAIAAAyIAVAAIAAANgAhHgFIgJg/IgHAAIAAA/IgOAAIAAiKIAVAAQAMAAAFAIQAGAGAAAPIAAAQQAAATgKAIIAKBCgAhXhSIAIAAQAJAAAAgKIAAgcQAAgJgKAAIgHAAgAh+gFIAAiKIAOAAIAACKgAizgFIAAiKIAVAAQAKAAAGAIQAFAIAAAPIAABOQAAAdgVAAgAilgSIAHAAQAHAAAAgIIAAhfQAAgIgHAAIgHAAg");
	this.shape_16.setTransform(-84.9,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.5,-21.4,335,43);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.actorscopy();
	this.instance.parent = this;
	this.instance.setTransform(-309.6,-86.2,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.6,-86.2,619.2,172.5);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.actorscopy();
	this.instance.parent = this;
	this.instance.setTransform(-309.6,-86.2,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.6,-86.2,619.2,172.5);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIA/QgEgEAAgFQAAgFAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAFQAAAFgEAEQgEADgFAAQgEAAgEgDgAgBAdIgJhHIAAgHIgBgEQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFIgBAEIgBAHIgIBHg");
	this.shape.setTransform(120,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFBBIAAgDIALAAIAAg4QAAgHgDgEQgCgDgGAAQgEAAgDACQgEACgDAEQgDAEgCAFQgBAHAAAIIAAAmIALAAIAAADIgtAAIAAgDIALAAIAAh8IgLAAIAAgCIAiAAIAABFIAAAAIACgFQACgCAEgDIAHgFQAGgDAHAAQAGAAAFACQAEACAEADQADADACAEQABAFABAFIAAAzIALAAIAAADg");
	this.shape_1.setTransform(111.7,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAxQgFgCgCgDQgDgDAAgEIgBgHIAAg3IgMAAIAAgCIAMAAIAAgYIAGACIAFABIAGgBIAEgCIAAAYIAVAAIAAACIgVAAIAAA8IABAEIABAFIADADIAFABQADAAADgCIAEgDIADgGIACgFIADAAQgBAGgDAFQgDADgDACQgDACgEAAIgHACQgJAAgFgDg");
	this.shape_2.setTransform(103,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAmQgEgEgBgFIgBAAQgDAHgEADQgFACgJAAIgJgBIgIgDQgEgCgCgDQgDgEAAgFQAAgFACgEQACgDAEgDIAHgDIAJgDIAMgEIAGgCQADgCABgDIABgFIAAgLQAAgFgDgEQgCgEgFAAQgFAAgDACQgDACAAAFIAAACIABADIAAADIAAACIgBAFIgDABIgEABIgDAAIgDAAIgEgBIgCgDIgBgFQAAgFACgDQADgEAEgDQAFgCAFgBIAMgBIAMABQAGABAEADQAEACADAFQADAGAAAHIAAAsIABAGQABADAEAAIADgBIADgDIACABQgCAFgFAAIgJABQgJAAgFgDgAAEgDIgEACIgFADIgHADIgEAGQgCADAAAGIABAFIABAGQABACADACQACACAEAAIAFgBIADgEIADgGIABgJIAAgWIgBAAg");
	this.shape_3.setTransform(95,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAmQgJgDgGgFQgGgGgDgHQgEgIABgJQAAgHACgHQAEgIAFgGQAGgFAIgEQAIgDAHAAIANABQAGACAFAFQAGAEACAGQADAHAAAKIg0AAIAAAHIABAMQAAAHADAFQADAGAEADQADADAJABQAHgBAEgCQAGgDACgDQAEgEACgDIABgGIACACIgCAHQgCADgFAEQgDAEgGACQgGACgHAAQgIAAgIgDgAgGgjQgDADgBAEQgCAFgBAFIgBAKIAdAAIAAgNIgBgEIgBgGQgBgDgDgCQgCgCgFAAQgEAAgEADg");
	this.shape_4.setTransform(85.6,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXA/QgHgEgFgFQgFgGgDgHQgDgIAAgIQAAgGACgHQACgIAFgFQAFgGAIgEQAHgEAKAAQAHAAAFAEQAFAEADAHIAAAAIAAg/IgMAAIAAgCIAjAAIAAB+IALAAIAAADIgiAAIAAgOQgCAIgGAEQgFAEgHAAQgIAAgIgDgAgNgKQgEABgBAFIgDALIgBASIAAAQIACAMQACAFADADQADADAFAAQAHAAAEgEQAEgEACgGQADgGAAgGIAAgNIgBgNQAAgGgCgGQgCgFgEgEQgEgEgFAAQgFAAgDADg");
	this.shape_5.setTransform(75.8,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAoIgHgBIgHgCIgEgBIgCABIgBACIgDAAIAAgaIADAAIAEAJQACAFADAEQADADAFACQAEACAGABIAEAAIAFgCIAFgFQABgCAAgGIAAgCIgCgEIgEgEIgIgDIgNgGIgGgCIgFgDIgEgGQgCgEAAgEQAAgGACgEIAGgIQAEgEAGgCQAFgCAGAAIAGAAIAGACIAEABIADABIACgBIABgBIADAAIAAAWIgDAAIgDgIIgFgHQgCgDgEgCQgEgCgEAAQgGAAgFAEQgFACAAAHIAAADIACADIAEAEIAHACIAOAGQAKADAFAFIAEAGIABAIQAAAGgDAFQgCAFgFADQgEADgFACQgGACgGAAg");
	this.shape_6.setTransform(61.6,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBAbIgEglIgBgIQAAgFACgBQADgCABAAQACAAADACQACABAAAFIgBAIIgEAlg");
	this.shape_7.setTransform(55.3,-4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAmQgIgDgGgFQgGgGgDgHQgEgIAAgJQAAgHAEgHQACgIAHgGQAFgFAHgEQAIgDAIAAIANABQAGACAFAFQAGAEADAGQADAHAAAKIg1AAIAAAHIABAMQABAHACAFQACAGAFADQADADAJABQAHgBAFgCQAFgDADgDQADgEABgDIACgGIADACIgEAHQgCADgDAEQgEAEgGACQgGACgHAAQgIAAgJgDgAgGgjQgDADgCAEQgBAFgBAFIgBAKIAcAAIAAgNIAAgEIgBgGQgBgDgCgCQgDgCgEAAQgFAAgEADg");
	this.shape_8.setTransform(48.3,2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEA+QgFgEgDgIIgBAAIAAAOIghAAIAAgDIAMAAIAAh8IgMAAIAAgCIAiAAIAABBIAAAAQADgHAFgEQAEgEAIAAQAKAAAIAEQAHAEAFAGQAFAFACAIQACAHAAAGQAAAIgDAIQgDAHgFAGQgFAFgHAEQgHADgJAAQgIAAgEgEgAgDgJQgEAEgCAFQgCAGgBAGIAAANIAAANQABAGACAGQACAGAEAEQADAEAIAAQAFAAADgDQADgDABgFIACgMIABgQIgBgSQgBgHgCgEQgCgFgDgBQgDgDgFAAQgGAAgDAEg");
	this.shape_9.setTransform(38.4,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdAoIAAgDIALAAIAAg3QAAgIgDgEQgCgDgHAAIgFABIgFADQgDACgCAEQgCADAAAFIAAA0IALAAIAAADIgrAAIAAgDIALAAIAAg5QAAgHgDgDQgEgDgEAAQgHgBgFAHIgDAEIgCAEIgBAGIAAAHIAAArIALAAIAAADIgtAAIAAgDIAMAAIAAhHIgMAAIAAgDIAiAAIAAANIAAAAIADgEIAFgFIAHgEQAEgBAGgBQAGABAFABIAGAEIAEAEIADAFQADgFADgCIAHgFIAHgCIAFgBQAKAAAFADQAGAEADAEQACAEABAFIAAAIIAAAwIAMAAIAAADg");
	this.shape_10.setTransform(25.2,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAMAmQgEgEgBgFIgBAAQgDAHgEADQgFACgJAAIgJgBIgIgDQgEgCgCgDQgDgEAAgFQAAgFACgEQACgDAEgDIAHgDIAJgDIAMgEIAGgCQADgCABgDIABgFIAAgLQAAgFgDgEQgCgEgFAAQgFAAgDACQgDACAAAFIAAACIABADIAAADIAAACIgBAFIgDABIgEABIgDAAIgDAAIgEgBIgCgDIgBgFQAAgFACgDQADgEAEgDQAFgCAFgBIAMgBIAMABQAGABAEADQAEACADAFQADAGAAAHIAAAsIABAGQABADAEAAIADgBIADgDIACABQgCAFgFAAIgJABQgJAAgFgDgAAEgDIgEACIgFADIgHADIgEAGQgCADAAAGIABAFIABAGQABACADACQACACAEAAIAFgBIADgEIADgGIABgJIAAgWIgBAAg");
	this.shape_11.setTransform(12.7,2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkAoIAAgDIAMAAIAAhHIgMAAIAAgDIAhAAIAAAQIABAAQACgIAFgEQAGgGAJAAQAIAAAEAEQAFAFAAAHQAAAFgDAEQgCACgGAAQgEAAgEgBQgDgCAAgFIAAgBIABgDIAAgDIAAgCIAAgCIgBgBIgDgBQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAABQgDABgCADIgEAIQgBAFAAAGIAAAtIANAAIAAADg");
	this.shape_12.setTransform(4.3,2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMAmQgEgEgBgFIgBAAQgDAHgEADQgFACgJAAIgJgBIgIgDQgEgCgCgDQgDgEAAgFQAAgFACgEQACgDAEgDIAHgDIAJgDIAMgEIAGgCQADgCABgDIABgFIAAgLQAAgFgDgEQgCgEgFAAQgFAAgDACQgDACAAAFIAAACIABADIAAADIAAACIgBAFIgDABIgEABIgDAAIgDAAIgEgBIgCgDIgBgFQAAgFACgDQADgEAEgDQAFgCAFgBIAMgBIAMABQAGABAEADQAEACADAFQADAGAAAHIAAAsIABAGQABADAEAAIADgBIADgDIACABQgCAFgFAAIgJABQgJAAgFgDgAAEgDIgEACIgFADIgHADIgEAGQgCADAAAGIABAFIABAGIAEAEQACACAEAAIAFgBIADgEIADgGIABgJIAAgWIgBAAg");
	this.shape_13.setTransform(-4.5,2.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAKBAIAAgDIAQAAIAAg9IgzAAIAAA9IARAAIAAADIg8AAIAAgDIARAAIAAh6IgRAAIAAgCIA8AAIAAACIgRAAIAAA8IAzAAIAAg8IgQAAIAAgCIA6AAIAAACIgQAAIAAB6IAQAAIAAADg");
	this.shape_14.setTransform(-16.9,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAmQgJgDgGgFQgGgGgDgHQgDgIAAgJQAAgHADgHQACgIAHgGQAFgFAHgEQAJgDAHAAIANABQAGACAFAFQAGAEADAGQACAHAAAKIg0AAIAAAHIABAMQABAHACAFQADAGAEADQADADAJABQAGgBAFgCQAFgDADgDQAEgEACgDIABgGIACACIgCAHQgCADgFAEQgDAEgGACQgFACgIAAQgJAAgHgDgAgGgjQgDADgBAEQgDAFAAAFIgBAKIAcAAIAAgNIAAgEIgBgGQgBgDgCgCQgDgCgFAAQgEAAgEADg");
	this.shape_15.setTransform(-33.9,2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbBAQgHgDgDgDQgEgEgBgEIgBgGQAAgFACgDIAGgHIAHgFIAJgDIAAAAIgIgBIgJgDQgEgCgCgEQgDgEAAgFIAAgDIADgFIAEgHQADgDAGgDIgDgDIgEgEIgDgFIgBgHQAAgGACgFQADgFAEgDQAFgEAGgCQAHgCAIAAQAHAAAGACIAKAGIAIgGQADgCAGAAQAGAAACACQADADAAAEQAAADgCADQgDACgDAAIgEgBIgDgCIAAgCIgBgCIAAgEIgDgBIgDABIgEADIAEAGQACAEAAAIIgBAJQgBAEgEAEQgFADgFACQgGADgIAAQgIAAgGgCIgJgDQgFAEgBACIAAAFQgBAEAEACQAEACAFAAIAUAAIANABQAGABAEADQAFAEADAFQADAGAAAIQAAAHgDAHQgDAGgFAFQgGAGgIADQgIADgJAAQgLAAgHgCgAgYAeQgDAEAAAHIABAHQABAEADADQACAEAFACQADACAIAAQAEAAAEgCIAJgFQADgDADgFQACgEAAgFQAAgGgCgDQgCgDgDgCIgGgDIgFgBIgSAAQgGAEgDAFgAgNg9IgFAFIgCAHIgBAIQABAIABAGQABAFACACQABADADAAIAGABIAGgBQAAAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQACgCABgFIABgMIgBgKIgCgHQAAgDgDgCQgCgCgFAAQgEAAgDACg");
	this.shape_16.setTransform(-42.7,4.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAFAoIAAgDIALAAIAAg4QAAgHgDgEQgCgDgGAAQgEAAgDACQgEACgDAEQgDAEgCAGQgBAGAAAIIAAAmIALAAIAAADIgtAAIAAgDIALAAIAAhHIgLAAIAAgDIAhAAIAAASIABAAIACgEQACgEADgDIAIgGQAFgCAIgBQAGAAAFACQAEACAEAEIAFAIQABAFABAFIAAAyIALAAIAAADg");
	this.shape_17.setTransform(-53.5,2.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKAmQgJgDgGgFQgGgGgDgHQgEgIABgJQAAgHACgHQAEgIAFgGQAGgFAIgEQAIgDAHAAIANABQAGACAFAFQAGAEACAGQADAHAAAKIg0AAIAAAHIABAMQAAAHADAFQADAGAEADQADADAIABQAIgBAEgCQAGgDACgDQAEgEACgDIABgGIACACIgCAHQgCADgFAEQgDAEgGACQgGACgHAAQgIAAgIgDgAgGgjQgDADgBAEQgCAFgBAFIgBAKIAdAAIAAgNIgBgEIgBgGQgBgDgDgCQgCgCgFAAQgEAAgEADg");
	this.shape_18.setTransform(-63.8,2.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACApIgjhOIgKAAIAAgDIAuAAIAAADIgMAAIAWAwIATgwIgOAAIAAgDIAaAAIAAADIgJAAIggBOg");
	this.shape_19.setTransform(-72.5,2.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAMAmQgEgEgBgFIgBAAQgDAHgEADQgFACgJAAIgJgBIgIgDQgEgCgCgDQgDgEAAgFQAAgFACgEQACgDAEgDIAHgDIAJgDIAMgEIAGgCQADgCABgDIABgFIAAgLQAAgFgDgEQgCgEgFAAQgFAAgDACQgDACAAAFIAAACIABADIAAADIAAACIgBAFIgDABIgEABIgDAAIgDAAIgEgBIgCgDIgBgFQAAgFACgDQADgEAEgDQAFgCAFgBIAMgBIAMABQAGABAEADQAEACADAFQADAGAAAHIAAAsIABAGQABADAEAAIADgBIADgDIACABQgCAFgFAAIgJABQgJAAgFgDgAAEgDIgEACIgFADIgHADIgEAGQgCADAAAGIABAFIABAGIAEAEQACACAEAAIAFgBIADgEIADgGIABgJIAAgWIgBAAg");
	this.shape_20.setTransform(-81,2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAmQgIgEgFgFQgHgGgCgIQgEgGAAgJQAAgIAEgHQACgHAHgGQAFgGAIgDQAIgDAJAAQAKAAAHADQAIADAHAGQAFAGAEAHQADAHAAAIQAAAJgDAGQgEAIgFAGQgHAFgIAEQgHADgKAAQgJAAgIgDgAgKgiQgEADgCAGIgCAMIgBANIABAOIACAMQACAGAEADQAEADAGABQAHgBAEgDQAEgDACgGIACgMIABgOIgBgNIgCgMQgCgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_21.setTransform(-95.9,2.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHAxQgFgCgCgDQgDgDAAgEIgBgHIAAg3IgMAAIAAgCIAMAAIAAgYIAGACIAFABIAGgBIAEgCIAAAYIAVAAIAAACIgVAAIAAA8IABAEIABAFIADADIAFABQADAAADgCIAEgDIADgGIACgFIADAAQgBAGgDAFQgDADgDACQgDACgEAAIgHACQgJAAgFgDg");
	this.shape_22.setTransform(-103.9,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEABQAFgBAEAEQAEAEAAAEQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_23.setTransform(-110.1,5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEABQAFgBAEAEQAEAEAAAEQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_24.setTransform(-115.1,5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEABQAFgBAEAEQAEAEAAAEQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_25.setTransform(-120.1,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.4,-13.3,263,26.8);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIA/QgEgEAAgFQAAgFAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAFQAAAFgEAEQgEADgFAAQgEAAgEgDgAgBAdIgJhHIAAgHIgBgEQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFIgBAEIgBAHIgIBHg");
	this.shape.setTransform(120,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFBBIAAgDIALAAIAAg4QAAgHgDgEQgCgDgGAAQgEAAgDACQgEACgDAEQgDAEgCAFQgBAHAAAIIAAAmIALAAIAAADIgtAAIAAgDIALAAIAAh8IgLAAIAAgCIAiAAIAABFIAAAAIACgFQACgCAEgDIAHgFQAGgDAHAAQAGAAAFACQAEACAEADQADADACAEQABAFABAFIAAAzIALAAIAAADg");
	this.shape_1.setTransform(111.7,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAxQgFgCgCgDQgDgDAAgEIgBgHIAAg3IgMAAIAAgCIAMAAIAAgYIAGACIAFABIAGgBIAEgCIAAAYIAVAAIAAACIgVAAIAAA8IABAEIABAFIADADIAFABQADAAADgCIAEgDIADgGIACgFIADAAQgBAGgDAFQgDADgDACQgDACgEAAIgHACQgJAAgFgDg");
	this.shape_2.setTransform(103,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAmQgEgEgBgFIgBAAQgDAHgEADQgFACgJAAIgJgBIgIgDQgEgCgCgDQgDgEAAgFQAAgFACgEQACgDAEgDIAHgDIAJgDIAMgEIAGgCQADgCABgDIABgFIAAgLQAAgFgDgEQgCgEgFAAQgFAAgDACQgDACAAAFIAAACIABADIAAADIAAACIgBAFIgDABIgEABIgDAAIgDAAIgEgBIgCgDIgBgFQAAgFACgDQADgEAEgDQAFgCAFgBIAMgBIAMABQAGABAEADQAEACADAFQADAGAAAHIAAAsIABAGQABADAEAAIADgBIADgDIACABQgCAFgFAAIgJABQgJAAgFgDgAAEgDIgEACIgFADIgHADIgEAGQgCADAAAGIABAFIABAGQABACADACQACACAEAAIAFgBIADgEIADgGIABgJIAAgWIgBAAg");
	this.shape_3.setTransform(95,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAmQgJgDgGgFQgGgGgDgHQgEgIABgJQAAgHACgHQAEgIAFgGQAGgFAIgEQAIgDAHAAIANABQAGACAFAFQAGAEACAGQADAHAAAKIg0AAIAAAHIABAMQAAAHADAFQADAGAEADQADADAJABQAHgBAEgCQAGgDACgDQAEgEACgDIABgGIACACIgCAHQgCADgFAEQgDAEgGACQgGACgHAAQgIAAgIgDgAgGgjQgDADgBAEQgCAFgBAFIgBAKIAdAAIAAgNIgBgEIgBgGQgBgDgDgCQgCgCgFAAQgEAAgEADg");
	this.shape_4.setTransform(85.6,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXA/QgHgEgFgFQgFgGgDgHQgDgIAAgIQAAgGACgHQACgIAFgFQAFgGAIgEQAHgEAKAAQAHAAAFAEQAFAEADAHIAAAAIAAg/IgMAAIAAgCIAjAAIAAB+IALAAIAAADIgiAAIAAgOQgCAIgGAEQgFAEgHAAQgIAAgIgDgAgNgKQgEABgBAFIgDALIgBASIAAAQIACAMQACAFADADQADADAFAAQAHAAAEgEQAEgEACgGQADgGAAgGIAAgNIgBgNQAAgGgCgGQgCgFgEgEQgEgEgFAAQgFAAgDADg");
	this.shape_5.setTransform(75.8,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAoIgHgBIgHgCIgEgBIgCABIgBACIgDAAIAAgaIADAAIAEAJQACAFADAEQADADAFACQAEACAGABIAEAAIAFgCIAFgFQABgCAAgGIAAgCIgCgEIgEgEIgIgDIgNgGIgGgCIgFgDIgEgGQgCgEAAgEQAAgGACgEIAGgIQAEgEAGgCQAFgCAGAAIAGAAIAGACIAEABIADABIACgBIABgBIADAAIAAAWIgDAAIgDgIIgFgHQgCgDgEgCQgEgCgEAAQgGAAgFAEQgFACAAAHIAAADIACADIAEAEIAHACIAOAGQAKADAFAFIAEAGIABAIQAAAGgDAFQgCAFgFADQgEADgFACQgGACgGAAg");
	this.shape_6.setTransform(61.6,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBAbIgEglIgBgIQAAgFACgBQADgCABAAQACAAADACQACABAAAFIgBAIIgEAlg");
	this.shape_7.setTransform(55.3,-4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAmQgIgDgGgFQgGgGgDgHQgEgIAAgJQAAgHAEgHQACgIAHgGQAFgFAHgEQAIgDAIAAIANABQAGACAFAFQAGAEADAGQADAHAAAKIg1AAIAAAHIABAMQABAHACAFQACAGAFADQADADAJABQAHgBAFgCQAFgDADgDQADgEABgDIACgGIADACIgEAHQgCADgDAEQgEAEgGACQgGACgHAAQgIAAgJgDgAgGgjQgDADgCAEQgBAFgBAFIgBAKIAcAAIAAgNIAAgEIgBgGQgBgDgCgCQgDgCgEAAQgFAAgEADg");
	this.shape_8.setTransform(48.3,2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEA+QgFgEgDgIIgBAAIAAAOIghAAIAAgDIAMAAIAAh8IgMAAIAAgCIAiAAIAABBIAAAAQADgHAFgEQAEgEAIAAQAKAAAIAEQAHAEAFAGQAFAFACAIQACAHAAAGQAAAIgDAIQgDAHgFAGQgFAFgHAEQgHADgJAAQgIAAgEgEgAgDgJQgEAEgCAFQgCAGgBAGIAAANIAAANQABAGACAGQACAGAEAEQADAEAIAAQAFAAADgDQADgDABgFIACgMIABgQIgBgSQgBgHgCgEQgCgFgDgBQgDgDgFAAQgGAAgDAEg");
	this.shape_9.setTransform(38.4,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdAoIAAgDIALAAIAAg3QAAgIgDgEQgCgDgHAAIgFABIgFADQgDACgCAEQgCADAAAFIAAA0IALAAIAAADIgrAAIAAgDIALAAIAAg5QAAgHgDgDQgEgDgEAAQgHgBgFAHIgDAEIgCAEIgBAGIAAAHIAAArIALAAIAAADIgtAAIAAgDIAMAAIAAhHIgMAAIAAgDIAiAAIAAANIAAAAIADgEIAFgFIAHgEQAEgBAGgBQAGABAFABIAGAEIAEAEIADAFQADgFADgCIAHgFIAHgCIAFgBQAKAAAFADQAGAEADAEQACAEABAFIAAAIIAAAwIAMAAIAAADg");
	this.shape_10.setTransform(25.2,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAMAmQgEgEgBgFIgBAAQgDAHgEADQgFACgJAAIgJgBIgIgDQgEgCgCgDQgDgEAAgFQAAgFACgEQACgDAEgDIAHgDIAJgDIAMgEIAGgCQADgCABgDIABgFIAAgLQAAgFgDgEQgCgEgFAAQgFAAgDACQgDACAAAFIAAACIABADIAAADIAAACIgBAFIgDABIgEABIgDAAIgDAAIgEgBIgCgDIgBgFQAAgFACgDQADgEAEgDQAFgCAFgBIAMgBIAMABQAGABAEADQAEACADAFQADAGAAAHIAAAsIABAGQABADAEAAIADgBIADgDIACABQgCAFgFAAIgJABQgJAAgFgDgAAEgDIgEACIgFADIgHADIgEAGQgCADAAAGIABAFIABAGQABACADACQACACAEAAIAFgBIADgEIADgGIABgJIAAgWIgBAAg");
	this.shape_11.setTransform(12.7,2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkAoIAAgDIAMAAIAAhHIgMAAIAAgDIAhAAIAAAQIABAAQACgIAFgEQAGgGAJAAQAIAAAEAEQAFAFAAAHQAAAFgDAEQgCACgGAAQgEAAgEgBQgDgCAAgFIAAgBIABgDIAAgDIAAgCIAAgCIgBgBIgDgBQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAABQgDABgCADIgEAIQgBAFAAAGIAAAtIANAAIAAADg");
	this.shape_12.setTransform(4.3,2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAMAmQgEgEgBgFIgBAAQgDAHgEADQgFACgJAAIgJgBIgIgDQgEgCgCgDQgDgEAAgFQAAgFACgEQACgDAEgDIAHgDIAJgDIAMgEIAGgCQADgCABgDIABgFIAAgLQAAgFgDgEQgCgEgFAAQgFAAgDACQgDACAAAFIAAACIABADIAAADIAAACIgBAFIgDABIgEABIgDAAIgDAAIgEgBIgCgDIgBgFQAAgFACgDQADgEAEgDQAFgCAFgBIAMgBIAMABQAGABAEADQAEACADAFQADAGAAAHIAAAsIABAGQABADAEAAIADgBIADgDIACABQgCAFgFAAIgJABQgJAAgFgDgAAEgDIgEACIgFADIgHADIgEAGQgCADAAAGIABAFIABAGIAEAEQACACAEAAIAFgBIADgEIADgGIABgJIAAgWIgBAAg");
	this.shape_13.setTransform(-4.5,2.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAKBAIAAgDIAQAAIAAg9IgzAAIAAA9IARAAIAAADIg8AAIAAgDIARAAIAAh6IgRAAIAAgCIA8AAIAAACIgRAAIAAA8IAzAAIAAg8IgQAAIAAgCIA6AAIAAACIgQAAIAAB6IAQAAIAAADg");
	this.shape_14.setTransform(-16.9,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAmQgJgDgGgFQgGgGgDgHQgDgIAAgJQAAgHADgHQACgIAHgGQAFgFAHgEQAJgDAHAAIANABQAGACAFAFQAGAEADAGQACAHAAAKIg0AAIAAAHIABAMQABAHACAFQADAGAEADQADADAJABQAGgBAFgCQAFgDADgDQAEgEACgDIABgGIACACIgCAHQgCADgFAEQgDAEgGACQgFACgIAAQgJAAgHgDgAgGgjQgDADgBAEQgDAFAAAFIgBAKIAcAAIAAgNIAAgEIgBgGQgBgDgCgCQgDgCgFAAQgEAAgEADg");
	this.shape_15.setTransform(-33.9,2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbBAQgHgDgDgDQgEgEgBgEIgBgGQAAgFACgDIAGgHIAHgFIAJgDIAAAAIgIgBIgJgDQgEgCgCgEQgDgEAAgFIAAgDIADgFIAEgHQADgDAGgDIgDgDIgEgEIgDgFIgBgHQAAgGACgFQADgFAEgDQAFgEAGgCQAHgCAIAAQAHAAAGACIAKAGIAIgGQADgCAGAAQAGAAACACQADADAAAEQAAADgCADQgDACgDAAIgEgBIgDgCIAAgCIgBgCIAAgEIgDgBIgDABIgEADIAEAGQACAEAAAIIgBAJQgBAEgEAEQgFADgFACQgGADgIAAQgIAAgGgCIgJgDQgFAEgBACIAAAFQgBAEAEACQAEACAFAAIAUAAIANABQAGABAEADQAFAEADAFQADAGAAAIQAAAHgDAHQgDAGgFAFQgGAGgIADQgIADgJAAQgLAAgHgCgAgYAeQgDAEAAAHIABAHQABAEADADQACAEAFACQADACAIAAQAEAAAEgCIAJgFQADgDADgFQACgEAAgFQAAgGgCgDQgCgDgDgCIgGgDIgFgBIgSAAQgGAEgDAFgAgNg9IgFAFIgCAHIgBAIQABAIABAGQABAFACACQABADADAAIAGABIAGgBQAAAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQACgCABgFIABgMIgBgKIgCgHQAAgDgDgCQgCgCgFAAQgEAAgDACg");
	this.shape_16.setTransform(-42.7,4.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAFAoIAAgDIALAAIAAg4QAAgHgDgEQgCgDgGAAQgEAAgDACQgEACgDAEQgDAEgCAGQgBAGAAAIIAAAmIALAAIAAADIgtAAIAAgDIALAAIAAhHIgLAAIAAgDIAhAAIAAASIABAAIACgEQACgEADgDIAIgGQAFgCAIgBQAGAAAFACQAEACAEAEIAFAIQABAFABAFIAAAyIALAAIAAADg");
	this.shape_17.setTransform(-53.5,2.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKAmQgJgDgGgFQgGgGgDgHQgEgIABgJQAAgHACgHQAEgIAFgGQAGgFAIgEQAIgDAHAAIANABQAGACAFAFQAGAEACAGQADAHAAAKIg0AAIAAAHIABAMQAAAHADAFQADAGAEADQADADAIABQAIgBAEgCQAGgDACgDQAEgEACgDIABgGIACACIgCAHQgCADgFAEQgDAEgGACQgGACgHAAQgIAAgIgDgAgGgjQgDADgBAEQgCAFgBAFIgBAKIAdAAIAAgNIgBgEIgBgGQgBgDgDgCQgCgCgFAAQgEAAgEADg");
	this.shape_18.setTransform(-63.8,2.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACApIgjhOIgKAAIAAgDIAuAAIAAADIgMAAIAWAwIATgwIgOAAIAAgDIAaAAIAAADIgJAAIggBOg");
	this.shape_19.setTransform(-72.5,2.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAMAmQgEgEgBgFIgBAAQgDAHgEADQgFACgJAAIgJgBIgIgDQgEgCgCgDQgDgEAAgFQAAgFACgEQACgDAEgDIAHgDIAJgDIAMgEIAGgCQADgCABgDIABgFIAAgLQAAgFgDgEQgCgEgFAAQgFAAgDACQgDACAAAFIAAACIABADIAAADIAAACIgBAFIgDABIgEABIgDAAIgDAAIgEgBIgCgDIgBgFQAAgFACgDQADgEAEgDQAFgCAFgBIAMgBIAMABQAGABAEADQAEACADAFQADAGAAAHIAAAsIABAGQABADAEAAIADgBIADgDIACABQgCAFgFAAIgJABQgJAAgFgDgAAEgDIgEACIgFADIgHADIgEAGQgCADAAAGIABAFIABAGIAEAEQACACAEAAIAFgBIADgEIADgGIABgJIAAgWIgBAAg");
	this.shape_20.setTransform(-81,2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAmQgIgEgFgFQgHgGgCgIQgEgGAAgJQAAgIAEgHQACgHAHgGQAFgGAIgDQAIgDAJAAQAKAAAHADQAIADAHAGQAFAGAEAHQADAHAAAIQAAAJgDAGQgEAIgFAGQgHAFgIAEQgHADgKAAQgJAAgIgDgAgKgiQgEADgCAGIgCAMIgBANIABAOIACAMQACAGAEADQAEADAGABQAHgBAEgDQAEgDACgGIACgMIABgOIgBgNIgCgMQgCgGgEgDQgEgEgHAAQgGAAgEAEg");
	this.shape_21.setTransform(-95.9,2.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHAxQgFgCgCgDQgDgDAAgEIgBgHIAAg3IgMAAIAAgCIAMAAIAAgYIAGACIAFABIAGgBIAEgCIAAAYIAVAAIAAACIgVAAIAAA8IABAEIABAFIADADIAFABQADAAADgCIAEgDIADgGIACgFIADAAQgBAGgDAFQgDADgDACQgDACgEAAIgHACQgJAAgFgDg");
	this.shape_22.setTransform(-103.9,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEABQAFgBAEAEQAEAEAAAEQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_23.setTransform(-110.1,5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEABQAFgBAEAEQAEAEAAAEQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_24.setTransform(-115.1,5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEABQAFgBAEAEQAEAEAAAEQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_25.setTransform(-120.1,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.4,-13.3,263,26.8);


(lib.davignon_Ex01_Logotypeai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.actorsnamespsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BARACK OBAMA
	this.instance = new lib.BARACKOBAMA();
	this.instance.parent = this;
	this.instance.setTransform(2141,329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ANDY SERKIS AS HARAMBE
	this.instance_1 = new lib.ANDYSERKISASHARAMBE();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1578,265);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// JOE BIDEN
	this.instance_2 = new lib.JOEBIDEN();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2616,333);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// DANIELLE BREGOLI
	this.instance_3 = new lib.DANIELLEBREGOLI();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1038,329);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// NEIL PATRICK HARRIS 
	this.instance_4 = new lib.NEILPATRICKHARRIS();
	this.instance_4.parent = this;
	this.instance_4.setTransform(536,269);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(536,265,2176,244);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.actorsnamespsd("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-64.4,0,0.27,0.27,0,0,0,1623.8,386.8);

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(226.6,-17.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-358,-32.9,716.2,65.9);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.actorsnamespsd("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-64.4,0,0.27,0.27,0,0,0,1623.8,386.8);

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(226.6,-17.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-358,-32.9,716.2,65.9);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AjlEAIAAgKIBCAAIAAnrIhCAAIAAgKIGuAAIAAB7IgJAAIgNggQgJgTgPgSQgQgSgYgNQgZgNgiAAIhyAAIAADeIAoAAQAaAAASgHQASgIANgOQAMgOAIgUIANgsIAJAAIAADfIgJAAIgMgpQgHgTgMgPQgLgPgRgHQgRgJgYAAIgwAAIAAEDIB1AAQAhAAAbgLQAagLAVgUQAUgVAOgbQAOgaAHggIAJAAIAACeg");
	this.shape.setTransform(676.7,103.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("ABIEAIAAgKIBCAAIAAnrIgBAAIiwH1IgMAAIiyn1IgBAAIAAHrIBCAAIAAAKIiQAAIAAgKIBCAAIAAnrIhCAAIAAgKIC5AAIB7FlIACAAIB/llIC0AAIAAAKIhDAAIAAHrIBDAAIAAAKg");
	this.shape_1.setTransform(617.8,103.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AjlEAIAAgKIBCAAIAAnrIhCAAIAAgKIGuAAIAAB7IgJAAIgNggQgJgTgPgSQgPgSgZgNQgZgNgiAAIhzAAIAADeIApAAQAaAAASgHQASgIANgOQAMgOAIgUIANgsIAKAAIAADfIgKAAIgMgpQgHgTgMgPQgLgPgRgHQgRgJgYAAIgxAAIAAEDIB2AAQAhAAAbgLQAagLAUgUQAVgVAOgbQANgaAIggIAJAAIAACeg");
	this.shape_2.setTransform(558.1,103.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("ABJEAIAAgKIBBAAIAAnrIgBAAIixH1IgLAAIiyn1IgBAAIAAHrIBCAAIAAAKIiQAAIAAgKIBCAAIAAnrIhCAAIAAgKIC5AAIB8FlIABAAIB/llIC0AAIAAAKIhCAAIAAHrIBCAAIAAAKg");
	this.shape_3.setTransform(499.2,103.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AjlEAIAAgKIBCAAIAAnrIhCAAIAAgKIGuAAIAAB7IgJAAIgNggQgJgTgPgSQgPgSgZgNQgZgNgiAAIhzAAIAADeIApAAQAaAAASgHQASgIANgOQAMgOAIgUIANgsIAKAAIAADfIgKAAIgMgpQgHgTgMgPQgLgPgRgHQgRgJgYAAIgxAAIAAEDIB2AAQAhAAAbgLQAbgLATgUQAVgVAOgbQANgaAIggIAJAAIAACeg");
	this.shape_4.setTransform(419.5,103.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AhaD2QgxgUglgjQglglgWgvQgMgYgFgbQgGgaABgcQAAgeAFgbQAHgcAMgYQAZgyAngkQATgSAWgNQAWgOAXgJQAYgKAYgEQAYgFAWAAQAVAAAUAEIAlAJIAgAKIAXADQAKAAAEgCIAJgNIALAAIAACUIgKAAQgThIglgmQgmgng+AAQgZAAgTAFQgVAEgOAKQgfATgQAfQgQAegGAoQgEAnAAAoIAAA9QAABCAJAtQAIAtASAbQATAbAdAMQAdAMAoAAQAhAAATgMQAUgMAKgVQAKgTADgdIADg9IAAgcIhKAAIAAgKIDeAAIAAAKIguAAIAACmIgOAAQgBgKgHgDQgHgEgIAAQgSAAgPAGIgiAPIgpAPQgXAHghAAQg0AAgxgVg");
	this.shape_5.setTransform(367.1,103.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC0000").s().p("ACfEAIlEnMIAAAAIAAHCIBBAAIAAAKIiQAAIAAgKIBDAAIAAnrIhDAAIAAgKICqAAIDvFVIABAAIAAlLIhBAAIAAgKICQAAIAAAKIhDAAIAAH1g");
	this.shape_6.setTransform(311.4,103.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("AjlEAIAAgKIBCAAIAAnrIhCAAIAAgKIGuAAIAAB7IgJAAIgNggQgJgTgPgSQgQgSgYgNQgZgNgiAAIhyAAIAADeIAoAAQAaAAASgHQASgIANgOQAMgOAIgUIANgsIAJAAIAADfIgJAAIgMgpQgHgTgMgPQgLgPgRgHQgRgJgYAAIgwAAIAAEDIB1AAQAhAAAbgLQAagLAVgUQAUgVAOgbQAOgaAHggIAJAAIAACeg");
	this.shape_7.setTransform(258.2,103.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("AgMEKIjHoJIg9AAIAAgKIDxAAIAAAKIhFAAICUGFICYmFIhBAAIAAgKICKAAIAAAKIg/AAIjKIJg");
	this.shape_8.setTransform(206.6,104.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC0000").s().p("AAyELIAAgKIBCAAIhTjCIisAAIhQDCIBAAAIAAAKIiIAAIAAgKIA9AAIDWoKIATAAIDjIKIA+AAIAAAKgAiHA1ICkAAIhTjDg");
	this.shape_9.setTransform(157.3,102.4);

	this.text = new cjs.Text("", "72px 'Didot-Bold'", "#2B663D");
	this.text.textAlign = "center";
	this.text.lineHeight = 105;
	this.text.parent = this;
	this.text.setTransform(-161.9,74.3);

	this.instance = new lib.davignon_Ex01_Logotypeai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-443.9,239,1,1,0,0,0,300,406.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167,57.3,911,109.9);


// stage content:
(lib.davignon_Audio_Banner_AN = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		playSound("Eyes_Gone_Wrong");
	}
	this.frame_319 = function() {
		playSound("Bengo_Latino_Sting");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(299).call(this.frame_319).wait(41));

	// DirectedBy
	this.instance = new lib.Tween10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(477.5,69.9);

	this.instance_1 = new lib.Tween11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(584.5,59.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},80).wait(280));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:584.5,y:59.7,alpha:0},80).wait(280));

	// Actors
	this.instance_2 = new lib.Tween8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(471.6,200.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween9("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(471.6,200.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(259).to({_off:false},0).to({_off:true,alpha:1},38).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(259).to({_off:false},38).to({regX:0.1,regY:0.1,scaleX:1.5,scaleY:0.5,x:471.7,y:224.3},28).to({regX:0.5,regY:-0.7,scaleX:0.21,scaleY:0.07,x:471.6,y:-10.7},34).wait(1));

	// Text
	this.text = new cjs.Text("The howbow dah girl and Joe Biden travel around the country...", "bold 18px 'Didot'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 990;
	this.text.parent = this;
	this.text.setTransform(297,-54.4);
	this.text._off = true;

	this.instance_4 = new lib.Tween6("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(771.5,54);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween7("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(771.5,54);
	this.instance_5._off = true;

	this.instance_6 = new lib.actorsnamespsd("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(480.5,71.1,0.27,0.27,0,0,0,1623.9,386.7);

	this.instance_7 = new lib.Tween13("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(544.9,71.1);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween14("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(482.9,-19.1,0.21,0.07,0,0,0,0.2,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},155).to({state:[{t:this.text}]},33).to({state:[{t:this.text}]},2).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},42).to({state:[{t:this.instance_5},{t:this.instance_6}]},25).to({state:[{t:this.instance_7}]},78).to({state:[{t:this.instance_8}]},21).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.text).wait(155).to({_off:false},0).to({y:40.2},33).to({x:299,y:41.6},2).to({_off:true},3).wait(167));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(193).to({_off:false},0).to({_off:true,alpha:1},42).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(193).to({_off:false},42).to({alpha:0},25).to({_off:true},78).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(338).to({_off:false},0).to({_off:true,regX:0.2,regY:-0.7,scaleX:0.21,scaleY:0.07,x:482.9,y:-19.1},21).wait(1));

	// Quote
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAiIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgDgBIgEgBIAAgEIAWgBIABAAIAAAKIABAAQADgGAFgDQAFgCAFAAQAEAAADACQACADAAAFQAAAEgBACQgCACgEABQgEAAgBgCQgBgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIABgCIAAgDQgDAAgEADQgFADgCAEIAAAnIABADIACADIAFABIAEAAIAAAEg");
	this.shape.setTransform(882.3,150.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOA0IAAgFIADAAIADgBIADgCIABgEIAAgoIgBgEIgDgDIgEgCIgEAAIAAgFIAWgBIABAAIAAA2IABAEIADADIADABIADAAIAAAFgAgFgjQgDgDAAgDQAAgEADgDQACgDADAAQAEAAACADQADACAAAEQAAAEgDADQgCADgEAAQgDAAgCgDg");
	this.shape_1.setTransform(877.2,149);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAyIAAgFIAEAAIADgBIADgCIABgEIAAhHIgBgEIgDgDIgDgBIgEgBIAAgEIAWgCIABABIAAAHIABABQAEgFAFgCQAEgDAFAAQAHAAAFADQAFACAEAFQAEAFACAGQACAGAAAIQAAAIgCAGQgDAHgEAEQgFAFgGACQgFADgHAAQgFAAgEgBIgGgEIAAAAIAAAVIABAEIACACIAFABIAEABIAAAFgAgFgnIgGAFIAAAnIACAEIADADIAEADIAFABQAEAAAEgCQADgCADgEQACgEACgFIABgMIgBgKQgBgGgDgEQgCgDgEgDQgDgCgGAAQgEAAgDACg");
	this.shape_2.setTransform(871.1,152.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaAiIAAgEIACAAIADgBIAEgCIAAgEIAAgiQAAgHgDgEQgEgDgEAAIgGABIgGACIgDADIgCAEIAAAmIABADIADADIACABIAEAAIAAAEIggAAIAAgEIADAAIADgBIADgCIABgEIAAgiQAAgHgDgEQgDgDgFAAIgHABIgFACIgEAEIgBADIAAAlIAAAEIADADIADABIADAAIAAAEIggAAIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgCIgDgCIgEgBIAAgEIAXgBIABAAIAAAKIAAAAIAEgEIAEgEIAHgCIAIgBQAGgBAEAEQAEAEADAEIAEgEIAFgEIAFgCIAIgBQAJgBAFAGQAFAFAAAMIAAAiIABADQAAABAAAAQABABAAAAQAAAAABAAQAAAAABABIADABIADAAIAAAEg");
	this.shape_3.setTransform(861.2,150.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAwIAAgEIAFgBIAFgBIADgDIAAgDIAAhGIAAgDIgDgEIgFgBIgFgBIAAgEIBKAAIAAAXIgFAAQgCgGgEgFQgFgGgEgBIgFAAIgHAAIgOAAIAAAmIALAAIAHgBQACAAACgDIACgFIACgGIAFAAIAAAlIgFAAIgCgIIgCgEQgCgEgDAAIgGgBIgLAAIAAAdIABAHQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAFACIAIAAIAGAAIAGAAIAFgBIAEgDQADgDAEgGIAEgKIAFAAIgCAcg");
	this.shape_4.setTransform(850.6,149.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAQIAFgEIAFgEIACgFIACgGIgEAAQgDAAgDgCQgCgDAAgEQAAgDACgCQADgDADAAQAFAAAEAEQACAEAAAHQABAFgDADQgCAFgDADIgFAGIgGADg");
	this.shape_5.setTransform(840.6,154.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAFAiIAAgEIADAAIADgBIADgCIABgEIAAgiQAAgHgDgEQgEgDgFAAIgFABIgGACIgDADIgCAEIAAAmIABADIADADIADABIADAAIAAAEIghAAIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgDIgDgBIgEgBIAAgEIAXgBIABAAIAAAKIAAAAIAEgEIAFgEIAFgCIAIgBQAJAAAFAFQAFAGAAAKIAAAjIABADQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAABIADABIAEAAIAAAEg");
	this.shape_6.setTransform(834.7,150.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAMAhQgDgDgBgEIgBAAQgEAEgEADQgFACgHAAQgIAAgFgEQgFgFAAgHIABgHQABgDADgCIAEgEIAFgDIANgDIAMgFIAAgHIgBgDIgBgFIgEgEQgCgCgEAAQgEAAgCABIgEACIABAEIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQgCACgEAAQgDgBgCgCQgBgCAAgDQAAgEACgDQACgCADgCIAIgEIAIgCIAKABQAEABADADQAEADACAEQABAEAAAHIAAARIAAAPIABAFIADACIADABIAFAAIAAAFIgGACIgGAAQgFAAgDgCgAgCAAIgIAEIgFAFQgCAEAAAFQAAAFADADQADACAEAAQAFABADgDIAGgGIABgWg");
	this.shape_7.setTransform(827.2,150.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAiIAAgEIADAAIAEgBIACgCIABgEIAAgiQAAgHgDgEQgDgDgFAAIgHABIgFACIgDADIgCAEIAAAmIAAADIADADIAEABIADAAIAAAEIggAAIAAgEIAEAAIACgBIADgCIABgEIAAgiQAAgHgEgEQgCgDgGAAIgFABIgGACIgDAEIgDADIAAAlIABAEIAEADIACABIADAAIAAAEIggAAIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgCIgDgCIgEgBIAAgEIAWgBIABAAIAAAKIABAAIAEgEIAEgEIAGgCIAJgBQAGgBAEAEQAEAEADAEIADgEIAGgEIAGgCIAHgBQAJgBAFAGQAFAFAAAMIAAAiIABADQAAABAAAAQABABAAAAQAAAAABAAQAAAAABABIADABIADAAIAAAEg");
	this.shape_8.setTransform(817.4,150.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASAiIgSgwIgSAwIgFAAIgKgeIgJgZQgBgEgDgBIgGgDIAAgEIAeAAIAAAFIgFAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAABIABACIAEAQIAHAWIARgwIAHAAIARAvIAGgRIAFgPIABgEIAAgCQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgCgCIgEgBIgCAAIAAgEIAaAAIAAAEQgDAAgEADQgDACgBAEIgHATIgHAUIgCAHIgCAIg");
	this.shape_9.setTransform(806.1,150.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLAhQgHgDgDgFQgEgFgCgHQgCgGAAgHQAAgGACgGQACgHAEgFQAEgFAGgDQAGgDAGAAQAHAAAFADQAFACAEAEQADAEACAFQABAFAAAGIAAAFIgrAAQgBAGACAFQABAFADAFQACADAFADQADACAGAAQAGAAAFgDQAEgDAEgHIAFADQgFAIgGAFQgIAFgJAAQgHAAgGgDgAAOgHIAAgIIgCgHQgCgDgCgCQgDgCgEAAQgGAAgGAGQgEAGAAAKIAdAAg");
	this.shape_10.setTransform(797.6,150.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfAxIg6hPIAAAyIABAMQABAFACACIAHADIAGABIAAAFIgnAAIAAgFIAGgBIAFgCQADgCABgEIAAgNIAAgwIgBgFQgBgEgCgCQgCgCgEgBIgHgCIAAgFIAcAAIA1BJIAAgtIgBgNQgBgEgCgDIgGgCIgHgBIAAgFIAnAAIAAAFIgFABIgGACQgDACAAAFIgBAMIAABGg");
	this.shape_11.setTransform(788.8,149.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAaAiIAAgEIACAAIADgBIAEgCIAAgEIAAgiQAAgHgDgEQgEgDgEAAIgGABIgGACIgDADIgCAEIAAAmIABADIACADIADABIAEAAIAAAEIggAAIAAgEIAEAAIACgBIADgCIABgEIAAgiQAAgHgDgEQgEgDgEAAIgHABIgFACIgEAEIgCADIAAAlIABAEIAEADIACABIADAAIAAAEIggAAIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgCIgDgCIgEgBIAAgEIAWgBIABAAIAAAKIABAAIAEgEIAEgEIAHgCIAIgBQAGgBAEAEQAFAEACAEIADgEIAGgEIAFgCIAIgBQAJgBAFAGQAFAFAAAMIAAAiIABADQAAABAAAAQABABAAAAQAAAAABAAQAAAAABABIADABIADAAIAAAEg");
	this.shape_12.setTransform(774,150.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOA0IAAgFIADAAIADgBIADgCIABgEIAAgoIgBgEIgDgDIgEgCIgEAAIAAgFIAWgBIABAAIAAA2IABAEIADADIADABIADAAIAAAFgAgFgjQgDgDAAgDQAAgEADgDQACgDADAAQAEAAACADQADACAAAEQAAAEgDADQgCADgEAAQgDAAgCgDg");
	this.shape_13.setTransform(765.7,149);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAUAwQgIgLgKgMIgTgYIgCAAIAAAiIABAEIADADIAEABIAFABIAAAEIgoAAIAAgEIAEgBIAFAAIADgDIABgEIAAhGIgBgDIgDgEIgFgBIgEgBIAAgEIAoAAIAAAEIgFABIgEABIgDADIgBAEIAAAiIACAAIAMgLIAJgMIAIgKQADgEAAgCQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIgCgBIgDgBIgDAAIAAgEIAkAAIAAAEIgBAAIgBAAIgCABIgCAAIgGACIgEADIgOARIgPAPIAQAUIAPASIAGAFIAFAEIAEABIAFABIAAAEg");
	this.shape_14.setTransform(759.4,149.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AADAOIAFgDIAEgEIADgDIABgGIgDAAQgEAAgDgCQgCgCAAgEQAAgCACgDQACgCAEAAQAGAAACADQADAEAAAGQAAAEgCAEIgFAGIgGAFIgFAEgAgWAOIAGgDIAEgEIACgDQACgDAAgDIgDAAQgFAAgCgCQgDgCAAgEQAAgCADgDQACgCAEAAQAFAAADADQACAEAAAGQAAAEgCAEQgBADgDADIgGAFIgFAEg");
	this.shape_15.setTransform(882.2,115.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_16.setTransform(877.5,123.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAFAjIAAgFIADgBIADAAIADgCIABgEIAAghQAAgIgDgEQgEgDgFAAIgFABIgGACIgDAEIgCACIAAAmIABAEIADACIADABIADABIAAAFIghAAIAAgFIADgBIADAAIADgCIABgEIAAgoIgBgFIgDgDIgDgBIgEAAIAAgFIAXgCIABABIAAAJIAAAAIAEgDIAFgEIAFgDIAIgBQAJAAAFAHQAFAGAAAJIAAAiIABAFQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIADABIAEABIAAAFg");
	this.shape_17.setTransform(871.5,120.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMAhQgGgCgEgFQgFgEgCgHQgDgGAAgJQAAgOAJgLQAJgKAOAAQAPAAAJAKQAJAKAAAPQAAAGgCAHQgDAHgEAFQgEAFgHADQgGADgHAAQgGAAgGgDgAgIgbQgEADgCAEQgCAFgBAFIgBAKIABALQABAGADAEQACAFAEACQADADAEAAQAJAAAFgJQAFgIAAgOIgBgKQgBgGgCgEQgDgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_18.setTransform(863.6,120.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAFA1IAAgEIAEgBIADAAIADgDIABgDIAAgjQAAgHgEgDQgDgEgFAAIgFABIgFADIgFADIgBACIAAAnIABADIADADIADABIADABIAAAEIghAAIAAgEIADgBIADAAIADgDIABgDIAAhOIgBgEIgDgEIgEgCIgFAAIAAgEIAZgCIABABIAAAvIAEgEIAFgDIAFgDIAIgBQAJAAAFAFQAFAGAAAKIAAAjIAAAEIADACIAEABIADABIAAAEg");
	this.shape_19.setTransform(855.7,118.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAoQgEgEAAgIIAAgsIgMAAIAAgHIANAAIAAgVIALAAIAAAVIATAAIAAAHIgTAAIAAAkIABAHIABAFIADADIAGABIAFAAIAFgBIAAAFIgJADQgEACgFAAQgIAAgDgFg");
	this.shape_20.setTransform(849.3,119.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAMAhQgDgDgBgFIgBAAQgEAFgEADQgFACgHAAQgIABgFgFQgFgEAAgIIABgHQABgDADgDIAEgDIAFgDIANgDIAMgFIAAgHIgBgEIgBgEIgEgFQgCgBgEgBQgEABgCABIgEACIABAEIAAAFQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQgCABgEAAQgDABgCgDQgBgDAAgDQAAgCACgDQACgEADgCIAIgDIAIgCIAKACQAEABADACQAEADACAEQABAEAAAHIAAARIAAAQIABAEIADACIADACIAFAAIAAAEIgGABIgGABQgFAAgDgCgAgCAAIgIAEIgFAFQgCAEAAAEQAAAGADACQADADAEABQAFAAADgDIAGgFIABgXg");
	this.shape_21.setTransform(843.6,120.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYAjIAAgFIADgBIADAAIADgCIABgEIAAgoIgBgFQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgDgBIgEAAIAAgFIAWgCIABABIAAAJIABAAQADgFAFgDQAFgDAFAAQAEAAADADQACADAAAFQAAADgBADQgCADgEgBQgEAAgBgBQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIABgDIAAgCQgDAAgEACQgFADgCAFIAAAmIABAEIACACIAFABIAEABIAAAFg");
	this.shape_22.setTransform(837.2,120.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAMAhQgDgDgBgFIgBAAQgEAFgEADQgFACgHAAQgIABgFgFQgFgEAAgIIABgHQABgDADgDIAEgDIAFgDIANgDIAMgFIAAgHIgBgEIgBgEIgEgFQgCgBgEgBQgEABgCABIgEACIABAEIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQgCABgEAAQgDABgCgDQgBgDAAgDQAAgCACgDQACgEADgCIAIgDIAIgCIAKACQAEABADACQAEADACAEQABAEAAAHIAAARIAAAQIABAEIADACIADACIAFAAIAAAEIgGABIgGABQgFAAgDgCgAgCAAIgIAEIgFAFQgCAEAAAEQAAAGADACQADADAEABQAFAAADgDIAGgFIABgXg");
	this.shape_23.setTransform(830.8,120.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAaAjIAAgFIADgBIACAAIAEgCIAAgEIAAgiQAAgHgDgEQgDgDgFAAIgGABIgGACIgDAEIgCACIAAAmIABAFIADABIACABIAEABIAAAFIgfAAIAAgFIACgBIADAAIADgCIABgEIAAgiQAAgHgDgEQgEgDgEAAIgHABIgFACIgEAEIgBACIAAAmIAAAEIADACIADABIADABIAAAFIggAAIAAgFIADgBIADAAIADgCIABgEIAAgpIgBgEIgDgCIgDgCIgEAAIAAgFIAXgCIABABIAAAKIAAAAIAEgEIAFgEIAGgDIAHgBQAHABAEADQAEADACAFIAFgEIAEgEIAGgDIAJgBQAIABAFAFQAFAGAAALIAAAhIABAFQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAIAEABIADABIAAAFg");
	this.shape_24.setTransform(821,120.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgLAhQgHgDgDgFQgEgFgCgHQgCgGAAgHQAAgGACgGQACgHAEgFQAEgFAGgDQAGgDAGAAQAHAAAFADQAFACAEAEQADAEABAFQACAFAAAGIAAAFIgrAAQAAAGABAFQABAFADAFQACADAFADQADACAGAAQAGAAAEgDQAFgDAEgHIAFADQgFAIgGAFQgIAFgJAAQgHAAgGgDgAAOgHIAAgIIgCgHQgBgDgEgCQgCgCgEAAQgGAAgGAGQgEAGAAAKIAdAAg");
	this.shape_25.setTransform(808.2,120.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOA0IAAgFIADAAIADgBIADgCIABgEIAAgoIgBgEIgDgDIgEgCIgEAAIAAgFIAWgBIABAAIAAA2IABAEIADADIADABIADAAIAAAFgAgFgjQgDgDAAgDQAAgEADgDQACgDADAAQAEAAACADQADACAAAEQAAAEgDADQgCADgEAAQgDAAgCgDg");
	this.shape_26.setTransform(802.6,118.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCAiIgMgdIgLgbQgBgCgDgCQgDgCgDAAIAAgFIAfAAIAAAFIgFABQgBAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIABABIAAACIAIAUIAIATIAGgPIAIgTIACgDIAAgEIgBgBIgCgCIgEgBIgCAAIAAgFIAaAAIAAAFIgHACQgCABgCAFIgIATIgJAUIgEAHIgCAIg");
	this.shape_27.setTransform(797.2,120.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMAhQgGgCgEgFQgFgEgCgHQgDgGAAgJQAAgOAJgLQAJgKAOAAQAPAAAJAKQAJAKAAAPQAAAGgCAHQgDAHgEAFQgEAFgHADQgGADgHAAQgGAAgGgDgAgIgbQgEADgCAEQgCAFgBAFIgBAKIABALQABAGADAEQACAFAEACQADADAEAAQAJAAAFgJQAFgIAAgOIgBgKQgBgGgCgEQgDgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_28.setTransform(789.9,120.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAaAjIAAgFIADgBIACAAIAEgCIAAgEIAAgiQAAgHgDgEQgEgDgEAAIgGABIgGACIgDAEIgCACIAAAmIABAFIADABIACABIAEABIAAAFIgfAAIAAgFIACgBIADAAIADgCIABgEIAAgiQAAgHgDgEQgEgDgEAAIgHABIgFACIgEAEIgBACIAAAmIABAEIACACIADABIADABIAAAFIggAAIAAgFIADgBIADAAIADgCIABgEIAAgpIgBgEIgDgCIgDgCIgEAAIAAgFIAXgCIABABIAAAKIAAAAIAEgEIAFgEIAGgDIAHgBQAHABAEADQAEADACAFIAFgEIAEgEIAGgDIAJgBQAIABAFAFQAFAGAAALIAAAhIABAFQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAIAEABIADABIAAAFg");
	this.shape_29.setTransform(780.1,120.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgfAuQgDgCAAgEQAAgDACgCQACgCADAAIADABIADACIACACIACAEQAEgDAEgHQAFgIACgGIgMgcIgLgaQgBgDgDgCQgDgCgDgBIAAgEIAfAAIAAAFIgFABQgBAAgBAAQAAAAgBABQAAAAAAAAQAAAAAAAAIAAACIABACIAIAUIAHATIAHgPIAHgSIABgEIABgDQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAgBgBIgGgCIAAgEIAZAAIAAAEIgFACQgEADgBAEIgPAiIgJAVIgHAQQgDAFgEADIgFAEIgGABQgFAAgDgDg");
	this.shape_30.setTransform(881.6,91.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLAhQgHgDgDgFQgEgFgCgHQgCgGAAgHQAAgGACgGQACgHAEgFQAEgFAGgDQAGgDAGAAQAHAAAFADQAFACAEAEQADAEACAFQABAFAAAGIAAAFIgrAAQgBAGACAFQABAFADAFQACADAFADQADACAGAAQAGAAAEgDQAFgDAEgHIAFADQgFAIgGAFQgIAFgJAAQgHAAgGgDgAAOgHIAAgIIgCgHQgBgDgEgCQgCgCgEAAQgGAAgGAGQgEAGAAAKIAdAAg");
	this.shape_31.setTransform(874.9,90.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AASA1IgMgQIgMgRIgFAEIAAAQIAAAFIAEACIACABIAEABIAAAEIghAAIAAgEIADgBIAEAAIACgCIABgFIAAhNIgBgEIgCgEIgFgCIgFAAIAAgEIAZgCIABABIAABHIALgMIAKgKIABgCIABgBQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAIgGgBIAAgFIAdAAIAAAFIgKAEIgHAEIgEAEIgJAIIANARIALANQACAFADABIAHACIAAAEg");
	this.shape_32.setTransform(867.8,88.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAFAiIAAgEIADgBIADAAIADgCIABgEIAAghQAAgIgDgDQgEgFgFAAIgFABIgGAEIgDACIgCADIAAAnIABADIADACIADABIADABIAAAEIghAAIAAgEIADgBIADAAIADgCIABgEIAAgpIgBgEIgDgDIgDgBIgEgBIAAgEIAXgCIABABIAAAKIAAAAIAEgEIAFgEIAFgDIAIgBQAJABAFAFQAFAGAAALIAAAiIABADQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAIADABIAEABIAAAEg");
	this.shape_33.setTransform(859.9,90.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgMAhQgGgCgEgFQgFgEgCgHQgDgGAAgJQAAgOAJgLQAJgKAOAAQAPAAAJAKQAJAKAAAPQAAAGgCAHQgDAHgEAFQgEAFgHADQgGADgHAAQgGAAgGgDgAgIgbQgEADgCAEQgCAFgBAFIgBAKIABALQABAGADAEQACAFAEACQADADAEAAQAJAAAFgJQAFgIAAgOIgBgKQgBgGgCgEQgDgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_34.setTransform(852,90.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAZAiIAAgEIADgBIAEAAIACgCIABgEIAAgiQAAgHgDgDQgDgFgFAAIgHABIgFAEIgDACIgCADIAAAnIAAADIADACIAEABIADABIAAAEIggAAIAAgEIAEgBIACAAIADgCIABgEIAAgiQAAgHgEgDQgCgFgGAAIgFABIgGAEIgDADIgDACIAAAmIABAEIAEACIACABIADABIAAAEIggAAIAAgEIADgBIADAAIADgCIABgEIAAgpIgBgEIgDgDIgDgBIgEgBIAAgEIAWgCIABABIAAAKIABAAIAEgEIAEgEIAGgDIAJgBQAGAAAEAEQAEADADAGIADgFIAGgEIAGgDIAHgBQAJAAAFAGQAFAFAAAMIAAAiIABADQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAIADABIADABIAAAEg");
	this.shape_35.setTransform(842.1,90.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgLAhQgGgDgEgFQgEgFgCgHQgCgGAAgHQAAgGACgGQACgHAEgFQAEgFAGgDQAGgDAGAAQAHAAAFADQAGACADAEQADAEACAFQABAFAAAGIAAAFIgsAAQABAGABAFQABAFADAFQACADAFADQADACAGAAQAGAAAFgDQAEgDAEgHIAFADQgFAIgHAFQgHAFgJAAQgHAAgGgDgAAPgHIgBgIIgCgHQgBgDgDgCQgDgCgFAAQgGAAgEAGQgFAGgBAKIAfAAg");
	this.shape_36.setTransform(829.3,90.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgOA1IAAgEIAEgBIADAAIADgCIAAgFIAAhMIgBgFIgCgDIgFgCIgFgBIAAgEIAYgCIABABIAABbIABAFIADACIADABIADABIAAAEg");
	this.shape_37.setTransform(823.6,88.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgYA2IABgMIAAgOIAAhCIgBgEQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgEgBIgFgBIAAgEIAYgCIABABIAAAtIABAAQAEgEAFgDQAEgCAFAAQAMAAAJAKQAIAJAAAPQAAAQgJAKQgKAKgNAAIgKgBIgKgFIgFAIgAgEgHQgEABgDAEIAAAmIACAEIADAEIAFADQABABAEAAQAJAAAFgIQAFgIAAgOIgBgKQgBgGgDgDIgGgGQgEgCgFAAQgEAAgDACg");
	this.shape_38.setTransform(817.6,88.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAMAhQgDgCgBgFIgBAAQgEAFgEACQgFADgHAAQgIAAgFgFQgFgFAAgHIABgHQABgDADgDIAEgDIAFgDIANgDIAMgFIAAgHIgBgDIgBgFIgEgEQgCgDgEAAQgEAAgCACIgEACIABAEIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgCACgEAAQgDAAgCgCQgBgDAAgCQAAgEACgCQACgEADgCIAIgDIAIgBIAKABQAEABADACQAEACACAFQABAEAAAHIAAAQIAAAQIABAFIADADIADABIAFAAIAAAEIgGACIgGABQgFAAgDgDgAgCAAIgIAEIgFAGQgCADAAAFQAAAFADADQADADAEAAQAFgBADgCIAGgGIABgXg");
	this.shape_39.setTransform(810.7,90.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgYAiIAAgEIADgBIADAAIADgCIABgEIAAgpIgBgDQgBgBAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgDgBIgEgBIAAgEIAWgCIABABIAAAKIABAAQADgGAFgCQAFgEAFAAQAEAAADAEQACACAAAFQAAADgBADQgCACgEAAQgEAAgBgCQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAIABgEIAAgCQgDAAgEACQgFADgCAFIAAAnIABADIACACIAFABIAEABIAAAEg");
	this.shape_40.setTransform(804.3,90.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgLAhQgHgDgDgFQgEgFgCgHQgCgGAAgHQAAgGACgGQACgHAEgFQAEgFAGgDQAGgDAGAAQAHAAAGADQAFACADAEQADAEABAFQACAFAAAGIAAAFIgsAAQAAAGACAFQABAFADAFQADADAEADQADACAGAAQAGAAAEgDQAFgDAEgHIAFADQgEAIgIAFQgGAFgKAAQgHAAgGgDgAAPgHIgBgIIgCgHQgCgDgCgCQgDgCgFAAQgFAAgFAGQgFAGgBAKIAfAAg");
	this.shape_41.setTransform(798,90.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAFAiIAAgEIADgBIADAAIADgCIABgEIAAghQAAgIgDgDQgEgFgFAAIgFABIgGAEIgDACIgCADIAAAnIABADIADACIADABIADABIAAAEIghAAIAAgEIADgBIADAAIADgCIABgEIAAgpIgBgEIgDgDIgDgBIgEgBIAAgEIAXgCIABABIAAAKIAAAAIAEgEIAFgEIAFgDIAIgBQAJABAFAFQAFAGAAALIAAAiIABADQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAIADABIAEABIAAAEg");
	this.shape_42.setTransform(790.4,90.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgLAhQgHgDgDgFQgEgFgCgHQgCgGAAgHQAAgGACgGQACgHAEgFQAEgFAGgDQAGgDAGAAQAHAAAFADQAFACAEAEQADAEABAFQACAFAAAGIAAAFIgrAAQAAAGABAFQABAFADAFQACADAFADQADACAGAAQAGAAAEgDQAFgDAEgHIAFADQgFAIgGAFQgIAFgJAAQgHAAgGgDgAAOgHIAAgIIgCgHQgBgDgEgCQgCgCgEAAQgGAAgGAGQgEAGAAAKIAdAAg");
	this.shape_43.setTransform(783,90.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgCAiIgLgdIgMgaQgBgDgDgCQgDgCgEgBIAAgEIAgAAIAAAFIgGAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAABIABACIAIAUIAHASIAGgOIAIgTIABgDIABgDIgBgDIgDgBIgDgBIgDgBIAAgEIAaAAIAAAEIgFACQgDACgCAFIgJASIgJAUIgCAIIgDAIg");
	this.shape_44.setTransform(776.1,90.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLAhQgHgDgDgFQgEgFgCgHQgCgGAAgHQAAgGACgGQACgHAEgFQAEgFAGgDQAGgDAGAAQAHAAAGADQAFACADAEQADAEABAFQACAFAAAGIAAAFIgsAAQABAGABAFQABAFADAFQACADAFADQADACAGAAQAGAAAFgDQAEgDAEgHIAFADQgEAIgIAFQgHAFgJAAQgHAAgGgDgAAPgHIgBgIIgCgHQgBgDgDgCQgDgCgFAAQgFAAgFAGQgFAGgBAKIAfAAg");
	this.shape_45.setTransform(766,90.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAGA1IAAgEIADgBIADAAIADgCIABgFIAAgiQAAgHgEgDQgDgEgEAAIgGABIgGADIgDADIgCACIAAAnIABAEIACACIADABIAEABIAAAEIghAAIAAgEIADgBIAEAAIACgCIABgFIAAhNIgBgEIgCgEIgFgCIgFAAIAAgEIAZgCIABABIAAAvIAEgDIAFgFIAFgCIAIgBQAJAAAFAFQAFAGAAAKIAAAjIAAAEIAEACIACABIAEABIAAAEg");
	this.shape_46.setTransform(758.3,88.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgGAoQgEgEAAgIIAAgsIgMAAIAAgHIANAAIAAgVIALAAIAAAVIATAAIAAAHIgTAAIAAAkIABAHIABAFIADADIAGABIAFAAIAFgBIAAAFIgJADQgEACgFAAQgIAAgDgFg");
	this.shape_47.setTransform(751.9,89.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgMAhQgGgCgEgFQgFgEgCgHQgDgGAAgJQAAgOAJgLQAJgKAOAAQAPAAAJAKQAJAKAAAPQAAAGgCAHQgDAHgEAFQgEAFgHADQgGADgHAAQgGAAgGgDgAgIgbQgEADgCAEQgCAFgBAFIgBAKIABALQABAGADAEQACAFAEACQADADAEAAQAJAAAFgJQAFgIAAgOIgBgKQgBgGgCgEQgDgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_48.setTransform(742.5,90.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgGAoQgEgEAAgIIAAgsIgMAAIAAgHIANAAIAAgVIALAAIAAAVIATAAIAAAHIgTAAIAAAkIABAHIABAFIADADIAGABIAFAAIAFgBIAAAFIgJADQgEACgFAAQgIAAgDgFg");
	this.shape_49.setTransform(736.3,89.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAFAiIAAgEIADgBIADAAIADgCIABgEIAAghQAAgIgDgDQgEgFgFAAIgFABIgGAEIgDACIgCADIAAAnIABADIADACIADABIADABIAAAEIghAAIAAgEIADgBIADAAIADgCIABgEIAAgpIgBgEIgDgDIgDgBIgEgBIAAgEIAXgCIABABIAAAKIAAAAIAEgEIAFgEIAFgDIAIgBQAJABAFAFQAFAGAAALIAAAiIABADQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAIADABIAEABIAAAEg");
	this.shape_50.setTransform(726.5,90.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgMAhQgGgCgEgFQgFgEgCgHQgDgGAAgJQAAgOAJgLQAJgKAOAAQAPAAAJAKQAJAKAAAPQAAAGgCAHQgDAHgEAFQgEAFgHADQgGADgHAAQgGAAgGgDgAgIgbQgEADgCAEQgCAFgBAFIgBAKIABALQABAGADAEQACAFAEACQADADAEAAQAJAAAFgJQAFgIAAgOIgBgKQgBgGgCgEQgDgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_51.setTransform(718.6,90.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgOA0IAAgFIADAAIADgBIADgCIABgEIAAgoIgBgEIgDgDIgEgCIgEAAIAAgFIAWgBIABAAIAAA2IABAEIADADIADABIADAAIAAAFgAgFgjQgDgDAAgDQAAgEADgDQACgDADAAQAEAAACADQADACAAAEQAAAEgDADQgCADgEAAQgDAAgCgDg");
	this.shape_52.setTransform(712.7,88.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgGAoQgEgEAAgIIAAgsIgMAAIAAgHIANAAIAAgVIALAAIAAAVIATAAIAAAHIgTAAIAAAkIABAHIABAFIADADIAGABIAFAAIAFgBIAAAFIgJADQgEACgFAAQgIAAgDgFg");
	this.shape_53.setTransform(708.3,89.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgOA0IAAgFIADAAIADgBIADgCIABgEIAAgoIgBgEIgDgDIgEgCIgEAAIAAgFIAWgBIABAAIAAA2IABAEIADADIADABIADAAIAAAFgAgFgjQgDgDAAgDQAAgEADgDQACgDADAAQAEAAACADQADACAAAEQAAAEgDADQgCADgEAAQgDAAgCgDg");
	this.shape_54.setTransform(703.8,88.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgSAzQgGgCgDgFQgEgFgDgGQgCgHAAgIQAAgHACgHQADgFAEgFQAFgFAFgDQAGgCAHAAIAIABIAIADIAAgXIgBgGIgDgDIgFgCIgGgBIAAgEIAbgCIABABIAABaIABAEQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAIAEABIAFABIAAAEIgYACIgBgCIAAgGIgBAAQgDAEgFACQgFADgFAAQgGAAgFgDgAgKgJQgEACgDAEQgCADgBAGQgCAGAAAHQAAAGACAEQAAAFADAEQADAEADADQAEACAFAAQAFgBADgCIAGgFIAAgnIgCgEIgDgDIgFgDIgEgBQgFAAgDACg");
	this.shape_55.setTransform(698,88.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgSAzQgGgCgEgFQgDgFgDgGQgCgHAAgIQAAgHACgHQADgFAEgFQAEgFAGgDQAHgCAGAAIAIABIAIADIAAgXIgBgGIgDgDIgEgCIgHgBIAAgEIAbgCIABABIAABaIABAEQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAIAEABIAFABIAAAEIgYACIgBgCIAAgGIgBAAQgDAEgFACQgEADgGAAQgGAAgFgDgAgKgJQgEACgDAEQgCADgBAGQgCAGAAAHQAAAGACAEQAAAFADAEQADAEADADQAEACAFAAQAFgBADgCIAGgFIAAgnIgCgEIgDgDIgFgDIgEgBQgFAAgDACg");
	this.shape_56.setTransform(690,88.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAMAhQgDgCgBgFIgBAAQgEAFgEACQgFADgHAAQgIAAgFgFQgFgFAAgHIABgHQABgDADgDIAEgDIAFgDIANgDIAMgFIAAgHIgBgDIgBgFIgEgEQgCgDgEAAQgEAAgCACIgEACIABAEIAAAFQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgCACgEAAQgDAAgCgCQgBgDAAgCQAAgEACgCQACgEADgCIAIgDIAIgBIAKABQAEABADACQAEACACAFQABAEAAAHIAAAQIAAAQIABAFIADADIADABIAFAAIAAAEIgGACIgGABQgFAAgDgDgAgCAAIgIAEIgFAGQgCADAAAFQAAAFADADQADADAEAAQAFgBADgCIAGgGIABgXg");
	this.shape_57.setTransform(682.5,90.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgOA1IAAgFIAEAAIADgBIADgCIAAgDIAAhNIgBgFIgCgEIgFgBIgFgBIAAgFIAYgBIABABIAABbIABAFIADACIADABIADAAIAAAFg");
	this.shape_58.setTransform(882.8,58);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAMAhQgDgDgBgEIgBAAQgEAEgEADQgFACgHABQgIgBgFgEQgFgFAAgHIABgHQABgDADgCIAEgEIAFgDIANgDIAMgFIAAgHIgBgDIgBgFIgEgEQgCgCgEAAQgEAAgCABIgEACIABAEIAAAFQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQgCACgEAAQgDgBgCgCQgBgCAAgDQAAgEACgDQACgCADgCIAIgEIAIgCIAKABQAEABADADQAEADACAEQABAEAAAHIAAARIAAAPIABAFIADACIADABIAFAAIAAAFIgGACIgGABQgFgBgDgCgAgCAAIgIAEIgFAFQgCAEAAAEQAAAGADADQADACAEAAQAFABADgDIAGgGIABgWg");
	this.shape_59.setTransform(877.7,59.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAFAiIAAgEIADAAIADgBIADgCIABgEIAAgiQAAgHgDgEQgEgDgFAAIgFABIgGACIgDADIgCAEIAAAlIABAEIADADIADABIADAAIAAAEIghAAIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgDIgDgBIgEgBIAAgEIAXgBIABAAIAAAKIAAAAIAEgEIAFgEIAFgCIAIgBQAJAAAFAFQAFAGAAAKIAAAiIABAEQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAABIADABIAEAAIAAAEg");
	this.shape_60.setTransform(869.9,59.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgMAhQgGgCgEgFQgFgEgCgHQgDgGAAgJQAAgOAJgLQAJgKAOAAQAPAAAJAKQAJAKAAAPQAAAGgCAHQgDAHgEAFQgEAFgHADQgGADgHAAQgGAAgGgDgAgIgbQgEADgCAEQgCAFgBAFIgBAKIABALQABAGADAEQACAFAEACQADADAEAAQAJAAAFgJQAFgIAAgOIgBgKQgBgGgCgEQgDgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_61.setTransform(862,59.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgOA0IAAgFIADAAIADgBIADgCIABgEIAAgoIgBgEIgDgDIgEgCIgEAAIAAgFIAWgBIABAAIAAA2IABAEIADADIADABIADAAIAAAFgAgFgjQgDgDAAgDQAAgEADgDQACgDADAAQAEAAACADQADACAAAEQAAAEgDADQgCADgEAAQgDAAgCgDg");
	this.shape_62.setTransform(856.1,58.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgGAoQgEgEAAgIIAAgsIgMAAIAAgHIANAAIAAgVIALAAIAAAVIATAAIAAAHIgTAAIAAAkIABAHIABAFIADADIAGABIAFAAIAFgBIAAAFIgJADQgEACgFAAQgIAAgDgFg");
	this.shape_63.setTransform(851.7,59);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgMAhQgGgCgEgFQgFgEgCgHQgDgGAAgJQAAgOAJgLQAJgKAOAAQAPAAAJAKQAJAKAAAPQAAAGgCAHQgDAHgEAFQgEAFgHADQgGADgHAAQgGAAgGgDgAgIgbQgEADgCAEQgCAFgBAFIgBAKIABALQABAGADAEQACAFAEACQADADAEAAQAJAAAFgJQAFgIAAgOIgBgKQgBgGgCgEQgDgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_64.setTransform(845.6,59.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAaAiIAAgEIACAAIAEgBIADgCIAAgEIAAgiQAAgHgDgEQgEgDgEAAIgGABIgGACIgDADIgCAEIAAAlIABAEIACADIAEABIADAAIAAAEIggAAIAAgEIAEAAIACgBIADgCIABgEIAAgiQAAgHgEgEQgDgDgFAAIgGABIgFACIgEAEIgCADIAAAlIABAEIAEADIACABIADAAIAAAEIggAAIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgCIgDgCIgEgBIAAgEIAWgBIABAAIAAAKIABAAIAEgEIAEgEIAHgCIAIgBQAGgBAEAEQAEAEADAEIADgEIAGgEIAFgCIAIgBQAJgBAFAGQAFAFAAAMIAAAhIABAEQAAABAAAAQABABAAAAQAAAAABAAQAAAAABABIADABIADAAIAAAEg");
	this.shape_65.setTransform(835.7,59.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgLAhQgGgDgEgFQgEgFgCgHQgCgGAAgHQAAgGACgGQACgHAEgFQAEgFAGgDQAGgDAGAAQAHAAAGADQAFACADAEQADAEABAFQACAFAAAGIAAAFIgsAAQABAGABAFQABAFADAFQACADAFADQADACAGAAQAGAAAFgDQAEgDAEgHIAFADQgEAIgIAFQgHAFgJAAQgHAAgGgDgAAPgHIgBgIIgCgHQgBgDgDgCQgDgCgFAAQgFAAgFAGQgFAGgBAKIAfAAg");
	this.shape_66.setTransform(826.3,59.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgLAQIAHgEIADgEIADgFIACgGIgEAAQgDAAgCgCQgDgDAAgEQAAgDACgCQACgDAEAAQAGAAACAEQADAEABAHQAAAFgDADQgCAFgDADIgFAGIgGADg");
	this.shape_67.setTransform(817.5,63.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgYAtQgIgEAAgIQAAgIAGgDQAFgFAJAAIAAgBIgFgBIgDgCIgDgEIgBgFQAAgDACgCQADgDAFgDIAAgBQgHgDgDgFQgEgFAAgGQAAgJAHgHQAHgGAMAAIAFABIAGACIAXAAIAAAGIgQAAIAAABQADADABADIABAHQAAAIgHAHQgHAGgJAAIgIAAIgDACQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIADACIAFAAIAFABIAHAAIAIAAIAGACQADABADADQADACABADQACADAAAFQAAAFgCAEQgCAFgFADQgEAEgHABQgGACgIAAQgQAAgHgFgAgRAYQgDADAAAFIABAEQABADADACQACACAEAAIAJABQAKAAAGgDQAGgEAAgIQAAgEgCgCQgCgDgEgBIgHAAIgNgBQgIACgDAEgAgIgrQgDABgBADIgCAFIgBAHQAAAHAEAFQADAGAFgBQAFABADgGQADgEAAgIQAAgHgDgFQgDgFgFAAQgDAAgCABg");
	this.shape_68.setTransform(812.1,61.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAFAiIAAgEIADAAIADgBIADgCIABgEIAAgiQAAgHgDgEQgEgDgFAAIgFABIgGACIgDADIgCAEIAAAlIABAEIADADIADABIADAAIAAAEIghAAIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgDIgDgBIgEgBIAAgEIAXgBIABAAIAAAKIAAAAIAEgEIAFgEIAFgCIAIgBQAJAAAFAFQAFAGAAAKIAAAiIABAEQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAABIADABIAEAAIAAAEg");
	this.shape_69.setTransform(804.5,59.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgOA0IAAgFIADAAIADgBIADgCIABgEIAAgoIgBgEIgDgDIgEgCIgEAAIAAgFIAWgBIABAAIAAA2IABAEIADADIADABIADAAIAAAFgAgFgjQgDgDAAgDQAAgEADgDQACgDADAAQAEAAACADQADACAAAEQAAAEgDADQgCADgEAAQgDAAgCgDg");
	this.shape_70.setTransform(798.2,58.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgGAoQgEgEAAgIIAAgsIgMAAIAAgHIANAAIAAgVIALAAIAAAVIATAAIAAAHIgTAAIAAAkIABAHIABAFIADADIAGABIAFAAIAFgBIAAAFIgJADQgEACgFAAQgIAAgDgFg");
	this.shape_71.setTransform(793.8,59);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgOA0IAAgFIADAAIADgBIADgCIABgEIAAgoIgBgEIgDgDIgEgCIgEAAIAAgFIAWgBIABAAIAAA2IABAEIADADIADABIADAAIAAAFgAgFgjQgDgDAAgDQAAgEADgDQACgDADAAQAEAAACADQADACAAAEQAAAEgDADQgCADgEAAQgDAAgCgDg");
	this.shape_72.setTransform(789.3,58.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgUAaQgIgKAAgQQAAgGACgGQACgHAEgFQAEgFAGgDQAHgDAGAAQAKAAAGAFQAHAFgBAIQAAAEgCACQgBADgDAAQgEAAgDgCQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIABgGIABgFQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBgBIgFAAIgGABQgCABgEAEQgCAEgCAFQgBAGAAAIQAAAMAFAIQAGAIAIAAQAHAAAEgDQAFgDAEgHIAEADQgEAIgIAFQgHAFgIAAQgOAAgIgKg");
	this.shape_73.setTransform(784.4,59.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AADAiIAAgFIAGAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAIgBgCIgBgDIgFgHIgGgKIgGAIIgHAJIgBACIAAACQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAHABIAAAFIgaAAIAAgEIAIgEIAFgFIAGgHIAKgNIgJgLIgIgMIgEgEQgDgCgEAAIAAgFIAdAAIAAAFIgDAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAIAAACIABABIAEAIIAGAKIAGgIIAFgIIABgBIAAgCQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgEgBIAAgFIAYAAIAAAFQgEABgDACIgGAEIgFAHIgJAMIALANIAHALIAFAFQACACAFAAIAAAFg");
	this.shape_74.setTransform(777.5,59.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgLAhQgGgDgEgFQgEgFgCgHQgCgGAAgHQAAgGACgGQACgHAEgFQAEgFAGgDQAFgDAHAAQAHAAAGADQAEACAEAEQADAEABAFQACAFAAAGIAAAFIgsAAQAAAGACAFQABAFADAFQADADAEADQADACAGAAQAGAAAEgDQAFgDAEgHIAFADQgEAIgIAFQgGAFgKAAQgHAAgGgDgAAPgHIgBgIIgCgHQgCgDgDgCQgCgCgFAAQgGAAgEAGQgFAGgBAKIAfAAg");
	this.shape_75.setTransform(770.7,59.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgLAQIAHgEIADgEIADgFIACgGIgDAAQgEAAgCgCQgDgDAAgEQAAgDACgCQACgDAEAAQAGAAACAEQAEAEAAAHQgBAFgCADQgCAFgDADIgFAGIgGADg");
	this.shape_76.setTransform(761.9,63.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgfAuQgDgCAAgDQAAgEACgCQACgCADAAIADAAIADACIACAEIACADQAEgCAEgIQAFgIACgGIgMgcIgLgbQgBgDgDgBQgDgCgDgBIAAgEIAfAAIAAAFIgFABQgBAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABIAAABIABACIAIATIAHAUIAHgOIAHgTIABgEIABgDQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgGgDIAAgEIAZAAIAAAEIgFADQgEACgBADIgPAjIgJAWIgHAOQgDAGgEADIgFAEIgGABQgFAAgDgDg");
	this.shape_77.setTransform(756.7,61.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAGA1IAAgFIADAAIADgBIADgCIABgDIAAgjQAAgHgDgDQgEgEgEAAIgGABIgGADIgEADIgBACIAAAnIABAEIACACIAEABIADAAIAAAFIghAAIAAgFIAEAAIACgBIADgCIABgDIAAhOIgBgFIgDgDIgEgBIgFgBIAAgFIAZgBIABABIAAAvIAEgEIAFgDIAFgDIAIgBQAJAAAFAGQAFAFAAAKIAAAjIABAEIADACIACABIAEAAIAAAFg");
	this.shape_78.setTransform(749.1,58);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgGAoQgEgEAAgIIAAgsIgMAAIAAgHIANAAIAAgVIALAAIAAAVIATAAIAAAHIgTAAIAAAkIABAHIABAFIADADIAGABIAFAAIAFgBIAAAFIgJADQgEACgFAAQgIAAgDgFg");
	this.shape_79.setTransform(742.7,59);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgYAiIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgDgBIgEgBIAAgEIAWgBIABAAIAAAKIABAAQADgGAFgCQAFgDAFAAQAEAAADADQACACAAAFQAAAEgBACQgCACgEABQgEAAgBgCQgBgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIABgCIAAgDQgDAAgEADQgFADgCAEIAAAmIABAEIACADIAFABIAEAAIAAAEg");
	this.shape_80.setTransform(737.6,59.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgMAhQgGgCgEgFQgFgEgCgHQgDgGAAgJQAAgOAJgLQAJgKAOAAQAPAAAJAKQAJAKAAAPQAAAGgCAHQgDAHgEAFQgEAFgHADQgGADgHAAQgGAAgGgDgAgIgbQgEADgCAEQgCAFgBAFIgBAKIABALQABAGADAEQACAFAEACQADADAEAAQAJAAAFgJQAFgIAAgOIgBgKQgBgGgCgEQgDgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_81.setTransform(730.9,59.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AASAiIgSgwIgSAwIgFAAIgKgeIgIgZQgCgEgDgBIgGgDIAAgEIAeAAIAAAFIgFAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAABIAAACIAGAQIAGAWIARgvIAHAAIARAuIAGgRIAFgPIABgEIAAgCQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgCgCIgDgBIgDAAIAAgEIAaAAIAAAEQgDAAgEADQgCACgCAEIgHATIgHAUIgCAHIgCAIg");
	this.shape_82.setTransform(722.1,60);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAKAxIAAgFIAIgBQABAAABAAQABgBAAAAQABAAAAgBQAAAAAAAAIAAgCIgBgCIgHgVIghAAIgEAIIgCAHIgBAEIgBADQABADAEACQAEABAGAAIAAAFIglAAIAAgFIAFAAIAEgCIAEgEIADgGIAQgoIAQgoIAEAAIAhBTIACAEIAEADIAEACIAEAAIAAAFgAALAKIgNglIgPAlIAcAAg");
	this.shape_83.setTransform(708.8,58.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAFAPQgDgEAAgGQAAgFACgCIAFgHIAGgFIAFgEIADAFIgGADIgEADQgCADAAACQgCACAAADIADAAQAFAAACACQACABAAAEQAAADgCADQgCACgEAAQgFABgDgEgAgTAPQgDgEAAgGQAAgFACgCQACgEADgDIAGgFIAFgEIACAFIgFADIgEADIgDAFIgBAFIADAAQAEAAADACQACABAAAEQAAADgCADQgCACgEAAQgGABgCgEg");
	this.shape_84.setTransform(701.2,54.7);

	this.text_1 = new cjs.Text("“A worthy, exciting, emotional\naddition to the venerable monkey\nmovie marathon.”\nKim Newman, Empir", "14px 'Georgia'", "#FFFFFF");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 30;
	this.text_1.lineWidth = 238;
	this.text_1.parent = this;
	this.text_1.setTransform(885,50.5);
	this.text_1._off = true;

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgYAiIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgDQgBgBAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgDgBIgEgBIAAgEIAWgBIABAAIAAAKIABAAQADgGAFgCQAFgDAFAAQAEAAADADQACACAAAFQAAADgBADQgCADgEAAQgEAAgBgDQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIABgCIAAgDQgDAAgEADQgFADgCAEIAAAnIABADIACADIAFABIAEAAIAAAEg");
	this.shape_85.setTransform(989.3,406.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAaAiIAAgEIADAAIACgBIAEgCIAAgEIAAgiQAAgHgDgDQgEgEgEgBIgGACIgGADIgDACIgCAEIAAAmIABADIADADIACABIAEAAIAAAEIggAAIAAgEIADAAIADgBIADgCIABgEIAAgiQAAgHgDgDQgEgEgEgBIgHACIgFADIgEADIgBADIAAAlIAAAEIADADIADABIAEAAIAAAEIghAAIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgCIgDgCIgEgBIAAgEIAXgBIABAAIAAAKIAAAAIAEgEIAFgEIAGgCIAHgBQAHAAAEADQAEAEACAFIAFgFIAEgEIAGgCIAIgBQAJgBAFAGQAFAFAAAMIAAAiIABADQAAABAAAAQABAAAAABQAAAAABAAQAAAAAAABIAEABIADAAIAAAEg");
	this.shape_86.setTransform(968.2,406.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgoAwIAAgEIAFgBIAFgBIADgDIAAgDIAAhFIAAgEIgDgEIgFgBIgFgBIAAgFIBKAAIAAAYIgFAAQgCgFgEgGQgFgGgEgBIgFAAIgHAAIgOAAIAAAmIALAAIAHgBQACgBACgCIACgFIACgGIAFAAIAAAlIgFAAIgCgHIgCgGQgCgCgDgBIgGgBIgLAAIAAAdIABAHQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAFACIAIAAIAGAAIAGAAIAFgCIAEgCQADgDAEgGIAEgKIAFAAIgCAcg");
	this.shape_87.setTransform(957.6,405.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgKAQIAFgEIAFgEIACgFIACgGIgDAAQgEABgDgDQgCgCAAgFQAAgDACgCQACgDAEAAQAGAAADAEQACAEAAAHQABAFgDAEQgCAEgDADIgFAFIgGAFg");
	this.shape_88.setTransform(947.6,410.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAFAiIAAgEIADAAIADgBIADgCIABgEIAAgiQAAgHgDgDQgEgEgFgBIgFACIgGADIgDACIgCAEIAAAmIABADIADADIADABIADAAIAAAEIghAAIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgDIgDgBIgEgBIAAgEIAXgBIABAAIAAAKIAAAAIAEgEIAFgEIAFgCIAIgBQAJAAAFAFQAFAHAAAJIAAAjIABADQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAABIADABIAEAAIAAAEg");
	this.shape_89.setTransform(941.7,406.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAMAhQgDgDgBgEIgBAAQgEAEgEADQgFACgHABQgIgBgFgEQgFgEAAgIIABgHQABgDADgCIAEgEIAFgDIANgDIAMgFIAAgHIgBgDIgBgFIgEgEQgCgCgEAAQgEAAgCABIgEACIABAEIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgCADgEAAQgDAAgCgDQgBgCAAgDQAAgDACgEQACgCADgCIAIgEIAIgCIAKABQAEACADACQAEACACAFQABAEAAAHIAAAQIAAAQIABAFIADADIADAAIAFAAIAAAFIgGACIgGABQgFgBgDgCgAgCAAIgIAEIgFAFQgCAEAAAFQAAAFADADQADACAEAAQAFABADgDIAGgGIABgWg");
	this.shape_90.setTransform(934.2,406.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAaAiIAAgEIACAAIAEgBIADgCIAAgEIAAgiQAAgHgDgDQgDgEgFgBIgHACIgFADIgDACIgCAEIAAAmIABADIACADIAEABIADAAIAAAEIggAAIAAgEIAEAAIACgBIADgCIABgEIAAgiQAAgHgEgDQgDgEgFgBIgGACIgFADIgEADIgCADIAAAlIABAEIAEADIACABIADAAIAAAEIggAAIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgCIgDgCIgEgBIAAgEIAWgBIABAAIAAAKIABAAIAEgEIAEgEIAHgCIAIgBQAGAAAEADQAEAEADAFIADgFIAGgEIAFgCIAIgBQAJgBAFAGQAFAFAAAMIAAAiIABADQAAABAAAAQABAAAAABQAAAAABAAQAAAAABABIADABIADAAIAAAEg");
	this.shape_91.setTransform(924.4,406.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AASAiIgSgwIgRAwIgGAAIgKgeIgJgZQgBgEgDgBIgGgDIAAgEIAeAAIAAAFIgFAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAABIABACIAEAQIAHAWIARgvIAHAAIARAuIAGgRIAFgQIABgDIAAgCQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgCgCIgEgBIgCAAIAAgEIAaAAIAAAEQgDABgEACQgDACgBAEIgHATIgHAUIgCAHIgCAIg");
	this.shape_92.setTransform(913.1,406.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAfAxIg6hPIAAAyIABANQABAEACACIAHADIAGABIAAAFIgnAAIAAgFIAGgBIAFgCQADgCABgEIAAgNIAAgwIgBgFQgBgEgCgCQgCgCgEgBIgHgCIAAgFIAcAAIA1BJIAAgtIgBgNQgBgEgCgCIgGgDIgHgBIAAgFIAnAAIAAAFIgFABIgGACQgDACAAAFIgBAMIAABGg");
	this.shape_93.setTransform(895.8,405.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAaAiIAAgEIACAAIADgBIAEgCIAAgEIAAgiQAAgHgDgDQgDgEgFgBIgGACIgGADIgDACIgCAEIAAAmIABADIACADIADABIAEAAIAAAEIggAAIAAgEIADAAIADgBIADgCIABgEIAAgiQAAgHgDgDQgDgEgFgBIgHACIgFADIgEADIgCADIAAAlIABAEIADADIADABIADAAIAAAEIggAAIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgCIgDgCIgEgBIAAgEIAXgBIAAAAIAAAKIABAAIAEgEIAEgEIAHgCIAIgBQAGAAAEADQAEAEADAFIADgFIAGgEIAFgCIAIgBQAJgBAFAGQAFAFAAAMIAAAiIABADQAAABAAAAQABAAAAABQAAAAABAAQAAAAABABIADABIADAAIAAAEg");
	this.shape_94.setTransform(881,406.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAUAwQgIgMgKgLIgTgYIgCAAIAAAiIABAEIADACIAEACIAFABIAAAEIgoAAIAAgEIAFgBIAEAAIADgDIABgEIAAhFIgBgEIgDgEIgEgBIgFgBIAAgFIAoAAIAAAFIgFABIgEABIgDACIgBAFIAAAiIACAAIAMgMIAJgLIAIgKQADgDAAgDQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIgCgBIgEgBIgCAAIAAgFIAkAAIAAAFIgBAAIgBAAIgCABIgDAAIgEACIgFADIgOAQIgPAQIAQATIAPASIAGAGIAFADIAEACIAFABIAAAEg");
	this.shape_95.setTransform(866.4,405.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AADAOIAFgDIAEgEIADgDIABgGIgDAAQgEAAgDgCQgCgCAAgEQAAgDACgCQACgDAEAAQAGABACAEQADADAAAGQAAAEgCAEIgFAGIgGAFIgFAEgAgWAOIAGgDIAEgEIACgDQACgDAAgDIgDAAQgFAAgCgCQgDgCAAgEQAAgDADgCQACgDAEAAQAFABADAEQACADAAAGQAAAEgCAEQgBADgDADIgGAFIgFAEg");
	this.shape_96.setTransform(989.2,371.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgDACgDQADgCADAAQAEAAADACQADADAAADQAAAEgDACQgDADgEAAQgDAAgDgDg");
	this.shape_97.setTransform(984.5,379.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAFAjIAAgFIADAAIADgBIADgCIABgEIAAgiQAAgHgDgEQgEgDgFAAIgFABIgGACIgDAEIgCADIAAAlIABAEIADADIADABIADAAIAAAFIghAAIAAgFIADAAIADgBIADgCIABgEIAAgoIgBgFIgDgDIgDgBIgEAAIAAgFIAXgCIABABIAAAJIAAAAIAEgDIAFgEIAFgDIAIAAQAJgBAFAHQAFAGAAAJIAAAiIABAFQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAABIADABIAEAAIAAAFg");
	this.shape_98.setTransform(978.5,376.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAFA1IAAgEIAEgBIADgBIADgCIABgDIAAgjQAAgHgEgDQgDgEgFAAIgFABIgFADIgFADIgBACIAAAnIABADIADADIADABIADABIAAAEIghAAIAAgEIADgBIADgBIADgCIABgDIAAhOIgBgEIgDgEIgEgCIgFAAIAAgFIAZgBIABABIAAAvIAEgEIAFgDIAFgDIAIgBQAJAAAFAFQAFAGAAAKIAAAjIABAEIACACIAEABIADABIAAAEg");
	this.shape_99.setTransform(962.7,374.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAMAhQgDgDgBgFIgBAAQgEAFgEADQgFADgHgBQgIABgFgFQgFgFAAgHIABgHQABgDADgCIAEgEIAFgDIANgDIAMgFIAAgHIgBgEIgBgEIgEgFQgCgBgEAAQgEgBgCACIgEACIABAEIAAAFQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQgCABgEAAQgDAAgCgCQgBgDAAgDQAAgCACgEQACgDADgBIAIgEIAIgCIAKABQAEACADACQAEADACAEQABAEAAAHIAAARIAAAQIABAEIADACIADABIAFAAIAAAFIgGABIgGABQgFABgDgDgAgCAAIgIAEIgFAFQgCAEAAAEQAAAGADACQADADAEAAQAFAAADgCIAGgFIABgXg");
	this.shape_100.setTransform(950.6,376.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgYAjIAAgFIADAAIADgBIADgCIABgEIAAgoIgBgFQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgDgBIgEAAIAAgFIAWgCIABABIAAAJIABAAQADgFAFgDQAFgCAFAAQAEAAADACQACADAAAFQAAAEgBACQgCACgEABQgEgBgBgBQgBgBAAAAQgBgBAAgBQAAAAgBgBQAAAAAAgBIABgDIAAgCQgDAAgEACQgFADgCAFIAAAmIABAEIACADIAFABIAEAAIAAAFg");
	this.shape_101.setTransform(944.2,376.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAMAhQgDgDgBgFIgBAAQgEAFgEADQgFADgHgBQgIABgFgFQgFgFAAgHIABgHQABgDADgCIAEgEIAFgDIANgDIAMgFIAAgHIgBgEIgBgEIgEgFQgCgBgEAAQgEgBgCACIgEACIABAEIAAAFQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQgCABgEAAQgDAAgCgCQgBgDAAgDQAAgCACgEQACgDADgBIAIgEIAIgCIAKABQAEACADACQAEADACAEQABAEAAAHIAAARIAAAQIABAEIADACIADABIAFAAIAAAFIgGABIgGABQgFABgDgDgAgCAAIgIAEIgFAFQgCAEAAAEQAAAGADACQADADAEAAQAFAAADgCIAGgFIABgXg");
	this.shape_102.setTransform(937.8,376.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAZAjIAAgFIAEAAIACgBIADgCIABgEIAAgiQAAgHgDgEQgEgDgEAAIgGABIgGACIgDAEIgCADIAAAlIAAAFIAEACIACABIADAAIAAAFIgeAAIAAgFIACAAIADgBIADgCIABgEIAAgiQAAgHgDgEQgEgDgEAAIgHABIgFACIgEAEIgBADIAAAlIABAEIACADIADABIAEAAIAAAFIghAAIAAgFIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgCIgDgCIgEAAIAAgFIAXgCIABABIAAAKIAAAAIAEgEIAFgEIAFgDIAIAAQAHgBAEAEQAEAEACAEIAFgEIAEgEIAGgDIAJAAQAIAAAFAFQAFAFAAAMIAAAhIABAFQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAABIAEABIADAAIAAAFg");
	this.shape_103.setTransform(928,376.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgLAhQgGgDgEgFQgEgFgCgHQgCgGAAgHQAAgGACgGQACgHAEgFQAEgFAGgDQAFgDAHAAQAHAAAGADQAEACAEAEQADAEABAFQACAFAAAGIAAAFIgrAAQAAAGABAFQABAFADAFQADADAEADQADACAGAAQAGAAAEgDQAFgDAEgHIAFADQgEAIgIAFQgGAFgKAAQgHAAgGgDgAAOgHIAAgIIgCgHQgCgDgDgCQgCgCgFAAQgGAAgFAGQgEAGAAAKIAdAAg");
	this.shape_104.setTransform(915.2,376.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgCAiIgLgdIgMgbQgBgDgDgBQgDgCgDAAIAAgFIAfAAIAAAFIgGABQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIABABIAAACIAIATIAIAUIAGgPIAIgSIACgEIAAgEIgBgBIgDgCIgDgBIgCAAIAAgFIAaAAIAAAFIgGACQgDABgCAEIgIAUIgJAUIgEAHIgCAIg");
	this.shape_105.setTransform(904.2,376.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAZAjIAAgFIAEAAIACgBIADgCIABgEIAAgiQAAgHgDgEQgEgDgEAAIgGABIgGACIgDAEIgCADIAAAlIAAAFIAEACIACABIADAAIAAAFIgeAAIAAgFIACAAIADgBIADgCIABgEIAAgiQAAgHgDgEQgEgDgEAAIgGABIgGACIgEAEIgBADIAAAlIABAEIACADIADABIAEAAIAAAFIghAAIAAgFIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgCIgDgCIgEAAIAAgFIAXgCIABABIAAAKIAAAAIAEgEIAFgEIAFgDIAIAAQAHgBAEAEQAEAEACAEIAFgEIAEgEIAHgDIAIAAQAIAAAFAFQAFAFAAAMIAAAhIABAFQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAABIAEABIADAAIAAAFg");
	this.shape_106.setTransform(887.1,376.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgfAvQgDgDAAgEQAAgDACgCQACgCADAAIADABIADACIACACIACADQAEgCAEgHQAFgIACgGIgMgcIgLgaQgBgEgDgBQgDgCgDAAIAAgFIAfAAIAAAFIgFABQgBAAgBAAQAAAAgBABQAAAAAAAAQAAAAAAAAIAAACIABACIAIAUIAHATIAHgPIAHgSIABgDIABgFQAAAAAAAAQAAgBgBAAQAAAAAAgBQgBAAgBgBIgGgBIAAgFIAZAAIAAAFIgFABQgEACgBAFIgPAiIgJAVIgHAQQgDAFgEADIgFAEIgGABQgFAAgDgCg");
	this.shape_107.setTransform(988.6,347.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgLAhQgHgDgDgFQgEgFgCgHQgCgGAAgHQAAgGACgGQACgHAEgFQAEgFAGgDQAGgDAGAAQAHAAAGADQAEACAEAEQADAEABAFQACAFAAAGIAAAFIgrAAQAAAGABAFQABAFADAFQACADAFADQADACAGAAQAGAAAEgDQAFgDAEgHIAFADQgFAIgGAFQgIAFgJAAQgHAAgGgDgAAOgHIAAgIIgCgHQgBgDgEgCQgCgCgEAAQgGAAgGAGQgEAGAAAKIAdAAg");
	this.shape_108.setTransform(981.9,346.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AASA1IgMgQIgLgRIgGAEIAAAQIAAAEIAEADIADABIADABIAAAEIghAAIAAgEIADgBIADAAIADgCIABgFIAAhNIgBgEIgDgEIgEgCIgFAAIAAgEIAZgCIABABIAABHIALgMIAKgKIABgCIABgBQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAIgGgBIAAgEIAdAAIAAAEIgKAEIgHAEIgEAEIgIAIIAMARIAKANQADAFADABIAHACIAAAEg");
	this.shape_109.setTransform(974.8,344.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAFAjIAAgFIADgBIADAAIADgCIABgEIAAghQAAgIgDgDQgEgFgFAAIgFABIgGAEIgDADIgCACIAAAnIABADIADACIADABIADABIAAAFIghAAIAAgFIADgBIADAAIADgCIABgEIAAgpIgBgEIgDgDIgDgBIgEAAIAAgFIAXgCIABABIAAAJIAAAAIAEgDIAFgEIAFgDIAIgBQAJAAAFAHQAFAFAAALIAAAiIABADQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAIADABIAEABIAAAFg");
	this.shape_110.setTransform(966.9,346.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAaAjIAAgFIACgBIAEAAIADgCIAAgEIAAgiQAAgHgDgDQgDgFgFAAIgHABIgFAEIgDADIgCACIAAAnIABADIACACIAEABIADABIAAAFIggAAIAAgFIAEgBIACAAIADgCIABgEIAAgiQAAgHgEgDQgDgFgFAAIgGABIgFAEIgEADIgCACIAAAmIABAEIAEACIACABIADABIAAAFIggAAIAAgFIADgBIADAAIADgCIABgEIAAgpIgBgEIgDgDIgDgBIgEAAIAAgFIAWgCIABABIAAAKIABAAIAEgEIAEgEIAHgDIAIgBQAGABAEADQAEADADAGIADgFIAGgEIAFgDIAIgBQAJABAFAFQAFAGAAALIAAAiIABADQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAIADABIADABIAAAFg");
	this.shape_111.setTransform(949.1,346.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgLAhQgGgDgEgFQgEgFgCgHQgCgGAAgHQAAgGACgGQACgHAEgFQAEgFAGgDQAFgDAHAAQAHAAAFADQAFACAEAEQADAEACAFQABAFAAAGIAAAFIgsAAQABAGABAFQABAFADAFQADADAEADQADACAGAAQAGAAAFgDQAEgDAEgHIAFADQgFAIgGAFQgIAFgJAAQgHAAgGgDgAAOgHIAAgIIgCgHQgBgDgDgCQgDgCgEAAQgHAAgEAGQgFAGgBAKIAeAAg");
	this.shape_112.setTransform(936.3,346.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgOA1IAAgEIAEgBIADAAIADgCIAAgFIAAhNIgBgEIgCgDIgFgCIgFgBIAAgEIAYgCIABABIAABbIABAEIADADIADABIADABIAAAEg");
	this.shape_113.setTransform(930.6,344.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgYA2IABgMIAAgOIAAhCIgBgEQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgEgBIgFgBIAAgEIAYgCIABABIAAAtIABAAQAEgEAFgDQAEgCAFAAQAMAAAJAKQAIAJAAAPQAAAQgJAKQgKAKgNAAQgFAAgFgBIgKgFIgFAIgAgEgHQgEABgDAEIAAAmIACAEIADAEIAFADQABABAEAAQAJAAAFgIQAFgIAAgOIgBgKQgBgGgDgDIgGgGQgEgCgFAAQgEAAgDACg");
	this.shape_114.setTransform(924.6,344.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAMAhQgDgCgBgGIgBAAQgEAGgEACQgFADgHAAQgIAAgFgFQgFgFAAgHIABgHQABgDADgDIAEgDIAFgDIANgDIAMgFIAAgHIgBgEIgBgEIgEgFQgCgCgEAAQgEABgCABIgEACIABAEIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgCACgEAAQgDAAgCgCQgBgDAAgDQAAgDACgCQACgDADgDIAIgDIAIgBIAKABQAEAAADADQAEADACAEQABAEAAAHIAAAQIAAARIABAEIADADIADABIAFAAIAAAEIgGABIgGACQgFAAgDgDgAgCAAIgIAEIgFAGQgCADAAAFQAAAFADACQADAEAEAAQAFgBADgCIAGgFIABgYg");
	this.shape_115.setTransform(917.7,346.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgYAjIAAgFIADgBIADAAIADgCIABgEIAAgpIgBgDQgBgBAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgDgBIgEAAIAAgFIAWgCIABABIAAAJIABAAQADgFAFgCQAFgEAFAAQAEAAADAEQACACAAAFQAAADgBADQgCACgEAAQgEAAgBgCQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIABgEIAAgCQgDAAgEACQgFAEgCAEIAAAnIABADIACACIAFABIAEABIAAAFg");
	this.shape_116.setTransform(911.3,346.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAFAjIAAgFIADgBIADAAIADgCIABgEIAAghQAAgIgDgDQgEgFgFAAIgFABIgGAEIgDADIgCACIAAAnIABADIADACIADABIADABIAAAFIghAAIAAgFIADgBIADAAIADgCIABgEIAAgpIgBgEIgDgDIgDgBIgEAAIAAgFIAXgCIABABIAAAJIAAAAIAEgDIAFgEIAFgDIAIgBQAJAAAFAHQAFAFAAALIAAAiIABADQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAIADABIAEABIAAAFg");
	this.shape_117.setTransform(897.4,346.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgLAhQgGgDgEgFQgEgFgCgHQgCgGAAgHQAAgGACgGQACgHAEgFQAEgFAGgDQAFgDAHAAQAHAAAGADQAEACAEAEQADAEABAFQACAFAAAGIAAAFIgrAAQAAAGABAFQABAFADAFQADADAEADQADACAGAAQAGAAAEgDQAFgDAEgHIAFADQgEAIgIAFQgGAFgKAAQgHAAgGgDgAAPgHIgBgIIgCgHQgCgDgDgCQgCgCgFAAQgGAAgFAGQgEAGAAAKIAeAAg");
	this.shape_118.setTransform(890,346.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgBAiIgMgdIgMgaQgBgEgDgBQgDgCgEAAIAAgFIAgAAIAAAFIgFABQgBAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAABIABACIAIAUIAHATIAGgPIAIgTIABgDIABgEIgBgCIgCgBIgEgBIgDAAIAAgFIAaAAIAAAFIgFABQgDACgCAFIgJATIgJATIgCAIIgDAIg");
	this.shape_119.setTransform(883.1,346.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgLAhQgGgDgEgFQgEgFgCgHQgCgGAAgHQAAgGACgGQACgHAEgFQAEgFAGgDQAFgDAHAAQAHAAAFADQAGACADAEQADAEACAFQABAFAAAGIAAAFIgsAAQABAGABAFQABAFADAFQADADAEADQADACAGAAQAGAAAFgDQAEgDAEgHIAFADQgFAIgHAFQgHAFgJAAQgHAAgGgDgAAPgHIgBgIIgCgHQgBgDgDgCQgDgCgFAAQgGAAgEAGQgFAGgBAKIAfAAg");
	this.shape_120.setTransform(873,346.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAGA1IAAgEIADgBIADAAIADgCIABgFIAAgiQAAgHgEgDQgDgEgFAAIgFABIgGADIgDADIgCACIAAAnIABADIADADIACABIAEABIAAAEIghAAIAAgEIADgBIAEAAIACgCIABgFIAAhNIgBgEIgCgEIgFgCIgFAAIAAgEIAZgCIABABIAAAvIAEgDIAFgFIAFgCIAIgBQAJAAAFAFQAFAGAAAKIAAAjIAAAEIAEACIADABIADABIAAAEg");
	this.shape_121.setTransform(865.3,344.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAFAjIAAgFIADgBIADAAIADgCIABgEIAAghQAAgIgDgDQgEgFgFAAIgFABIgGAEIgDADIgCACIAAAnIABADIADACIADABIADABIAAAFIghAAIAAgFIADgBIADAAIADgCIABgEIAAgpIgBgEIgDgDIgDgBIgEAAIAAgFIAXgCIABABIAAAJIAAAAIAEgDIAFgEIAFgDIAIgBQAJAAAFAHQAFAFAAALIAAAiIABADQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAIADABIAEABIAAAFg");
	this.shape_122.setTransform(833.5,346.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgSAzQgFgCgEgFQgFgFgCgGQgCgHAAgIQAAgHACgHQADgFAFgFQAEgFAFgDQAGgCAHAAIAIABIAIADIAAgXIgBgGIgCgDIgGgCIgGgBIAAgEIAbgCIABABIAABaIABAEQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAIAEABIAFABIAAAEIgYABIgBgBIAAgGIgBAAQgDAEgFACQgFADgFAAQgFAAgGgDgAgKgJQgEACgDAEQgCADgBAGQgCAGAAAHQAAAGACAFQABAEACAEQADAEADADQAEACAFAAQAEgBAEgCIAGgFIAAgnIgCgEIgDgDIgFgDIgEgBQgFAAgDACg");
	this.shape_123.setTransform(805,344.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgSAzQgGgCgDgFQgEgFgDgGQgCgHAAgIQAAgHACgHQADgFAEgFQAFgFAFgDQAGgCAHAAIAIABIAIADIAAgXIgBgGIgDgDIgFgCIgGgBIAAgEIAbgCIABABIAABaIABAEQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAIAEABIAFABIAAAEIgYABIgBgBIAAgGIgBAAQgDAEgFACQgFADgFAAQgGAAgFgDgAgKgJQgEACgDAEQgCADgBAGQgCAGAAAHQAAAGACAFQAAAEADAEQADAEADADQAEACAFAAQAFgBADgCIAGgFIAAgnIgCgEIgDgDIgFgDIgEgBQgFAAgDACg");
	this.shape_124.setTransform(797,344.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAMAhQgDgCgBgGIgBAAQgEAGgEACQgFADgHAAQgIAAgFgFQgFgFAAgHIABgHQABgDADgDIAEgDIAFgDIANgDIAMgFIAAgHIgBgEIgBgEIgEgFQgCgCgEAAQgEABgCABIgEACIABAEIAAAFQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgCACgEAAQgDAAgCgCQgBgDAAgDQAAgDACgCQACgDADgDIAIgDIAIgBIAKABQAEAAADADQAEADACAEQABAEAAAHIAAAQIAAARIABAEIADADIADABIAFAAIAAAEIgGABIgGACQgFAAgDgDgAgCAAIgIAEIgFAGQgCADAAAFQAAAFADACQADAEAEAAQAFgBADgCIAGgFIABgYg");
	this.shape_125.setTransform(789.5,346.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgOA1IAAgFIAEAAIADgBIADgBIAAgFIAAhMIgBgFIgCgDIgFgCIgFgBIAAgFIAYgBIABABIAABbIABAFIADACIADABIADAAIAAAFg");
	this.shape_126.setTransform(989.8,314);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAMAhQgDgDgBgEIgBAAQgEAEgEADQgFACgHABQgIgBgFgEQgFgEAAgIIABgHQABgDADgCIAEgEIAFgDIANgDIAMgFIAAgHIgBgDIgBgFIgEgEQgCgCgEAAQgEAAgCABIgEACIABAEIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgCADgEAAQgDAAgCgDQgBgCAAgDQAAgDACgEQACgCADgCIAIgEIAIgCIAKABQAEACADACQAEACACAFQABAEAAAHIAAAQIAAAQIABAFIADADIADAAIAFAAIAAAFIgGACIgGABQgFgBgDgCgAgCAAIgIAEIgFAFQgCAEAAAFQAAAFADADQADACAEAAQAFABADgDIAGgGIABgWg");
	this.shape_127.setTransform(984.7,315.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAFAiIAAgEIADAAIADgBIADgCIABgEIAAgiQAAgHgDgDQgEgEgFgBIgFACIgGADIgDACIgCAEIAAAmIABADIADADIADABIADAAIAAAEIghAAIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgDIgDgBIgEgBIAAgEIAXgBIABAAIAAAKIAAAAIAEgEIAFgEIAFgCIAIgBQAJAAAFAFQAFAHAAAJIAAAjIABADQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAABIADABIAEAAIAAAEg");
	this.shape_128.setTransform(976.9,315.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAaAiIAAgEIACAAIADgBIAEgCIAAgEIAAgiQAAgHgDgDQgEgEgEgBIgGACIgGADIgDACIgCAEIAAAmIABADIACADIADABIAEAAIAAAEIggAAIAAgEIAEAAIACgBIADgCIABgEIAAgiQAAgHgDgDQgEgEgEgBIgHACIgFADIgEADIgCADIAAAlIABAEIAEADIACABIADAAIAAAEIggAAIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgCIgDgCIgEgBIAAgEIAWgBIABAAIAAAKIABAAIAEgEIAEgEIAHgCIAIgBQAGAAAEADQAFAEACAFIADgFIAGgEIAFgCIAIgBQAJgBAFAGQAFAFAAAMIAAAiIABADQAAABAAAAQABAAAAABQAAAAABAAQAAAAABABIADABIADAAIAAAEg");
	this.shape_129.setTransform(942.7,315.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgKAQIAGgEIADgEIADgFIACgGIgEAAQgDABgDgDQgCgCAAgFQAAgDACgCQADgDADAAQAGAAACAEQADAEAAAHQAAAFgCADQgCAFgDADIgFAFIgGAFg");
	this.shape_130.setTransform(924.5,319.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgYAtQgIgEAAgIQAAgHAGgFQAFgEAJAAIAAgBIgFgBIgDgDIgDgDIgBgFQAAgDACgCQADgDAFgDIAAgBQgHgDgDgFQgEgEAAgHQAAgJAHgHQAHgGAMAAIAFABIAGACIAXAAIAAAGIgQAAIAAABQADACABAEIABAHQAAAJgHAGQgHAGgJAAIgIAAIgDACQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIADACIAFAAIAFABIAHAAIAIABIAGABQADABADACQADADABADQACAEAAAEQAAAFgCAFQgCAEgFADQgEAEgHABQgGACgIAAQgQAAgHgFgAgRAYQgDADAAAFIABAEQABADADACQACACAEABIAJAAQAKAAAGgDQAGgEAAgIQAAgEgCgCQgCgDgEgBIgHAAIgNgBQgIACgDAEgAgIgrQgDABgBADIgCAFIgBAHQAAAIAEAEQADAGAFAAQAFAAADgGQADgEAAgIQAAgIgDgEQgDgFgFAAQgDAAgCABg");
	this.shape_131.setTransform(919.1,317.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAFAiIAAgEIADAAIADgBIADgCIABgEIAAgiQAAgHgDgDQgEgEgFgBIgFACIgGADIgDACIgCAEIAAAmIABADIADADIADABIADAAIAAAEIghAAIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgEIgDgDIgDgBIgEgBIAAgEIAXgBIABAAIAAAKIAAAAIAEgEIAFgEIAFgCIAIgBQAJAAAFAFQAFAHAAAJIAAAjIABADQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAABIADABIAEAAIAAAEg");
	this.shape_132.setTransform(911.5,315.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgUAaQgIgKAAgQQAAgGACgGQADgHADgFQAEgFAGgDQAHgDAGAAQAKAAAGAFQAGAFAAAIQAAAEgBACQgCADgEAAQgEAAgCgCQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIABgGIABgFQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBgBIgFAAIgGABQgCABgEAEQgCAEgBAFQgCAGAAAIQAAAMAFAIQAGAIAIAAQAHAAAEgDQAFgDAEgHIAEADQgEAIgIAFQgHAFgIAAQgOAAgIgKg");
	this.shape_133.setTransform(891.4,315.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AADAiIAAgFIAGAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAIgBgCIgBgDIgFgHIgGgKIgGAIIgHAJIgBACIAAACQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAHABIAAAFIgZAAIAAgEIAHgEIAFgFIAGgHIAKgNIgJgLIgIgMIgEgEQgDgCgEAAIAAgFIAdAAIAAAFIgDAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAIAAACIABABIAEAIIAHAKIAFgIIAFgIIABgBIAAgCQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgEgBIAAgFIAYAAIAAAFQgEABgEACIgEAEIgGAHIgJAMIAKANIAIALIAFAFQACACAFAAIAAAFg");
	this.shape_134.setTransform(884.5,315.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgLAhQgHgDgDgFQgEgFgCgHQgCgGAAgHQAAgGACgGQACgHAEgFQAEgFAGgDQAGgDAGAAQAHAAAGADQAFACADAEQADAEABAFQACAFAAAGIAAAFIgsAAQAAAGACAFQABAFADAFQADADAEADQADACAGAAQAGAAAEgDQAFgDAEgHIAFADQgEAIgIAFQgGAFgKAAQgHAAgGgDgAAPgHIgBgIIgCgHQgCgDgDgCQgCgCgFAAQgFAAgFAGQgFAGgBAKIAfAAg");
	this.shape_135.setTransform(877.7,315.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgLAQIAHgEIADgEIADgFIACgGIgEAAQgDABgCgDQgDgCAAgFQAAgDACgCQACgDAEAAQAGAAACAEQAEAEAAAHQAAAFgDADQgCAFgDADIgFAFIgGAFg");
	this.shape_136.setTransform(868.9,319.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgfAuQgDgCAAgDQAAgEACgCQACgCADAAIADABIADABIACADIACAEQAEgCAEgIQAFgIACgGIgMgcIgLgbQgBgCgDgCQgDgCgDgBIAAgEIAfAAIAAAFIgFABQgBAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABIAAABIABACIAIATIAHAUIAHgOIAHgTIABgEIABgDQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBgBIgGgCIAAgEIAZAAIAAAEIgFACQgEADgBADIgPAjIgJAVIgHAPQgDAGgEADIgFAEIgGABQgFAAgDgDg");
	this.shape_137.setTransform(863.7,317.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAGA1IAAgFIADAAIADgBIADgBIABgFIAAgiQAAgHgDgDQgEgEgEAAIgGABIgGADIgDADIgCACIAAAnIABAEIACACIADABIAEAAIAAAFIghAAIAAgFIAEAAIADgBIACgBIABgFIAAhNIgBgFIgCgDIgFgBIgFgBIAAgFIAZgBIABABIAAAvIAEgDIAFgFIAFgCIAIgBQAJAAAFAGQAFAFAAAKIAAAjIAAAEIAEACIACABIAEAAIAAAFg");
	this.shape_138.setTransform(856.1,314);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgYAiIAAgEIADAAIADgBIADgCIABgEIAAgpIgBgDQAAgBgBgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgDgBIgEgBIAAgEIAWgBIABAAIAAAKIABAAQADgGAFgCQAFgDAFAAQAEAAADADQACACAAAFQAAADgBADQgCADgEAAQgEAAgBgDQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIABgCIAAgDQgDAAgEADQgFADgCAEIAAAnIABADIACADIAFABIAEAAIAAAEg");
	this.shape_139.setTransform(844.6,315.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AASAiIgSgwIgSAwIgFAAIgKgeIgJgZQgBgEgDgBIgGgDIAAgEIAeAAIAAAFIgFAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAABIABACIAEAQIAHAWIARgvIAHAAIARAuIAGgRIAFgQIABgDIAAgCQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgCgCIgEgBIgCAAIAAgEIAaAAIAAAEQgDABgEACQgDACgBAEIgHATIgHAUIgCAHIgCAIg");
	this.shape_140.setTransform(829.1,315.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AAKAxIAAgFIAIgBQABAAABAAQABgBAAAAQABAAAAgBQAAAAAAAAIAAgCIgBgCIgIgVIggAAIgEAIIgCAHIgBAEIAAADQAAADAEACQAEABAFAAIAAAFIgkAAIAAgFIAFAAIAEgCIAFgEIACgGIAQgoIAQgoIAEAAIAhBTIACAEIAEADIAEACIAEAAIAAAFgAALAKIgNglIgPAlIAcAAg");
	this.shape_141.setTransform(815.8,314.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AAFAPQgDgEAAgGQAAgFACgCIAFgHIAGgFIAFgEIADAFIgGADIgEADQgCACAAADQgCACAAACIADAAQAFABACACQACACAAADQAAAEgCACQgCADgEgBQgFABgDgEgAgTAPQgDgEAAgGQAAgFACgCQACgEADgDIAGgFIAFgEIACAFIgFADIgEADIgDAFIgBAEIADAAQAEABADACQACACAAADQAAAEgCACQgCADgEgBQgGABgCgEg");
	this.shape_142.setTransform(808.2,310.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81,p:{x:730.9,y:59.9}},{t:this.shape_80},{t:this.shape_79,p:{x:742.7,y:59}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72,p:{x:789.3,y:58.1}},{t:this.shape_71,p:{x:793.8,y:59}},{t:this.shape_70,p:{x:798.2,y:58.1}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66,p:{x:826.3,y:59.9}},{t:this.shape_65},{t:this.shape_64,p:{x:845.6,y:59.9}},{t:this.shape_63,p:{x:851.7,y:59}},{t:this.shape_62,p:{x:856.1,y:58.1}},{t:this.shape_61,p:{x:862,y:59.9}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:703.8,y:88.4}},{t:this.shape_53,p:{x:708.3,y:89.3}},{t:this.shape_52,p:{x:712.7,y:88.4}},{t:this.shape_51,p:{x:718.6,y:90.2}},{t:this.shape_50},{t:this.shape_49,p:{x:736.3,y:89.3}},{t:this.shape_48,p:{x:742.5,y:90.2}},{t:this.shape_47,p:{x:751.9,y:89.3}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:829.3,y:90.2}},{t:this.shape_35},{t:this.shape_34,p:{x:852,y:90.2}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:874.9,y:90.2}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:789.9,y:120.5}},{t:this.shape_27},{t:this.shape_26,p:{x:802.6,y:118.7}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:849.3,y:119.6}},{t:this.shape_19},{t:this.shape_18,p:{x:863.6,y:120.5}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:765.7,y:149}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:871.1,y:152.3}},{t:this.shape_1,p:{x:877.2,y:149}},{t:this.shape}]}).to({state:[{t:this.text_1}]},90).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_81,p:{x:837.9,y:315.9}},{t:this.shape_139},{t:this.shape_79,p:{x:849.7,y:314.9}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_72,p:{x:896.3,y:314.1}},{t:this.shape_71,p:{x:900.8,y:314.9}},{t:this.shape_70,p:{x:905.2,y:314.1}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_36,p:{x:933.3,y:315.9}},{t:this.shape_129},{t:this.shape_64,p:{x:952.6,y:315.9}},{t:this.shape_63,p:{x:958.7,y:314.9}},{t:this.shape_62,p:{x:963.1,y:314.1}},{t:this.shape_61,p:{x:969,y:315.9}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_54,p:{x:810.8,y:344.4}},{t:this.shape_53,p:{x:815.3,y:345.2}},{t:this.shape_52,p:{x:819.7,y:344.4}},{t:this.shape_51,p:{x:825.6,y:346.2}},{t:this.shape_122},{t:this.shape_49,p:{x:843.3,y:345.2}},{t:this.shape_48,p:{x:849.5,y:346.2}},{t:this.shape_47,p:{x:858.9,y:345.2}},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_66,p:{x:905,y:346.2}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_34,p:{x:959,y:346.2}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_28,p:{x:896.9,y:376.5}},{t:this.shape_105},{t:this.shape_26,p:{x:909.6,y:374.7}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_20,p:{x:956.3,y:375.5}},{t:this.shape_99},{t:this.shape_18,p:{x:970.6,y:376.5}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_13,p:{x:872.7,y:405}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_31,p:{x:904.6,y:406.8}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_2,p:{x:978.1,y:408.2}},{t:this.shape_1,p:{x:984.2,y:405}},{t:this.shape_85}]},1).wait(225));
	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(90).to({_off:false},0).wait(1).to({rotation:81.8,x:837.3,y:219.8},0).wait(1).to({rotation:163.6,x:670,y:200.2},0).wait(1).to({rotation:245.5,x:672.6,y:35.2},0).wait(1).to({rotation:327.3,x:843.4,y:17.9},0).wait(1).to({rotation:409.1,x:892,y:187.9},0).wait(1).to({rotation:490.9,x:737.7,y:263.6},0).wait(1).to({rotation:572.7,x:647.9,y:125.2},0).wait(1).to({rotation:654.5,x:779.2,y:19.9},0).wait(1).to({rotation:736.4,x:909.1,y:138.5},0).wait(1).to({rotation:818.2,x:817.4,y:287.4},0).wait(1).to({rotation:900,x:664,y:221.2},0).wait(1).to({rotation:981.8,x:714.8,y:63.5},0).wait(1).to({rotation:1063.6,x:885.2,y:94.7},0).wait(1).to({rotation:1145.5,x:885.6,y:271.4},0).wait(1).to({rotation:1227.3,x:718,y:300.3},0).wait(1).to({rotation:1309.1,x:672.4,y:142},0).wait(1).to({rotation:1390.9,x:829.8,y:77.9},0).wait(1).to({rotation:1472.7,x:922.8,y:227.9},0).wait(1).to({rotation:1554.5,x:794.5,y:344.8},0).wait(1).to({rotation:1636.4,x:667.7,y:237.9},0).wait(1).to({rotation:1718.2,x:762.5,y:100.6},0).wait(1).to({rotation:1800,x:919,y:178.4},0).wait(1).to({rotation:1881.8,x:871.3,y:347.8},0).wait(1).to({rotation:1963.6,x:704,y:328.2},0).wait(1).to({rotation:2045.5,x:706.6,y:163.2},0).wait(1).to({rotation:2127.3,x:877.4,y:145.9},0).wait(1).to({rotation:2209.1,x:926,y:315.9},0).wait(1).to({rotation:2290.9,x:771.7,y:391.6},0).wait(1).to({rotation:2372.7,x:681.9,y:253.2},0).wait(1).to({rotation:2454.5,x:813.2,y:147.9},0).wait(1).to({rotation:2536.4,x:943.1,y:266.5},0).wait(1).to({rotation:2618.2,x:851.4,y:415.4},0).wait(1).to({rotation:2700,x:698,y:349.2},0).wait(1).to({rotation:2781.8,x:748.8,y:191.5},0).wait(1).to({rotation:2863.6,x:919.2,y:222.7},0).wait(1).to({rotation:2945.5,x:919.6,y:399.3},0).wait(1).to({rotation:3027.3,x:752,y:428.3},0).wait(1).to({rotation:3109.1,x:706.4,y:270},0).wait(1).to({rotation:3190.9,x:863.8,y:205.8},0).wait(1).to({rotation:3272.7,x:956.8,y:355.9},0).wait(1).to({rotation:3354.5,x:828.5,y:472.8},0).wait(1).to({rotation:3436.4,x:701.7,y:365.9},0).wait(1).to({rotation:3518.2,x:796.5,y:228.6},0).wait(1).to({rotation:3600,x:953,y:306.4},0).to({_off:true},1).wait(225));

	// Title
	this.instance_9 = new lib.Tween1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1186.9,1,1,1,0,0,0,0,35.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:839},155).wait(184).to({x:-719.9,y:-30.3},0).to({x:44,y:-6.4},16).to({x:63.4,y:-0.4},4).wait(1));

	// Background
	this.instance_10 = new lib.ActionmovieBackground();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0,1.194,0.625);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-876.4,150,2309,300);
// library properties:
lib.properties = {
	width: 955,
	height: 300,
	fps: 24,
	color: "#CC0000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/davignon_Audio_Banner_AN_atlas_.png", id:"davignon_Audio_Banner_AN_atlas_"},
		{src:"sounds/Bengo_Latino_Sting.mp3", id:"Bengo_Latino_Sting"},
		{src:"sounds/Eyes_Gone_Wrong.mp3", id:"Eyes_Gone_Wrong"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;