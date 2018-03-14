function Khi()
{

}


Khi.isFunction = function(functionToCheck)
{
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
};


Khi.pad=function(n)
{
    return n<10 ? '0'+n : n
};