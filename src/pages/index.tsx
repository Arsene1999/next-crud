import { useState } from 'react';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from "../core/Cliente"


export default function Home() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [clienteSele, setClienteSele] = useState(Cliente.vazio());
  
  const clientes = [
    new Cliente('Ana', 31, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 34, '3'),
    new Cliente('Pedro', 23, '4')
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(`Adicionado ${cliente.nome}`);
    setClienteSele(cliente);
    setVisivel('form');
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluido ${cliente.nome}`);
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
  }

  return (
    <div className="
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    ">
    <Layout titulo="Cadastro Simples" >
      {visivel === 'tabela' 
        ? (
              <>
                <div className="flex justify-end">
                  <Botao 
                    cor="green" 
                    className="mb-4" 
                    onClick={() => setVisivel('form')}
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
