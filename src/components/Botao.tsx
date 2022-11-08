interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray',
    className?: string,
    children: any,
    onClick?: () => void
}

export default function Botao({children, className, cor = 'gray', onClick}: BotaoProps) {
    
    function renderBotao(){
        switch (cor){
            case 'green':
                return (
                    <button className={`
                        bg-gradient-to-r  from-green-400 to-green-700
                        text-white px-4 py-2 rounded-md
                        ${className}`}
                        onClick={onClick}
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
                        onClick={onClick}
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
                        onClick={onClick}
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