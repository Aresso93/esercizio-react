export interface FruitListProps{
    fruitArray: string[]
}

export function FruitList(props:FruitListProps){

    return (
        <>
        <div>
            <ul>
                {props.fruitArray.map(fruit => (

                <li>
                    <span>{fruit}</span>
                </li>
                    ))
                }
            </ul>
        </div>
        </>
    )

}