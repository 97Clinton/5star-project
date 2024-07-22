type text={
    style:string,
    value:string|number | React.ReactNode,
    clickFunc?:()=>void
}
export const Text =({
    style,
    value,
    clickFunc
}:text)=>{
    return <h6 className={style} onClick={clickFunc}>{value}</h6>
}