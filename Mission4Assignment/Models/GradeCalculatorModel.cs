using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4Assignment.Models
{
    public class GradeCalculatorModel
    {
        public int assignmentNum { get; set; }
        public int gpNum { get; set; }
        public int quizNum { get; set; }
        public int midNum { get; set; }
        public int finalNum { get; set; }
        public int intexNum { get; set; }
    }
}
