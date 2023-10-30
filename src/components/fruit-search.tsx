export interface SearchProps{
    search: React.ChangeEventHandler<HTMLInputElement>,
    print
}


export function FruitSearch(props:SearchProps){
    return (
    <div>
        <input 
        type="text" 
        onChange={props.search}
        placeholder="find your fruit"
        />
    </div>
    )
}