gdjs.MainCode = {};
gdjs.MainCode.GDBoardObjects1= [];
gdjs.MainCode.GDBoardObjects2= [];
gdjs.MainCode.GDBoardObjects3= [];
gdjs.MainCode.GDPokeObjects1= [];
gdjs.MainCode.GDPokeObjects2= [];
gdjs.MainCode.GDPokeObjects3= [];
gdjs.MainCode.GDAiControllerObjects1= [];
gdjs.MainCode.GDAiControllerObjects2= [];
gdjs.MainCode.GDAiControllerObjects3= [];
gdjs.MainCode.GDControllerObjects1= [];
gdjs.MainCode.GDControllerObjects2= [];
gdjs.MainCode.GDControllerObjects3= [];
gdjs.MainCode.GDMidBarrierObjects1= [];
gdjs.MainCode.GDMidBarrierObjects2= [];
gdjs.MainCode.GDMidBarrierObjects3= [];
gdjs.MainCode.GDBarrierObjects1= [];
gdjs.MainCode.GDBarrierObjects2= [];
gdjs.MainCode.GDBarrierObjects3= [];
gdjs.MainCode.GDNewObject2Objects1= [];
gdjs.MainCode.GDNewObject2Objects2= [];
gdjs.MainCode.GDNewObject2Objects3= [];
gdjs.MainCode.GDGlassObjects1= [];
gdjs.MainCode.GDGlassObjects2= [];
gdjs.MainCode.GDGlassObjects3= [];
gdjs.MainCode.GDGoalObjects1= [];
gdjs.MainCode.GDGoalObjects2= [];
gdjs.MainCode.GDGoalObjects3= [];
gdjs.MainCode.GDScoreObjects1= [];
gdjs.MainCode.GDScoreObjects2= [];
gdjs.MainCode.GDScoreObjects3= [];
gdjs.MainCode.GDHomeLabel2Objects1= [];
gdjs.MainCode.GDHomeLabel2Objects2= [];
gdjs.MainCode.GDHomeLabel2Objects3= [];
gdjs.MainCode.GDHomeLabelObjects1= [];
gdjs.MainCode.GDHomeLabelObjects2= [];
gdjs.MainCode.GDHomeLabelObjects3= [];
gdjs.MainCode.GDNewObjectObjects1= [];
gdjs.MainCode.GDNewObjectObjects2= [];
gdjs.MainCode.GDNewObjectObjects3= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.condition2IsTrue_0 = {val:false};


gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGlassObjects1Objects = Hashtable.newFrom({"Glass": gdjs.MainCode.GDGlassObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPokeObjects1Objects = Hashtable.newFrom({"Poke": gdjs.MainCode.GDPokeObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoalObjects1Objects = Hashtable.newFrom({"Goal": gdjs.MainCode.GDGoalObjects1});gdjs.MainCode.eventsList0x87c1c4 = function(runtimeScene) {

{

gdjs.MainCode.GDGoalObjects2.createFrom(gdjs.MainCode.GDGoalObjects1);


gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDGoalObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDGoalObjects2[i].getVariableString(gdjs.MainCode.GDGoalObjects2[i].getVariables().getFromIndex(0)) == "Home" ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDGoalObjects2[k] = gdjs.MainCode.GDGoalObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDGoalObjects2.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).add(1);
}}

}


{

/* Reuse gdjs.MainCode.GDGoalObjects1 */

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDGoalObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDGoalObjects1[i].getVariableString(gdjs.MainCode.GDGoalObjects1[i].getVariables().getFromIndex(0)) == "Visitor" ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDGoalObjects1[k] = gdjs.MainCode.GDGoalObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDGoalObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).add(1);
}}

}


}; //End of gdjs.MainCode.eventsList0x87c1c4
gdjs.MainCode.userFunc0x840b38 = function(runtimeScene, objects) {
"use strict";

var score= objects[0];
var home=runtimeScene.getVariables().get("HomeScore").getAsNumber();
var vis=runtimeScene.getVariables().get("VisitorScore").getAsNumber();
score.setString(home+"-"+vis);


};
gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPokeObjects1Objects = Hashtable.newFrom({"Poke": gdjs.MainCode.GDPokeObjects1});gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGlassObjects1Objects = Hashtable.newFrom({"Glass": gdjs.MainCode.GDGlassObjects1});gdjs.MainCode.eventsList0xb4c50 = function(runtimeScene) {

{


{
gdjs.MainCode.GDBoardObjects1.createFrom(runtimeScene.getObjects("Board"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.MainCode.GDBoardObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDBoardObjects1[0].getX()) + (( gdjs.MainCode.GDBoardObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDBoardObjects1[0].getWidth()) / 2, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.MainCode.GDBoardObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDBoardObjects1[0].getX()) + (( gdjs.MainCode.GDBoardObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDBoardObjects1[0].getWidth()) / 2, "UI", 0);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Debug");
}}

}


{

gdjs.MainCode.GDGlassObjects1.createFrom(runtimeScene.getObjects("Glass"));

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGlassObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.MainCode.GDControllerObjects1.createFrom(runtimeScene.getObjects("Controller"));
{for(var i = 0, len = gdjs.MainCode.GDControllerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDControllerObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - (gdjs.MainCode.GDControllerObjects1[i].getWidth()) / 2,gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) - (gdjs.MainCode.GDControllerObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.MainCode.GDControllerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDControllerObjects1[i].getBehavior("Physics2").setLinearVelocityX((gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))) / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.MainCode.GDControllerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDControllerObjects1[i].getBehavior("Physics2").setLinearVelocityY((gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))) / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}}

}


