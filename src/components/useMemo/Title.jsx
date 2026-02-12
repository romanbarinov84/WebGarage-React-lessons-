import { memo } from "react"



const Title = memo(({hooks , resetCount , buttonStyle}) => {
    const {firstHook , secondHook} = hooks;
  return (
    <div>
        <h1>
            React.memo/useMemo:{secondHook}/useCallback:{firstHook}
            
        </h1>
        <button style={buttonStyle} onClick={resetCount}>reset</button>
    </div>
  )
})

export default Title