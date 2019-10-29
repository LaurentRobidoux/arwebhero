
gdjs.evtsExt__Cart__Cart = gdjs.evtsExt__Cart__Cart || {};

/**
 * Behavior generated from Cart
 * @class Cart
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Cart__Cart.Cart = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.Direction = behaviorData.Direction !== undefined ? behaviorData.Direction : "E";
    this._behaviorData.LastStationID = behaviorData.LastStationID !== undefined ? behaviorData.LastStationID : Number("-1") || 0;
    this._behaviorData.Speed = behaviorData.Speed !== undefined ? behaviorData.Speed : Number("5") || 0;
    this._behaviorData.NextAngle = Number("0") || 0;
    this._behaviorData.NextX = Number("0") || 0;
    this._behaviorData.NextY = Number("0") || 0;
};

gdjs.evtsExt__Cart__Cart.Cart.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.evtsExt__Cart__Cart.Cart.thisIsARuntimeBehaviorConstructor = "Cart::Cart";

// Properties:
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.eventsList0x69d2f4 = function(runtimeScene, eventsFunctionContext) {

{


{
/* Reuse gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i].setPosition(gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i].getX() +(gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextX()),gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i].getY() +(gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextY()));
}
}}

}


}; //End of gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.eventsList0x69d2f4
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.eventsList0x6a1c94 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1);


gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "E" ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].setX(gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].getX() + ((gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed())));
}
}}

}


{

gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1);


gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "S" ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].setY(gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].getY() + ((gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed())));
}
}}

}


{

gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1);


gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "W" ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].setX(gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].getX() - ((gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed())));
}
}}

}


{

gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.createFrom(gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1);


gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "N" ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].setY(gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].getY() - ((gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed())));
}
}}

}


{


{
}

}


}; //End of gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.eventsList0x6a1c94
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.eventsList0xb41b0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i].hasAnimationEnded() ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i].isCurrentAnimationName("Turn") ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i].setAnimationName("Move");
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i].setAngle(gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i].getAngle() + ((gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNextAngle())));
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i].flipY(false);
}
}
{ //Subevents
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.eventsList0x69d2f4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i].isCurrentAnimationName("Move") ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.eventsList0x6a1c94(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.eventsList0xb41b0


gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEvents = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
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

gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPostEventsContext.eventsList0xb41b0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetLastStationIDContext = {};
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetLastStationIDContext.GDObjectObjects1= [];
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetLastStationIDContext.GDObjectObjects2= [];

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetLastStationIDContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetLastStationIDContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Cart__Cart.Cart.prototype.SetLastStationIDContext.eventsList0xb41b0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetLastStationIDContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetLastStationIDContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetLastStationIDContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastStationID((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ID")) || 0 : 0));
}
}}

}


}; //End of gdjs.evtsExt__Cart__Cart.Cart.prototype.SetLastStationIDContext.eventsList0xb41b0


gdjs.evtsExt__Cart__Cart.Cart.prototype.SetLastStationID = function(ID, parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
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
if (argName === "ID") return ID;
    return "";
  }
};

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetLastStationIDContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetLastStationIDContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetLastStationIDContext.eventsList0xb41b0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPreEventsContext = {};

gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPreEventsContext.eventsList0xb41b0 = function(runtimeScene, eventsFunctionContext) {

}; //End of gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPreEventsContext.eventsList0xb41b0


gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
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


gdjs.evtsExt__Cart__Cart.Cart.prototype.doStepPreEventsContext.eventsList0xb41b0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.GetLastStationIDContext = {};
gdjs.evtsExt__Cart__Cart.Cart.prototype.GetLastStationIDContext.GDObjectObjects1= [];
gdjs.evtsExt__Cart__Cart.Cart.prototype.GetLastStationIDContext.GDObjectObjects2= [];

gdjs.evtsExt__Cart__Cart.Cart.prototype.GetLastStationIDContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Cart__Cart.Cart.prototype.GetLastStationIDContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Cart__Cart.Cart.prototype.GetLastStationIDContext.eventsList0xb41b0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Cart__Cart.Cart.prototype.GetLastStationIDContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Cart__Cart.Cart.prototype.GetLastStationIDContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Cart__Cart.Cart.prototype.GetLastStationIDContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastStationID()); }}}

}


}; //End of gdjs.evtsExt__Cart__Cart.Cart.prototype.GetLastStationIDContext.eventsList0xb41b0


gdjs.evtsExt__Cart__Cart.Cart.prototype.GetLastStationID = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
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

gdjs.evtsExt__Cart__Cart.Cart.prototype.GetLastStationIDContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Cart__Cart.Cart.prototype.GetLastStationIDContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Cart__Cart.Cart.prototype.GetLastStationIDContext.eventsList0xb41b0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext = {};
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects2= [];

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.eventsList0x6a9b2c = function(runtimeScene, eventsFunctionContext) {

{


{
}

}


}; //End of gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.eventsList0x6a9b2c
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.eventsList0xb41b0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].flipY(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextY(0);
}
}}

}


{

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "E" ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1 = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "N");
}
}}
if (gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextAngle(-(90));
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].flipY(true);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextX((gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getWidth()) / 2 - 15);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextY(-(30));
}
}}

}


{

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "E" ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1 = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "S");
}
}}
if (gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextAngle(90);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextX((gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getWidth()) / 2 - 15);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextY(30);
}
}}

}


{

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "S" ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1 = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "W");
}
}}
if (gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextAngle(90);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextY((gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getHeight()) / 2 - 45);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextX(-(30));
}
}}

}


{

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "S" ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1 = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "E");
}
}}
if (gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextAngle(-(90));
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].flipY(true);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextY((gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getHeight()) / 2 - 45);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextX((gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getWidth()) / 2 - 15);
}
}}

}


{

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "N" ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1 = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "E");
}
}}
if (gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextAngle(90);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextX((gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getWidth()) / 2 - 15);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextY((gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getHeight()) / -(2) + 45);
}
}}

}


{

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "N" ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1 = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "W");
}
}}
if (gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].flipY(true);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextAngle(-(90));
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextY((gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getHeight()) / -(2) + 45);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextX(-(((gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getWidth()) / 2)) + 15);
}
}}

}


{

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "W" ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1 = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "N");
}
}}
if (gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextAngle(90);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextY(-(30));
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextX(-(((gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getWidth()) / 2)) + 15);
}
}}

}


{

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "W" ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1 = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "S");
}
}}
if (gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextAngle(-(90));
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextY((gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getHeight()) / 2 - 45);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNextX(-(((gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getWidth()) / 2)) + 15);
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].flipY(true);
}
}}

}


{

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() != (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") ) {
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[k] = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].setAnimationName("Turn");
}
}{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirection((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : ""));
}
}
{ //Subevents
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.eventsList0x6a9b2c(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.eventsList0xb41b0


gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirection = function(Direction, parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
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
if (argName === "Direction") return Direction;
    return "";
  }
};

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Cart__Cart.Cart.prototype.SetDirectionContext.eventsList0xb41b0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.ChangeDirectionContext = {};
gdjs.evtsExt__Cart__Cart.Cart.prototype.ChangeDirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__Cart__Cart.Cart.prototype.ChangeDirectionContext.GDObjectObjects2= [];

gdjs.evtsExt__Cart__Cart.Cart.prototype.ChangeDirectionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Cart__Cart.Cart.prototype.ChangeDirectionContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Cart__Cart.Cart.prototype.ChangeDirectionContext.eventsList0xb41b0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Cart__Cart.Cart.prototype.ChangeDirectionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Cart__Cart.Cart.prototype.ChangeDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Cart__Cart.Cart.prototype.ChangeDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirection((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : ""));
}
}}

}


}; //End of gdjs.evtsExt__Cart__Cart.Cart.prototype.ChangeDirectionContext.eventsList0xb41b0


gdjs.evtsExt__Cart__Cart.Cart.prototype.ChangeDirection = function(Direction, parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
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
if (argName === "Direction") return Direction;
    return "";
  }
};

gdjs.evtsExt__Cart__Cart.Cart.prototype.ChangeDirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Cart__Cart.Cart.prototype.ChangeDirectionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Cart__Cart.Cart.prototype.ChangeDirectionContext.eventsList0xb41b0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Cart__Cart.Cart.prototype.GetDirectionContext = {};
gdjs.evtsExt__Cart__Cart.Cart.prototype.GetDirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__Cart__Cart.Cart.prototype.GetDirectionContext.GDObjectObjects2= [];

gdjs.evtsExt__Cart__Cart.Cart.prototype.GetDirectionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Cart__Cart.Cart.prototype.GetDirectionContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Cart__Cart.Cart.prototype.GetDirectionContext.eventsList0xb41b0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Cart__Cart.Cart.prototype.GetDirectionContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Cart__Cart.Cart.prototype.GetDirectionContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Cart__Cart.Cart.prototype.GetDirectionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection()); }}}

}


}; //End of gdjs.evtsExt__Cart__Cart.Cart.prototype.GetDirectionContext.eventsList0xb41b0


gdjs.evtsExt__Cart__Cart.Cart.prototype.GetDirection = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
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

gdjs.evtsExt__Cart__Cart.Cart.prototype.GetDirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Cart__Cart.Cart.prototype.GetDirectionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Cart__Cart.Cart.prototype.GetDirectionContext.eventsList0xb41b0(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}


// Methods:

gdjs.evtsExt__Cart__Cart.Cart.prototype._getDirection = function() {
    return this._behaviorData.Direction !== undefined ? this._behaviorData.Direction : "E";
};
gdjs.evtsExt__Cart__Cart.Cart.prototype._setDirection = function(newValue) {
    this._behaviorData.Direction = newValue;
};
gdjs.evtsExt__Cart__Cart.Cart.prototype._getLastStationID = function() {
    return this._behaviorData.LastStationID !== undefined ? this._behaviorData.LastStationID : Number("-1") || 0;
};
gdjs.evtsExt__Cart__Cart.Cart.prototype._setLastStationID = function(newValue) {
    this._behaviorData.LastStationID = newValue;
};
gdjs.evtsExt__Cart__Cart.Cart.prototype._getSpeed = function() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("5") || 0;
};
gdjs.evtsExt__Cart__Cart.Cart.prototype._setSpeed = function(newValue) {
    this._behaviorData.Speed = newValue;
};
gdjs.evtsExt__Cart__Cart.Cart.prototype._getNextAngle = function() {
    return this._behaviorData.NextAngle !== undefined ? this._behaviorData.NextAngle : Number("0") || 0;
};
gdjs.evtsExt__Cart__Cart.Cart.prototype._setNextAngle = function(newValue) {
    this._behaviorData.NextAngle = newValue;
};
gdjs.evtsExt__Cart__Cart.Cart.prototype._getNextX = function() {
    return this._behaviorData.NextX !== undefined ? this._behaviorData.NextX : Number("0") || 0;
};
gdjs.evtsExt__Cart__Cart.Cart.prototype._setNextX = function(newValue) {
    this._behaviorData.NextX = newValue;
};
gdjs.evtsExt__Cart__Cart.Cart.prototype._getNextY = function() {
    return this._behaviorData.NextY !== undefined ? this._behaviorData.NextY : Number("0") || 0;
};
gdjs.evtsExt__Cart__Cart.Cart.prototype._setNextY = function(newValue) {
    this._behaviorData.NextY = newValue;
};
