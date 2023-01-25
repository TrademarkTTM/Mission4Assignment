$("#btnSend").click(function () {
    //Getting the Variables
    let assignmentNum = $("#assignmentsNum").val();
    let gpNum = $("#gpNum").val();
    let quizNum = $("#quizNum").val();
    let midNum = $("#midNum").val();
    let finalNum = $("#finalNum").val();
    let intexNum = $("#intexNum").val();

    //Calculating the final grade
    let finalGrade = ((assignmentNum * 50) + (gpNum * 10) + (quizNum * 10) + (midNum * 10) + (finalNum * 10) + (intexNum * 10)) / 100;

    //Getting the Letter Grade
    let letterGrade;
    switch (true) {
        case finalGrade >= 94:
            letterGrade = 'A';
            break;
        case finalGrade >= 90:
            letterGrade = 'A-';
            break;
        case finalGrade >= 87:
            letterGrade = 'B+';
            break;
        case finalGrade >= 84:
            letterGrade = 'B';
            break;
        case finalGrade >= 80:
            letterGrade = 'B-';
            break;
        case finalGrade >= 77:
            letterGrade = 'C+';
            break;
        case finalGrade >= 74:
            letterGrade = 'C';
            break;
        case finalGrade >= 70:
            letterGrade = 'C-';
            break;
        case finalGrade >= 67:
            letterGrade = 'D+';
            break;
        case finalGrade >= 64:
            letterGrade = 'D';
            break;
        case finalGrade >= 60:
            letterGrade = 'D-';
            break;
        case finalGrade < 60:
            letterGrade = 'E';
    }
    //Changing the text of the output and making the element visible. 
    $("#finalOutput").text("Grade: " + finalGrade + "\nLetter Grade: " + letterGrade);
    $("#finalOutput").show();
})
