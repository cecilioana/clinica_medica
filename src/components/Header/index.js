'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';
import { useState } from 'react';

export default function Header(){
    const [medicos , setMedicos] = useState(false);
    const [paciente , setPaciente] = useState(false);
    const [agendamento , setAgendamento] = useState(false);
    const [menu , setMenu] = useState(false)

  return (
    <header className={styles.header}>  
      <Image className={styles.icone} src='/images/icone.png' width={60} height={60} alt='Icone'/>

      <div className={styles.menu} onClick={() =>  setMenu(true)}>
          <div className={styles.menu1}></div>
          <div className={styles.menu2}></div>
          <div className={styles.menu3}></div>
      </div>
      {menu && (
          <div className={styles.submenu}>
            <ul className={styles.ulsubmenu}>
          <ul className={styles.lisubmenu}><Link href="/">Home</Link></ul>
            <div onMouseEnter={() => setMedicos(true)} onMouseLeave={() => setMedicos(false)}>
            <li className={styles.lisubmenu}>Médicos</li>
            {medicos && (
                        <ul className={styles.menusubmedico}>
                            <li><Link href="/listarmedicos">Listar</Link></li>
                            <li><Link href="/adicionarmedicos">Adicionar</Link></li>
                            <li><Link href="/editarmedicos">Editar</Link></li>
                            <li><Link href="/excluirmedicos">Excluir</Link></li>
                        </ul>
                )}
            </div>
            <div onMouseEnter={() => setPaciente(true)} onMouseLeave={() => setPaciente(false)}>
            <li className={styles.lisubmenu}>Pacientes</li>
            {paciente && (
                        <ul className={styles.menusubpaciente}>
                            <li><Link href="/listarpaciente">Listar</Link></li>
                            <li><Link href="/adicionarpaciente">Adicionar</Link></li>
                            <li><Link href="/editarpaciente">Editar</Link></li>
                            <li><Link href="/excluirpaciente">Excluir</Link></li>
                        </ul>
                )}
          </div>
          <div onMouseEnter={() => setAgendamento(true)} onMouseLeave={() => setAgedamento(false)}>
          <li className={styles.lisubmenu}>Agendamentos</li>
          {agendamento && (
                        <ul className={styles.menusubagendamento}>
                            <li><Link href="/listaragendamento">Listar Consultas</Link></li>
                            <li><Link href="/adicionarpaciente">Adicionar</Link></li>
                            <li><Link href="/editarpaciente">Editar</Link></li>
                            <li><Link href="/excluirpaciente">Excluir</Link></li>
                        </ul>
                )}
          </div>
        </ul>
          </div>
        )
      }


      <nav className={styles.nav}>
        
        <ul className={styles.ul}>
          <ul className={styles.li}><Link href="/">Home</Link></ul>
            <div className={styles.divmenu}  onMouseEnter={() => setMedicos(true)} onMouseLeave={() => setMedicos(false)}>
            <li className={styles.li}>Médicos</li>
            {medicos && (
                        <ul className={styles.submedico}>
                            <li><Link href="/listarmedicos">Listar</Link></li>
                            <li><Link href="/adicionarmedicos">Adicionar</Link></li>
                            <li><Link href="/editarmedicos">Editar</Link></li>
                            <li><Link href="/excluirmedicos">Excluir</Link></li>
                        </ul>
                )}
            </div>
            <div onMouseEnter={() => setPaciente(true)} onMouseLeave={() => setPaciente(false)}>
            <li className={styles.li}>Pacientes</li>
            {paciente && (
                        <ul className={styles.subpaciente}>
                            <li><Link href="/listarpaciente">Listar</Link></li>
                            <li><Link href="/adicionarpaciente">Adicionar</Link></li>
                            <li><Link href="/editarpaciente">Editar</Link></li>
                            <li><Link href="/excluirpaciente">Excluir</Link></li>
                        </ul>
                )}
          </div>
          <div onMouseEnter={() => setAgendamento(true)} onMouseLeave={() => setAgendamento(false)}>
          <li className={styles.li}>Agendamentos</li>
          {agendamento && (
                        <ul className={styles.subagendamento}>
                            <li><Link href="/listaragendamento">Listar Consultas</Link></li>
                            <li><Link href="/adicionarpaciente">Adicionar</Link></li>
                            <li><Link href="/editarpaciente">Editar</Link></li>
                            <li><Link href="/excluirpaciente">Excluir</Link></li>
                        </ul>
                )}
          </div>
        </ul>
      </nav>
    </header>
  );
};
