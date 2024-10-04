import {Autocomplete} from "@mui/joy";

type AutocompleteProps = {
    placeholder?: string;
    options?: any
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
            />
        </>
    )
}

export default AutocompleteFilter;