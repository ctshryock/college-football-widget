module("team");

test("date formatting", function () {
    expect(1);    
    equals(Date.parse("12:30 PM"), Date.today().addHours(12.5), 
        "12:30 PM gets parsed")
});
