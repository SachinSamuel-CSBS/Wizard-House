function index(index,t)
{
    let i = JSON.stringify(index);
    localStorage.setItem("index",i);

    let val = JSON.stringify(t);
    localStorage.setItem("api",val);
}