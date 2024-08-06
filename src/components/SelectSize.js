export default function SelectSize({ setSelectedSize }) {
    const handleChange = e => {
        setSelectedSize(e.target.value);
    };

    return (
        <form onChange={handleChange} action="" className="sizeForm">
            <label htmlFor="size">Size: </label>
            <div className="selects">
                <select name="size" id="size" className="selects">
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                </select>
            </div>
        </form>
    );
}
