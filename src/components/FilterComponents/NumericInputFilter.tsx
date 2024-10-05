import {ChangeEventHandler} from "react";
import {Input} from "@mui/joy";
import {NumericFormat} from "react-number-format";

type NumericInputFilterProps = {
    placeholder?: string
    onChange?: ChangeEventHandler | undefined
}

const NumericInputFilter = (props: NumericInputFilterProps) => {
    return (
        <>
            <h3>{props.placeholder}</h3>
            <Input
                placeholder={props.placeholder}
                size="md"
                variant="outlined"
                onChange={props.onChange}
                slotProps={{
                    input: {
                        component: NumericFormat,
                    },
                }}
            />
        </>
    )
}

export default NumericInputFilter;