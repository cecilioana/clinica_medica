'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './listarmedicos.module.css';

export default function ListarMedicos() {
    const [medicos, setMedicos] = useState([]);
    const [pesquisar, setPesquisar] = useState("");  
    const [filtrarMedicos, setFiltrarMedicos] = useState([]); 
    const [loading, setLoading] = useState(true);

        const listarMedicos = async () => {
            try {
                const response = await fetch('https://api-clinica-2a.onrender.com/medicos');
                const dado = await response.json();
                setMedicos(dado);
                setFiltrarMedicos(dado);
            } catch (error) {
                console.error('Erro ao buscar médicos:', error);
            } finally {
                setLoading(false);
            }
    }
        useEffect(() => {
            listarMedicos();
        }, []);  

    

    if (loading) {
        return <p className={styles.loading}>Carregando médicos...</p>;
    }

    const exibirPesquisa = (valor) => {
        const termo = valor.target.value;
        setPesquisar(termo);  

        const resultado = medicos.filter(medico =>
            medico.nome.toLowerCase().includes(termo.toLowerCase())
        );
        setFiltrarMedicos(resultado);
    };

    return (
        <main>
            
            <div className={styles.fundo}>
            
                <h2 className={styles.h2}>Lista de Médicos</h2>

                <div className={styles.divpesquisa}>
                <Image src='/images/pesquisar.png' width={20} height={20} alt='pesquisar'/>
                    <input
                        type="text"
                        placeholder="Digite o nome do médico..."
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
                            <th className={styles.th}>Especialidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtrarMedicos.length > 0 ? (
                            filtrarMedicos.map(medico => (
                                <tr className={styles.tr} key={medico.id}>
                                    <td className={styles.td}>{medico.id}</td>
                                    <td className={styles.td}>{medico.nome}</td>
                                    <td className={styles.td}>{medico.telefone}</td>
                                    <td className={styles.td}>{medico.email}</td>
                                    <td className={styles.td}>{medico.especialidade}</td>
                                </tr>
                            ))
                        ) : (
                            <tr className={styles.th}>
                                <td colSpan="5" className={styles.noResult}>Nenhum médico encontrado.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
