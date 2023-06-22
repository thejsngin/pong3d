export const props = {
    speed: 10,
}

// this event is triggered because of the rigidBody component
export const rigidBodyInitialized = (game, gameObject, {props}, rigidBody) => {
    // select some random linear velocity
    let linVel = {x: Math.random(), y: Math.random(), z: Math.random()*-5} as any;
            
    const updateSpeed = () => { // ensure there is no slow down
        if(!linVel)linVel = rigidBody.linvel();
        
        const factor = (props.speed || 10)/Math.sqrt(linVel.x*linVel.x + linVel.y*linVel.y + linVel.z*linVel.z);
        linVel.x *= factor;
        linVel.y *= factor;
        linVel.z *= factor;

        if(factor === 0){linVel = {x: 0, y: 0, z: props.speed}}

        rigidBody.setLinvel(linVel);
        linVel = undefined;
    }

    updateSpeed();// set initial speed

    setInterval(updateSpeed, 16);
}