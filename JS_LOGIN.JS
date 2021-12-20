
function checkCreds() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badgeNumber = document.getElementById("badgeNumber").value;
    var fullName = firstName + " " + lastName;

        if (fullName.length > 24 || fullName.length < 2 ) {
            document.getElementById("loginStatus").innerHTML = "FULL NAME HAS INVALID NUMBER OF CHARACTORS!";
    }
        else if (badgeNumber > 999 || badgeNumber < 0 ) {
            document.getElementById("loginStatus").innerHTML = "BADGE ID IS AN INVALID NUMBER!!";
    }
        else {
            alert("ACCESS GRANTED, Welcome " + fullName + "!!!");
            location.replace("UAT_SPACE_BLASTOFF_AND_FUNCTION_V2.html");
    }
}
