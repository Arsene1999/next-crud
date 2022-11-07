interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray',
    className?: string,
    children: any
}

export default function Botao({children, className, cor = 'gray'}: BotaoProps) {
    
    function renderBotao(){
        switch (cor){
            case 'green':
                return (
                    <button className={`
                        bg-gradient-to-r  from-green-400 to-green-700
                        text-white px-4 py-2 rounded-md
                        ${className}`}
                        >
                            {children}
                    </button>
                )
            case 'blue':
                return (
                    <button className={`
                        bg-gradient-to-r  from-blue-400 to-blue-700
                        text-white px-4 py-2 rounded-md
                        ${className}`}
                        >
                            {children}
                    </button>
                )
            default :
                return (
                    <button className={`
                        bg-gradient-to-r  from-gray-400 to-gray-700
                        text-white px-4 py-2 rounded-md
                        ${className}`}
                        >
                            {children}
                    </button>
                )
        }
    }
    
    return (
        <>
            {renderBotao()}
        </>
    )
}