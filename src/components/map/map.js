import React from 'react';
import Circle from '../circle/circle.js'

export default function({objects, delay}) {
    function getCircles(circles) {
        return circles.map(c => <Circle {...c} delay={delay} key={c.x * c.y}></Circle>);
    }

    return <div>The circles: <svg className="field">{getCircles(objects.circles)}</svg></div>
}
