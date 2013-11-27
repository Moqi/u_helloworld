using UnityEngine;
using System.Collections;

public class FC : MonoBehaviour {
	public float movementSpeed = 5.0f;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		float forwarSpeed = Input.GetAxis ("Vertical") * movementSpeed;
		Vector3 speed = new Vector3 (0, 0, forwarSpeed);
		CharacterController cc = GetComponent<CharacterController> ();
		cc.SimpleMove (speed);
	}
}
