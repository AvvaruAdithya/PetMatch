using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend_app.Models
{
    public class Registration
    {
        public string CustomerName { get; set; }

        public string PhoneNo{ get; set; }

        public string Address { get; set; }
        public string PetName { get; set; }
        public string PetGender { get; set; }
        public string Age { get; set; }

        public string Breed { get; set; }
        
        public string health_status { get; set; }
        public string description { get; set; }

        public string Password { get; set; }

        public int IsActive { get; set; }

    }
}