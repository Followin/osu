import React from 'react';
import Circle from '../circle/circle.js'

export default function({objects}) {
    function getCircles(circles) {
        return circles.map(c => <Circle x={c.x} y={c.y} id={c.id} key={c.x * c.y}></Circle>);
    }

    return <div>The circles: <svg className="field">{getCircles(objects.circles)}</svg></div>
}
