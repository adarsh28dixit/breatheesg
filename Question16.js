//calling an GET API to complete the function;

async function abc(date){
    const res = await axios.get(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`);
    return res.data;
}