{

gdjs.MainCode.GDGoalObjects1.createFrom(runtimeScene.getObjects("Goal"));
gdjs.MainCode.GDPokeObjects1.createFrom(runtimeScene.getObjects("Poke"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPokeObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGoalObjects1Objects, false, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainCode.GDPokeObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDPokeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPokeObjects1[i].setPosition(382,315);
}
}{for(var i = 0, len = gdjs.MainCode.GDPokeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPokeObjects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}{for(var i = 0, len = gdjs.MainCode.GDPokeObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDPokeObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}
{ //Subevents
gdjs.MainCode.eventsList0x87c1c4(runtimeScene);} //End of subevents
}

}


{

gdjs.MainCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));

var objects = [];
objects.push.apply(objects,gdjs.MainCode.GDScoreObjects1);
gdjs.MainCode.userFunc0x840b38(runtimeScene, objects);

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 7;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Victoire");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Win", false);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) >= 7;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Défaite");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Win", false);
}}

}


{

gdjs.MainCode.GDGlassObjects1.createFrom(runtimeScene.getObjects("Glass"));
gdjs.MainCode.GDPokeObjects1.createFrom(runtimeScene.getObjects("Poke"));

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDPokeObjects1Objects, gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDGlassObjects1Objects, true, runtimeScene, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.MainCode.GDAiControllerObjects1.createFrom(runtimeScene.getObjects("AiController"));
/* Reuse gdjs.MainCode.GDPokeObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDAiControllerObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDAiControllerObjects1[i].getBehavior("Physics2").applyForceTowardPosition(10, (( gdjs.MainCode.GDPokeObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDPokeObjects1[0].getPointX("")), (( gdjs.MainCode.GDPokeObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDPokeObjects1[0].getPointY("")), 0, 0);
}
}}

}


}; //End of gdjs.MainCode.eventsList0xb4c50


gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDBoardObjects1.length = 0;
gdjs.MainCode.GDBoardObjects2.length = 0;
gdjs.MainCode.GDBoardObjects3.length = 0;
gdjs.MainCode.GDPokeObjects1.length = 0;
gdjs.MainCode.GDPokeObjects2.length = 0;
gdjs.MainCode.GDPokeObjects3.length = 0;
gdjs.MainCode.GDAiControllerObjects1.length = 0;
gdjs.MainCode.GDAiControllerObjects2.length = 0;
gdjs.MainCode.GDAiControllerObjects3.length = 0;
gdjs.MainCode.GDControllerObjects1.length = 0;
gdjs.MainCode.GDControllerObjects2.length = 0;
gdjs.MainCode.GDControllerObjects3.length = 0;
gdjs.MainCode.GDMidBarrierObjects1.length = 0;
gdjs.MainCode.GDMidBarrierObjects2.length = 0;
gdjs.MainCode.GDMidBarrierObjects3.length = 0;
gdjs.MainCode.GDBarrierObjects1.length = 0;
gdjs.MainCode.GDBarrierObjects2.length = 0;
gdjs.MainCode.GDBarrierObjects3.length = 0;
gdjs.MainCode.GDNewObject2Objects1.length = 0;
gdjs.MainCode.GDNewObject2Objects2.length = 0;
gdjs.MainCode.GDNewObject2Objects3.length = 0;
gdjs.MainCode.GDGlassObjects1.length = 0;
gdjs.MainCode.GDGlassObjects2.length = 0;
gdjs.MainCode.GDGlassObjects3.length = 0;
gdjs.MainCode.GDGoalObjects1.length = 0;
gdjs.MainCode.GDGoalObjects2.length = 0;
gdjs.MainCode.GDGoalObjects3.length = 0;
gdjs.MainCode.GDScoreObjects1.length = 0;
gdjs.MainCode.GDScoreObjects2.length = 0;
gdjs.MainCode.GDScoreObjects3.length = 0;
gdjs.MainCode.GDHomeLabel2Objects1.length = 0;
gdjs.MainCode.GDHomeLabel2Objects2.length = 0;
gdjs.MainCode.GDHomeLabel2Objects3.length = 0;
gdjs.MainCode.GDHomeLabelObjects1.length = 0;
gdjs.MainCode.GDHomeLabelObjects2.length = 0;
gdjs.MainCode.GDHomeLabelObjects3.length = 0;
gdjs.MainCode.GDNewObjectObjects1.length = 0;
gdjs.MainCode.GDNewObjectObjects2.length = 0;
gdjs.MainCode.GDNewObjectObjects3.length = 0;

gdjs.MainCode.eventsList0xb4c50(runtimeScene);
return;

}
gdjs['MainCode'] = gdjs.MainCode;
