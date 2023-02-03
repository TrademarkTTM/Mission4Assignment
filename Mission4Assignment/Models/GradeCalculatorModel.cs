using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4Assignment.Models
{
    public class GradeCalculatorModel
    {
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int assignmentNum { get; set; }
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int gpNum { get; set; }
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int quizNum { get; set; }
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int midNum { get; set; }
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int finalNum { get; set; }
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int intexNum { get; set; }
    }
}
