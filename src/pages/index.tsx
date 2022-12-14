import { useEffect, useState } from 'react';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from "../core/Cliente"
import api from '../services/apiFetch';
import { ClientesBack } from '../types';


interface PropsHome {
  data: {
    data: ClientesBack[],
  }
}

export async function getStaticProps() {
  console.log('[SSG] gerando props para o componente...');

  const data = await api.users.fetch();
  
  return {
      revalidate: 10,
      props: {
          data
      }
  }
}

export default function Home({data}: PropsHome) {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [clienteSele, setClienteSele] = useState(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  function clienteSelecionado(cliente: Cliente) {
    setClienteSele(cliente);
    setVisivel('form');
  }

  function clienteExcluido(cliente: Cliente) {
    let excCl = clientes.filter(aux => aux.nome !== cliente.nome);
    setClientes(excCl);
  }

  function salvarCliente(cliente: Cliente) {
    setClientes([...clientes, cliente]);
    setVisivel('tabela');
  }

  useEffect(() => {
    const newData = data.data.map(t => {
      return new Cliente(t?.name, t?.idade, t?.id);
    });

    setClientes(newData);
  },[]);
  
  return (
    <div className="
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    ">
    <Layout titulo="Cadastro Simples - SSG" >
      {visivel === 'tabela' 
        ? (
              <>
                <div className="flex justify-end">
                  <Botao 
                    cor="green" 
                    className="mb-4" 
                    onClick={() => {
                      setClienteSele(Cliente.vazio());
                      setVisivel('form');
                    }}
                    >Novo Cliente</Botao>
                </div>
                <Tabela 
                  cliente={clientes} 
                  clienteSelecionado={clienteSelecionado}
                  clienteExcluido={clienteExcluido}
                />
              </>
            )
        : (
          <Formulario 
            cliente={clienteSele} 
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}
            />
        )
      }   
    </Layout>
  </div>
  )
}
