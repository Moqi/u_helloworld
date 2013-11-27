#pragma strict
var TranslateSpeed = 20;
var RotateSpeed = 1000;
function OnGUI(){
	GUI.backgroundColor = Color.red;
	if(GUI.Button(Rect(10,10,70,30),"rotate left")){
		transform.position=(Vector3(transform.position.x+1,transform.position.y,transform.position.z));
	}
//	if(GUI.Button(Rect(10,10,70,30),"rotate left")){
//		transform.Rotate(Vector3.up * Time.deltaTime*(-RotateSpeed));
//	}
//	if(GUI.Button(Rect(90,10,70,30),"move on")){
//		transform.Translate(Vector3.forward * Time.deltaTime * TranslateSpeed);
//	}
//	if(GUI.Button(Rect(170,10,70,30),"rotate right")){
//		transform.Rotate(Vector3.up * Time.deltaTime*RotateSpeed);
//	}
//	if(GUI.Button(Rect(90,50,70,30),"move back")){
//		transform.Translate(Vector3.forward * Time.deltaTime * (-TranslateSpeed));
//	}
//	if(GUI.Button(Rect(10,50,70,30),"move left")){
//		transform.Translate(Vector3.right * Time.deltaTime * (-TranslateSpeed));
//	}
//	if(GUI.Button(Rect(170,50,70,30),"move right")){
//		transform.Translate(Vector3.right * Time.deltaTime * TranslateSpeed);
//	}
//	GUI.Label(Rect(250,20,200,30),"pos --- " +transform.position);
//	GUI.Label(Rect(250,50,200,30),"rota --- " +transform.rotation);
}
function Start () {

}

function Update () {

}