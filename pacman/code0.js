gdjs.MainCode = {};
gdjs.MainCode.GDEnemyObjects1= [];
gdjs.MainCode.GDEnemyObjects2= [];
gdjs.MainCode.GDEnemyObjects3= [];
gdjs.MainCode.GDPlayerObjects1= [];
gdjs.MainCode.GDPlayerObjects2= [];
gdjs.MainCode.GDPlayerObjects3= [];
gdjs.MainCode.GDIntersectionObjects1= [];
gdjs.MainCode.GDIntersectionObjects2= [];
gdjs.MainCode.GDIntersectionObjects3= [];
gdjs.MainCode.GDStationObjects1= [];
gdjs.MainCode.GDStationObjects2= [];
gdjs.MainCode.GDStationObjects3= [];
gdjs.MainCode.GDMapObjects1= [];
gdjs.MainCode.GDMapObjects2= [];
gdjs.MainCode.GDMapObjects3= [];
gdjs.MainCode.GDDebugObjects1= [];
gdjs.MainCode.GDDebugObjects2= [];
gdjs.MainCode.GDDebugObjects3= [];
gdjs.MainCode.GDWarpObjects1= [];
gdjs.MainCode.GDWarpObjects2= [];
gdjs.MainCode.GDWarpObjects3= [];
gdjs.MainCode.GDArrowObjects1= [];
gdjs.MainCode.GDArrowObjects2= [];
gdjs.MainCode.GDArrowObjects3= [];
gdjs.MainCode.GDPointObjects1= [];
gdjs.MainCode.GDPointObjects2= [];
gdjs.MainCode.GDPointObjects3= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.condition2IsTrue_0 = {val:false};
gdjs.MainCode.condition3IsTrue_0 = {val:false};
gdjs.MainCode.conditionTrue_1 = {val:false};
gdjs.MainCode.condition0IsTrue_1 = {val:false};
gdjs.MainCode.condition1IsTrue_1 = {val:false};
gdjs.MainCode.condition2IsTrue_1 = {val:false};
gdjs.MainCode.condition3IsTrue_1 = {val:false};


gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDStationObjects1Objects = Hashtable.newFrom({"Station": gdjs.MainCode.GDStationObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDStationObjects1Objects = Hashtable.newFrom({"Station": gdjs.MainCode.GDStationObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.MainCode.GDEnemyObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDStationObjects1Objects = Hashtable.newFrom({"Station": gdjs.MainCode.GDStationObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.MainCode.GDEnemyObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDStationObjects1Objects = Hashtable.newFrom({"Station": gdjs.MainCode.GDStationObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.MainCode.GDEnemyObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDIntersectionObjects1Objects = Hashtable.newFrom({"Intersection": gdjs.MainCode.GDIntersectionObjects1});gdjs.MainCode.userFunc0x69a6c0 = function(runtimeScene, objects) {
"use strict";

var enemy =runtimeScene.getObjects("Enemy")[0];
var cart = enemy.getBehavior("Cart");
var cd=cart.GetDirection();
var directions = ["N", "S", "W","E"];
var direction = directions[Math.floor( Math.random()*4)];

switch(direction)
{
    case "N":
    if(cd=="S")
    return;
    break;
    case "S":
    if(cd=="N")
    return;
    break;
    case "E":
    if(cd=="W")
    return;
    break;
    case "W":
    if(cd=="E")
    return;
    break;
}
var inter= objects[0];
var x=inter.getVariables().get(cd+direction+"x").getAsNumber();
var y=inter.getVariables().get(cd+direction+"y").getAsNumber();
if(y==0)
{
    y=enemy.getY();
}
if(x==0)
{
    x=enemy.getX();
}


enemy.setPosition(x,y);

cart.SetDirection(direction);
};
gdjs.MainCode.eventsList0x69a36c = function(runtimeScene) {

{

gdjs.MainCode.GDIntersectionObjects2.createFrom(gdjs.MainCode.GDIntersectionObjects1);


var objects = [];
objects.push.apply(objects,gdjs.MainCode.GDIntersectionObjects2);
gdjs.MainCode.userFunc0x69a6c0(runtimeScene, objects);

}


{


{
}

}


}; //End of gdjs.MainCode.eventsList0x69a36c
gdjs.MainCode.userFunc0x68cd40 = function(runtimeScene) {
"use strict";

var variables=runtimeScene.getVariables();
var touchCurrentX=variables.get("TouchCurrentX").getAsNumber();
var touchCurrentY=variables.get("TouchCurrentY").getAsNumber();
var touchInitialX=variables.get("TouchInitialX").getAsNumber();
var touchInitialY=variables.get("TouchInitialY").getAsNumber();

var xDif= touchCurrentX-touchInitialX;
var yDif= touchCurrentY-touchInitialY;
if(Math.abs(xDif)>Math.abs(yDif))
{
    if(xDif>0)
    {
        variables.get("Direction").setString("E");
    }else
    {
variables.get("Direction").setString("W");
    }
} 
else
{
    if(yDif>0)
    {
variables.get("Direction").setString("S");
    }else
    {
variables.get("Direction").setString("N");
    }
}

};
gdjs.MainCode.eventsList0x68cbcc = function(runtimeScene) {

{


{
}

}


{


gdjs.MainCode.userFunc0x68cd40(runtimeScene);

}


{


{
}

}


}; //End of gdjs.MainCode.eventsList0x68cbcc
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyObjects1ObjectsGDgdjs_46MainCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.MainCode.GDEnemyObjects1, "Player": gdjs.MainCode.GDPlayerObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWarpObjects1Objects = Hashtable.newFrom({"Warp": gdjs.MainCode.GDWarpObjects1});gdjs.MainCode.userFunc0x69b380 = function(runtimeScene, objects) {
"use strict";

objects.forEach(function(e,index){
    var i=e.getVariables().get("Index");
    i.setNumber(e.getUniqueId());
})
};
gdjs.MainCode.eventsList0x69b19c = function(runtimeScene) {

{


{
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Turns");
}}

}


{

gdjs.MainCode.GDIntersectionObjects1.createFrom(runtimeScene.getObjects("Intersection"));
gdjs.MainCode.GDStationObjects1.createFrom(runtimeScene.getObjects("Station"));

var objects = [];
objects.push.apply(objects,gdjs.MainCode.GDIntersectionObjects1);
objects.push.apply(objects,gdjs.MainCode.GDStationObjects1);
gdjs.MainCode.userFunc0x69b380(runtimeScene, objects);

}


}; //End of gdjs.MainCode.eventsList0x69b19c
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDIntersectionObjects1Objects = Hashtable.newFrom({"Intersection": gdjs.MainCode.GDIntersectionObjects1});gdjs.MainCode.userFunc0x69ba28 = function(runtimeScene, objects) {
"use strict";



var direction=runtimeScene.getVariables().get("Direction").getAsString();
var player =runtimeScene.getObjects("Player")[0];
var cart = player.getBehavior("Cart");
if(direction==cart.GetDirection())
{
return;
}
var cd=cart.GetDirection();



switch(direction)
{
    case "N":
    if(cd=="S")
    return;
    break;
    case "S":
    if(cd=="N")
    return;
    break;
    case "E":
    if(cd=="W")
    return;
    break;
    case "W":
    if(cd=="E")
    return;
    break;
}
var inter= objects[0];
var x=inter.getVariables().get(cd+direction+"x").getAsNumber();
var y=inter.getVariables().get(cd+direction+"y").getAsNumber();
if(y==0)
{
    y=player.getY();
}
if(x==0)
{
    x=player.getX();
}

player.setPosition(x,y);



cart.SetDirection(direction);

};
gdjs.MainCode.eventsList0x69b604 = function(runtimeScene) {

{


{
}

}


{

/* Reuse gdjs.MainCode.GDIntersectionObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.MainCode.GDIntersectionObjects1);
gdjs.MainCode.userFunc0x69ba28(runtimeScene, objects);

}


}; //End of gdjs.MainCode.eventsList0x69b604
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.MainCode.GDEnemyObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainCode.GDPlayerObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPointObjects1Objects = Hashtable.newFrom({"Point": gdjs.MainCode.GDPointObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPointObjects1Objects = Hashtable.newFrom({"Point": gdjs.MainCode.GDPointObjects1});gdjs.MainCode.eventsList0xb43b0 = function(runtimeScene) {

{

gdjs.MainCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.MainCode.GDStationObjects1.createFrom(runtimeScene.getObjects("Station"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDStationObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
/* Reuse gdjs.MainCode.GDStationObjects1 */
{gdjs.evtsExt__CartExtension__OnColision.func(runtimeScene, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDStationObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.MainCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.MainCode.GDStationObjects1.createFrom(runtimeScene.getObjects("Station"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDStationObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDEnemyObjects1 */
/* Reuse gdjs.MainCode.GDStationObjects1 */
{gdjs.evtsExt__CartExtension__OnColision.func(runtimeScene, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDStationObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


{
gdjs.MainCode.GDDebugObjects1.createFrom(runtimeScene.getObjects("Debug"));
gdjs.MainCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.MainCode.GDDebugObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDebugObjects1[i].setString((( gdjs.MainCode.GDPlayerObjects1.length === 0 ) ? "" :gdjs.MainCode.GDPlayerObjects1[0].getAnimationName()));
}
}}

}


{

gdjs.MainCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.MainCode.GDIntersectionObjects1.createFrom(runtimeScene.getObjects("Intersection"));

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDIntersectionObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDIntersectionObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDIntersectionObjects1[i].getVariableNumber(gdjs.MainCode.GDIntersectionObjects1[i].getVariables().get("Index")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.MainCode.GDEnemyObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDEnemyObjects1[0].getVariables()).get("LastStationID"))) ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDIntersectionObjects1[k] = gdjs.MainCode.GDIntersectionObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDIntersectionObjects1.length = k;}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDEnemyObjects1[i].isCurrentAnimationName("Move") ) {
        gdjs.MainCode.condition2IsTrue_0.val = true;
        gdjs.MainCode.GDEnemyObjects1[k] = gdjs.MainCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDEnemyObjects1.length = k;}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDEnemyObjects1 */
/* Reuse gdjs.MainCode.GDIntersectionObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDEnemyObjects1[i].returnVariable(gdjs.MainCode.GDEnemyObjects1[i].getVariables().get("LastStationID")).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.MainCode.GDIntersectionObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDIntersectionObjects1[0].getVariables()).get("Index"))));
}
}
{ //Subevents
gdjs.MainCode.eventsList0x69a36c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6934316);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}{runtimeScene.getVariables().getFromIndex(4).setNumber(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}}

}


{


{
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.MainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainCode.eventsList0x68cbcc(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("S");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("E");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("N");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("W");
}}

}


{


{
}

}


{

gdjs.MainCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.MainCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.MainCode.GDWarpObjects1.createFrom(runtimeScene.getObjects("Warp"));

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyObjects1ObjectsGDgdjs_46MainCode_46GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDWarpObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDEnemyObjects1[i].isCurrentAnimationName("Turn")) ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDEnemyObjects1[k] = gdjs.MainCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.MainCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.MainCode.GDPlayerObjects1[i].isCurrentAnimationName("Turn")) ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDPlayerObjects1[k] = gdjs.MainCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDPlayerObjects1.length = k;}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDEnemyObjects1 */
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
/* Reuse gdjs.MainCode.GDWarpObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDEnemyObjects1[i].setPosition((gdjs.RuntimeObject.getVariableNumber(((gdjs.MainCode.GDWarpObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDWarpObjects1[0].getVariables()).get("X"))),(gdjs.RuntimeObject.getVariableNumber(((gdjs.MainCode.GDWarpObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDWarpObjects1[0].getVariables()).get("Y"))));
}
for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].setPosition((gdjs.RuntimeObject.getVariableNumber(((gdjs.MainCode.GDWarpObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDWarpObjects1[0].getVariables()).get("X"))),(gdjs.RuntimeObject.getVariableNumber(((gdjs.MainCode.GDWarpObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDWarpObjects1[0].getVariables()).get("Y"))));
}
}{for(var i = 0, len = gdjs.MainCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDEnemyObjects1[i].setDirectionOrAngle((gdjs.RuntimeObject.getVariableNumber(((gdjs.MainCode.GDWarpObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDWarpObjects1[0].getVariables()).get("Angle"))));
}
for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].setDirectionOrAngle((gdjs.RuntimeObject.getVariableNumber(((gdjs.MainCode.GDWarpObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDWarpObjects1[0].getVariables()).get("Angle"))));
}
}{for(var i = 0, len = gdjs.MainCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDEnemyObjects1[i].getBehavior("Cart").ChangeDirection((gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDWarpObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDWarpObjects1[0].getVariables()).get("Direction"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].getBehavior("Cart").ChangeDirection((gdjs.RuntimeObject.getVariableString(((gdjs.MainCode.GDWarpObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDWarpObjects1[0].getVariables()).get("Direction"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDEnemyObjects1[i].returnVariable(gdjs.MainCode.GDEnemyObjects1[i].getVariables().get("LastStationID")).setNumber(-(1));
}
for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].returnVariable(gdjs.MainCode.GDPlayerObjects1[i].getVariables().get("LastStationID")).setNumber(-(1));
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainCode.eventsList0x69b19c(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.MainCode.GDIntersectionObjects1.createFrom(runtimeScene.getObjects("Intersection"));
gdjs.MainCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDIntersectionObjects1Objects, false, runtimeScene, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDIntersectionObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDIntersectionObjects1[i].getVariableNumber(gdjs.MainCode.GDIntersectionObjects1[i].getVariables().get("Index")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.MainCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDPlayerObjects1[0].getVariables()).get("LastStationID"))) ) {
        gdjs.MainCode.condition1IsTrue_0.val = true;
        gdjs.MainCode.GDIntersectionObjects1[k] = gdjs.MainCode.GDIntersectionObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDIntersectionObjects1.length = k;}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDPlayerObjects1[i].isCurrentAnimationName("Move") ) {
        gdjs.MainCode.condition2IsTrue_0.val = true;
        gdjs.MainCode.GDPlayerObjects1[k] = gdjs.MainCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDPlayerObjects1.length = k;}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDIntersectionObjects1 */
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].returnVariable(gdjs.MainCode.GDPlayerObjects1[i].getVariables().get("LastStationID")).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.MainCode.GDIntersectionObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDIntersectionObjects1[0].getVariables()).get("Index"))));
}
}
{ //Subevents
gdjs.MainCode.eventsList0x69b604(runtimeScene);} //End of subevents
}

}


