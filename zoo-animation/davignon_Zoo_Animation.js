(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"davignon_Zoo_Animation_atlas_", frames: [[0,0,2100,1500],[0,3004,2100,1500],[2102,1200,1677,1237],[2102,2439,1008,1200],[3112,2439,505,784],[2102,0,1800,1198],[0,4506,2100,1500],[0,1502,2100,1500]]}
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



(lib._2flamigo = function() {
	this.spriteSheet = ss["davignon_Zoo_Animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bears = function() {
	this.spriteSheet = ss["davignon_Zoo_Animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gorilla = function() {
	this.spriteSheet = ss["davignon_Zoo_Animation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Lflamingo = function() {
	this.spriteSheet = ss["davignon_Zoo_Animation_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.spriteSheet = ss["davignon_Zoo_Animation_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.lions_sfzoo = function() {
	this.spriteSheet = ss["davignon_Zoo_Animation_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Rflamingo = function() {
	this.spriteSheet = ss["davignon_Zoo_Animation_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.tiger = function() {
	this.spriteSheet = ss["davignon_Zoo_Animation_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1();
	this.instance.parent = this;
	this.instance.setTransform(-88.3,-137.2,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.3,-137.2,176.8,274.4);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lions_sfzoo();
	this.instance.parent = this;
	this.instance.setTransform(-485.9,-323.4,0.54,0.54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.9,-323.4,972,646.9);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeDtQgNgNAAgTQAAgSANgNQANgNARAAQASAAANANQANANAAASQAAATgNANQgNANgSgBQgSABgMgNgAgjCDIAAl7IBHAAIAAF7g");
	this.shape.setTransform(224,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiaDvIB5jiIiLj6IBTAAIBdCxIBYixIBRAAIj1Hcg");
	this.shape_1.setTransform(195.6,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhyB1QgqgvAAhGQAAhGAqguQApguA+AAQA1AAArAsIAAgkIBIAAIAAE0IhIAAIAAggQgsApgxAAQhAAAgqgugAg7hGQgYAcAAAqQAAArAYAcQAYAcAlAAQAnAAAZgbQAYgcAAgsQAAgqgYgcQgZgcgnAAQgkAAgZAcg");
	this.shape_2.setTransform(157.2,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhyDiQgqgvAAhHQAAhFAqguQApguA/AAQA1AAAqAsIAAkGIBIAAIAAIWIhIAAIAAggQgqApg0AAQg/ABgqgvgAg7AmQgYAdAAApQAAAtAYAcQAYAbAkAAQAoAAAYgaQAZgdAAgsQAAgrgZgcQgYgcgnAAQgkAAgZAcg");
	this.shape_3.setTransform(118.2,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhkCfIAAk0IBIAAIAAAbQATgUAPgIQAPgIAVAAQAcAAAfASIggBCQgVgPgTAAQg6AAABBYIAACgg");
	this.shape_4.setTransform(69.7,9.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhaB/QgXgTgJgYQgJgWAAgqIAAiyIBHAAIAACwQAABNA8AAQA8AAABhNIAAiwIBHAAIAACyQAAAlgJAbQgJAYgWATQgkAgg4AAQg3AAgjggg");
	this.shape_5.setTransform(37.4,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah1B0QgvgvAAhHQAAhDAwguQAwgvBEAAQBFAAAwAvQAwAvAABEQAABGgwAuQgwAvhFAAQhGAAgvgvgAhBhHQgaAcAAArQAAAtAZAbQAZAbApAAQAqAAAZgbQAZgbAAgtQAAgsgZgbQgZgbgqAAQgoAAgZAbg");
	this.shape_6.setTransform(0.2,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiaDvIB5jiIiLj6IBTAAIBdCxIBYixIBRAAIj1Hcg");
	this.shape_7.setTransform(-35.7,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiaDvIB5jiIiLj6IBTAAIBdCxIBYixIBRAAIj1Hcg");
	this.shape_8.setTransform(-91.1,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah1B0QgvgvAAhHQAAhDAwguQAwgvBEAAQBFAAAwAvQAwAvAABEQAABGgwAuQgwAvhFAAQhGAAgvgvgAhBhHQgaAcAAArQAAAtAZAbQAZAbApAAQAqAAAZgbQAZgbAAgtQAAgsgZgbQgZgbgqAAQgoAAgZAbg");
	this.shape_9.setTransform(-126.8,9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjFGIAAncIBGAAIAAHcgAggj2QgOgNAAgUQAAgTAOgNQANgOATAAQATAAANAOQAPANAAATQAAAUgPANQgNAOgTAAQgSAAgOgOg");
	this.shape_10.setTransform(-154.3,9.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA9CfIAAisQAAgugMgRQgNgSggAAQgjAAgPAYQgOAXAAA5IAACVIhIAAIAAk0IBIAAIAAAcQAlglAuAAQA2AAAeAiQAaAdAABBIAAC9g");
	this.shape_11.setTransform(-180.2,9.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiGD1IAAnpIENAAIAABGIjDAAIAAB1IC+AAIAABFIi+AAIAACkIDDAAIAABFg");
	this.shape_12.setTransform(-215.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272,-44.2,544.1,88.4);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tiger();
	this.instance.parent = this;
	this.instance.setTransform(-315,-225,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-315,-225,630,450);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Lflamingo();
	this.instance.parent = this;
	this.instance.setTransform(-504,-600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-504,-600,1008,1200);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Rflamingo();
	this.instance.parent = this;
	this.instance.setTransform(-210,-150,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-150,420,300);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gorilla();
	this.instance.parent = this;
	this.instance.setTransform(-167.7,-123.7,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.7,-123.7,335.4,247.4);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bears();
	this.instance.parent = this;
	this.instance.setTransform(-175,-125,0.167,0.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-125,350,250);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2flamigo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,525,375), null);


// stage content:
(lib.davignon_Zoo_Animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("davignon_AnimalSounds2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(720));

	// zoo-logo
	this.instance = new lib.Layer1();
	this.instance.parent = this;
	this.instance.setTransform(409,-284,0.35,0.35);

	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(497.4,-146.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},707).to({state:[{t:this.instance_1}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(707).to({_off:false},0).to({x:490.4,y:151.2},12).wait(1));

	// tiger
	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1198,128);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(570).to({_off:false},0).to({x:728,y:165},69).to({x:1082.7,y:487.9},26).to({x:404,y:516.9},1).to({startPosition:0},40).to({x:244,y:852.9},1).to({x:404,y:516.9},5).wait(8));

	// phrase
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeDsQgNgMAAgTQAAgSANgNQANgNARAAQASAAANANQANANAAASQAAASgNANQgNANgSABQgSgBgMgNgAgjCEIAAl9IBHAAIAAF9g");
	this.shape.setTransform(-28.5,39.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiaDvIB5jiIiLj6IBTAAIBdCxIBYixIBRAAIj1Hcg");
	this.shape_1.setTransform(-57,56.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhyB1QgqgvAAhGQAAhGAqguQApguA+AAQA2AAAqAsIAAgkIBIAAIAAE0IhIAAIAAggQgrApgzAAQg/AAgqgugAg6hGQgZAcAAAqQAAArAYAcQAYAcAlAAQAnAAAZgbQAYgcAAgsQAAgqgYgcQgZgcgnAAQgkAAgYAcg");
	this.shape_2.setTransform(-95.4,47.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhyDiQgqgvAAhHQAAhFAqgtQApgvA+AAQA1AAArAsIAAkHIBIAAIAAIYIhIAAIAAghQgqAqg0AAQhAAAgpgvgAg7AmQgYAcAAAqQAAAsAYAdQAYAcAlAAQAnAAAYgbQAZgdAAgrQAAgsgZgcQgYgcgnAAQgkAAgZAcg");
	this.shape_3.setTransform(-134.3,37);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhkCfIAAk0IBIAAIAAAbQATgUAOgIQAQgIAVAAQAcAAAfASIghBCQgUgPgTAAQg6AAABBYIAACgg");
	this.shape_4.setTransform(-182.8,47.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhaCAQgXgUgJgYQgJgVAAgrIAAiyIBHAAIAACxQABBMA7AAQA9AAAAhMIAAixIBHAAIAACyQAAAlgJAbQgJAYgWAUQgkAfg4AAQg3AAgjgfg");
	this.shape_5.setTransform(-215.1,48.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah1B0QgvgvAAhHQAAhDAwguQAwgvBEAAQBFAAAwAvQAwAvAABEQAABGgwAuQgwAvhFAAQhGAAgvgvgAhBhHQgaAcAAArQAAAtAZAbQAZAbApAAQAqAAAZgbQAZgbAAgtQAAgsgZgbQgZgbgqAAQgoAAgZAbg");
	this.shape_6.setTransform(-252.4,47.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiaDvIB5jiIiLj6IBTAAIBdCxIBYixIBRAAIj1Hcg");
	this.shape_7.setTransform(-288.3,56.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiaDvIB5jiIiLj6IBTAAIBdCxIBYixIBRAAIj1Hcg");
	this.shape_8.setTransform(-343.6,56.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah1B0QgvgvAAhHQAAhDAwguQAwgvBEAAQBFAAAwAvQAwAvAABEQAABGgwAuQgwAvhFAAQhGAAgvgvgAhBhHQgaAcAAArQAAAtAZAbQAZAbApAAQAqAAAZgbQAZgbAAgtQAAgsgZgbQgZgbgqAAQgoAAgZAbg");
	this.shape_9.setTransform(-379.3,47.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjFGIAAncIBGAAIAAHcgAggj2QgOgNAAgUQAAgTAOgNQAOgOASAAQATAAANAOQAPANAAATQAAAUgPANQgNAOgTAAQgTAAgNgOg");
	this.shape_10.setTransform(-406.9,47.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA9CfIAAisQAAgugMgRQgNgSggAAQgjAAgPAYQgOAXAAA5IAACVIhIAAIAAk0IBIAAIAAAcQAlglAuAAQA2AAAeAiQAaAdAABBIAAC9g");
	this.shape_11.setTransform(-432.8,47.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiGD1IAAnpIENAAIAABGIjDAAIAAB1IC+AAIAABEIi+AAIAAClIDDAAIAABFg");
	this.shape_12.setTransform(-468,38.9);

	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-252.5,38.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_3}]},650).to({state:[{t:this.instance_3}]},57).to({state:[{t:this.instance_3}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(650).to({_off:false},0).to({x:529.4,y:56.2},57).to({x:507.4,y:475.2},12).wait(1));

	// r-flamingo
	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1169,79);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(530).to({_off:false},0).to({x:-80.9,y:100},169).wait(21));

	// l-flamingo
	this.instance_5 = new lib.Tween3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-182,216);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(374).to({_off:false},0).to({x:1106.9,y:286},154).wait(192));

	// gorilla
	this.instance_6 = new lib.Tween2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1059.7,242.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(325).to({_off:false},0).to({x:-99.2,y:257.7},48).to({x:1075.7,y:222.7},128).wait(219));

	// bear
	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-119,212);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:171},49).to({x:106},51).to({x:166},46).to({x:-23},4).to({x:175},12).to({x:170},20).to({x:64},7).to({x:-105},16).wait(515));

	// flamingos
	this.instance_8 = new lib.Symbol1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(608.5,149.5,1,1,0,0,0,262.5,187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:712.5,y:131.5},50).to({x:458.5,y:144.5},50).to({x:871.5,y:157.5},50).to({x:247.5,y:187.5},55).to({x:1220.5,y:199.5},93).to({y:187.5},27).to({_off:true},394).wait(1));

	// background
	this.instance_9 = new lib.lions_sfzoo();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-9,-143,0.54,0.54);

	this.instance_10 = new lib.Tween7("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(477,180.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},707).to({state:[{t:this.instance_10}]},11).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(707).to({_off:false},0).to({alpha:0},11,cjs.Ease.get(0.01)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.1,-134,1487.6,787.9);
// library properties:
lib.properties = {
	width: 955,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/davignon_Zoo_Animation_atlas_.png", id:"davignon_Zoo_Animation_atlas_"},
		{src:"sounds/davignon_AnimalSounds2.mp3", id:"davignon_AnimalSounds2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;