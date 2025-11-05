'user client';


export default function Button({ onClick, disabled, name, style }: { onClick: () => void; disabled: boolean, name: string,  style:string }) {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`text-white  underline border-2 rounded-lg  py-2 px-4 hover:text-blue-800 cursor-pointer ${style}`}
        >
            {name}
        </button>)
}