{

gdjs.MainCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.MainCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Défaite");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Retry", false);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "N";
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDArrowObjects1.createFrom(runtimeScene.getObjects("Arrow"));
{for(var i = 0, len = gdjs.MainCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDArrowObjects1[i].setAngle(-(90));
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "S";
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDArrowObjects1.createFrom(runtimeScene.getObjects("Arrow"));
{for(var i = 0, len = gdjs.MainCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDArrowObjects1[i].setAngle(90);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "E";
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDArrowObjects1.createFrom(runtimeScene.getObjects("Arrow"));
{for(var i = 0, len = gdjs.MainCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDArrowObjects1[i].setAngle(0);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "W";
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDArrowObjects1.createFrom(runtimeScene.getObjects("Arrow"));
{for(var i = 0, len = gdjs.MainCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDArrowObjects1[i].setAngle(180);
}
}}

}


{

gdjs.MainCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.MainCode.GDPointObjects1.createFrom(runtimeScene.getObjects("Point"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPlayerObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPointObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDPointObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPointObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPointObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.MainCode.GDPointObjects1.createFrom(runtimeScene.getObjects("Point"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPointObjects1Objects) == 0;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Victoire");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Retry", false);
}}

}


}; //End of gdjs.MainCode.eventsList0xb43b0


gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDEnemyObjects1.length = 0;
gdjs.MainCode.GDEnemyObjects2.length = 0;
gdjs.MainCode.GDEnemyObjects3.length = 0;
gdjs.MainCode.GDPlayerObjects1.length = 0;
gdjs.MainCode.GDPlayerObjects2.length = 0;
gdjs.MainCode.GDPlayerObjects3.length = 0;
gdjs.MainCode.GDIntersectionObjects1.length = 0;
gdjs.MainCode.GDIntersectionObjects2.length = 0;
gdjs.MainCode.GDIntersectionObjects3.length = 0;
gdjs.MainCode.GDStationObjects1.length = 0;
gdjs.MainCode.GDStationObjects2.length = 0;
gdjs.MainCode.GDStationObjects3.length = 0;
gdjs.MainCode.GDMapObjects1.length = 0;
gdjs.MainCode.GDMapObjects2.length = 0;
gdjs.MainCode.GDMapObjects3.length = 0;
gdjs.MainCode.GDDebugObjects1.length = 0;
gdjs.MainCode.GDDebugObjects2.length = 0;
gdjs.MainCode.GDDebugObjects3.length = 0;
gdjs.MainCode.GDWarpObjects1.length = 0;
gdjs.MainCode.GDWarpObjects2.length = 0;
gdjs.MainCode.GDWarpObjects3.length = 0;
gdjs.MainCode.GDArrowObjects1.length = 0;
gdjs.MainCode.GDArrowObjects2.length = 0;
gdjs.MainCode.GDArrowObjects3.length = 0;
gdjs.MainCode.GDPointObjects1.length = 0;
gdjs.MainCode.GDPointObjects2.length = 0;
gdjs.MainCode.GDPointObjects3.length = 0;

gdjs.MainCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['MainCode'] = gdjs.MainCode;
