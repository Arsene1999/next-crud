import Cliente from "../core/Cliente"
import { IconeEdica, IconeLixo } from "./Icones";

interface TabelaProps {
    cliente: Cliente[],
    clienteSelecionado?: (cliente: Cliente) => void,
    clienteExcluido?: (cliente: Cliente) => void,
}

export default function Tabela(props: TabelaProps) {
    const ExibirAcoes = props.clienteExcluido || props.clienteSelecionado;

    function renderizarAcoes(cliente) {
        return (
            <td className="flex">
                {props.clienteSelecionado ? 
                    <button className="
                    flex justify-center 
                    text-green-600 rounded-full
                    p-2 m-1 hover:bg-purple-50"
                    onClick={() => props.clienteSelecionado?.(cliente)}
                    >
                        {IconeEdica}
                    </button> : false
                }
                
               {props.clienteExcluido ? 
            
                <button className="
                    flex justify-center 
                  text-red-500 rounded-full
                    p-2 m-1 hover:bg-purple-50"
                    onClick={() => props.clienteExcluido?.(cliente)}
                >
                    {IconeLixo}
                </button>
                : false
            } 
                
            </td>
        )
    }



    function renderizarCabecalho() {
        return (
            <tr >
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {ExibirAcoes ? <th className="text-left p-4">Ações</th> : false}
            </tr>
        )
    }
    
    function renderizarDados() {
        return props.cliente?.map((T,i) => {
            return (
                <tr key={T.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{T.id}</td>
                    <td className="text-left p-4">{T.nome}</td>
                    <td className="text-left p-4">{T.idade}</td>
                    {ExibirAcoes ?renderizarAcoes(T) : false}
                </tr>
            )
        });
    }

  

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead 
                className="
                    text-gray-100 
                    bg-gradient-to-r from-purple-500 
                    to-purple-800"
                >
                    {renderizarCabecalho()}
                </thead>
            <tbody>{renderizarDados()}</tbody>
        </table>
    )
}