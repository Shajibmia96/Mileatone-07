const programmer = {
    name :"Shajib",
    age :23,
    language : ["javaScript" , "C#" ],
    Specification : {
        SSC :"GPA - 4.61",
        HSC : "GPA - 4,32",
        Honours : "CGPA - 3,56",
        Sub : {
            Bangla: 32,
            English : 43,
            Math : {
                calculus : 54,

            }

        }
    },


};

 const calculus = programmer?.Specification?.Sub?.Math?.calculus
 console.log(calculus)