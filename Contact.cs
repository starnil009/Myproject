using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UrbanTrend.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Comment { get; set; }
        public string Message { get; set; }
    }
}
