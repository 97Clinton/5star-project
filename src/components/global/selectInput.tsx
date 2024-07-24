import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
export function SelectInput({
    label,
    children,
    placeholder,
    style
}:{
    label:string,
    style:string,
    children:React.ReactNode,
    placeholder:string
}) {
  return (
    <div className="relative">
    <Select>
      <SelectTrigger className={style}>
        <SelectValue placeholder={placeholder}/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
        {children}
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}