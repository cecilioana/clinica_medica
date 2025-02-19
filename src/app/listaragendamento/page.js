'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './listaragendamento.module.css';

export default function ListarAgendamento() {
    const [agendamentos, setAgendamento] = useState([]);
    const [pesquisar, setPesquisar] = useState("");  
    const [filtrarAgendamentos, setFiltrarAgendamentos] = useState([]); 
    const [loading, setLoading] = useState(true);

    const ListarAgendamento = async () => {
        try {
            const response = await fetch('https://api-clinica-2a.onrender.com/consultas');
            const data = await response.json();
            setAgendamento(data);
            setFiltrarAgendamentos(data);
        } catch (error) {
            console.error('Erro ao buscar agendamento:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        ListarAgendamento();
    }, []); 

    if (loading) {
        return <p>Carregando Agendamentos...</p>;
    }

    const exibirPesquisa = (valor) => {
        const termo = valor.target.value;
        setPesquisar(termo);  
        
        const resultado = agendamentos.filter(agendamento =>
            agendamento.medico.toLowerCase().includes(termo.toLowerCase()) || 
            agendamento.paciente.toLowerCase().includes(termo.toLowerCase()) 
        );
        setFiltrarAgendamentos(resultado); 
    };

    return (
        <main>
            <div className={styles.fundo}>
                <h2 className={styles.h2}>Lista de Agendamentos</h2>

                <div className={styles.divpesquisa}>
                     <Image src='/images/pesquisar.png' width={20} height={20} alt='pesquisar'/>
                    <input
                        type="text"
                        placeholder="Pesquisar médico ou paciente..."
                        value={pesquisar}  
                        onChange={exibirPesquisa} 
                        className={styles.pesquisa}
                    />
                </div>

                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            <th className={styles.th}>ID</th>
                            <th className={styles.th}>Médico</th>
                            <th className={styles.th}>Especialidade</th>
                            <th className={styles.th}>Paciente</th>
                            <th className={styles.th}>Tipo</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                        {filtrarAgendamentos.length > 0 ? (
                            filtrarAgendamentos.map(agendamento => (
                                <tr className={styles.tr} key={agendamento.id}>
                                    <td className={styles.td}>{agendamento.id}</td>
                                    <td className={styles.td}>{agendamento.medico}</td>
                                    <td className={styles.td}>{agendamento.especialidade}</td>
                                    <td className={styles.td}>{agendamento.paciente}</td>
                                    <td className={styles.td}>{agendamento.tipo}</td>
                                </tr>
                            ))
                        ) : (
                            <tr className={styles.th}>
                                <td colSpan="5" className={styles.noResult}>Nenhum agendamento encontrado.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
