gdjs.WinCode = {};
gdjs.WinCode.GDWinTextObjects1= [];
gdjs.WinCode.GDWinTextObjects2= [];
gdjs.WinCode.GDNewObjectObjects1= [];
gdjs.WinCode.GDNewObjectObjects2= [];
gdjs.WinCode.GDButtonObjects1= [];
gdjs.WinCode.GDButtonObjects2= [];

gdjs.WinCode.conditionTrue_0 = {val:false};
gdjs.WinCode.condition0IsTrue_0 = {val:false};
gdjs.WinCode.condition1IsTrue_0 = {val:false};
gdjs.WinCode.condition2IsTrue_0 = {val:false};


gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.WinCode.GDButtonObjects1});gdjs.WinCode.eventsList0xb4c50 = function(runtimeScene) {

{

gdjs.WinCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));

gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
gdjs.WinCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WinCode.condition0IsTrue_0.val) {
gdjs.WinCode.GDButtonObjects1.createFrom(runtimeScene.getObjects("Button"));
gdjs.WinCode.GDWinTextObjects1.createFrom(runtimeScene.getObjects("WinText"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.WinCode.GDButtonObjects1.length === 0 ) ? 0 :gdjs.WinCode.GDButtonObjects1[0].getX()) + (( gdjs.WinCode.GDButtonObjects1.length === 0 ) ? 0 :gdjs.WinCode.GDButtonObjects1[0].getWidth()) / 2, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.WinCode.GDButtonObjects1.length === 0 ) ? 0 :gdjs.WinCode.GDButtonObjects1[0].getY()) + (( gdjs.WinCode.GDButtonObjects1.length === 0 ) ? 0 :gdjs.WinCode.GDButtonObjects1[0].getHeight()) / 2, "", 0);
}{for(var i = 0, len = gdjs.WinCode.GDWinTextObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDWinTextObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


}; //End of gdjs.WinCode.eventsList0xb4c50


gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDWinTextObjects1.length = 0;
gdjs.WinCode.GDWinTextObjects2.length = 0;
gdjs.WinCode.GDNewObjectObjects1.length = 0;
gdjs.WinCode.GDNewObjectObjects2.length = 0;
gdjs.WinCode.GDButtonObjects1.length = 0;
gdjs.WinCode.GDButtonObjects2.length = 0;

gdjs.WinCode.eventsList0xb4c50(runtimeScene);
return;

}
gdjs['WinCode'] = gdjs.WinCode;
