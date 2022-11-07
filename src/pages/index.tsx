import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from "../core/Cliente"


export default function Home() {
  
  const clientes = [
    new Cliente('Ana', 31, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 34, '3'),
    new Cliente('Pedro', 23, '4')
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(`Adicionado ${cliente.nome}`);

  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluido ${cliente.nome}`);
  }

  return (
    <div className="
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    ">
    <Layout titulo="Cadastro Simples" >
      <div className="flex justify-end">
        <Botao cor="green" className="mb-4">Novo Cliente</Botao>
      </div>
      
      <Tabela 
        cliente={clientes} 
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}
      />

      <Formulario cliente={clientes[0]}/>
    </Layout>
  </div>
  )
}
