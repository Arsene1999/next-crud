import { useEffect, useState } from 'react';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from "../core/Cliente"
import { ClientesBack } from '../types';


interface PropsHome {
  data: ClientesBack[],
}

export async function getServerSideProps() {
  console.log('[SSR] gerando props para o componente...');
  const resp = await fetch('http://localhost:3000/api/users');
  const data = await resp.json();

  return {
      props: 
          data
  }
}


export default function SSR(props: PropsHome) {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [clienteSele, setClienteSele] = useState(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  function clienteSelecionado(cliente: Cliente) {
    // console.log(`Selecionado ${cliente.nome}`);
    setClienteSele(cliente);
    setVisivel('form');
  }

  function clienteExcluido(cliente: Cliente) {
    // console.log(`Excluido ${cliente.nome}`);
    let excCl = clientes.filter(aux => aux.nome !== cliente.nome);
    setClientes(excCl);
  }

  function salvarCliente(cliente: Cliente) {
    console.log(`Adicionado ${cliente.nome}`);
    setClientes([...clientes, cliente]);
    setVisivel('tabela');
  }

  useEffect(() => {
    const newData = props.data.map(t => {
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
    <Layout titulo="Cadastro Simples - SSR" >
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
