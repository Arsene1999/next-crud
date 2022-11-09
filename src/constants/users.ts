import { v4 as uuidv4 } from "uuid";
import { ResponseProps } from "../types";

export const USERS = (): ResponseProps => ({
        data: [
            { name: 'Ana', idade: 31, id:  uuidv4()},
            { name: 'Bia', idade: 45, id: uuidv4()},
            { name: 'Carlos', idade: 34, id: uuidv4()},
            { name: 'Pedro', idade: 23, id: uuidv4()}
        ]
    
})