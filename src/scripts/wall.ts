export const props = {
    isPlayerWall: false
}

// fired because of the collider component
export const collisionEvent = (game, gameObject, {props}, c1, c2, entering) => {
    if(!entering)return;
    game.currentGameObject.children.puck.components.rigidBody.setTranslation({x: 0, y: 8, z:0}, true);
    const elem = props.isPlayerWall ? 
        document.getElementById('botScore') as HTMLElement : 
        document.getElementById('userScore') as HTMLElement;

    elem.innerText = (parseInt(elem.innerText) + 1).toString();
}