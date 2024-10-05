import {Autocomplete} from "@mui/joy";

type AutocompleteProps = {
    placeholder?: string;
    options?: any
    onChange: (value: any) => void;
}

const AutocompleteFilter = (props: AutocompleteProps) => {
    return (
        <>
            <h3>{props.placeholder}</h3>
            <Autocomplete
                placeholder={props.placeholder}
                options={props.options}
                disabled={props.options === undefined && props.options === null}
                size="md"
                onChange={props.onChange}
            />
        </>
    )
}

export default AutocompleteFilter;