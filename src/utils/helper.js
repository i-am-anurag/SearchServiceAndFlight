function compareTime (times1, times2)
{
    dateTime1 = new Date(times1);
    dateTime2 = new Date(times2);

    return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
    compareTime,
}