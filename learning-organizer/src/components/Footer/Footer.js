import styles from './Footer.module.css';

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>
            Icons by <a href="https://icons8.com/" target="_blank">Icons8</a>.
        </p>
    </section>
  )
}

export default Footer