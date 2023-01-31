import './Rodape.css';

const Rodape = ()=>{

    return (
        <footer className='footer'>
            <div>
            <a target='__blank' href='https://'><img src="/img/fb.png" alt='Facebook'/></a>
            <a target='__blank' href='https://'><img src="/img/tw.png" alt='Twiter'/></a>
            <a target='__blank' href='https://'><img src="/img/ig.png" alt='Instagram'/></a>
            </div>
            <img src='/img/logo.png' alt='Logo Organo'/>
            <p>Desenvolvido por Alura.</p>
        </footer>
    )
}

export default Rodape