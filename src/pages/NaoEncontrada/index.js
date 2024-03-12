import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return (
        <section className={styles.container} style={{marginTop: "0px", marginBottom: "0px"}}>
            <h2> Ops! </h2>
            <p>O conteúdo que você procura não foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada