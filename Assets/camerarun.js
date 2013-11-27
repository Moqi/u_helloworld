#pragma strict
private var objCube : GameObject;
private var objCamera : GameObject;
var tempx : int;
var tempz : int;
function Start () {
	objCube = GameObject.FindWithTag("Player");
	objCamera = GameObject.FindWithTag("MainCamera");
}
function OnGUI(){
	GUI.Label(Rect(250,20,200,30),"pos --- " +objCube.transform.position);
}

function Update () {
tempx = objCamera.transform.position.x+(objCube.transform.position.x-objCamera.transform.position.x);
tempz = objCamera.transform.position.z+(objCamera.transform.position.z-objCube.transform.position.z);
	objCamera.transform.position = (Vector3(tempx,objCamera.transform.position.y,objCamera.transform.position.z));

}