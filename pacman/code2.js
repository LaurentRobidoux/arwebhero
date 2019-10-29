gdjs.RetryCode = {};
gdjs.RetryCode.GDRetryTextObjects1= [];
gdjs.RetryCode.GDRetryTextObjects2= [];
gdjs.RetryCode.GDButtonObjects1= [];
gdjs.RetryCode.GDButtonObjects2= [];
gdjs.RetryCode.GDVictoryObjects1= [];
gdjs.RetryCode.GDVictoryObjects2= [];

gdjs.RetryCode.conditionTrue_0 = {val:false};
gdjs.RetryCode.condition0IsTrue_0 = {val:false};
gdjs.RetryCode.condition1IsTrue_0 = {val:false};
gdjs.RetryCode.condition2IsTrue_0 = {val:false};


gdjs.RetryCode.mapOfGDgdjs_46RetryCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.RetryCode.GDButtonObjects1});gdjs.RetryCode.eventsList0xb43b0 = function(runtimeScene) {

{

gdjs.RetryCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.RetryCode.condition0IsTrue_0.val = false;
gdjs.RetryCode.condition1IsTrue_0.val = false;
{
gdjs.RetryCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.RetryCode.condition0IsTrue_0.val ) {
{
gdjs.RetryCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RetryCode.mapOfGDgdjs_46RetryCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.RetryCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


gdjs.RetryCode.condition0IsTrue_0.val = false;
{
gdjs.RetryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RetryCode.condition0IsTrue_0.val) {
gdjs.RetryCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));
gdjs.RetryCode.GDVictoryObjects1.createFrom(runtimeScene.getObjects("Victory"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.RetryCode.GDButtonObjects1.length !== 0 ? gdjs.RetryCode.GDButtonObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.RetryCode.GDVictoryObjects1.length ;i < len;++i) {
    gdjs.RetryCode.GDVictoryObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


}; //End of gdjs.RetryCode.eventsList0xb43b0


gdjs.RetryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RetryCode.GDRetryTextObjects1.length = 0;
gdjs.RetryCode.GDRetryTextObjects2.length = 0;
gdjs.RetryCode.GDButtonObjects1.length = 0;
gdjs.RetryCode.GDButtonObjects2.length = 0;
gdjs.RetryCode.GDVictoryObjects1.length = 0;
gdjs.RetryCode.GDVictoryObjects2.length = 0;

gdjs.RetryCode.eventsList0xb43b0(runtimeScene);
return;

}
gdjs['RetryCode'] = gdjs.RetryCode;
