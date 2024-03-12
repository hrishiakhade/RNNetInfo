import { useEffect, useState } from 'react';


const useGetData = () => {
    let url = 'https://dummyjson.com/products';
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null >(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                const fakeData = [...jsonData.products] ;
                console.log(fakeData.length);
                
                setData(fakeData);
                setLoading(false);
            } catch (error) {
                console.log('====================================');
                console.log(error.message);
                console.log('====================================');
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};

export default useGetData;