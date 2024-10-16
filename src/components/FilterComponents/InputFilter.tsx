import {ChangeEventHandler} from "react";
import {Input} from "@mui/joy";

type InputFilterProps = {
    placeholder?: string
    onChange?: ChangeEventHandler | undefined
}

const InputFilter = (props: InputFilterProps) => {
    return (
        <>
            <h3>{props.placeholder}</h3>
            <Input
                placeholder={props.placeholder}
                size="md"
                variant="outlined"
                onChange={props.onChange}
            />
        </>
    )
}

export default InputFilter;