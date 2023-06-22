
import rootGameObject from './rootGameObject.jsnobj';
import {game} from '@thejsngin/jsngin';

const gameInstance = await game(rootGameObject, {
    domElement: document.getElementById('game')
});

document.getElementById('resetButton')?.addEventListener('click', () => {
    gameInstance.currentGameObject.children.puck.components.rigidBody.setTranslation({x: 0, y: 8, z:0}, true);
    (document.getElementById('botScore') as HTMLElement).innerText = '0';
    (document.getElementById('userScore') as HTMLElement).innerText = '0';
});
