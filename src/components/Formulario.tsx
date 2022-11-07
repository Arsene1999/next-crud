import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id;
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
                <Botao cor="blue">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray" className="mr-3">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}