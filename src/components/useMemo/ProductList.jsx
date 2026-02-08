import { useMemo, useState } from 'react';

const ProductList = ({ products }) => {
    const [filteredList, setFilteredList] = useState('');
    const [renderCount, setRenderCount] = useState(0);

    const filteredProducts = useMemo(() => {
        console.time("filter")
        const result = products.filter((product) =>
            product.file
                .toLowerCase()
                .includes(filteredList.toLocaleLowerCase()),
        );
        console.timeEnd("filter")
        return result;
    }, [products, filteredList]);

    return (
        <div>
            <input
                type="text"
                value={filteredList}
                onChange={(e) => setFilteredList(e.target.value)}
                placeholder="Поиск..."
            />

            <button onClick={() => setRenderCount(renderCount + 1)}>
                Render - {renderCount}
            </button>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>{product.file}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
