import SlowPost from "./SlowPost";


const SlowAboutTab = () => {
    let items = [];
    for (let i = 0 ; i < 500 ; i++){
        items.push(<SlowPost/>)
    }
  return (
    <div>
        <h1>SlowAboutTab</h1>
        <ul>{items}</ul>

        </div>
  )
}

export default SlowAboutTab