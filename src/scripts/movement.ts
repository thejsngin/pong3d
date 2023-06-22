export const props = {
    speed: 1,//speed of movement
    auto: false,//automatic
};

export const init = (game, gameObject, {props}) => {
    let horizontal = 0;
    let vertical = 0;

    if(!props.speed)props.speed = 1;//use default speed if speed was not changed
    const updateLinVel = () => {//update linear velocity
        const rb = gameObject.components.rigidBody;
        if(!rb)return;
        rb.setLinvel({ x: horizontal* props.speed, y: vertical*props.speed, z: 0 }, true);
    };


    if(props.auto){

        setInterval(() => {
            const puckRb = game.currentGameObject?.children?.puck?.components?.rigidBody;
            const selfRb = gameObject.components.rigidBody;
            if(!puckRb || !selfRb)return;
            const puckPos = puckRb.translation();
            const selfPos = selfRb.translation();
            horizontal = Math.sign(puckPos.x - selfPos.x);
            vertical = Math.sign(puckPos.y - selfPos.y);
            updateLinVel();
        }, 16);

    }else{
        window.addEventListener('keydown', e => {
            if (e.repeat) { return }
            switch(e.code){
                case 'KeyA':
                    horizontal -= 1;
                    break;
                case 'KeyD':
                    horizontal += 1;
                    break;
                case 'KeyS':
                    vertical -= 1;
                    break;
                case 'KeyW':
                    vertical += 1;
                    break;
            };
            updateLinVel();
        })
    
        window.addEventListener('keyup', e => {
            switch(e.code){
                case 'KeyA':
                    horizontal += 1;
                    break;
                case 'KeyD':
                    horizontal -= 1;
                    break;
                case 'KeyS':
                    vertical += 1;
                    break;
                case 'KeyW':
                    vertical -= 1;
                    break;
            };
            updateLinVel();
        });
    }
}