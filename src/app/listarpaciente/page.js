'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './listarpaciente.module.css';

export default function ListarPaciente() {
    const [pacientes, setPaciente] = useState([]);
    const [pesquisar, setPesquisar] = useState("");  
    const [filtrarPacientes, setFiltrarPacientes] = useState([]); 
    const [loading, setLoading] = useState(true);

    const listarPaciente = async () => {
        try {
            const response = await fetch('https://api-clinica-2a.onrender.com/pacientes');
            const data = await response.json();
            setPaciente(data);
            setFiltrarPacientes(data);
        } catch (error) {
            console.error('Erro ao buscar pacientes:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        listarPaciente();
    }, []); 

    

    if (loading) {
        return <p>Carregando pacientes...</p>;
    }

    const exibirPesquisa = (valor) => {
        const termo = valor.target.value;
        setPesquisar(termo);  
        
        const resultado = pacientes.filter(paciente =>
            paciente.nome.toLowerCase().includes(termo.toLowerCase()) || 
            paciente.cpf.includes(termo)
        );
        setFiltrarPacientes(resultado); 
    };

    return (
        <main>
            <div className={styles.fundo}>
                <h2 className={styles.h2}>Lista de Pacientes</h2>

                <div className={styles.divpesquisa}>
                    <Image src='/images/pesquisar.png' width={20} height={20} alt='pesquisar'/>
                    <input
                        type="text"
                        placeholder="Pesquisar nome ou CPF..."
                        value={pesquisar}  
                        onChange={exibirPesquisa} 
                        className={styles.pesquisa}
                    />
                </div>

                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            <th className={styles.th}>ID</th>
                            <th className={styles.th}>Nome</th>
                            <th className={styles.th}>Telefone</th>
                            <th className={styles.th}>Email</th>
                            <th className={styles.th}>CPF</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                        {filtrarPacientes.length > 0 ? (
                            filtrarPacientes.map(paciente => (
                                <tr className={styles.tr} key={paciente.id}>
                                    <td className={styles.td}>{paciente.id}</td>
                                    <td className={styles.td}>{paciente.nome}</td>
                                    <td className={styles.td}>{paciente.telefone}</td>
                                    <td className={styles.td}>{paciente.email}</td>
                                    <td className={styles.td}>{paciente.cpf}</td>
                                </tr>
                            ))
                        ) : (
                            <tr className={styles.th}>
                                <td colSpan="5" className={styles.noResult}>Nenhum paciente encontrado.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
