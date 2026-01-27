import { useLayoutEffect, useRef, useState } from "react";


const MeasureElement = () => {
    const [width , setWidth] = useState(0);
    const elementRef = useRef(null);

    useLayoutEffect(() => {
        if(elementRef.current){
            const {width} = elementRef.current.getBoundingClientRect();
            console.log("Измерение в useLayoutEffect:" , width);
            setWidth(width);
            
        }
    },[])
    return (
        <div>
            <div ref={elementRef} style={{border:"1px solid black", padding:"10px" , borderRadius:"8px", backgroundColor: width > 600 ? "lightgreen" : "lightcoral"}}>
                Измеряемый элемент
            </div>
            <p>Ширина элемента:{width}px</p>
        </div>
    );
};

export default MeasureElement;
