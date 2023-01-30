import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSupensa from '../ListaSuspensa'

const Formulario = () => {
    const times = [
        'Programação',
        'Front-end',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className="formulario">
            <form className="">
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSupensa label="Time" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario