gdjs.evtsExt__CartExtension__OnColision = {};
gdjs.evtsExt__CartExtension__OnColision.GDCartObjects1= [];
gdjs.evtsExt__CartExtension__OnColision.GDCartObjects2= [];
gdjs.evtsExt__CartExtension__OnColision.GDStationObjects1= [];
gdjs.evtsExt__CartExtension__OnColision.GDStationObjects2= [];

gdjs.evtsExt__CartExtension__OnColision.conditionTrue_0 = {val:false};
gdjs.evtsExt__CartExtension__OnColision.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CartExtension__OnColision.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__CartExtension__OnColision.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__CartExtension__OnColision.userFunc0x7a3a10 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

var cart  =objects[0];
var destination=null;

const id = cart.getVariables().get("LastStationID").getAsNumber();
var stations=runtimeScene.getObjects("Station");
for(var index=0;index<stations.length;index++)
{
    var e= stations[index];
 if(e.getVariables().get("Index").getAsNumber()==id)
       {
           destination=e;
       }
}


var c= cart.getBehavior("Cart");
var cd=c.GetDirection();
c.SetDirection(destination.getVariables().get(cd).getAsString());
var x=destination.getVariables().get(cd+"x").getAsNumber();
var y=destination.getVariables().get(cd+"y").getAsNumber();
if(y==0)
{
    y=cart.getY();
}
if(x==0)
{
    x=cart.getX();
}


cart.setPosition(x,y);


//console.log(objects);
//console.log(destination.getVariables().get(c.GetDirection()).getAsString());

//runtimeScene.getVariables().get("Direction").setString(destination.getVariables().get(c.GetDirection()).getAsString())

};
gdjs.evtsExt__CartExtension__OnColision.eventsList0x79b54c = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__CartExtension__OnColision.GDCartObjects2.createFrom(gdjs.evtsExt__CartExtension__OnColision.GDCartObjects1);


var objects = [];
objects.push.apply(objects,gdjs.evtsExt__CartExtension__OnColision.GDCartObjects2);
gdjs.evtsExt__CartExtension__OnColision.userFunc0x7a3a10(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


{
}

}


}; //End of gdjs.evtsExt__CartExtension__OnColision.eventsList0x79b54c
gdjs.evtsExt__CartExtension__OnColision.eventsList0xb3f60 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__CartExtension__OnColision.GDCartObjects1.createFrom(eventsFunctionContext.getObjects("Cart"));
gdjs.evtsExt__CartExtension__OnColision.GDStationObjects1.createFrom(eventsFunctionContext.getObjects("Station"));

gdjs.evtsExt__CartExtension__OnColision.condition0IsTrue_0.val = false;
gdjs.evtsExt__CartExtension__OnColision.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__CartExtension__OnColision.GDStationObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CartExtension__OnColision.GDStationObjects1[i].getVariableNumber(gdjs.evtsExt__CartExtension__OnColision.GDStationObjects1[i].getVariables().get("Index")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__CartExtension__OnColision.GDCartObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__CartExtension__OnColision.GDCartObjects1[0].getVariables()).get("LastStationID"))) ) {
        gdjs.evtsExt__CartExtension__OnColision.condition0IsTrue_0.val = true;
        gdjs.evtsExt__CartExtension__OnColision.GDStationObjects1[k] = gdjs.evtsExt__CartExtension__OnColision.GDStationObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CartExtension__OnColision.GDStationObjects1.length = k;}if ( gdjs.evtsExt__CartExtension__OnColision.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__CartExtension__OnColision.GDCartObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CartExtension__OnColision.GDCartObjects1[i].isCurrentAnimationName("Turn")) ) {
        gdjs.evtsExt__CartExtension__OnColision.condition1IsTrue_0.val = true;
        gdjs.evtsExt__CartExtension__OnColision.GDCartObjects1[k] = gdjs.evtsExt__CartExtension__OnColision.GDCartObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CartExtension__OnColision.GDCartObjects1.length = k;}}
if (gdjs.evtsExt__CartExtension__OnColision.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__CartExtension__OnColision.GDCartObjects1 */
/* Reuse gdjs.evtsExt__CartExtension__OnColision.GDStationObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CartExtension__OnColision.GDCartObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CartExtension__OnColision.GDCartObjects1[i].returnVariable(gdjs.evtsExt__CartExtension__OnColision.GDCartObjects1[i].getVariables().get("LastStationID")).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__CartExtension__OnColision.GDStationObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__CartExtension__OnColision.GDStationObjects1[0].getVariables()).get("Index"))));
}
}
{ //Subevents
gdjs.evtsExt__CartExtension__OnColision.eventsList0x79b54c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__CartExtension__OnColision.eventsList0xb3f60


gdjs.evtsExt__CartExtension__OnColision.func = function(runtimeScene, Cart, Station, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Cart": Cart
, "Station": Station
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
        var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__CartExtension__OnColision.GDCartObjects1.length = 0;
gdjs.evtsExt__CartExtension__OnColision.GDCartObjects2.length = 0;
gdjs.evtsExt__CartExtension__OnColision.GDStationObjects1.length = 0;
gdjs.evtsExt__CartExtension__OnColision.GDStationObjects2.length = 0;

gdjs.evtsExt__CartExtension__OnColision.eventsList0xb3f60(runtimeScene, eventsFunctionContext);
return;
}
