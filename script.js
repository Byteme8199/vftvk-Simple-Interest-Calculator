function compute()
{
    var principal = document.getElementById("principal").value;
    ///  validate principal is a positive number
    ///  not a fan of using Alert, would be better as a red error text under the input IMO.
    if(principal < 1) {
        alert("Enter a positive number");
        document.getElementById("principal").autofocus = true;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    /// creating a variable to hold the large result text
    const result = "If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+",</mark>\<br\>in the year <mark>"+year+"</mark>\<br\>"
    /// use the result variable as the element text
    document.getElementById("result").innerHTML = result
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
}