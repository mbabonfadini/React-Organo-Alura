import "./ListaSupensa.css"

const ListaSupensa = (props)=>{
    
    const aoTrocar = (evento)=>{
        props.aoAlterado(evento.target.value)
    }
    
    return (
        <div className="lista-suspensa">
            <label>
                {props.label}
            </label>
            <select required={props.obrigatorio} value={props.valor} onChange={aoTrocar}>
                <option></option>
                {props.itens.map(item=> <option key={item}>{item}</option>)}
            </select>
            
        </div>
    )

}

export default ListaSupensa