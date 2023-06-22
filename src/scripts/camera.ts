
export const init = (game, gameObject, {props}) => {
   
    window.addEventListener('mousemove', e => {

        // get mouse x position ( normalized -1 to 1 )
        const x = 2 * ((e.clientX / window.innerWidth) - 0.5 );
        // get mouse y position ( normalized -1 to 1 )
        const y = 2 * ((e.clientY / window.innerHeight) - 0.5);

        const transform = gameObject.components.transform;
        if(!transform)return;//return if transform is not initialized

        //update transform rotation
        transform.rotation.x = (Math.PI / -3) * y;
        transform.rotation.y = (Math.PI / -3) * x;
    })
}