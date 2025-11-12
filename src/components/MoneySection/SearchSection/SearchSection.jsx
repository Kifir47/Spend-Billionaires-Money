import {useState} from 'react';


const SearchSection = (props) => {

    const [term, setTerm] = useState('');



    const onKeyDownHandler = (e) => {
        const value = e.target.value;
        setTerm(value);
        props.onSearch(value);
    }


    return(
        <div className="search-section d-flex mt-5 gap-2">
            <input
                type="text"
                className="form-control text-muted"
                placeholder="Search..."
                onChange={e => setTerm(e.target.value)}
                value={term}
                onKeyDown={onKeyDownHandler}
            />
            <button className="btn btn-primary" onClick={() => props.onSearch(term)}>Search</button>
        </div>
        )
};

export default SearchSection;