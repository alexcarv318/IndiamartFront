import {Autocomplete} from "@mui/joy";

type AutocompleteProps = {
    placeholder?: string;
    options?: any
    disabled?: boolean
    onChange: (value: any) => void;
    invisible?: boolean;
}

const AutocompleteFilter = (props: AutocompleteProps) => {
    return (
        <div style={props.invisible ? {display: "none"} : {}}>
            <h3>{props.placeholder}</h3>
            <Autocomplete
                placeholder={props.placeholder}
                options={props.options}
                disabled={props.options === undefined || props.options === null || props.options.length === 0 || props.disabled}
                size="md"
                onChange={(_event, value) => props.onChange(value)}
            />
        </div>
    )
}

export default AutocompleteFilter;