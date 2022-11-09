import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";
import { v4 as uuidv4 } from "uuid";


interface FormularioProps {
    cliente: Cliente,
    clienteMudou?: (cliente: Cliente) => void,
    cancelado?: () => void
}


export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id;
    const id2 =  uuidv4();
    const [nome, setNome] = useState(props.cliente?.nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
    

    return(
        <div>
            {id 
                ? <Entrada somenteLeitura texto="Código" valor={id} className="mb-2"/> 
                : false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-2"/>
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade}/>
            <div className="flex justify-end mt-4">
            {id ?
                    <Botao 
                        cor="blue" 
                        onClick={() => props.clienteMudou?.(new Cliente(nome,idade,id))}
                        >
                        Alterar
                    </Botao> 
                : 
                    <Botao 
                    cor="blue" 
                    onClick={() => props.clienteMudou?.(new Cliente(nome,idade, id2))}
                    >
                        Salvar
                    </Botao>
                }
                <Botao cor="gray" className="mr-3" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}