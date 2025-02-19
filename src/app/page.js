import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.div1}>
        <h1 className={styles.h1}>Bem-vindo à Clínica Vida Saudável</h1>
        <p className={styles.p}>Nossa equipe de profissionais altamente qualificados está pronta para cuidar da sua saúde com dedicação e excelência. Oferecemos um atendimento humanizado, tecnologia de ponta e uma ampla gama de especialidades médicas para garantir seu bem-estar.</p>
        <div className={styles.div2}>
          <button className={styles.button}>Agende sua consulta</button>
          <button className={styles.button}>Documentação da API</button>
        </div>
      </div>
    </main>
  );
}
